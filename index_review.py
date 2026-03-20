#!/usr/bin/env python3
"""Phase 5: Index Review - Analyze indexes and recommend improvements."""

import json
from collections import defaultdict
from datetime import datetime

DB_CONFIG = {
    'host': '192.168.25.128',
    'port': 3306,
    'database': 'hidb10949',
    'user': 'suphot',
    'password': '0868757244',
    'connection_timeout': 30
}

def analyze_indexes():
    """Analyze indexes and find gaps."""
    import mysql.connector
    
    print("Loading schema inventory...")
    with open('outputs/schema_inventory.json', 'r', encoding='utf-8') as f:
        schema = json.load(f)
    
    print("Analyzing indexes...")
    
    report = {
        'database': schema['database'],
        'analyzed_at': datetime.now().isoformat(),
        'tables_without_pk': [],
        'tables_without_indexes': [],
        'large_tables_missing_indexes': [],
        'recommended_indexes': [],
        'statistics': {
            'total_tables': schema['statistics']['total_tables'],
            'tables_with_pk': 0,
            'tables_without_pk': 0,
            'tables_with_indexes': 0,
            'tables_without_indexes': 0,
            'total_indexes': 0,
            'potential_improvements': 0
        }
    }
    
    # Analyze each table
    for table_name, table_info in schema['tables'].items():
        has_pk = bool(table_info.get('primary_key'))
        has_index = bool(table_info.get('indexes'))
        row_count = table_info.get('row_count', 0)
        
        if not has_pk:
            report['tables_without_pk'].append({
                'table': table_name,
                'row_count': row_count
            })
        
        if not has_index:
            report['tables_without_indexes'].append({
                'table': table_name,
                'row_count': row_count
            })
        
        # Large tables (1000+ rows) without proper indexing
        if row_count >= 1000 and (not has_pk or len(table_info.get('indexes', [])) < 2):
            columns = [col['name'] for col in table_info.get('columns', [])[:10]]
            report['large_tables_missing_indexes'].append({
                'table': table_name,
                'row_count': row_count,
                'has_pk': has_pk,
                'index_count': len(table_info.get('indexes', [])),
                'sample_columns': columns
            })
    
    # Update statistics
    report['statistics']['tables_without_pk'] = len(report['tables_without_pk'])
    report['statistics']['tables_without_indexes'] = len(report['tables_without_indexes'])
    report['statistics']['tables_with_pk'] = report['statistics']['total_tables'] - report['statistics']['tables_without_pk']
    report['statistics']['tables_with_indexes'] = report['statistics']['total_tables'] - report['statistics']['tables_without_indexes']
    
    # Generate index recommendations
    print("Generating index recommendations...")
    
    # 1. Add primary keys to tables without them
    for item in report['tables_without_pk'][:50]:  # Limit recommendations
        table = item['table']
        # Suggest first column as PK candidate
        columns = schema['tables'][table].get('columns', [])
        if columns:
            pk_candidate = columns[0]['name']
            report['recommended_indexes'].append({
                'table': table,
                'type': 'PRIMARY KEY',
                'columns': [pk_candidate],
                'reason': f"Table has {item['row_count']} rows but no primary key",
                'priority': 'HIGH' if item['row_count'] > 1000 else 'MEDIUM'
            })
    
    # 2. Add indexes to commonly referenced columns
    # Based on module_map for high-traffic tables
    try:
        with open('outputs/module_map.json', 'r', encoding='utf-8') as f:
            module_map = json.load(f)
        
        # High-traffic modules: patient, opd, ipd
        for module in ['patient', 'opd', 'ipd', 'laboratory', 'pharmacy']:
            if module in module_map['modules']:
                for table in module_map['modules'][module]['tables'][:20]:
                    if table in schema['tables']:
                        table_info = schema['tables'][table]
                        columns = table_info.get('columns', [])
                        existing_indexed = set()
                        
                        for idx in table_info.get('indexes', []):
                            existing_indexed.update(idx.get('columns', []))
                        
                        # Common columns that should be indexed
                        common_indexed_cols = ['hn', 'an', 'vn', 'hn', 'patient_hn', 'date', 
                                                'vstdate', 'dchdate', 'code', 'status']
                        
                        for col in columns:
                            col_lower = col['name'].lower()
                            if col_lower in common_indexed_cols and col['name'] not in existing_indexed:
                                report['recommended_indexes'].append({
                                    'table': table,
                                    'type': 'INDEX',
                                    'columns': [col['name']],
                                    'reason': f"Common query column in {module} module",
                                    'priority': 'MEDIUM'
                                })
                                existing_indexed.add(col['name'])
                                break  # One recommendation per table
    except Exception as e:
        print(f"Warning: Could not load module map: {e}")
    
    report['statistics']['potential_improvements'] = len(report['recommended_indexes'])
    
    return report

def generate_markdown(report):
    """Generate markdown report."""
    md = f"""# Index Gap Analysis Report

**Database:** {report['database']}  
**Analyzed:** {report['analyzed_at']}

## Summary Statistics

| Metric | Count |
|--------|-------|
| Total Tables | {report['statistics']['total_tables']} |
| Tables with Primary Key | {report['statistics']['tables_with_pk']} |
| Tables without Primary Key | {report['statistics']['tables_without_pk']} |
| Tables with Indexes | {report['statistics']['tables_with_indexes']} |
| Tables without Indexes | {report['statistics']['tables_without_indexes']} |
| Recommended Improvements | {report['statistics']['potential_improvements']} |

## Critical Issues

### Tables Without Primary Key

Tables without a primary key can cause performance issues and data integrity problems.

| Table | Row Count | Priority |
|-------|-----------|----------|
"""
    
    for item in report['tables_without_pk'][:30]:
        priority = "HIGH" if item['row_count'] > 10000 else ("MEDIUM" if item['row_count'] > 1000 else "LOW")
        md += f"| {item['table']} | {item['row_count']:,} | {priority} |\n"
    
    if len(report['tables_without_pk']) > 30:
        md += f"\n*... and {len(report['tables_without_pk']) - 30} more tables*\n"
    
    md += "\n### Large Tables Missing Proper Indexing\n\n"
    
    if report['large_tables_missing_indexes']:
        md += "| Table | Rows | Has PK | Indexes | Sample Columns |\n"
        md += "|-------|------|--------|---------|----------------|\n"
        
        for item in report['large_tables_missing_indexes'][:20]:
            cols = ', '.join(item['sample_columns'][:5])
            md += f"| {item['table']} | {item['row_count']:,} | {'✓' if item['has_pk'] else '✗'} | {item['index_count']} | {cols} |\n"
    else:
        md += "All large tables have appropriate indexes.\n"
    
    md += "\n## Recommended Indexes\n\n"
    
    # Group by priority
    high_priority = [r for r in report['recommended_indexes'] if r['priority'] == 'HIGH']
    medium_priority = [r for r in report['recommended_indexes'] if r['priority'] == 'MEDIUM']
    
    if high_priority:
        md += "### HIGH Priority\n\n"
        for rec in high_priority[:20]:
            md += f"- **{rec['table']}**: Add {rec['type']} on `{', '.join(rec['columns'])}` - {rec['reason']}\n"
    
    if medium_priority:
        md += "\n### MEDIUM Priority\n\n"
        for rec in medium_priority[:30]:
            md += f"- **{rec['table']}**: Add {rec['type']} on `{', '.join(rec['columns'])}` - {rec['reason']}\n"
    
    return md

def generate_sql(report):
    """Generate SQL for recommended indexes."""
    sql = f"-- Recommended Indexes for {report['database']}\n"
    sql += f"-- Generated: {report['analyzed_at']}\n"
    sql += "-- Run these statements to improve database performance\n\n"
    
    # Primary keys first
    pk_recs = [r for r in report['recommended_indexes'] if r['type'] == 'PRIMARY KEY']
    
    if pk_recs:
        sql += "-- Primary Keys (Critical for data integrity)\n"
        sql += "-- WARNING: Review these carefully before executing\n\n"
        
        for rec in pk_recs[:50]:
            cols = ', '.join([f"`{c}`" for c in rec['columns']])
            sql += f"-- {rec['reason']}\n"
            sql += f"-- ALTER TABLE `{rec['table']}` ADD PRIMARY KEY ({cols});\n\n"
    
    # Regular indexes
    idx_recs = [r for r in report['recommended_indexes'] if r['type'] == 'INDEX']
    
    if idx_recs:
        sql += "\n-- Regular Indexes (Performance improvements)\n\n"
        
        for rec in idx_recs[:50]:
            cols = ', '.join([f"`{c}`" for c in rec['columns']])
            idx_name = f"idx_{rec['table']}_{'_'.join(rec['columns'])}"
            sql += f"-- {rec['reason']}\n"
            sql += f"CREATE INDEX `{idx_name}` ON `{rec['table']}` ({cols});\n\n"
    
    return sql

if __name__ == '__main__':
    import os
    os.makedirs('outputs', exist_ok=True)
    
    # Analyze indexes
    report = analyze_indexes()
    
    # Save JSON (for later use)
    with open('outputs/index_analysis.json', 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=2, ensure_ascii=False)
    
    # Generate markdown report
    md_content = generate_markdown(report)
    with open('outputs/index_gap_report.md', 'w', encoding='utf-8') as f:
        f.write(md_content)
    print("Saved: outputs/index_gap_report.md")
    
    # Generate SQL recommendations
    sql_content = generate_sql(report)
    with open('outputs/recommended_indexes.sql', 'w', encoding='utf-8') as f:
        f.write(sql_content)
    print("Saved: outputs/recommended_indexes.sql")