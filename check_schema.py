import json

with open('state/dashboard_schema.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

t = d['tables']

# Check patient table columns
if 'patient' in t:
    p = t['patient']
    print('patient table:')
    print('  label:', p.get('label'))
    print('  description:', p.get('description'))
    print('  columns sample:')
    for c in p.get('columns', [])[:5]:
        print(f"    {c['name']}: {c.get('label')} - {c.get('description')}")

# Check ovst table
if 'ovst' in t:
    o = t['ovst']
    print('\novst table:')
    print('  label:', o.get('label'))
    print('  description:', o.get('description'))
    print('  columns sample:')
    for c in o.get('columns', [])[:5]:
        print(f"    {c['name']}: {c.get('label')} - {c.get('description')}")

# Check ipt table
if 'ipt' in t:
    i = t['ipt']
    print('\nipt table:')
    print('  label:', i.get('label'))
    print('  description:', i.get('description'))

print('\nData Dictionary Summary:')
print(f"  Total tables: {len(t)}")
print(f"  Total columns: {d['data_dictionary']['total_columns']}")