#!/usr/bin/env python3
"""Test MySQL connection and gather basic info."""

import json
import mysql.connector
from datetime import datetime
import os

def test_connection():
    config = {
        'host': '192.168.25.128',
        'port': 3306,
        'database': 'hidb10949',
        'user': 'suphot',
        'password': '0868757244',
        'connection_timeout': 10
    }
    
    result = {
        'status': 'failed',
        'connection_time_ms': None,
        'server_version': None,
        'database_accessible': False,
        'tables_count': None,
        'errors': [],
        'tested_at': datetime.now().isoformat()
    }
    
    conn = None
    cursor = None
    
    try:
        import time
        start = time.time()
        conn = mysql.connector.connect(**config)
        elapsed_ms = (time.time() - start) * 1000
        
        result['status'] = 'success'
        result['connection_time_ms'] = round(elapsed_ms, 2)
        result['database_accessible'] = True
        
        cursor = conn.cursor()
        
        # Get server version
        cursor.execute("SELECT VERSION()")
        version = cursor.fetchone()
        result['server_version'] = version[0] if version else None
        
        # Count tables
        cursor.execute("SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = %s", (config['database'],))
        count = cursor.fetchone()
        result['tables_count'] = count[0] if count else 0
        
    except mysql.connector.Error as e:
        result['errors'].append(f"MySQL Error: {e}")
    except Exception as e:
        result['errors'].append(f"Error: {e}")
    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()
    
    return result

if __name__ == '__main__':
    # Ensure outputs directory exists
    os.makedirs('outputs', exist_ok=True)
    
    result = test_connection()
    
    # Write to file
    with open('outputs/connection_status.json', 'w', encoding='utf-8') as f:
        json.dump(result, f, indent=2, ensure_ascii=False)
    
    print(json.dumps(result, indent=2, ensure_ascii=False))