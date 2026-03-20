import json

with open('state/dashboard_schema.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

t = d['tables']

# Find ovst and patient tables
for table_name in ['ovst', 'patient', 'ipt', 'doctor', 'drugitems']:
    if table_name in t:
        tbl = t[table_name]
        print(f"\n=== {table_name} ===")
        print(f"Label: {tbl.get('label', 'N/A')}")
        print(f"Description: {tbl.get('description', 'N/A')}")
        print(f"Row count: {tbl.get('row_count', 0):,}")
        print(f"Primary key: {tbl.get('primary_key', [])}")
        print(f"Columns ({len(tbl.get('columns', []))}):")
        
        # Show columns with Thai labels
        for col in tbl.get('columns', [])[:10]:
            label = col.get('label', '')
            desc = col.get('description', '')
            print(f"  - {col['name']}: {label}")
            if desc != '-' and desc:
                print(f"    [{desc}]")