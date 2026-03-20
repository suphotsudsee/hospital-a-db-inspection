#!/usr/bin/env python3
"""Phase 7: Dashboard Update - Update dashboard schema."""

import json
from datetime import datetime

def update_dashboard():
    """Update dashboard schema with project results."""
    print("Loading project data...")
    
    # Load all outputs
    with open('outputs/connection_status.json', 'r', encoding='utf-8') as f:
        connection = json.load(f)
    
    with open('outputs/schema_inventory.json', 'r', encoding='utf-8') as f:
        schema = json.load(f)
    
    with open('outputs/module_map.json', 'r', encoding='utf-8') as f:
        modules = json.load(f)
    
    with open('outputs/anomalies.json', 'r', encoding='utf-8') as f:
        anomalies = json.load(f)
    
    with open('state/project_status.json', 'r', encoding='utf-8') as f:
        project_status = json.load(f)
    
    with open('state/phase_status.json', 'r', encoding='utf-8') as f:
        phase_status = json.load(f)
    
    # Build dashboard schema
    dashboard = {
        'project': {
            'project_name': 'hospital-db-inspection',
            'hospital_name': 'โรงพยาบาลตัวอย่าง',
            'database_name': 'hidb10949',
            'status': 'RUNNING',
            'overall_progress': project_status['overall_progress'],
            'current_phase': project_status['current_phase'],
            'last_updated': datetime.now().isoformat()
        },
        'database_overview': {
            'server_version': connection.get('server_version', 'Unknown'),
            'connection_status': connection['status'],
            'connection_time_ms': connection.get('connection_time_ms', 0),
            'total_tables': schema['statistics']['total_tables'],
            'total_rows': schema['statistics']['total_rows'],
            'data_size_mb': round(schema['statistics']['total_data_size_bytes'] / 1024 / 1024, 2),
            'index_size_mb': round(schema['statistics']['total_index_size_bytes'] / 1024 / 1024, 2)
        },
        'modules': [],
        'anomalies_summary': {
            'total': anomalies['summary']['total_anomalies'],
            'critical': anomalies['summary']['critical'],
            'warning': anomalies['summary']['warning'],
            'info': anomalies['summary']['info']
        },
        'phases': [],
        'issues': {
            'critical': anomalies['summary']['critical'],
            'high': anomalies['summary']['warning'],
            'medium': 0,
            'low': anomalies['summary']['info']
        }
    }
    
    # Add module summary
    for mod_name, mod_data in sorted(modules['modules'].items(), key=lambda x: len(x[1]['tables']), reverse=True)[:15]:
        if len(mod_data['tables']) > 0:
            dashboard['modules'].append({
                'name': mod_name,
                'description': mod_data['description'],
                'table_count': len(mod_data['tables']),
                'row_count': mod_data['total_rows'],
                'size_mb': round(mod_data['total_size_bytes'] / 1024 / 1024, 2)
            })
    
    # Add phase status
    for phase in phase_status:
        dashboard['phases'].append({
            'name': phase['phase'],
            'status': phase['status'],
            'progress': phase['progress'],
            'agent': phase['owner_agent'],
            'started_at': phase.get('started_at'),
            'completed_at': phase.get('completed_at')
        })
    
    return dashboard

if __name__ == '__main__':
    import os
    os.makedirs('state', exist_ok=True)
    
    print("Updating dashboard schema...")
    dashboard = update_dashboard()
    
    with open('state/dashboard_schema.json', 'w', encoding='utf-8') as f:
        json.dump(dashboard, f, indent=2, ensure_ascii=False)
    
    print("Saved: state/dashboard_schema.json")
    print("\nDashboard Summary:")
    print(f"  - Tables: {dashboard['database_overview']['total_tables']}")
    print(f"  - Rows: {dashboard['database_overview']['total_rows']:,}")
    print(f"  - Size: {dashboard['database_overview']['data_size_mb']} MB")
    print(f"  - Anomalies: {dashboard['anomalies_summary']['total']} ({dashboard['anomalies_summary']['critical']} critical)")