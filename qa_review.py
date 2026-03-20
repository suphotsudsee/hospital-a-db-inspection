#!/usr/bin/env python3
"""Phase 8: QA Review - Quality Assurance check."""

import json
import os
from datetime import datetime

def check_file_exists(filepath):
    """Check if file exists and has content."""
    if not os.path.exists(filepath):
        return {'status': 'MISSING', 'message': 'File not found'}
    
    size = os.path.getsize(filepath)
    if size == 0:
        return {'status': 'EMPTY', 'message': 'File is empty'}
    
    return {'status': 'OK', 'size': size}

def validate_json(filepath):
    """Validate JSON file structure."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            data = json.load(f)
        return {'status': 'OK', 'type': type(data).__name__}
    except json.JSONDecodeError as e:
        return {'status': 'INVALID', 'message': str(e)}

def qa_review():
    """Perform QA review on all outputs."""
    print("Starting QA Review...")
    
    results = {
        'reviewed_at': datetime.now().isoformat(),
        'files_checked': [],
        'data_validations': [],
        'issues': [],
        'status': 'PASS'
    }
    
    # Expected outputs by phase
    expected_files = {
        'Phase 1 - Connection Check': ['outputs/connection_status.json'],
        'Phase 2 - Schema Discovery': ['outputs/schema_inventory.json', 'outputs/schema_inventory.md'],
        'Phase 3 - Table Classification': ['outputs/module_map.json', 'outputs/module_summary.md'],
        'Phase 4 - Relationship Mapping': ['outputs/relationship_map.json', 'outputs/relationship_map.md'],
        'Phase 5 - Index Review': ['outputs/index_gap_report.md', 'outputs/recommended_indexes.sql'],
        'Phase 6 - Report Generation': ['outputs/executive_summary.md', 'outputs/final_recommendation.md', 'outputs/anomalies.json'],
        'Phase 7 - Dashboard Update': ['state/dashboard_schema.json']
    }
    
    # Check files
    for phase, files in expected_files.items():
        for filepath in files:
            check = check_file_exists(filepath)
            results['files_checked'].append({
                'phase': phase,
                'file': filepath,
                'status': check['status'],
                'size': check.get('size', 0)
            })
            
            if check['status'] != 'OK':
                results['issues'].append(f"{filepath}: {check['status']}")
                results['status'] = 'FAIL'
    
    # Validate JSON files
    json_files = [
        'outputs/connection_status.json',
        'outputs/schema_inventory.json',
        'outputs/module_map.json',
        'outputs/relationship_map.json',
        'outputs/anomalies.json',
        'state/dashboard_schema.json'
    ]
    
    for filepath in json_files:
        if os.path.exists(filepath):
            validation = validate_json(filepath)
            results['data_validations'].append({
                'file': filepath,
                'status': validation['status']
            })
            if validation['status'] != 'OK':
                results['issues'].append(f"{filepath}: Invalid JSON - {validation.get('message', '')}")
    
    # Data quality checks
    print("Running data quality checks...")
    
    # Check connection
    with open('outputs/connection_status.json', 'r', encoding='utf-8') as f:
        conn = json.load(f)
    
    if conn['status'] != 'success':
        results['issues'].append(f"Connection failed: {conn.get('errors', [])}")
        results['status'] = 'FAIL'
    
    # Check schema
    with open('outputs/schema_inventory.json', 'r', encoding='utf-8') as f:
        schema = json.load(f)
    
    if schema['statistics']['total_tables'] < 1:
        results['issues'].append("No tables found in schema")
        results['status'] = 'FAIL'
    
    # Check anomalies
    with open('outputs/anomalies.json', 'r', encoding='utf-8') as f:
        anomalies = json.load(f)
    
    if anomalies['summary']['critical'] > 0:
        results['issues'].append(f"Critical anomalies found: {anomalies['summary']['critical']}")
    
    # Summary
    total_files = len(results['files_checked'])
    passed_files = len([f for f in results['files_checked'] if f['status'] == 'OK'])
    
    results['summary'] = {
        'total_files_checked': total_files,
        'files_passed': passed_files,
        'files_failed': total_files - passed_files,
        'issues_count': len(results['issues']),
        'overall_status': results['status']
    }
    
    return results

def generate_qa_report(results):
    """Generate QA review markdown report."""
    md = f"""# QA Review Report

**Reviewed At:** {results['reviewed_at']}  
**Overall Status:** {'✅ PASS' if results['status'] == 'PASS' else '❌ FAIL'}

---

## File Checks

| Phase | File | Status | Size |
|-------|------|--------|------|
"""
    
    for file_check in results['files_checked']:
        status_icon = '✅' if file_check['status'] == 'OK' else '❌'
        md += f"| {file_check['phase']} | `{file_check['file']}` | {status_icon} {file_check['status']} | {file_check['size']} bytes |\n"
    
    md += f"""
## Data Validations

| File | Status |
|------|--------|
"""
    
    for validation in results['data_validations']:
        status_icon = '✅' if validation['status'] == 'OK' else '❌'
        md += f"| `{validation['file']}` | {status_icon} {validation['status']} |\n"
    
    md += f"""
## Summary

| Metric | Value |
|--------|-------|
| Total Files Checked | {results['summary']['total_files_checked']} |
| Files Passed | {results['summary']['files_passed']} |
| Files Failed | {results['summary']['files_failed']} |
| Issues Found | {results['summary']['issues_count']} |
| Overall Status | **{results['summary']['overall_status']}** |

## Issues

"""
    
    if results['issues']:
        for issue in results['issues']:
            md += f"- {issue}\n"
    else:
        md += "✅ No issues found.\n"
    
    md += """
## Recommendations

"""
    
    if results['status'] == 'PASS':
        md += "1. ✅ All outputs are complete and valid.\n"
        md += "2. ✅ No critical issues found.\n"
        md += "3. ✅ Ready for release.\n"
    else:
        md += "1. ⚠️ Some files are missing or invalid.\n"
        md += "2. ⚠️ Please review and fix issues before release.\n"
    
    md += f"""
---

*QA Review completed at {results['reviewed_at']}*
"""
    
    return md

if __name__ == '__main__':
    os.makedirs('outputs', exist_ok=True)
    
    # Run QA review
    results = qa_review()
    
    # Save results
    with open('outputs/qa_review.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    print("Saved: outputs/qa_review.json")
    
    # Generate markdown report
    report = generate_qa_report(results)
    with open('outputs/qa_review.md', 'w', encoding='utf-8') as f:
        f.write(report)
    print("Saved: outputs/qa_review.md")
    
    # Print summary
    print(f"\nQA Review Summary:")
    print(f"  Files Checked: {results['summary']['total_files_checked']}")
    print(f"  Files Passed: {results['summary']['files_passed']}")
    print(f"  Issues: {results['summary']['issues_count']}")
    print(f"  Status: {results['status']}")