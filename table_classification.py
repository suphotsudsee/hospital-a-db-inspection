#!/usr/bin/env python3
"""Phase 3: Table Classification - Group tables by modules."""

import json
import re
from collections import defaultdict
from datetime import datetime

# Hospital database module patterns (Thai + English)
MODULE_PATTERNS = {
    'patient': ['patient', 'person', 'psn', 'pt', 'hn', 'cid', 'population', 'person_', 'psn_'],
    'opd': ['opd', 'ovst', 'ovstseq', 'clinic', 'doctor', 'opd_', 'ovst_'],
    'ipd': ['ipd', 'ipt', 'ipt_', 'an', 'admit', 'ward', 'bed', 'room', 'ipt_'],
    'appointment': ['appointment', 'appt', 'appoint', 'queue', 'appoint_'],
    'pharmacy': ['drug', 'pharmacy', 'med', 'nondrug', 'drug_', 'pharmacy_', 'med_'],
    'laboratory': ['lab', 'lab_', 'labour', 'labour_', 'labresult', 'laborder'],
    'xray': ['xray', 'film', 'rad', 'xray_', 'film_', 'rad_'],
    'finance': ['finance', 'billing', 'receipt', 'pay', 'bill', 'income', 'debtor', 'credit', 'finance_'],
    'inventory': ['item', 'stock', 'supply', 'drugitems', 'nondrugitems', 'stock_', 'item_'],
    'icd': ['icd', 'icd9', 'icd10', 'icd_', 'diag', 'diagnosis'],
    'accident': ['acci', 'accident', 'injury', 'emergency', 'emergency_'],
    'surgery': ['operation', 'surgery', 'oprt', 'oper', 'surgery_'],
    'anc': ['anc', 'anc_', 'antenatal', 'pregnancy'],
    'vaccination': ['vaccine', 'vaccin', 'immunization', 'vaccine_'],
    'chronic': ['chronic', 'chronic_', 'cds', 'cds_'],
    'dental': ['dental', 'dental_', 'tooth', 'oral'],
    'lab': ['lab', 'lab_', 'laboratory'],
    'nutrition': ['food', 'nutrition', 'diet', 'meal'],
    'refer': ['refer', 'refer_', 'referin', 'referout'],
    'blood': ['blood', 'bloodbank', 'blood_'],
    'hr': ['employee', 'staff', 'personnel', 'doctor_', 'nurse'],
    'insurance': ['insure', 'insurance', 'pttype', 'hipdata', 'insurance_'],
    'moph': ['moph', 'mophic', 'nd', 'ncd', 'pcu', 'pacs', 'his'],
    'system': ['sys', 'user', 'config', 'setting', 'log', 'error', 'session', 'token', 'backup'],
    'report': ['report', 'rpt', 'print', 'template'],
}

def classify_table(table_name, table_info):
    """Classify a table into a module based on name and columns."""
    table_lower = table_name.lower()
    
    # Check each module's patterns
    scores = defaultdict(int)
    
    for module, patterns in MODULE_PATTERNS.items():
        for pattern in patterns:
            if table_lower.startswith(pattern) or pattern in table_lower:
                scores[module] += 2
            # Check column names
            for col in table_info.get('columns', []):
                if pattern in col['name'].lower():
                    scores[module] += 0.5
    
    # Find best match
    if scores:
        best_module = max(scores, key=scores.get)
        if scores[best_module] >= 1:
            return best_module
    
    # Default to 'other'
    return 'other'

def get_table_purpose(table_name, table_info):
    """Infer table purpose from name and structure."""
    name = table_name.lower()
    
    # Reference/master tables
    if any(x in name for x in ['master', 'ref', 'config', 'type', 'group', 'cat']):
        return 'reference'
    
    # Log/audit tables
    if any(x in name for x in ['log', 'error', 'audit', 'history']):
        return 'log'
    
    # Link/junction tables
    if any(x in name for x in ['link', 'map', 'bridge', 'detail']):
        return 'link'
    
    # Transaction tables
    if table_info.get('row_count', 0) > 10000:
        return 'transaction'
    
    return 'data'

def classify_all_tables():
    """Classify all tables and generate module map."""
    print("Loading schema inventory...")
    
    with open('outputs/schema_inventory.json', 'r', encoding='utf-8') as f:
        schema = json.load(f)
    
    print(f"Classifying {len(schema['tables'])} tables...")
    
    modules = defaultdict(lambda: {
        'tables': [],
        'total_rows': 0,
        'total_size_bytes': 0,
        'description': ''
    })
    
    table_classifications = {}
    
    for table_name, table_info in schema['tables'].items():
        module = classify_table(table_name, table_info)
        purpose = get_table_purpose(table_name, table_info)
        
        table_classifications[table_name] = {
            'module': module,
            'purpose': purpose,
            'row_count': table_info.get('row_count', 0),
            'size_bytes': table_info['data_size_bytes'] + table_info['index_size_bytes']
        }
        
        modules[module]['tables'].append(table_name)
        modules[module]['total_rows'] += table_info.get('row_count', 0)
        modules[module]['total_size_bytes'] += (table_info['data_size_bytes'] + table_info['index_size_bytes'])
    
    # Add descriptions
    MODULE_DESCRIPTIONS = {
        'patient': 'ข้อมูลผู้ป่วยและบุคคล',
        'opd': 'บริการผู้ป่วยนอก',
        'ipd': 'บริการผู้ป่วยใน',
        'appointment': 'นัดหมายและคิว',
        'pharmacy': 'ระบบร้านขายยาและยา',
        'laboratory': 'ห้องปฏิบัติการและผลตรวจ',
        'xray': 'รังสีวิทยา',
        'finance': 'การเงินและการเงิน',
        'inventory': 'คลังและพัสดุ',
        'icd': 'รหัสโรค ICD',
        'accident': 'อุบัติเหตุและฉุกเฉิน',
        'surgery': 'ห้องผ่าตัด',
        'anc': 'ฝากครรภ์',
        'vaccination': 'วัคซีนและภูมิคุ้มกัน',
        'chronic': 'โรคเรื้อรังและ NCD',
        'dental': 'ทันตกรรม',
        'nutrition': 'โภชนาการ',
        'refer': 'ส่งต่อผู้ป่วย',
        'blood': 'ธนาคารเลือด',
        'hr': 'บุคลากร',
        'insurance': 'สิทธิการรักษา',
        'moph': 'เชื่อมต่อกระทรวงสาธารณสุข',
        'system': 'ระบบและการตั้งค่า',
        'report': 'รายงาน',
        'other': 'อื่นๆ'
    }
    
    for module in modules:
        modules[module]['description'] = MODULE_DESCRIPTIONS.get(module, 'ไม่ระบุ')
    
    # Sort tables within modules
    for module in modules:
        modules[module]['tables'].sort()
    
    result = {
        'database': schema['database'],
        'classified_at': datetime.now().isoformat(),
        'modules': dict(modules),
        'table_classifications': table_classifications,
        'statistics': {
            'total_tables': len(table_classifications),
            'modules_count': len([m for m in modules if len(modules[m]['tables']) > 0]),
            'unclassified_count': len(modules['other']['tables']) if 'other' in modules else 0
        }
    }
    
    return result

def generate_markdown(module_map):
    """Generate markdown summary."""
    md = f"""# Module Map Summary

**Database:** {module_map['database']}  
**Classified:** {module_map['classified_at']}  
**Total Tables:** {module_map['statistics']['total_tables']}  
**Modules Found:** {module_map['statistics']['modules_count']}

## Modules Overview

| Module | Tables | Rows | Size (MB) | Description |
|--------|--------|------|-----------|-------------|
"""
    
    # Sort by table count
    sorted_modules = sorted(
        module_map['modules'].items(),
        key=lambda x: len(x[1]['tables']),
        reverse=True
    )
    
    for module, data in sorted_modules:
        if len(data['tables']) == 0:
            continue
        size_mb = data['total_size_bytes'] / 1024 / 1024
        md += f"| {module} | {len(data['tables'])} | {data['total_rows']:,} | {size_mb:.2f} | {data['description']} |\n"
    
    md += "\n## Module Details\n\n"
    
    for module, data in sorted_modules:
        if len(data['tables']) == 0:
            continue
        
        md += f"### {module.upper()}\n\n"
        md += f"**Description:** {data['description']}\n\n"
        md += f"**Tables ({len(data['tables'])}):**\n\n"
        
        # Group by purpose
        purposes = defaultdict(list)
        for tbl in data['tables']:
            purpose = module_map['table_classifications'][tbl]['purpose']
            purposes[purpose].append(tbl)
        
        for purpose, tables in purposes.items():
            md += f"- **{purpose.title()}** ({len(tables)}): {', '.join(tables[:10])}"
            if len(tables) > 10:
                md += f" ... and {len(tables) - 10} more"
            md += "\n"
        
        md += "\n"
    
    return md

if __name__ == '__main__':
    import os
    os.makedirs('outputs', exist_ok=True)
    
    # Classify tables
    module_map = classify_all_tables()
    
    # Save JSON
    with open('outputs/module_map.json', 'w', encoding='utf-8') as f:
        json.dump(module_map, f, indent=2, ensure_ascii=False)
    print("Saved: outputs/module_map.json")
    
    # Save Markdown
    md_content = generate_markdown(module_map)
    with open('outputs/module_summary.md', 'w', encoding='utf-8') as f:
        f.write(md_content)
    print("Saved: outputs/module_summary.md")