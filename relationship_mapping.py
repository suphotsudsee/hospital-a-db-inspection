#!/usr/bin/env python3
"""Phase 4: Relationship Mapping - Analyze table relationships."""

import json
from collections import defaultdict
from datetime import datetime

def build_relationship_map():
    """Build relationship map from schema data."""
    print("Loading schema inventory...")
    
    with open('outputs/schema_inventory.json', 'r', encoding='utf-8') as f:
        schema = json.load(f)
    
    print(f"Analyzing relationships for {len(schema['tables'])} tables...")
    
    relationships = {
        'database': schema['database'],
        'analyzed_at': datetime.now().isoformat(),
        'foreign_keys': [],
        'implicit_relationships': [],
        'orphan_tables': [],
        'hub_tables': [],
        'statistics': {
            'total_fk_count': 0,
            'tables_with_fk': 0,
            'implicit_rel_count': 0,
            'orphan_count': 0
        }
    }
    
    # Track foreign keys and references
    referenced_tables = defaultdict(int)
    referencing_tables = set()
    
    # Extract foreign keys from schema
    for table_name, table_info in schema['tables'].items():
        fks = table_info.get('foreign_keys', [])
        
        if fks:
            referencing_tables.add(table_name)
        
        for fk in fks:
            relationships['foreign_keys'].append({
                'from_table': table_name,
                'from_column': fk['column'],
                'to_table': fk['references_table'],
                'to_column': fk['references_column'],
                'constraint': fk.get('constraint', '')
            })
            
            referenced_tables[fk['references_table']] += 1
            relationships['statistics']['total_fk_count'] += 1
    
    relationships['statistics']['tables_with_fk'] = len(referencing_tables)
    
    print(f"Found {relationships['statistics']['total_fk_count']} explicit foreign keys")
    
    # Find implicit relationships (tables with matching column names)
    print("Finding implicit relationships...")
    
    # Common ID column patterns
    id_patterns = ['_id', 'hn', 'an', 'vn', 'code', 'no', 'key', 'ref']
    
    # Build column index
    column_index = defaultdict(lambda: defaultdict(list))
    for table_name, table_info in schema['tables'].items():
        for col in table_info.get('columns', []):
            col_name = col['name'].lower()
            column_index[col_name][table_name].append(col['name'])
    
    # Find tables that share column names (potential relationships)
    implicit_rels = []
    
    for table_name, table_info in schema['tables'].items():
        # Skip tables with explicit FKs for this analysis
        if table_name in referencing_tables:
            continue
        
        for col in table_info.get('columns', []):
            col_lower = col['name'].lower()
            
            # Check if this is a potential reference column
            for pattern in id_patterns:
                if col_lower.endswith(pattern) or col_lower == pattern:
                    # Find tables that have this as a primary key
                    potential_refs = []
                    for other_table, other_info in schema['tables'].items():
                        if other_table == table_name:
                            continue
                        pks = other_info.get('primary_key', [])
                        if col_lower in [pk.lower() for pk in pks]:
                            potential_refs.append(other_table)
                    
                    if potential_refs and col_lower != 'id':  # Skip generic 'id'
                        implicit_rels.append({
                            'from_table': table_name,
                            'from_column': col['name'],
                            'potential_references': potential_refs,
                            'confidence': 'low'
                        })
    
    relationships['implicit_relationships'] = implicit_rels[:100]  # Limit for readability
    relationships['statistics']['implicit_rel_count'] = len(implicit_rels)
    
    # Find orphan tables (no FKs and not referenced)
    all_tables = set(schema['tables'].keys())
    connected_tables = referencing_tables | set(referenced_tables.keys())
    orphan_tables = all_tables - connected_tables
    
    relationships['orphan_tables'] = sorted(list(orphan_tables))[:50]
    relationships['statistics']['orphan_count'] = len(orphan_tables)
    
    # Find hub tables (highly referenced)
    hub_threshold = 5
    for table_name, ref_count in referenced_tables.items():
        if ref_count >= hub_threshold:
            relationships['hub_tables'].append({
                'table': table_name,
                'referenced_count': ref_count
            })
    
    relationships['hub_tables'].sort(key=lambda x: x['referenced_count'], reverse=True)
    
    # Build relationship graph for visualization
    relationships['graph'] = {
        'nodes': [],
        'edges': []
    }
    
    # Add nodes (tables)
    for table_name in schema['tables'].keys():
        relationships['graph']['nodes'].append({
            'id': table_name,
            'label': table_name,
            'is_hub': table_name in [h['table'] for h in relationships['hub_tables']]
        })
    
    # Add edges (foreign keys)
    for fk in relationships['foreign_keys']:
        relationships['graph']['edges'].append({
            'source': fk['from_table'],
            'target': fk['to_table'],
            'label': fk['from_column']
        })
    
    return relationships

def generate_markdown(relationships):
    """Generate markdown report."""
    md = f"""# Relationship Map Report

**Database:** {relationships['database']}  
**Analyzed:** {relationships['analyzed_at']}

## Statistics

| Metric | Count |
|--------|-------|
| Explicit Foreign Keys | {relationships['statistics']['total_fk_count']} |
| Tables with FKs | {relationships['statistics']['tables_with_fk']} |
| Implicit Relationships | {relationships['statistics']['implicit_rel_count']} |
| Orphan Tables | {relationships['statistics']['orphan_count']} |

## Hub Tables (Most Referenced)

Tables that are referenced by many other tables:

| Table | Referenced By |
|-------|---------------|
"""
    
    for hub in relationships['hub_tables'][:20]:
        md += f"| {hub['table']} | {hub['referenced_count']} tables |\n"
    
    # Sample foreign keys
    md += "\n## Sample Foreign Key Relationships\n\n"
    md += "| From Table | Column | To Table | To Column |\n"
    md += "|------------|--------|----------|----------|\n"
    
    for fk in relationships['foreign_keys'][:30]:
        md += f"| {fk['from_table']} | {fk['from_column']} | {fk['to_table']} | {fk['to_column']} |\n"
    
    if len(relationships['foreign_keys']) > 30:
        md += f"\n*... and {len(relationships['foreign_keys']) - 30} more foreign keys*\n"
    
    # Orphan tables
    if relationships['orphan_tables']:
        md += "\n## Orphan Tables (No Relationships)\n\n"
        md += "Tables with no foreign keys and not referenced:\n\n"
        for tbl in relationships['orphan_tables'][:30]:
            md += f"- {tbl}\n"
        if len(relationships['orphan_tables']) > 30:
            md += f"- ... and {len(relationships['orphan_tables']) - 30} more\n"
    
    # Implicit relationships sample
    if relationships['implicit_relationships']:
        md += "\n## Potential Implicit Relationships\n\n"
        md += "Tables that may have relationships based on column naming conventions:\n\n"
        md += "| Table | Column | Potential References |\n"
        md += "|-------|--------|---------------------|\n"
        
        for rel in relationships['implicit_relationships'][:20]:
            refs = ', '.join(rel['potential_references'][:3])
            if len(rel['potential_references']) > 3:
                refs += f" (+{len(rel['potential_references']) - 3})"
            md += f"| {rel['from_table']} | {rel['from_column']} | {refs} |\n"
    
    return md

if __name__ == '__main__':
    import os
    os.makedirs('outputs', exist_ok=True)
    
    # Build relationship map
    rel_map = build_relationship_map()
    
    # Save JSON
    with open('outputs/relationship_map.json', 'w', encoding='utf-8') as f:
        json.dump(rel_map, f, indent=2, ensure_ascii=False)
    print("Saved: outputs/relationship_map.json")
    
    # Save Markdown
    md_content = generate_markdown(rel_map)
    with open('outputs/relationship_map.md', 'w', encoding='utf-8') as f:
        f.write(md_content)
    print("Saved: outputs/relationship_map.md")