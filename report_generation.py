#!/usr/bin/env python3
"""Phase 6: Report Generation - Create executive summary and recommendations."""

import json
from datetime import datetime

def load_all_data():
    """Load all generated data for report."""
    data = {}
    
    with open('outputs/connection_status.json', 'r', encoding='utf-8') as f:
        data['connection'] = json.load(f)
    
    with open('outputs/schema_inventory.json', 'r', encoding='utf-8') as f:
        data['schema'] = json.load(f)
    
    with open('outputs/module_map.json', 'r', encoding='utf-8') as f:
        data['modules'] = json.load(f)
    
    with open('outputs/relationship_map.json', 'r', encoding='utf-8') as f:
        data['relationships'] = json.load(f)
    
    with open('outputs/index_analysis.json', 'r', encoding='utf-8') as f:
        data['index'] = json.load(f)
    
    return data

def generate_executive_summary(data):
    """Generate executive summary markdown."""
    conn = data['connection']
    schema = data['schema']
    modules = data['modules']
    rel = data['relationships']
    idx = data['index']
    
    # Calculate totals
    total_data_mb = schema['statistics']['total_data_size_bytes'] / 1024 / 1024
    total_index_mb = schema['statistics']['total_index_size_bytes'] / 1024 / 1024
    total_rows = schema['statistics']['total_rows']
    
    md = f"""# รายงานสรุปผู้บริหาร (Executive Summary)
## โครงการ: ตรวจสอบโครงสร้างฐานข้อมูลโรงพยาบาล

**วันที่สร้าง:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}  
**ฐานข้อมูล:** {conn.get('database_accessible', 'N/A') and conn['server_version']}  
**สถานะการเชื่อมต่อ:** {'✅ สำเร็จ' if conn['status'] == 'success' else '❌ ล้มเหลว'}

---

## 📊 ภาพรวมฐานข้อมูล

| ตัวชี้วัด | ค่า |
|----------|-----|
| จำนวนตารางทั้งหมด | {schema['statistics']['total_tables']:,} ตาราง |
| จำนวนแถวข้อมูลทั้งหมด | {total_rows:,} แถว |
| ขนาดข้อมูล | {total_data_mb:.2f} MB |
| ขนาด Index | {total_index_mb:.2f} MB |
| เวลาในการสำรวจ | {schema['statistics']['discovery_time_seconds']:.2f} วินาที |

---

## 📁 การจัดกลุ่มโมดูล

พบ **{modules['statistics']['modules_count']}** โมดูลหลักในระบบ:

| โมดูล | จำนวนตาราง | จำนวนแถว | ขนาด | คำอธิบาย |
|-------|------------|-----------|------|----------|
"""
    
    sorted_modules = sorted(
        modules['modules'].items(),
        key=lambda x: len(x[1]['tables']),
        reverse=True
    )[:15]
    
    for mod_name, mod_data in sorted_modules:
        if len(mod_data['tables']) == 0:
            continue
        size_mb = mod_data['total_size_bytes'] / 1024 / 1024
        md += f"| {mod_name} | {len(mod_data['tables'])} | {mod_data['total_rows']:,} | {size_mb:.2f} MB | {mod_data['description']} |\n"
    
    # Key findings
    md += f"""
---

## 🔍 สิ่งที่พบ (Key Findings)

### 1. Primary Keys ที่หายไป

- **พบ {idx['statistics']['tables_without_pk']} ตาราง** ไม่มี Primary Key
- รวม {len([t for t in idx['tables_without_pk'] if t['row_count'] > 1000])} ตารางที่มีข้อมูลมากกว่า 1,000 แถว
- **ความเสี่ยง:** ปัญหา Performance, Data Integrity

### 2. Index Coverage

- **ตารางที่มี Index:** {idx['statistics']['tables_with_indexes']} / {idx['statistics']['total_tables']}
- **ตารางไม่มี Index:** {idx['statistics']['tables_without_indexes']}
- **แนะนำการเพิ่ม Index:** {idx['statistics']['potential_improvements']} รายการ

### 3. Foreign Key Relationships

- **Explicit FK:** {rel['statistics']['total_fk_count']} รายการ
- **Implicit Relationships:** {rel['statistics']['implicit_rel_count']} รายการ (คาดการณ์จากชื่อ column)
- **Orphan Tables:** {rel['statistics']['orphan_count']} ตาราง (ไม่มี relationship)

### 4. ตารางที่เสี่ยงสูง

"""
    
    # Add high risk tables
    high_risk = [t for t in idx['large_tables_missing_indexes'] if t['row_count'] > 10000][:10]
    for t in high_risk:
        md += f"- **{t['table']}** - {t['row_count']:,} แถว, PK: {'มี' if t['has_pk'] else 'ไม่มี'}, Indexes: {t['index_count']}\n"
    
    md += """
---

## ⚠️ ข้อสังเกตและคำแนะนำ

### ระดับความเสี่ยงสูง (Critical)

1. **ตารางไม่มี Primary Key** - ควรเพิ่ม Primary Key ทันที
2. **ตารางใหญ่ไม่มี Index** - ส่งผลต่อ Performance อย่างมาก
3. **ขาด Foreign Key Constraints** - ไม่มีการบังคับ Data Integrity

### ระดับความเสี่ยงปานกลาง (Medium)

1. **Implicit Relationships** - ควรเพิ่ม Foreign Key constraints
2. **Naming Convention** - บางตารางไม่ตามมาตรฐาน

---

## 📋 สรุปการดำเนินการ

| ขั้นตอน | สถานะ |
|--------|-------|
| ✅ การเชื่อมต่อฐานข้อมูล | สำเร็จ |
| ✅ สำรวจ Schema | สำเร็จ ({schema['statistics']['total_tables']} ตาราง) |
| ✅ จัดกลุ่มตาราง | สำเร็จ ({modules['statistics']['modules_count']} โมดูล) |
| ✅ วิเคราะห์ Relationships | สำเร็จ |
| ✅ ตรวจสอบ Index | สำเร็จ |
| ✅ สร้างรายงาน | สำเร็จ |

---

## 📌 ขั้นตอนถัดไปแนะนำ

1. **ทบทวนรายการ Primary Keys** - ดูไฟล์ `recommended_indexes.sql`
2. **ประเมินผลกระทบ** - ทดสอบใน Development Environment ก่อน
3. **วางแผนการ Implement** - แบ่งเป็น Phase ๆ
4. **ติดตามผล** - วัด Performance ก่อน/หลัง

---

*รายงานนี้สร้างโดยระบบตรวจสอบฐานข้อมูลอัตโนมัติ*
"""
    
    return md

def generate_final_recommendation(data):
    """Generate final recommendation document."""
    schema = data['schema']
    modules = data['modules']
    idx = data['index']
    rel = data['relationships']
    
    md = f"""# คำแนะนำการปรับปรุงฐานข้อมูล (Final Recommendations)

**วันที่สร้าง:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}  
**ฐานข้อมูล:** {schema['database']}

---

## 🎯 สรุปคำแนะนำ

| ประเภท | จำนวน | ระดับความเสี่ยง |
|--------|-------|----------------|
| Primary Keys ที่ต้องเพิ่ม | {idx['statistics']['tables_without_pk']} | HIGH |
| Indexes ที่แนะนำ | {idx['statistics']['potential_improvements']} | MEDIUM |
| โมดูลที่ต้องตรวจสอบเพิ่มเติม | {len([m for m, d in modules['modules'].items() if len(d['tables']) > 50])} | LOW |

---

## 🔴 HIGH Priority - ดำเนินการทันที

### 1. เพิ่ม Primary Keys

**เหตุผล:** ตารางที่ไม่มี Primary Key จะมีปัญหา:
- Performance ในการ query ช้าลง
- ไม่สามารถรับประกัน Data Integrity
- บาง Feature ของ MySQL ใช้ไม่ได้ (เช่น Replication)

**ตารางที่ต้องเพิ่ม Primary Key (เรียงตามขนาด):**

"""
    
    # Top tables without PK
    sorted_no_pk = sorted(idx['tables_without_pk'], key=lambda x: x['row_count'], reverse=True)[:20]
    
    for t in sorted_no_pk:
        if t['row_count'] > 0:
            md += f"| `{t['table']}` | {t['row_count']:,} แถว |\n"
    
    md += """
**คำแนะนำ:** ดู SQL statements ในไฟล์ `recommended_indexes.sql`

---

## 🟡 MEDIUM Priority - วางแผนภายใน 30 วัน

### 2. เพิ่ม Indexes สำหรับ Performance

"""
    
    # Get indexes from module_map
    medium_priority = [r for r in idx['recommended_indexes'] if r.get('priority') == 'MEDIUM'][:30]
    
    if medium_priority:
        md += "| ตาราง | Column | เหตุผล |\n"
        md += "|-------|--------|--------|\n"
        for r in medium_priority:
            md += f"| `{r['table']}` | `{', '.join(r['columns'])}` | {r['reason']} |\n"
    
    md += """
### 3. จัดการ Implicit Relationships

พบ **{total_implicit}** implicit relationships ที่ควรเพิ่ม Foreign Key constraints:

**ตัวอย่าง:**

""".format(total_implicit=rel['statistics']['implicit_rel_count'])
    
    for imp in rel['implicit_relationships'][:10]:
        refs = ', '.join(imp['potential_references'][:3])
        md += f"- `{imp['from_table']}.{imp['from_column']}` → อาจอ้างถึง: {refs}\n"
    
    md += f"""
---

## 🟢 LOW Priority - พิจารณาในระยะยาว

### 4. ปรับปรุงโครงสร้างโมดูล

**โมดูลที่มีตารางมาก (>50 ตาราง):**

"""
    
    large_modules = [(m, d) for m, d in modules['modules'].items() if len(d['tables']) > 50]
    large_modules.sort(key=lambda x: len(x[1]['tables']), reverse=True)
    
    for mod_name, mod_data in large_modules:
        md += f"- **{mod_name}** ({len(mod_data['tables'])} ตาราง) - {mod_data['description']}\n"
    
    md += f"""
**คำแนะนำ:**
- พิจารณาแยกตาราง reference/master ออกจาก transaction tables
- ทบทวน naming convention
- ตรวจสอบ unused tables

### 5. ตาราง Orphan

พบ **{rel['statistics']['orphan_count']}** ตารางที่ไม่มี relationship กับตารางอื่น:

"""
    
    for t in rel['orphan_tables'][:20]:
        md += f"- `{t}`\n"
    
    if len(rel['orphan_tables']) > 20:
        md += f"- ... และอีก {len(rel['orphan_tables']) - 20} ตาราง\n"
    
    md += """
**คำแนะนำ:**
- ตรวจสอบว่ายังใช้อยู่หรือไม่
- พิจารณา archive หรือ drop ถ้าไม่ใช้

---

## 📝 แผนการดำเนินการแนะนำ

### Phase 1: Critical Fixes (สัปดาห์ที่ 1-2)
- [ ] เพิ่ม Primary Keys ให้ตารางที่มีข้อมูลมากกว่า 10,000 แถว
- [ ] ทดสอบใน Staging Environment
- [ ] Document การเปลี่ยนแปลง

### Phase 2: Performance Optimization (สัปดาห์ที่ 3-4)
- [ ] เพิ่ม Indexes ที่แนะนำ
- [ ] Benchmark queries ก่อน/หลัง
- [ ] Monitor performance

### Phase 3: Data Integrity (เดือนที่ 2)
- [ ] เพิ่ม Foreign Key constraints
- [ ] Validate data relationships
- [ ] Update application code

### Phase 4: Maintenance (ต่อเนื่อง)
- [ ] ตั้ง schedule ตรวจสอบ periodic
- [ ] Update documentation
- [ ] Train team members

---

## 📊 Success Metrics

| Metric | Before | After (Expected) |
|--------|--------|------------------|
| Tables without PK | {no_pk} | 0 |
| Average Query Time | TBD | -50% |
| Index Coverage | {idx_cov}% | 100% |
| Data Integrity Issues | Unknown | Reduced |

""".format(
    no_pk=idx['statistics']['tables_without_pk'],
    idx_cov=round(idx['statistics']['tables_with_indexes'] / idx['statistics']['total_tables'] * 100, 1) if idx['statistics']['total_tables'] > 0 else 0
)
    
    md += """
---

*เอกสารนี้ควรทบทวนโดย DBA และ Development Lead ก่อนดำเนินการ*
"""
    
    return md

def generate_anomalies(data):
    """Generate anomalies report."""
    anomalies = {
        'generated_at': datetime.now().isoformat(),
        'database': data['schema']['database'],
        'categories': {
            'missing_primary_keys': [],
            'missing_indexes': [],
            'large_tables_no_index': [],
            'orphan_tables': [],
            'naming_issues': []
        },
        'summary': {
            'total_anomalies': 0,
            'critical': 0,
            'warning': 0,
            'info': 0
        }
    }
    
    # Missing PKs
    for t in data['index']['tables_without_pk']:
        severity = 'CRITICAL' if t['row_count'] > 10000 else ('WARNING' if t['row_count'] > 1000 else 'INFO')
        anomalies['categories']['missing_primary_keys'].append({
            'table': t['table'],
            'row_count': t['row_count'],
            'severity': severity
        })
        if severity == 'CRITICAL':
            anomalies['summary']['critical'] += 1
        elif severity == 'WARNING':
            anomalies['summary']['warning'] += 1
        else:
            anomalies['summary']['info'] += 1
    
    # Missing indexes
    for t in data['index']['tables_without_indexes']:
        if t['row_count'] > 0:
            anomalies['categories']['missing_indexes'].append({
                'table': t['table'],
                'row_count': t['row_count'],
                'severity': 'WARNING' if t['row_count'] > 1000 else 'INFO'
            })
            anomalies['summary']['warning'] += 1
    
    # Large tables
    for t in data['index']['large_tables_missing_indexes']:
        anomalies['categories']['large_tables_no_index'].append({
            'table': t['table'],
            'row_count': t['row_count'],
            'has_pk': t['has_pk'],
            'index_count': t['index_count'],
            'severity': 'CRITICAL' if t['row_count'] > 100000 else 'WARNING'
        })
    
    # Orphan tables
    for t in data['relationships']['orphan_tables']:
        anomalies['categories']['orphan_tables'].append({
            'table': t,
            'severity': 'INFO'
        })
        anomalies['summary']['info'] += 1
    
    # Naming issues (simple check)
    for table_name in list(data['schema']['tables'].keys())[:100]:
        if ' ' in table_name or table_name != table_name.lower():
            anomalies['categories']['naming_issues'].append({
                'table': table_name,
                'issue': 'Non-standard naming',
                'severity': 'INFO'
            })
            anomalies['summary']['info'] += 1
    
    anomalies['summary']['total_anomalies'] = (
        len(anomalies['categories']['missing_primary_keys']) +
        len(anomalies['categories']['missing_indexes']) +
        len(anomalies['categories']['large_tables_no_index']) +
        len(anomalies['categories']['orphan_tables']) +
        len(anomalies['categories']['naming_issues'])
    )
    
    return anomalies

if __name__ == '__main__':
    import os
    os.makedirs('outputs', exist_ok=True)
    
    print("Loading data...")
    data = load_all_data()
    
    print("Generating executive summary...")
    exec_summary = generate_executive_summary(data)
    with open('outputs/executive_summary.md', 'w', encoding='utf-8') as f:
        f.write(exec_summary)
    print("Saved: outputs/executive_summary.md")
    
    print("Generating final recommendation...")
    final_rec = generate_final_recommendation(data)
    with open('outputs/final_recommendation.md', 'w', encoding='utf-8') as f:
        f.write(final_rec)
    print("Saved: outputs/final_recommendation.md")
    
    print("Generating anomalies report...")
    anomalies = generate_anomalies(data)
    with open('outputs/anomalies.json', 'w', encoding='utf-8') as f:
        json.dump(anomalies, f, indent=2, ensure_ascii=False)
    print("Saved: outputs/anomalies.json")
    
    print("\nReport generation complete!")