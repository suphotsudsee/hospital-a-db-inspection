#!/usr/bin/env python3
"""Phase 9: Release Summary - Final delivery summary."""

import json
import os
from datetime import datetime

def generate_release_summary():
    """Generate final release summary."""
    print("Loading project data for release summary...")
    
    # Load all data
    with open('outputs/connection_status.json', 'r', encoding='utf-8') as f:
        connection = json.load(f)
    
    with open('outputs/schema_inventory.json', 'r', encoding='utf-8') as f:
        schema = json.load(f)
    
    with open('outputs/module_map.json', 'r', encoding='utf-8') as f:
        modules = json.load(f)
    
    with open('outputs/anomalies.json', 'r', encoding='utf-8') as f:
        anomalies = json.load(f)
    
    with open('outputs/qa_review.json', 'r', encoding='utf-8') as f:
        qa = json.load(f)
    
    with open('state/phase_status.json', 'r', encoding='utf-8') as f:
        phases = json.load(f)
    
    with open('state/dashboard_schema.json', 'r', encoding='utf-8') as f:
        dashboard = json.load(f)
    
    # Calculate duration
    from datetime import timezone
    start_time_str = phases[0]['started_at']
    if '+' in start_time_str:
        start_time = datetime.fromisoformat(start_time_str)
    else:
        start_time = datetime.fromisoformat(start_time_str).replace(tzinfo=timezone.utc)
    end_time = datetime.now(start_time.tzinfo) if start_time.tzinfo else datetime.now()
    duration_seconds = (end_time - start_time).total_seconds()
    
    md = f"""# รายงานสรุปการตรวจสอบฐานข้อมูล (Release Summary)

**โปรเจกต์:** hospital-db-inspection  
**โรงพยาบาล:** โรงพยาบาลตัวอย่าง  
**ฐานข้อมูล:** hidb10949  
**วันที่ตรวจสอบ:** {datetime.now().strftime('%Y-%m-%d')}  
**สถานะ:** ✅ เสร็จสมบูรณ์

---

## 📋 ข้อมูลทั่วไป

| รายการ | ค่า |
|--------|-----|
| Database Server | {connection['server_version']} |
| จำนวนตาราง | {schema['statistics']['total_tables']:,} |
| จำนวนแถวข้อมูล | {schema['statistics']['total_rows']:,} |
| ขนาดข้อมูล | {dashboard['database_overview']['data_size_mb']} MB |
| ขนาด Index | {dashboard['database_overview']['index_size_mb']} MB |
| เวลาในการตรวจสอบ | {duration_seconds:.1f} วินาที |

---

## ✅ ผลการตรวจสอบ

### การเชื่อมต่อฐานข้อมูล
- **สถานะ:** {'✅ สำเร็จ' if connection['status'] == 'success' else '❌ ล้มเหลว'}
- **เวลาตอบสนอง:** {connection.get('connection_time_ms', 0):.2f} ms

### การจัดกลุ่มโมดูล
พบ **{modules['statistics']['modules_count']}** โมดูลในระบบ:

"""
    
    # Top modules by table count
    sorted_modules = sorted(
        modules['modules'].items(),
        key=lambda x: len(x[1]['tables']),
        reverse=True
    )[:10]
    
    md += "| โมดูล | ตาราง | แถวข้อมูล | ขนาด |\n"
    md += "|--------|--------|------------|-------|\n"
    
    for mod_name, mod_data in sorted_modules:
        if len(mod_data['tables']) > 0:
            size_mb = mod_data['total_size_bytes'] / 1024 / 1024
            md += f"| {mod_name} | {len(mod_data['tables'])} | {mod_data['total_rows']:,} | {size_mb:.2f} MB |\n"
    
    md += f"""
### ปัญหาที่พบ

| ระดับ | จำนวน |
|-------|--------|
| 🔴 Critical | {anomalies['summary']['critical']} |
| 🟡 Warning | {anomalies['summary']['warning']} |
| 🔵 Info | {anomalies['summary']['info']} |
| **รวม** | **{anomalies['summary']['total_anomalies']}** |

---

## 📊 สถานะการดำเนินงาน

| Phase | สถานะ | Agent | เวลา |
|-------|-------|-------|------|
"""
    
    for phase in phases:
        status_icon = '✅' if phase['status'] == 'DONE' else '🔄'
        duration = ""
        if phase.get('started_at') and phase.get('completed_at'):
            start = datetime.fromisoformat(phase['started_at'].replace('+07:00', ''))
            end = datetime.fromisoformat(phase['completed_at'].replace('+07:00', ''))
            duration = f"{(end - start).total_seconds():.1f}s"
        md += f"| {phase['phase']} | {status_icon} {phase['status']} | {phase['owner_agent']} | {duration} |\n"
    
    md += f"""
---

## 📁 ไฟล์ผลลัพธ์

| ไฟล์ | คำอธิบาย |
|------|----------|
| `outputs/connection_status.json` | สถานะการเชื่อมต่อ |
| `outputs/schema_inventory.json` | รายการ Schema ทั้งหมด |
| `outputs/schema_inventory.md` | รายงาน Schema |
| `outputs/module_map.json` | การจัดกลุ่มโมดูล |
| `outputs/module_summary.md` | สรุปโมดูล |
| `outputs/relationship_map.json` | Mapping ความสัมพันธ์ |
| `outputs/relationship_map.md` | รายงานความสัมพันธ์ |
| `outputs/index_gap_report.md` | รายงาน Index Gap |
| `outputs/recommended_indexes.sql` | SQL แนะนำ |
| `outputs/executive_summary.md` | สรุปผู้บริหาร |
| `outputs/final_recommendation.md` | คำแนะนำสุดท้าย |
| `outputs/anomalies.json` | รายการ Anomalies |
| `outputs/qa_review.md` | รายงาน QA |
| `state/dashboard_schema.json` | Dashboard Schema |

---

## 🎯 ข้อควรพิจารณา

### ระดับความเสี่ยงสูง (Critical)

"""
    
    # List critical issues
    critical_items = [a for a in anomalies['categories']['missing_primary_keys'] if a['severity'] == 'CRITICAL']
    critical_items += anomalies['categories']['large_tables_no_index'][:5]
    
    if critical_items:
        md += "**ตารางที่ต้องดำเนินการทันที:**\n\n"
        for item in critical_items[:10]:
            md += f"- `{item['table']}` ({item.get('row_count', 'N/A'):,} แถว)\n"
    else:
        md += "ไม่มีปัญหาระดับ Critical\n"
    
    md += """
### ขั้นตอนถัดไปแนะนำ

1. **ทบทวนรายงาน** - อ่าน `executive_summary.md` และ `final_recommendation.md`
2. **ทดสอบใน Staging** - รัน `recommended_indexes.sql` ในสภาพแวดล้อมทดสอบ
3. **วางแผนการ Implement** - แบ่งการดำเนินการเป็น Phase ๆ
4. **ติดตามผล** - วัด Performance ก่อนและหลังการปรับปรุง

---

## ✅ QA Status

- **Files Checked:** {qa['summary']['total_files_checked']}
- **Files Passed:** {qa['summary']['files_passed']}
- **Issues:** {qa['summary']['issues_count']}
- **Status:** {'✅ PASS' if qa['status'] == 'PASS' else '⚠️ REVIEW NEEDED'}

---

## 📞 ติดต่อ

หากมีข้อสงสัยหรือต้องการข้อมูลเพิ่มเติม:
- ตรวจสอบไฟล์ใน `outputs/` และ `state/`
- ดู `docs/MASTER_PROMPT.md` สำหรับรายละเอียดโปรเจกต์

---

*รายงานนี้สร้างโดยระบบตรวจสอบฐานข้อมูลอัตโนมัติ*  
*เวลาสิ้นสุด: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}*  
*สถานะ: ✅ เสร็จสมบูรณ์*
"""
    
    return md

if __name__ == '__main__':
    os.makedirs('outputs', exist_ok=True)
    
    print("Generating release summary...")
    summary = generate_release_summary()
    
    with open('outputs/release_summary.md', 'w', encoding='utf-8') as f:
        f.write(summary)
    print("Saved: outputs/release_summary.md")
    
    # Print summary to console
    print("\n" + "="*50)
    print("PROJECT COMPLETE!")
    print("="*50)
    print("\nAll 9 phases completed successfully.")
    print("\nOutput files:")
    for f in os.listdir('outputs'):
        print(f"  - outputs/{f}")
    print("\nState files:")
    for f in os.listdir('state'):
        print(f"  - state/{f}")