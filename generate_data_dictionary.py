#!/usr/bin/env python3
"""Generate Data Dictionary from schema inventory."""

import json
import os
from datetime import datetime
from collections import defaultdict

# Thai/English field name descriptions dictionary
FIELD_DESCRIPTIONS = {
    # Common IDs
    'id': 'รหัสประจำ (Primary Key)',
    'hn': 'เลขที่ผู้ป่วย (Hospital Number)',
    'an': 'เลขที่ผู้ป่วยใน (Admission Number)',
    'vn': 'เลขที่ผู้ป่วยนอก (Visit Number)',
    'hn1': 'เลขที่ผู้ป่วย 1',
    'vn1': 'เลขที่ผู้ป่วยนอก 1',
    'an1': 'เลขที่ผู้ป่วยใน 1',
    
    # Person info
    'pname': 'คำนำหน้าชื่อ',
    'fname': 'ชื่อจริง',
    'lname': 'นามสกุล',
    'name': 'ชื่อ',
    'cname': 'ชื่อร่วม',
    'nickname': 'ชื่อเล่น',
    
    # Patient
    'patient_hn': 'เลขที่ผู้ป่วย',
    'patient_name': 'ชื่อผู้ป่วย',
    'cid': 'เลขบัตรประชาชน',
    'passport_no': 'เลขหนังสือเดินทาง',
    
    # Date/Time
    'vstdate': 'วันที่มารับบริการ',
    'vsttime': 'เวลาที่มารับบริการ',
    'dchdate': 'วันที่จำหน่าย',
    'dchtime': 'เวลาที่จำหน่าย',
    'regdate': 'วันที่ลงทะเบียน',
    'regtime': 'เวลาลงทะเบียน',
    'admitdate': 'วันที่รับเข้า',
    'dchsttm': 'เวลาเริ่มจำหน่าย',
    'birthdate': 'วันเกิด',
    'birth_date': 'วันเกิด',
    'death_date': 'วันที่เสียชีวิต',
    'date': 'วันที่',
    'time': 'เวลา',
    'created_at': 'วันที่สร้าง',
    'updated_at': 'วันที่ปรับปรุง',
    
    # Medical
    'doctor': 'แพทย์',
    'doctorcode': 'รหัสแพทย์',
    'doctorname': 'ชื่อแพทย์',
    'spclt': 'สาขา',
    'spcltcode': 'รหัสสาขา',
    'dept': 'แผนก',
    'deptcode': 'รหัสแผนก',
    'ward': 'หอผู้ป่วยใน',
    'wardcode': 'รหัสหอผู้ป่วยใน',
    'pttype': 'ประเภทสิทธิ',
    'pttypecode': 'รหัสประเภทสิทธิ',
    
    # Diagnosis
    'icd10': 'รหัสโรค ICD-10',
    'icd9': 'รหัสหัตถการ ICD-9',
    'icd9cm': 'รหัสหัตถการ ICD-9-CM',
    'diag': 'การวินิจฉัย',
    'diagtype': 'ประเภทการวินิจฉัย',
    'diagname': 'ชื่อการวินิจฉัย',
    'icdname': 'ชื่อโรค ICD',
    
    # Drug/Medication
    'drug': 'ยา',
    'drugcode': 'รหัสยา',
    'drugname': 'ชื่อยา',
    'drugitems': 'รายการยา',
    'nondrugitems': 'รายการไม่ใช่ยา',
    'dose': 'ขนาดยา',
    'dosage': 'ขนาดยา',
    'unit': 'หน่วย',
    'qty': 'จำนวน',
    'quantity': 'จำนวน',
    'price': 'ราคา',
    'unitprice': 'ราคาต่อหน่วย',
    'amount': 'จำนวนเงิน',
    'totalprice': 'ราคารวม',
    
    # Lab
    'lab': 'ห้องปฏิบัติการ',
    'labcode': 'รหัสแล็บ',
    'labname': 'ชื่อแล็บ',
    'labresult': 'ผลแล็บ',
    'labitems': 'รายการแล็บ',
    'laborder': 'คำสั่งแล็บ',
    
    # Finance
    'bill': 'ใบเสร็จ',
    'billno': 'เลขที่ใบเสร็จ',
    'receipt': 'ใบเสร็จ',
    'receiptno': 'เลขที่ใบเสร็จ',
    'income': 'รายได้',
    'incomegroup': 'กลุ่มรายได้',
    'pay': 'การชำระ',
    'paid': 'ชำระแล้ว',
    'finace': 'การเงิน',
    
    # Status
    'status': 'สถานะ',
    'active': 'ใช้งาน',
    'is_active': 'ใช้งานอยู่',
    'cancel': 'ยกเลิก',
    'deleted': 'ลบแล้ว',
    
    # Location
    'address': 'ที่อยู่',
    'addr': 'ที่อยู่',
    'addrpart': 'ส่วนที่อยู่',
    'moopart': 'หมู่',
    'tmbpart': 'ตำบล',
    'amppart': 'อำเภอ',
    'chwpart': 'จังหวัด',
    'tel': 'โทรศัพท์',
    'phone': 'โทรศัพท์',
    'mobile': 'มือถือ',
    
    # Other common
    'code': 'รหัส',
    'name': 'ชื่อ',
    'description': 'คำอธิบาย',
    'remark': 'หมายเหตุ',
    'note': 'บันทึก',
    'comment': 'ความคิดเห็น',
    'type': 'ประเภท',
    'group': 'กลุ่ม',
    'category': 'หมวดหมู่',
    'order': 'ลำดับ',
    'seq': 'ลำดับ',
    'count': 'จำนวน',
    'total': 'รวม',
}

# Table name descriptions
TABLE_DESCRIPTIONS = {
    # Patient
    'patient': 'ข้อมูลผู้ป่วย',
    'person': 'ข้อมูลบุคคล',
    'personaddress': 'ที่อยู่บุคคล',
    'personeducation': 'การศึกษาบุคคล',
    'personmarrystatus': 'สถานะสมรส',
    'personsex': 'เพศบุคคล',
    'personnation': 'สัญชาติ',
    'personreligion': 'ศาสนา',
    'personoccupation': 'อาชีพ',
    
    # OPD
    'ovst': 'การมารับบริการผู้ป่วยนอก',
    'ovstseq': 'ลำดับการมารับบริการ',
    'ovstist': 'สถานะการมารับบริการ',
    'opdconfig': 'การตั้งค่าผู้ป่วยนอก',
    
    # IPD
    'ipt': 'การรับเข้าผู้ป่วยใน',
    'iptadm': 'การรับเข้า',
    'iptbed': 'เตียงผู้ป่วยใน',
    'iptbedmove': 'การย้ายเตียง',
    'iptdeath': 'การเสียชีวิต',
    'iptdiag': 'การวินิจฉัยผู้ป่วยใน',
    'iptdoctor': 'แพทย์ผู้ป่วยใน',
    'iptspecialty': 'ความเชี่ยวชาญ',
    'an_stat': 'สถิติผู้ป่วยใน',
    
    # Ward/Room
    'ward': 'หอผู้ป่วยใน',
    'room': 'ห้อง',
    'roomdetail': 'รายละเอียดห้อง',
    'roomtype': 'ประเภทห้อง',
    'bed': 'เตียง',
    'bedtype': 'ประเภทเตียง',
    
    # Doctor/Staff
    'doctor': 'แพทย์',
    'doctorclinic': 'คลินิกแพทย์',
    'doctordepartment': 'แผนกแพทย์',
    'doctorspclt': 'สาขาแพทย์',
    'staff': 'บุคลากร',
    'staffprofile': 'โปรไฟล์บุคลากร',
    
    # Drug/Pharmacy
    'drug': 'ยา',
    'drugitems': 'รายการยา',
    'drugusage': 'การใช้ยา',
    'druginteract': 'ปฏิกิริยายา',
    'drugallergy': 'แพ้ยา',
    'drugfrequency': 'ความถี่การใช้ยา',
    'druggroup': 'กลุ่มยา',
    'drugcategory': 'หมวดหมู่ยา',
    'drugtype': 'ประเภทยา',
    'nondrugitems': 'รายการไม่ใช่ยา',
    'pharmacy': 'ร้านขายยา',
    
    # Lab
    'lab': 'ห้องปฏิบัติการ',
    'labitems': 'รายการแล็บ',
    'laborder': 'คำสั่งแล็บ',
    'labresult': 'ผลแล็บ',
    'labconfig': 'การตั้งค่าแล็บ',
    'labprofile': 'โปรไฟล์แล็บ',
    
    # X-Ray/Radiology
    'xray': 'รังสีวิทยา',
    'xrayitems': 'รายการรังสี',
    'xrayreport': 'รายงานรังสี',
    
    # ICD
    'icd101': 'รหัสโรค ICD-10',
    'icd9cm1': 'รหัสหัตถการ ICD-9-CM',
    'icd10': 'รหัสโรค ICD-10',
    'icd9': 'รหัสหัตถการ',
    'icd9cm': 'รหัสหัตถการ',
    'diag': 'การวินิจฉัย',
    
    # Finance
    'billing': 'การเรียกเก็บ',
    'billingitem': 'รายการเรียกเก็บ',
    'billingcontract': 'สัญญาเรียกเก็บ',
    'finance': 'การเงิน',
    'receipt': 'ใบเสร็จ',
    'receiptbill': 'ใบเสร็จ',
    'income': 'รายได้',
    'incomecontract': 'สัญญารายได้',
    'debtor': 'ลูกหนี้',
    'credit': 'เครดิต',
    
    # Appointment
    'appointment': 'การนัดหมาย',
    'appoint': 'การนัดหมาย',
    'appointdate': 'วันที่นัด',
    'queue': 'คิว',
    'queueconfig': 'การตั้งค่าคิว',
    
    # Insurance/Rights
    'pttype': 'ประเภทสิทธิ',
    'pttypenon': 'สิทธิ์ที่ไม่ใช่',
    'insure': 'ประกัน',
    'insurance': 'ประกัน',
    'hipdata': 'ข้อมูลสิทธิ',
    
    # ANC/MCH
    'anc': 'การฝากครรภ์',
    'ancpregnancy': 'การตั้งครรภ์',
    'ancprofile': 'โปรไฟล์ฝากครรภ์',
    'mch': 'สุขภาพแม่และเด็ก',
    
    # Vaccination
    'vaccine': 'วัคซีน',
    'vaccination': 'การให้วัคซีน',
    'vaccineplaces': 'สถานที่ให้วัคซีน',
    
    # Chronic
    'chronic': 'โรคเรื้อรัง',
    'chronicdm': 'โรคเบาหวาน',
    'chronicht': 'ความดันโลหิต',
    'chroniccopd': 'โรคปอดอุดกั้น',
    'cds': 'ระบบสนับสนุนการตัดสินใจคลินิก',
    
    # Dental
    'dental': 'ทันตกรรม',
    'dentalitems': 'รายการทันตกรรม',
    
    # Accident/Emergency
    'acci': 'อุบัติเหตุ',
    'accident': 'อุบัติเหตุ',
    'er': 'ห้องฉุกเฉิน',
    'emergency': 'ฉุกเฉิน',
    
    # Surgery/Operation
    'operation': 'การผ่าตัด',
    'operationschedule': 'ตารางผ่าตัด',
    'opt': 'การผ่าตัด',
    'oprt': 'การผ่าตัด',
    'optitem': 'รายการผ่าตัด',
    
    # Refer
    'refer': 'การส่งต่อ',
    'referin': 'รับส่งต่อ',
    'referout': 'ส่งต่อออก',
    
    # Blood Bank
    'blood': 'ธนาคารเลือด',
    'bloodbank': 'ธนาคารเลือด',
    
    # System/Config
    'sys': 'ระบบ',
    'config': 'การตั้งค่า',
    'setting': 'การตั้งค่า',
    'user': 'ผู้ใช้',
    'userconfig': 'การตั้งค่าผู้ใช้',
    'log': 'บันทึกระบบ',
    'error': 'ข้อผิดพลาด',
    'session': 'เซสชัน',
    
    # MOPH/Reporting
    'moph': 'กระทรวงสาธารณสุข',
    'mophic': 'เชื่อมต่อกระทรวง',
    'ncd': 'โรคไม่ติดต่อเรื้อรัง',
    'nd': 'รายงานส่งกระทรวง',
    'his': 'ระบบประวัติสุขภาพ',
    'pacs': 'ระบบเก็บภาพ',
    
    # Report
    'report': 'รายงาน',
    'reporttemplate': 'แม่แบบรายงาน',
    'rpt': 'รายงาน',
    
    # Others
    'template': 'แม่แบบ',
    'print': 'พิมพ์',
    'templateprint': 'แม่แบบพิมพ์',
    'prefix': 'คำนำหน้า',
    'psn': 'บุคคล',
    'psn_prefix': 'คำนำหน้าบุคคล',
}

def get_table_description(table_name):
    """Get description for a table."""
    table_lower = table_name.lower()
    
    # Direct match
    if table_lower in TABLE_DESCRIPTIONS:
        return TABLE_DESCRIPTIONS[table_lower]
    
    # Prefix match
    for prefix in ['ovst', 'ipt', 'opd', 'ipd', 'anc', 'lab', 'drug', 'pttype', 'ward', 'doctor', 'staff']:
        if table_lower.startswith(prefix):
            base_desc = TABLE_DESCRIPTIONS.get(prefix, '')
            if base_desc:
                return f"{base_desc} (ที่เกี่ยวข้อง)"
    
    # Module-based inference
    if 'patient' in table_lower or 'person' in table_lower:
        return 'ข้อมูลผู้ป่วย/บุคคล'
    if 'drug' in table_lower or 'med' in table_lower:
        return 'ข้อมูลยา'
    if 'lab' in table_lower:
        return 'ข้อมูลห้องปฏิบัติการ'
    if 'diag' in table_lower or 'icd' in table_lower:
        return 'ข้อมูลการวินิจฉัย'
    if 'doctor' in table_lower or 'staff' in table_lower:
        return 'ข้อมูลบุคลากร'
    if 'config' in table_lower or 'setting' in table_lower:
        return 'การตั้งค่า'
    if 'log' in table_lower:
        return 'บันทึกระบบ'
    if 'report' in table_lower or 'rpt' in table_lower:
        return 'รายงาน'
    if 'temp' in table_lower:
        return 'ตารางชั่วคราว'
    if 'backup' in table_lower:
        return 'ตารางสำรอง'
    if 'error' in table_lower:
        return 'บันทึกข้อผิดพลาด'
    
    return '-'

def get_column_description(column_name, table_name):
    """Get description for a column."""
    col_lower = column_name.lower()
    
    # Direct match
    if col_lower in FIELD_DESCRIPTIONS:
        return FIELD_DESCRIPTIONS[col_lower]
    
    # Remove numbers suffix (e.g., m10, f10 -> m, f)
    base_name = ''.join(c for c in col_lower if not c.isdigit())
    if base_name in FIELD_DESCRIPTIONS:
        return f"{FIELD_DESCRIPTIONS[base_name]} (คอลัมน์ {column_name})"
    
    # Pattern matching
    if col_lower.endswith('_id'):
        return f'รหัส {col_lower[:-3]}'
    if col_lower.endswith('_code'):
        return f'รหัส {col_lower[:-5]}'
    if col_lower.endswith('_name'):
        return f'ชื่อ {col_lower[:-5]}'
    if col_lower.endswith('_date'):
        return f'วันที่ {col_lower[:-5]}'
    if col_lower.endswith('_time'):
        return f'เวลา {col_lower[:-5]}'
    if col_lower.endswith('_no'):
        return f'เลขที่ {col_lower[:-3]}'
    if col_lower.endswith('_num'):
        return f'หมายเลข {col_lower[:-4]}'
    if col_lower.endswith('_type'):
        return f'ประเภท {col_lower[:-5]}'
    if col_lower.endswith('_status'):
        return f'สถานะ {col_lower[:-7]}'
    if col_lower.endswith('_flag'):
        return f'สถานะ {col_lower[:-5]}'
    if col_lower.endswith('_count'):
        return f'จำนวน {col_lower[:-6]}'
    if col_lower.endswith('_amt'):
        return f'จำนวนเงิน {col_lower[:-4]}'
    if col_lower.endswith('_amount'):
        return f'จำนวนเงิน {col_lower[:-7]}'
    if col_lower.startswith('is_'):
        return f'เป็น{col_lower[3:]} หรือไม่'
    if col_lower.startswith('has_'):
        return f'มี{col_lower[4:]} หรือไม่'
    if col_lower.startswith('can_'):
        return f'สามารถ{col_lower[4:]} หรือไม่'
    
    # Thai hospital context
    if col_lower.startswith('spclt'):
        return f'สาขา {col_lower[5:]}'
    if col_lower.startswith('dept'):
        return f'แผนก {col_lower[4:]}'
    if col_lower.startswith('ward'):
        return f'หอผู้ป่วย {col_lower[4:]}'
    if col_lower.startswith('pt'):
        return f'ผู้ป่วย {col_lower[2:]}'
    if col_lower.startswith('rx'):
        return f'ใบสั่งยา {col_lower[2:]}'
    
    return '-'

def generate_data_dictionary():
    """Generate data dictionary markdown."""
    print("Loading schema inventory...")
    
    with open('outputs/schema_inventory.json', 'r', encoding='utf-8') as f:
        schema = json.load(f)
    
    print(f"Processing {len(schema['tables'])} tables...")
    
    # Group tables by module
    module_map = {}
    try:
        with open('outputs/module_map.json', 'r', encoding='utf-8') as f:
            modules = json.load(f)
            for mod_name, mod_data in modules['modules'].items():
                for table in mod_data['tables']:
                    module_map[table] = mod_name
    except:
        pass
    
    # Build data dictionary
    md = f"""# Data Dictionary
## ฐานข้อมูลโรงพยาบาล

**Database:** {schema['database']}  
**Server Version:** {schema['server_version']}  
**Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}  
**Total Tables:** {len(schema['tables'])}

---

## 📋 สารบัญ

"""
    
    # Create table of contents by module
    tables_by_module = defaultdict(list)
    for table_name in sorted(schema['tables'].keys()):
        mod = module_map.get(table_name, 'other')
        tables_by_module[mod].append(table_name)
    
    # TOC
    for mod_name in sorted(tables_by_module.keys()):
        table_count = len(tables_by_module[mod_name])
        md += f"- [{mod_name}](#{mod_name}) ({table_count} tables)\n"
    
    md += "\n---\n\n"
    
    # Process each module
    processed = 0
    for mod_name in sorted(tables_by_module.keys()):
        md += f"\n## {mod_name}\n\n"
        
        for table_name in sorted(tables_by_module[mod_name]):
            table_info = schema['tables'][table_name]
            processed += 1
            
            # Progress indicator
            if processed % 50 == 0:
                print(f"  Processed {processed}/{len(schema['tables'])} tables...")
            
            # Table header
            table_desc = get_table_description(table_name)
            md += f"### {table_name}\n\n"
            md += f"**คำอธิบาย:** {table_desc}\n\n"
            md += f"**จำนวนแถว:** {table_info['row_count']:,}\n\n"
            md += f"**Engine:** {table_info['engine']}\n\n"
            
            # Primary Key
            pk = table_info.get('primary_key', [])
            if pk:
                md += f"**Primary Key:** `{', '.join(pk)}`\n\n"
            else:
                md += f"**Primary Key:** ⚠️ ไม่มี\n\n"
            
            # Foreign Keys
            fks = table_info.get('foreign_keys', [])
            if fks:
                md += f"**Foreign Keys:**\n"
                for fk in fks:
                    md += f"- `{fk['column']}` → `{fk['references_table']}.{fk['references_column']}`\n"
                md += "\n"
            
            # Column table
            md += "| Column | Type | Nullable | Key | Description |\n"
            md += "|--------|------|----------|-----|-------------|\n"
            
            for col in table_info['columns']:
                col_name = col['name']
                col_type = col['type']
                nullable = '✓' if col['nullable'] else '✗'
                key = col.get('key', '')
                
                # Format key info
                if key == 'PRI':
                    key_display = 'PK'
                elif key == 'MUL':
                    key_display = 'IDX'
                elif key == 'UNI':
                    key_display = 'UK'
                else:
                    key_display = key if key else '-'
                
                # Get description
                desc = get_column_description(col_name, table_name)
                
                md += f"| `{col_name}` | {col_type} | {nullable} | {key_display} | {desc} |\n"
            
            md += "\n---\n\n"
    
    # Summary
    md += """## 📊 สรุป

### สถิติตาราง

| รายการ | จำนวน |
|--------|--------|
| ตารางทั้งหมด | {total_tables} |
| ตารางที่มี Primary Key | {with_pk} |
| ตารางที่ไม่มี Primary Key | {without_pk} |
| ตารางที่มี Foreign Key | {with_fk} |
| ตารางที่ไม่มี Foreign Key | {without_fk} |

### ข้อควรระวัง

- ตารางที่ไม่มี Primary Key ควรเพิ่มเพื่อประสิทธิภาพและความถูกต้องของข้อมูล
- ตารางที่ไม่มี Foreign Key constraint อาจมีปัญหา data integrity
- ดูรายการแนะนำเพิ่มเติมใน `outputs/recommended_indexes.sql`

---

*เอกสารนี้สร้างโดยระบบอัตโนมัติ*  
*หากต้องการปรับปรุงคำอธิบาย โปรดติดต่อทีม Database Administrator*
""".format(
        total_tables=len(schema['tables']),
        with_pk=len([t for t in schema['tables'].values() if t.get('primary_key')]),
        without_pk=len([t for t in schema['tables'].values() if not t.get('primary_key')]),
        with_fk=len([t for t in schema['tables'].values() if t.get('foreign_keys')]),
        without_fk=len([t for t in schema['tables'].values() if not t.get('foreign_keys')])
    )
    
    return md, len(schema['tables'])

if __name__ == '__main__':
    import os
    os.makedirs('docs', exist_ok=True)
    
    print("Generating Data Dictionary...")
    md_content, table_count = generate_data_dictionary()
    
    output_path = 'docs/DATA_DICTIONARY.md'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(md_content)
    
    print(f"\n[DONE] Saved: {output_path}")
    print(f"   Total tables documented: {table_count}")