#!/usr/bin/env python3
"""Schema Discovery - Extract complete database schema."""

import json
import mysql.connector
from datetime import datetime
from collections import defaultdict

DB_CONFIG = {
    'host': '192.168.25.128',
    'port': 3306,
    'database': 'hidb10949',
    'user': 'suphot',
    'password': '0868757244',
    'connection_timeout': 30
}

def get_connection():
    return mysql.connector.connect(**DB_CONFIG)

def get_all_tables(cursor):
    """Get all tables with row counts."""
    cursor.execute("""
        SELECT table_name, table_rows, data_length, index_length, table_comment, engine
        FROM information_schema.tables 
        WHERE table_schema = %s
        ORDER BY table_name
    """, (DB_CONFIG['database'],))
    
    tables = []
    for row in cursor.fetchall():
        tables.append({
            'name': row[0],
            'row_count': row[1] or 0,
            'data_size_bytes': row[2] or 0,
            'index_size_bytes': row[3] or 0,
            'comment': row[4] or '',
            'engine': row[5] or 'InnoDB'
        })
    return tables

def get_columns(cursor, table_name):
    """Get columns for a table."""
    cursor.execute("""
        SELECT column_name, column_type, is_nullable, column_key, column_default, extra, column_comment
        FROM information_schema.columns 
        WHERE table_schema = %s AND table_name = %s
        ORDER BY ordinal_position
    """, (DB_CONFIG['database'], table_name))
    
    columns = []
    for row in cursor.fetchall():
        columns.append({
            'name': row[0],
            'type': row[1],
            'nullable': row[2] == 'YES',
            'key': row[3] or '',
            'default': row[4],
            'extra': row[5] or '',
            'comment': row[6] or ''
        })
    return columns

def get_primary_keys(cursor, table_name):
    """Get primary key columns."""
    cursor.execute("""
        SELECT column_name
        FROM information_schema.key_column_usage
        WHERE table_schema = %s AND table_name = %s AND constraint_name = 'PRIMARY'
        ORDER BY ordinal_position
    """, (DB_CONFIG['database'], table_name))
    return [row[0] for row in cursor.fetchall()]

def get_foreign_keys(cursor, table_name):
    """Get foreign keys."""
    cursor.execute("""
        SELECT 
            constraint_name,
            column_name,
            referenced_table_name,
            referenced_column_name
        FROM information_schema.key_column_usage
        WHERE table_schema = %s 
        AND table_name = %s
        AND referenced_table_name IS NOT NULL
    """, (DB_CONFIG['database'], table_name))
    
    fks = []
    for row in cursor.fetchall():
        fks.append({
            'constraint': row[0],
            'column': row[1],
            'references_table': row[2],
            'references_column': row[3]
        })
    return fks

def get_indexes(cursor, table_name):
    """Get indexes for a table."""
    cursor.execute("""
        SELECT 
            index_name,
            column_name,
            non_unique,
            seq_in_index
        FROM information_schema.statistics
        WHERE table_schema = %s AND table_name = %s
        ORDER BY index_name, seq_in_index
    """, (DB_CONFIG['database'], table_name))
    
    indexes = defaultdict(lambda: {'columns': [], 'unique': True})
    for row in cursor.fetchall():
        idx_name = row[0]
        indexes[idx_name]['columns'].append(row[1])
        if row[2] == 1:
            indexes[idx_name]['unique'] = False
    
    result = []
    for name, data in indexes.items():
        result.append({
            'name': name,
            'columns': data['columns'],
            'unique': data['unique']
        })
    return result

def discover_schema():
    """Main schema discovery."""
    print("Starting schema discovery...")
    start_time = datetime.now()
    
    conn = get_connection()
    cursor = conn.cursor()
    
    try:
        # Get all tables
        tables_info = get_all_tables(cursor)
        print(f"Found {len(tables_info)} tables")
        
        # Detailed schema
        schema = {
            'database': DB_CONFIG['database'],
            'server_version': None,
            'discovered_at': start_time.isoformat(),
            'tables': {},
            'statistics': {
                'total_tables': len(tables_info),
                'total_rows': 0,
                'total_data_size_bytes': 0,
                'total_index_size_bytes': 0,
                'tables_without_primary_key': [],
                'tables_without_indexes': []
            }
        }
        
        # Get server version
        cursor.execute("SELECT VERSION()")
        schema['server_version'] = cursor.fetchone()[0]
        
        total_rows = 0
        total_data = 0
        total_index = 0
        
        for i, tbl in enumerate(tables_info):
            if (i + 1) % 100 == 0:
                print(f"Processing table {i + 1}/{len(tables_info)}: {tbl['name']}")
            
            columns = get_columns(cursor, tbl['name'])
            primary_keys = get_primary_keys(cursor, tbl['name'])
            foreign_keys = get_foreign_keys(cursor, tbl['name'])
            indexes = get_indexes(cursor, tbl['name'])
            
            schema['tables'][tbl['name']] = {
                'row_count': tbl['row_count'],
                'data_size_bytes': tbl['data_size_bytes'],
                'index_size_bytes': tbl['index_size_bytes'],
                'engine': tbl['engine'],
                'comment': tbl['comment'],
                'columns': columns,
                'primary_key': primary_keys,
                'foreign_keys': foreign_keys,
                'indexes': indexes
            }
            
            total_rows += tbl['row_count']
            total_data += tbl['data_size_bytes']
            total_index += tbl['index_size_bytes']
            
            if not primary_keys:
                schema['statistics']['tables_without_primary_key'].append(tbl['name'])
            if not indexes:
                schema['statistics']['tables_without_indexes'].append(tbl['name'])
        
        schema['statistics']['total_rows'] = total_rows
        schema['statistics']['total_data_size_bytes'] = total_data
        schema['statistics']['total_index_size_bytes'] = total_index
        
        elapsed = (datetime.now() - start_time).total_seconds()
        schema['statistics']['discovery_time_seconds'] = elapsed
        
        print(f"Schema discovery completed in {elapsed:.2f} seconds")
        
        return schema
        
    finally:
        cursor.close()
        conn.close()

def generate_markdown(schema):
    """Generate markdown report."""
    md = f"""# Schema Inventory Report

**Database:** {schema['database']}  
**Server:** {schema['server_version']}  
**Discovered:** {schema['discovered_at']}  
**Discovery Time:** {schema['statistics']['discovery_time_seconds']:.2f} seconds

## Summary Statistics

| Metric | Value |
|--------|-------|
| Total Tables | {schema['statistics']['total_tables']:,} |
| Total Rows | {schema['statistics']['total_rows']:,} |
| Total Data Size | {schema['statistics']['total_data_size_bytes'] / 1024 / 1024:.2f} MB |
| Total Index Size | {schema['statistics']['total_index_size_bytes'] / 1024 / 1024:.2f} MB |
| Tables without Primary Key | {len(schema['statistics']['tables_without_primary_key'])} |
| Tables without Indexes | {len(schema['statistics']['tables_without_indexes'])} |

## Tables by Size (Top 50)

| Table | Rows | Data Size | Index Size | Engine |
|-------|------|-----------|------------|--------|
"""
    
    # Sort by data size
    sorted_tables = sorted(
        schema['tables'].items(), 
        key=lambda x: x[1]['data_size_bytes'], 
        reverse=True
    )[:50]
    
    for name, info in sorted_tables:
        data_mb = info['data_size_bytes'] / 1024 / 1024
        index_mb = info['index_size_bytes'] / 1024 / 1024
        md += f"| {name} | {info['row_count']:,} | {data_mb:.2f} MB | {index_mb:.2f} MB | {info['engine']} |\n"
    
    # Tables without primary key
    if schema['statistics']['tables_without_primary_key']:
        md += "\n## Tables Without Primary Key\n\n"
        for tbl in schema['statistics']['tables_without_primary_key'][:20]:
            md += f"- {tbl}\n"
        if len(schema['statistics']['tables_without_primary_key']) > 20:
            md += f"- ... and {len(schema['statistics']['tables_without_primary_key']) - 20} more\n"
    
    # Tables without indexes
    if schema['statistics']['tables_without_indexes']:
        md += "\n## Tables Without Indexes\n\n"
        for tbl in schema['statistics']['tables_without_indexes'][:20]:
            md += f"- {tbl}\n"
        if len(schema['statistics']['tables_without_indexes']) > 20:
            md += f"- ... and {len(schema['statistics']['tables_without_indexes']) - 20} more\n"
    
    return md

if __name__ == '__main__':
    import os
    os.makedirs('outputs', exist_ok=True)
    
    # Discover schema
    schema = discover_schema()
    
    # Save JSON
    with open('outputs/schema_inventory.json', 'w', encoding='utf-8') as f:
        json.dump(schema, f, indent=2, ensure_ascii=False)
    print("Saved: outputs/schema_inventory.json")
    
    # Save Markdown
    md_content = generate_markdown(schema)
    with open('outputs/schema_inventory.md', 'w', encoding='utf-8') as f:
        f.write(md_content)
    print("Saved: outputs/schema_inventory.md")