-- ============================================================
-- Hospital DB Dashboard - SQL Queries
-- Database: hidb10949
-- Generated: 2026-03-20
-- ============================================================
-- 
-- หมายเหตุ: Queries นี้ออกแบบสำหรับ:
-- 1. Live database connection (MariaDB/MySQL)
-- 2. สามารถใช้กับ JSON data transformation ได้ในกรณี static data
-- 3. Optimized ด้วย indexes ที่แนะนำจาก inspection
--
-- Data Sources:
-- - schema_inventory.json: 847 tables, 25 modules
-- - module_map.json: Table classifications by module
-- - anomalies.json: 527 issues found
-- - index_gap_report.md: Index recommendations
-- ============================================================

-- ============================================================
-- SECTION 1: DATABASE OVERVIEW QUERIES
-- API Endpoint: /api/overview
-- ============================================================

-- Query: get_database_overview
-- Purpose: Get complete database statistics for dashboard header
-- Returns: Total tables, rows, size, module count, health score
-- Estimated Cost: LOW (uses information_schema and aggregated data)
-- Cache TTL: 3600 seconds (1 hour)
-- Index Required: PRIMARY keys on all tables for accurate COUNT

SELECT 
    'hidb10949' AS database_name,
    '10.11.16-MariaDB-ubu2404-log' AS server_version,
    (SELECT COUNT(*) FROM information_schema.tables 
     WHERE table_schema = 'hidb10949') AS total_tables,
    (SELECT COUNT(DISTINCT table_name) FROM information_schema.tables 
     WHERE table_schema = 'hidb10949' AND table_type = 'BASE TABLE') AS base_tables,
    (SELECT SUM(table_rows) FROM information_schema.tables 
     WHERE table_schema = 'hidb10949') AS estimated_total_rows,
    (SELECT SUM(data_length + index_length) FROM information_schema.tables 
     WHERE table_schema = 'hidb10949') AS total_size_bytes,
    (SELECT SUM(data_length) FROM information_schema.tables 
     WHERE table_schema = 'hidb10949') AS data_size_bytes,
    (SELECT SUM(index_length) FROM information_schema.tables 
     WHERE table_schema = 'hidb10949') AS index_size_bytes,
    (SELECT COUNT(*) FROM information_schema.columns 
     WHERE table_schema = 'hidb10949') AS total_columns,
    (SELECT COUNT(DISTINCT engine) FROM information_schema.tables 
     WHERE table_schema = 'hidb10949') AS engine_types_count,
    NOW() AS queried_at;

-- Query: get_table_engine_distribution
-- Purpose: Get distribution of storage engines
-- Returns: Engine name, table count, total size
-- Estimated Cost: LOW
-- Cache TTL: 3600 seconds

SELECT 
    engine,
    COUNT(*) AS table_count,
    SUM(table_rows) AS row_count,
    SUM(data_length + index_length) AS total_size_bytes,
    ROUND((SUM(data_length + index_length) / 1024 / 1024), 2) AS size_mb,
    ROUND((SUM(data_length + index_length) / 1024 / 1024 / 1024), 3) AS size_gb
FROM information_schema.tables
WHERE table_schema = 'hidb10949'
GROUP BY engine
ORDER BY total_size_bytes DESC;

-- Query: get_modules_count
-- Purpose: Count modules from classification data
-- Note: This would use the module_map.json in static mode
-- Returns: Module count
-- Estimated Cost: LOW (pre-computed data)
-- Cache TTL: 86400 seconds (24 hours)

-- For live DB, we use a pre-computed module mapping table
-- or derive from table naming conventions
SELECT 
    COUNT(DISTINCT module_name) AS module_count,
    SUM(table_count) AS total_classified_tables
FROM (
    -- Module classification derived from table prefixes/naming
    SELECT 
        CASE 
            WHEN table_name LIKE 'acci%' OR table_name LIKE 'accident%' OR table_name LIKE 'emergency%' THEN 'accident'
            WHEN table_name LIKE 'person%' OR table_name LIKE 'pt%' OR table_name LIKE 'patient%' 
                 OR table_name LIKE 'hn%' OR table_name LIKE 'cid%' THEN 'patient'
            WHEN table_name LIKE 'ipt%' OR table_name LIKE 'ipd%' OR table_name LIKE 'anc%'
                 OR table_name LIKE 'bed%' OR table_name LIKE 'beds%' THEN 'ipd'
            WHEN table_name LIKE 'ovst%' OR table_name LIKE 'opd%' OR table_name LIKE 'op%'
                 OR table_name LIKE 'opd%' THEN 'opd'
            WHEN table_name LIKE 'lab%' OR table_name LIKE 'labb%' OR table_name LIKE 'labd%' THEN 'laboratory'
            WHEN table_name LIKE 'prsc%' OR table_name LIKE 'drug%' OR table_name LIKE 'med%' THEN 'pharmacy'
            WHEN table_name LIKE 'vaccine%' OR table_name LIKE 'vac%' THEN 'vaccination'
            WHEN table_name LIKE 'chronic%' OR table_name LIKE 't_chronic%' THEN 'chronic'
            WHEN table_name LIKE 'icd%' THEN 'icd'
            WHEN table_name LIKE 'queue%' OR table_name LIKE 'q4u%' OR table_name LIKE 'appoint%' THEN 'appointment'
            WHEN table_name LIKE 'refer%' OR table_name LIKE 'CMI%' OR table_name LIKE 'eclaim%' THEN 'refer'
            WHEN table_name LIKE 'user%' OR table_name LIKE 'log%' OR table_name LIKE 'config%' THEN 'system'
            WHEN table_name LIKE 'report%' THEN 'report'
            WHEN table_name LIKE 'dental%' THEN 'dental'
            WHEN table_name LIKE 'xray%' THEN 'xray'
            WHEN table_name LIKE 'surgery%' OR table_name LIKE 'operation%' OR table_name LIKE 'or%' THEN 'surgery'
            WHEN table_name LIKE 'insure%' THEN 'insurance'
            WHEN table_name LIKE 'income%' OR table_name LIKE 'prcd%' OR table_name LIKE 'ssop_bill%' THEN 'finance'
            WHEN table_name LIKE 'food%' OR table_name LIKE 'nutrition%' THEN 'nutrition'
            WHEN table_name LIKE 'staff%' OR table_name LIKE 'nurse%' OR table_name LIKE 'hr%' THEN 'hr'
            WHEN table_name LIKE 'inv%' OR table_name LIKE 'inventory%' OR table_name LIKE 'nondrug%' THEN 'inventory'
            WHEN table_name LIKE 'blood%' OR table_name LIKE 'vital%' THEN 'blood'
            WHEN table_name LIKE 'moph%' OR table_name LIKE 'pcu%' OR table_name LIKE 'hi7_%' THEN 'moph'
            ELSE 'other'
        END AS module_name,
        COUNT(*) AS table_count
    FROM information_schema.tables
    WHERE table_schema = 'hidb10949'
    GROUP BY module_name
) AS module_stats;

-- ============================================================
-- SECTION 2: MODULE LIST QUERIES
-- API Endpoint: /api/modules
-- ============================================================

-- Query: get_modules_list
-- Purpose: Get all modules with their statistics
-- Returns: Module name, table count, row count, size, description
-- Estimated Cost: MEDIUM (requires table scans for row counts)
-- Cache TTL: 1800 seconds (30 minutes)
-- Index Required: PRIMARY keys, indexes on row count columns

SELECT 
    m.module_name,
    m.module_description,
    COUNT(DISTINCT t.table_name) AS table_count,
    SUM(t.table_rows) AS estimated_rows,
    SUM(t.data_length + t.index_length) AS total_size_bytes,
    ROUND((SUM(t.data_length + t.index_length) / 1024 / 1024), 2) AS size_mb,
    ROUND((SUM(t.data_length + t.index_length) / 1024 / 1024 / 1024), 4) AS size_gb,
    -- Calculate percentage of total database size
    ROUND((SUM(t.data_length + t.index_length) * 100.0 / 
           (SELECT SUM(data_length + index_length) 
            FROM information_schema.tables 
            WHERE table_schema = 'hidb10949')), 2) AS size_percentage
FROM (
    -- Module classification mapping
    -- In production, this would be a module_mapping table
    SELECT 'accident' AS module_name, 'อุบัติเหตุและฉุกเฉิน' AS module_description
    UNION SELECT 'patient', 'ข้อมูลผู้ป่วยและบุคคล'
    UNION SELECT 'ipd', 'บริการผู้ป่วยใน'
    UNION SELECT 'opd', 'บริการผู้ป่วยนอก'
    UNION SELECT 'laboratory', 'ห้องปฏิบัติการและผลตรวจ'
    UNION SELECT 'pharmacy', 'ระบบร้านขายยาและยา'
    UNION SELECT 'vaccination', 'วัคซีนและภูมิคุ้มกัน'
    UNION SELECT 'chronic', 'โรคเรื้อรังและ NCD'
    UNION SELECT 'icd', 'รหัสโรค ICD'
    UNION SELECT 'appointment', 'นัดหมายและคิว'
    UNION SELECT 'refer', 'ส่งต่อผู้ป่วย'
    UNION SELECT 'system', 'ระบบและการตั้งค่า'
    UNION SELECT 'report', 'รายงาน'
    UNION SELECT 'dental', 'ทันตกรรม'
    UNION SELECT 'xray', 'รังสีวิทยา'
    UNION SELECT 'surgery', 'ห้องผ่าตัด'
    UNION SELECT 'insurance', 'สิทธิการรักษา'
    UNION SELECT 'finance', 'การเงินและการเงิน'
    UNION SELECT 'nutrition', 'โภชนาการ'
    UNION SELECT 'hr', 'บุคลากร'
    UNION SELECT 'inventory', 'คลังและพัสดุ'
    UNION SELECT 'blood', 'ธนาคารเลือด'
    UNION SELECT 'moph', 'เชื่อมต่อกระทรวงสาธารณสุข'
    UNION SELECT 'anc', 'ฝากครรภ์'
    UNION SELECT 'other', 'อื่นๆ'
) m
LEFT JOIN (
    SELECT 
        table_name,
        table_rows,
        data_length,
        index_length,
        CASE 
            WHEN table_name LIKE 'acci%' OR table_name = 'accident' OR table_name = 'emergency' THEN 'accident'
            WHEN table_name LIKE 'person%' OR table_name LIKE 'pt%' OR table_name = 'PERSON' 
                 OR table_name LIKE 'hn%' OR table_name LIKE 'cid%' OR table_name LIKE 'bhtr%'
                 OR table_name LIKE 'oapp%' OR table_name LIKE 'dr%' OR table_name LIKE 'epi%'
                 OR table_name = 'incoth' OR table_name LIKE 'prsc%' OR table_name LIKE 'ipt%'
                 OR table_name LIKE 'child%' OR table_name LIKE 'ckd%' OR table_name LIKE 'covid%'
                 OR table_name LIKE 'pttype%' OR table_name LIKE 'inspt%' OR table_name LIKE 'stm%'
            THEN 'patient'
            WHEN table_name LIKE 'IPD%' OR table_name LIKE 'ipt%' OR table_name LIKE 'bed%'
                 OR table_name LIKE 'anc' OR table_name LIKE 'anes%' OR table_name = 'beds'
                 OR table_name LIKE 'ipt%' OR table_name LIKE 'hospcode' OR table_name LIKE 'invoice%'
            THEN 'ipd'
            WHEN table_name LIKE 'ovst%' OR table_name LIKE 'OPD%' OR table_name LIKE 'Mrs_OPD%'
                 OR table_name LIKE 'ccd_opd%' OR table_name LIKE 'chkuseopd%'
            THEN 'opd'
            WHEN table_name LIKE 'lab%' OR table_name LIKE 'labb%' OR table_name LIKE 'labd%'
                 OR table_name LIKE 'labcode%' OR table_name LIKE 'labresult%'
            THEN 'laboratory'
            WHEN table_name LIKE 'prscdt%' OR table_name LIKE 'drug%' OR table_name LIKE 'med%'
                 OR table_name LIKE 'iprsc%' OR table_name LIKE 'interact%'
            THEN 'pharmacy'
            WHEN table_name LIKE 'vaccine%' OR table_name LIKE 'vaccin%' THEN 'vaccination'
            WHEN table_name LIKE 'chronic%' OR table_name LIKE 'CHRONIC%' OR table_name = 't_chronic' THEN 'chronic'
            WHEN table_name LIKE 'icd%' OR table_name LIKE 'dpmicd%' THEN 'icd'
            WHEN table_name LIKE 'queue%' OR table_name LIKE 'q4u%' OR table_name LIKE 'appoint%' THEN 'appointment'
            WHEN table_name LIKE 'refer%' OR table_name = 'CMI' OR table_name = 'eclaim' THEN 'refer'
            WHEN table_name LIKE 'user%' OR table_name LIKE 'log%' OR table_name LIKE 'config%'
                 OR table_name LIKE 'error%' OR table_name = 'orders'
            THEN 'system'
            WHEN table_name LIKE 'report%' THEN 'report'
            WHEN table_name LIKE 'dental%' OR table_name LIKE 'visitdental%' THEN 'dental'
            WHEN table_name LIKE 'xray%' THEN 'xray'
            WHEN table_name = 'operation' OR table_name LIKE 'or%' OR table_name LIKE 'surg%' THEN 'surgery'
            WHEN table_name LIKE 'insure%' THEN 'insurance'
            WHEN table_name LIKE 'income%' OR table_name LIKE 'prcd%' OR table_name LIKE 'ssop_bill%' THEN 'finance'
            WHEN table_name LIKE 'food%' THEN 'nutrition'
            WHEN table_name LIKE 'staff%' OR table_name LIKE 'nurse%' OR table_name LIKE 'opstaff%' OR table_name LIKE 'rcstaff%' THEN 'hr'
            WHEN table_name LIKE 'debt%' OR table_name LIKE 'nondrug%' OR table_name LIKE 'item%' THEN 'inventory'
            WHEN table_name LIKE 'blood%' OR table_name = 'vital_sign' THEN 'blood'
            WHEN table_name LIKE 'moph%' OR table_name LIKE 'pcu%' OR table_name LIKE 'hi7_%' THEN 'moph'
            WHEN table_name = 'dead' THEN 'anc'
            ELSE 'other'
        END AS module_name
    FROM information_schema.tables
    WHERE table_schema = 'hidb10949'
) t ON t.module_name = m.module_name
GROUP BY m.module_name, m.module_description
ORDER BY total_size_bytes DESC;

-- Query: get_module_top_tables
-- Purpose: Get top N tables by size for each module
-- Parameters: module_name, limit
-- Returns: Table name, row count, size
-- Estimated Cost: MEDIUM
-- Cache TTL: 3600 seconds

SELECT 
    table_name,
    table_rows AS estimated_rows,
    data_length + index_length AS size_bytes,
    ROUND((data_length + index_length) / 1024 / 1024, 2) AS size_mb,
    engine
FROM information_schema.tables
WHERE table_schema = 'hidb10949'
ORDER BY (data_length + index_length) DESC
LIMIT 20;

-- ============================================================
-- SECTION 3: MODULE DETAIL QUERIES
-- API Endpoint: /api/modules/[name]
-- ============================================================

-- Query: get_module_detail
-- Purpose: Get detailed information for a specific module
-- Parameters: :module_name
-- Returns: Module info, all tables with statistics
-- Estimated Cost: LOW (filtered by module)
-- Cache TTL: 1800 seconds

-- Note: In production, use parameterized query
-- Example: WHERE module_name = :module_name

SELECT 
    t.table_name,
    t.table_rows AS estimated_rows,
    t.data_length + t.index_length AS size_bytes,
    ROUND((t.data_length + t.index_length) / 1024 / 1024, 2) AS size_mb,
    t.engine,
    t.table_comment,
    -- Get column count
    (SELECT COUNT(*) FROM information_schema.columns c 
     WHERE c.table_schema = 'hidb10949' AND c.table_name = t.table_name) AS column_count,
    -- Get index count
    (SELECT COUNT(DISTINCT index_name) FROM information_schema.statistics s 
     WHERE s.table_schema = 'hidb10949' AND s.table_name = t.table_name) AS index_count,
    -- Check for primary key
    (SELECT COUNT(*) FROM information_schema.columns c 
     WHERE c.table_schema = 'hidb10949' AND c.table_name = t.table_name AND c.column_key = 'PRI') > 0 AS has_primary_key
FROM information_schema.tables t
WHERE t.table_schema = 'hidb10949'
    -- Module filter would be applied here based on table naming
    AND (
        :module_name = 'patient' AND (t.table_name LIKE 'person%' OR t.table_name LIKE 'pt%' 
            OR t.table_name LIKE 'hn%' OR t.table_name LIKE 'cid%' OR t.table_name LIKE 'bhtr%'
            OR t.table_name LIKE 'oapp%' OR t.table_name LIKE 'dr%' OR t.table_name LIKE 'epi%'
            OR t.table_name = 'incoth' OR t.table_name LIKE 'prsc%' OR t.table_name = 'PERSON'
            OR t.table_name = 'PTINFO' OR t.table_name = 'PTTY' OR t.table_name LIKE 'VR%')
        OR :module_name = 'ipd' AND (t.table_name LIKE 'IPD%' OR t.table_name LIKE 'ipt%'
            OR t.table_name LIKE 'bed%' OR t.table_name = 'anc' OR t.table_name LIKE 'anes%'
            OR t.table_name = 'beds' OR t.table_name LIKE 'hospcode' OR t.table_name LIKE 'invoice%')
        OR :module_name = 'opd' AND (t.table_name LIKE 'ovst%' OR t.table_name LIKE 'OPD%'
            OR t.table_name LIKE 'Mrs_OPD%' OR t.table_name LIKE 'ccd_opd%')
        OR :module_name = 'laboratory' AND (t.table_name LIKE 'lab%' OR t.table_name LIKE 'labb%'
            OR t.table_name LIKE 'labcode%' OR t.table_name LIKE 'labresult%')
        OR :module_name = 'pharmacy' AND (t.table_name LIKE 'prscdt%' OR t.table_name LIKE 'drug%'
            OR t.table_name LIKE 'med%' OR t.table_name LIKE 'interact%')
        OR :module_name = 'system' AND (t.table_name LIKE 'user%' OR t.table_name LIKE 'log%'
            OR t.table_name LIKE 'error%' OR t.table_name = 'orders')
        -- Add other modules as needed
    )
ORDER BY (t.data_length + t.index_length) DESC;

-- Query: get_module_table_issues
-- Purpose: Get anomaly issues for tables in a module
-- Parameters: :module_name
-- Returns: Tables with their issues from anomaly report
-- Estimated Cost: LOW (uses pre-computed anomalies)
-- Cache TTL: 3600 seconds

-- This would join with an anomalies summary table
-- For static mode, use anomalies.json data

SELECT 
    t.table_name,
    t.table_rows,
    CASE 
        WHEN t.table_rows > 100000 THEN 'CRITICAL'
        WHEN t.table_rows > 10000 THEN 'WARNING'
        ELSE 'INFO'
    END AS issue_severity,
    CASE 
        WHEN (SELECT COUNT(*) FROM information_schema.columns c 
              WHERE c.table_schema = 'hidb10949' AND c.table_name = t.table_name AND c.column_key = 'PRI') = 0
        THEN 'Missing primary key'
        WHEN (SELECT COUNT(DISTINCT index_name) FROM information_schema.statistics s 
              WHERE s.table_schema = 'hidb10949' AND s.table_name = t.table_name) = 1
        THEN 'No additional indexes'
        ELSE 'OK'
    END AS primary_issue
FROM information_schema.tables t
WHERE t.table_schema = 'hidb10949'
    -- Apply module filter (same as above)
ORDER BY t.table_rows DESC;

-- ============================================================
-- SECTION 4: ANOMALIES QUERIES
-- API Endpoint: /api/anomalies
-- ============================================================

-- Query: get_anomaly_categories
-- Purpose: Get all anomaly categories with counts
-- Returns: Category name, severity breakdown, table count
-- Estimated Cost: LOW (pre-computed data)
-- Cache TTL: 3600 seconds

SELECT 
    'missing_primary_keys' AS category,
    COUNT(*) AS table_count,
    SUM(CASE WHEN table_rows > 100000 THEN 1 ELSE 0 END) AS critical_count,
    SUM(CASE WHEN table_rows BETWEEN 10000 AND 100000 THEN 1 ELSE 0 END) AS warning_count,
    SUM(CASE WHEN table_rows < 10000 THEN 1 ELSE 0 END) AS info_count
FROM information_schema.tables t
WHERE t.table_schema = 'hidb10949'
    AND (SELECT COUNT(*) FROM information_schema.columns c 
         WHERE c.table_schema = 'hidb10949' AND c.table_name = t.table_name AND c.column_key = 'PRI') = 0

UNION ALL

SELECT 
    'missing_indexes' AS category,
    COUNT(*) AS table_count,
    SUM(CASE WHEN table_rows > 100000 THEN 1 ELSE 0 END) AS critical_count,
    SUM(CASE WHEN table_rows BETWEEN 10000 AND 100000 THEN 1 ELSE 0 END) AS warning_count,
    SUM(CASE WHEN table_rows < 10000 THEN 1 ELSE 0 END) AS info_count
FROM information_schema.tables t
WHERE t.table_schema = 'hidb10949'
    AND (SELECT COUNT(DISTINCT index_name) FROM information_schema.statistics s 
         WHERE s.table_schema = 'hidb10949' AND s.table_name = t.table_name) <= 1

UNION ALL

SELECT 
    'large_tables_no_pk' AS category,
    COUNT(*) AS table_count,
    SUM(CASE WHEN table_rows > 100000 THEN 1 ELSE 0 END) AS critical_count,
    SUM(CASE WHEN table_rows BETWEEN 10000 AND 100000 THEN 1 ELSE 0 END) AS warning_count,
    SUM(CASE WHEN table_rows < 10000 THEN 1 ELSE 0 END) AS info_count
FROM information_schema.tables t
WHERE t.table_schema = 'hidb10949'
    AND table_rows > 10000
    AND (SELECT COUNT(*) FROM information_schema.columns c 
         WHERE c.table_schema = 'hidb10949' AND c.table_name = t.table_name AND c.column_key = 'PRI') = 0

UNION ALL

SELECT 
    'zero_rows' AS category,
    COUNT(*) AS table_count,
    0 AS critical_count,
    0 AS warning_count,
    COUNT(*) AS info_count
FROM information_schema.tables t
WHERE t.table_schema = 'hidb10949'
    AND table_rows = 0

ORDER BY critical_count DESC, warning_count DESC;

-- Query: get_anomaly_severity_summary
-- Purpose: Get overall severity distribution
-- Returns: Total anomalies by severity level
-- Estimated Cost: LOW
-- Cache TTL: 3600 seconds

SELECT 
    severity,
    COUNT(*) AS issue_count,
    COUNT(DISTINCT table_name) AS affected_tables
FROM (
    -- Missing Primary Keys
    SELECT 
        t.table_name,
        CASE 
            WHEN t.table_rows > 100000 THEN 'CRITICAL'
            WHEN t.table_rows > 10000 THEN 'WARNING'
            ELSE 'INFO'
        END AS severity
    FROM information_schema.tables t
    WHERE t.table_schema = 'hidb10949'
        AND (SELECT COUNT(*) FROM information_schema.columns c 
             WHERE c.table_schema = 'hidb10949' AND c.table_name = t.table_name AND c.column_key = 'PRI') = 0
    
    UNION ALL
    
    -- Tables without proper indexes
    SELECT 
        t.table_name,
        CASE 
            WHEN t.table_rows > 100000 THEN 'CRITICAL'
            WHEN t.table_rows > 10000 THEN 'WARNING'
            ELSE 'INFO'
        END AS severity
    FROM information_schema.tables t
    WHERE t.table_schema = 'hidb10949'
        AND (SELECT COUNT(DISTINCT index_name) FROM information_schema.statistics s 
             WHERE s.table_schema = 'hidb10949' AND s.table_name = t.table_name) <= 1
        AND t.table_rows > 0
) AS anomalies
GROUP BY severity
ORDER BY 
    CASE severity 
        WHEN 'CRITICAL' THEN 1 
        WHEN 'WARNING' THEN 2 
        WHEN 'INFO' THEN 3 
    END;

-- ============================================================
-- SECTION 5: ANOMALY CATEGORY DETAIL QUERIES
-- API Endpoint: /api/anomalies/[category]
-- ============================================================

-- Query: get_anomaly_category_tables
-- Purpose: Get all tables with a specific anomaly type
-- Parameters: :category (missing_primary_keys, missing_indexes, large_tables, etc.)
-- Returns: Tables sorted by severity and row count
-- Estimated Cost: MEDIUM
-- Cache TTL: 1800 seconds

-- Missing Primary Keys tables
SELECT 
    t.table_name,
    t.table_rows AS row_count,
    t.data_length + t.index_length AS size_bytes,
    ROUND((t.data_length + t.index_length) / 1024 / 1024, 2) AS size_mb,
    t.engine,
    CASE 
        WHEN t.table_rows > 100000 THEN 'CRITICAL'
        WHEN t.table_rows > 10000 THEN 'WARNING'
        ELSE 'INFO'
    END AS severity,
    (SELECT COUNT(*) FROM information_schema.columns c 
     WHERE c.table_schema = 'hidb10949' AND c.table_name = t.table_name) AS column_count,
    'Missing PRIMARY KEY - recommend adding primary key for data integrity and performance' AS recommendation
FROM information_schema.tables t
WHERE t.table_schema = 'hidb10949'
    AND (SELECT COUNT(*) FROM information_schema.columns c 
         WHERE c.table_schema = 'hidb10949' AND c.table_name = t.table_name AND c.column_key = 'PRI') = 0
ORDER BY 
    CASE 
        WHEN t.table_rows > 100000 THEN 1
        WHEN t.table_rows > 10000 THEN 2
        ELSE 3
    END,
    t.table_rows DESC;

-- Tables missing proper indexes (excluding PK)
SELECT 
    t.table_name,
    t.table_rows AS row_count,
    t.data_length + t.index_length AS size_bytes,
    t.engine,
    (SELECT GROUP_CONCAT(DISTINCT index_name) FROM information_schema.statistics s 
     WHERE s.table_schema = 'hidb10949' AND s.table_name = t.table_name) AS existing_indexes,
    CASE 
        WHEN t.table_rows > 100000 THEN 'CRITICAL'
        WHEN t.table_rows > 10000 THEN 'WARNING'
        ELSE 'INFO'
    END AS severity
FROM information_schema.tables t
WHERE t.table_schema = 'hidb10949'
    AND (SELECT COUNT(DISTINCT index_name) FROM information_schema.statistics s 
         WHERE s.table_schema = 'hidb10949' AND s.table_name = t.table_name) <= 1
    AND t.table_rows > 0
ORDER BY t.table_rows DESC;

-- ============================================================
-- SECTION 6: INDEX RECOMMENDATIONS QUERIES
-- API Endpoint: /api/indexes/recommendations
-- ============================================================

-- Query: get_index_recommendations
-- Purpose: Get all recommended indexes with priorities
-- Returns: Table, recommended index, priority, reason
-- Estimated Cost: LOW (pre-computed recommendations)
-- Cache TTL: 86400 seconds (24 hours - changes rarely)

-- High priority: Large tables without PK
SELECT 
    'HIGH' AS priority,
    t.table_name,
    'PRIMARY KEY' AS index_type,
    'id' AS suggested_column,  -- Placeholder, actual column needs analysis
    t.table_rows,
    ROUND((t.data_length + t.index_length) / 1024 / 1024, 2) AS size_mb,
    CONCAT('Table has ', FORMAT(t.table_rows, 0), ' rows but no primary key') AS reason,
    CONCAT('ALTER TABLE `', t.table_name, '` ADD PRIMARY KEY (`id`);') AS sql_statement
FROM information_schema.tables t
WHERE t.table_schema = 'hidb10949'
    AND t.table_rows > 10000
    AND (SELECT COUNT(*) FROM information_schema.columns c 
         WHERE c.table_schema = 'hidb10949' AND c.table_name = t.table_name AND c.column_key = 'PRI') = 0
ORDER BY t.table_rows DESC

UNION ALL

-- Medium priority: Medium-sized tables without PK
SELECT 
    'MEDIUM' AS priority,
    t.table_name,
    'PRIMARY KEY' AS index_type,
    'id' AS suggested_column,
    t.table_rows,
    ROUND((t.data_length + t.index_length) / 1024 / 1024, 2) AS size_mb,
    CONCAT('Table has ', FORMAT(t.table_rows, 0), ' rows but no primary key') AS reason,
    CONCAT('ALTER TABLE `', t.table_name, '` ADD PRIMARY KEY (`id`);') AS sql_statement
FROM information_schema.tables t
WHERE t.table_schema = 'hidb10949'
    AND t.table_rows BETWEEN 1000 AND 10000
    AND (SELECT COUNT(*) FROM information_schema.columns c 
         WHERE c.table_schema = 'hidb10949' AND c.table_name = t.table_name AND c.column_key = 'PRI') = 0
ORDER BY t.table_rows DESC

UNION ALL

-- Low priority: Small tables without PK
SELECT 
    'LOW' AS priority,
    t.table_name,
    'PRIMARY KEY' AS index_type,
    'id' AS suggested_column,
    t.table_rows,
    ROUND((t.data_length + t.index_length) / 1024 / 1024, 2) AS size_mb,
    CONCAT('Table has ', FORMAT(t.table_rows, 0), ' rows but no primary key') AS reason,
    CONCAT('ALTER TABLE `', t.table_name, '` ADD PRIMARY KEY (`id`);') AS sql_statement
FROM information_schema.tables t
WHERE t.table_schema = 'hidb10949'
    AND t.table_rows < 1000
    AND t.table_rows > 0
    AND (SELECT COUNT(*) FROM information_schema.columns c 
         WHERE c.table_schema = 'hidb10949' AND c.table_name = t.table_name AND c.column_key = 'PRI') = 0
ORDER BY t.table_rows DESC;

-- Query: get_index_gap_analysis
-- Purpose: Detailed analysis of missing indexes
-- Returns: Tables with their current indexes and gaps
-- Estimated Cost: MEDIUM
-- Cache TTL: 3600 seconds

SELECT 
    t.table_name,
    t.table_rows,
    t.data_length + t.index_length AS size_bytes,
    (SELECT COUNT(DISTINCT index_name) FROM information_schema.statistics s 
     WHERE s.table_schema = 'hidb10949' AND s.table_name = t.table_name) AS current_index_count,
    (SELECT GROUP_CONCAT(DISTINCT column_name ORDER BY seq_in_index) 
     FROM information_schema.statistics s 
     WHERE s.table_schema = 'hidb10949' AND s.table_name = t.table_name AND s.index_name = 'PRIMARY') AS primary_key_columns,
    (SELECT GROUP_CONCAT(DISTINCT index_name) FROM information_schema.statistics s 
     WHERE s.table_schema = 'hidb10949' AND s.table_name = t.table_name AND s.index_name != 'PRIMARY') AS non_pk_indexes,
    CASE 
        WHEN (SELECT COUNT(*) FROM information_schema.columns c 
              WHERE c.table_schema = 'hidb10949' AND c.table_name = t.table_name AND c.column_key = 'PRI') = 0
        THEN 'Missing PRIMARY KEY'
        WHEN (SELECT COUNT(DISTINCT index_name) FROM information_schema.statistics s 
              WHERE s.table_schema = 'hidb10949' AND s.table_name = t.table_name AND s.index_name != 'PRIMARY') = 0
        THEN 'No secondary indexes'
        ELSE 'Adequate'
    END AS index_status
FROM information_schema.tables t
WHERE t.table_schema = 'hidb10949'
    AND t.table_rows > 0
ORDER BY t.table_rows DESC
LIMIT 100;

-- ============================================================
-- SECTION 7: TABLES LIST QUERIES
-- API Endpoint: /api/tables
-- ============================================================

-- Query: get_tables_paginated
-- Purpose: Get paginated list of all tables
-- Parameters: :page, :limit, :module_filter (optional), :sort_by, :sort_order
-- Returns: Tables with basic stats
-- Estimated Cost: LOW
-- Cache TTL: 1800 seconds

SELECT 
    t.table_name,
    t.table_rows AS row_count,
    t.data_length + t.index_length AS size_bytes,
    ROUND((t.data_length + t.index_length) / 1024 / 1024, 2) AS size_mb,
    t.engine,
    (SELECT COUNT(*) FROM information_schema.columns c 
     WHERE c.table_schema = 'hidb10949' AND c.table_name = t.table_name) AS column_count,
    (SELECT COUNT(DISTINCT index_name) FROM information_schema.statistics s 
     WHERE s.table_schema = 'hidb10949' AND s.table_name = t.table_name) AS index_count,
    (SELECT COUNT(*) FROM information_schema.columns c 
     WHERE c.table_schema = 'hidb10949' AND c.table_name = t.table_name AND c.column_key = 'PRI') > 0 AS has_primary_key,
    t.table_comment
FROM information_schema.tables t
WHERE t.table_schema = 'hidb10949'
    -- Optional module filter would be applied here
ORDER BY (t.data_length + t.index_length) DESC
LIMIT :limit OFFSET :offset;

-- Query: get_tables_count
-- Purpose: Get total count for pagination
-- Returns: Total tables count
-- Estimated Cost: LOW
-- Cache TTL: 3600 seconds

SELECT COUNT(*) AS total_tables
FROM information_schema.tables
WHERE table_schema = 'hidb10949';

-- Query: get_tables_by_module
-- Purpose: Get tables filtered by module
-- Parameters: :module_name
-- Returns: Tables in specified module
-- Estimated Cost: LOW
-- Cache TTL: 1800 seconds

-- This uses a predefined module mapping
SELECT 
    t.table_name,
    t.table_rows AS row_count,
    t.data_length + t.index_length AS size_bytes,
    t.engine,
    'patient' AS module_name  -- Placeholder, actual module derived from table name
FROM information_schema.tables t
WHERE t.table_schema = 'hidb10949'
ORDER BY t.table_name;

-- ============================================================
-- SECTION 8: TABLE DETAIL QUERIES
-- API Endpoint: /api/tables/[name]
-- ============================================================

-- Query: get_table_detail
-- Purpose: Get complete information for a single table
-- Parameters: :table_name
-- Returns: Full schema, columns, indexes, statistics
-- Estimated Cost: LOW
-- Cache TTL: 3600 seconds

SELECT 
    t.table_name,
    t.table_rows AS row_count,
    t.data_length AS data_size_bytes,
    t.index_length AS index_size_bytes,
    t.data_length + t.index_length AS total_size_bytes,
    ROUND(t.data_length / 1024 / 1024, 2) AS data_size_mb,
    ROUND(t.index_length / 1024 / 1024, 2) AS index_size_mb,
    ROUND((t.data_length + t.index_length) / 1024 / 1024, 2) AS total_size_mb,
    t.engine,
    t.table_collation,
    t.table_comment,
    t.auto_increment,
    t.create_time,
    t.update_time
FROM information_schema.tables t
WHERE t.table_schema = 'hidb10949'
    AND t.table_name = :table_name;

-- Query: get_table_columns
-- Purpose: Get all columns for a table
-- Parameters: :table_name
-- Returns: Column details including type, nullable, key, default
-- Estimated Cost: LOW
-- Cache TTL: 3600 seconds

SELECT 
    c.column_name,
    c.column_type,
    c.is_nullable,
    c.column_key,
    c.column_default,
    c.extra,
    c.column_comment,
    c.ordinal_position,
    CASE 
        WHEN c.column_key = 'PRI' THEN 'PRIMARY KEY'
        WHEN c.column_key = 'UNI' THEN 'UNIQUE'
        WHEN c.column_key = 'MUL' THEN 'INDEX'
        ELSE ''
    END AS key_type,
    CASE 
        WHEN c.column_type LIKE '%int%' THEN 'numeric'
        WHEN c.column_type LIKE '%decimal%' OR c.column_type LIKE '%float%' OR c.column_type LIKE '%double%' THEN 'numeric'
        WHEN c.column_type LIKE '%char%' OR c.column_type LIKE '%text%' THEN 'text'
        WHEN c.column_type LIKE '%date%' OR c.column_type LIKE '%time%' THEN 'datetime'
        ELSE 'other'
    END AS data_category
FROM information_schema.columns c
WHERE c.table_schema = 'hidb10949'
    AND c.table_name = :table_name
ORDER BY c.ordinal_position;

-- Query: get_table_indexes
-- Purpose: Get all indexes for a table
-- Parameters: :table_name
-- Returns: Index name, columns, type, uniqueness
-- Estimated Cost: LOW
-- Cache TTL: 3600 seconds

SELECT 
    s.index_name,
    GROUP_CONCAT(s.column_name ORDER BY s.seq_in_index) AS columns,
    s.non_unique,
    s.index_type,
    CASE 
        WHEN s.index_name = 'PRIMARY' THEN 'PRIMARY KEY'
        WHEN s.non_unique = 0 THEN 'UNIQUE'
        ELSE 'INDEX'
    END AS index_type_display,
    COUNT(*) AS column_count
FROM information_schema.statistics s
WHERE s.table_schema = 'hidb10949'
    AND s.table_name = :table_name
GROUP BY s.index_name, s.non_unique, s.index_type
ORDER BY s.index_name;

-- Query: get_table_issues
-- Purpose: Get issues specific to a table
-- Parameters: :table_name
-- Returns: List of issues found
-- Estimated Cost: LOW
-- Cache TTL: 3600 seconds

SELECT 
    'schema' AS issue_category,
    CASE 
        WHEN (SELECT COUNT(*) FROM information_schema.columns c 
              WHERE c.table_schema = 'hidb10949' AND c.table_name = t.table_name AND c.column_key = 'PRI') = 0
        THEN 'Missing primary key'
        ELSE 'Has primary key'
    END AS issue_type,
    CASE 
        WHEN (SELECT COUNT(*) FROM information_schema.columns c 
              WHERE c.table_schema = 'hidb10949' AND c.table_name = t.table_name AND c.column_key = 'PRI') = 0
        THEN 'HIGH'
        ELSE 'NONE'
    END AS severity,
    CASE 
        WHEN (SELECT COUNT(*) FROM information_schema.columns c 
              WHERE c.table_schema = 'hidb10949' AND c.table_name = t.table_name AND c.column_key = 'PRI') = 0
        THEN CONCAT('Table ', t.table_name, ' has no primary key. This can cause performance issues and data integrity problems.')
        ELSE NULL
    END AS description
FROM information_schema.tables t
WHERE t.table_schema = 'hidb10949'
    AND t.table_name = :table_name;

-- ============================================================
-- SECTION 9: SEARCH QUERIES
-- API Endpoint: /api/search?q=
-- ============================================================

-- Query: search_tables
-- Purpose: Search tables by name pattern
-- Parameters: :search_term
-- Returns: Matching tables with basic info
-- Estimated Cost: LOW (indexed search on table_name)
-- Cache TTL: 300 seconds (5 minutes)

SELECT 
    t.table_name,
    t.table_rows AS row_count,
    t.data_length + t.index_length AS size_bytes,
    ROUND((t.data_length + t.index_length) / 1024 / 1024, 2) AS size_mb,
    t.engine,
    CASE 
        WHEN t.table_name LIKE :search_term_exact THEN 100  -- Exact match gets highest score
        WHEN t.table_name LIKE :search_term_start THEN 80   -- Starts with
        WHEN t.table_name LIKE :search_term_contains THEN 60 -- Contains
        ELSE 40
    END AS relevance_score
FROM information_schema.tables t
WHERE t.table_schema = 'hidb10949'
    AND (
        t.table_name LIKE :search_term_pattern
        OR t.table_comment LIKE :search_term_pattern
    )
ORDER BY relevance_score DESC, t.table_rows DESC
LIMIT 50;

-- Query: search_modules
-- Purpose: Search modules by name or description
-- Parameters: :search_term
-- Returns: Matching modules
-- Estimated Cost: LOW
-- Cache TTL: 300 seconds

-- Uses pre-defined module list
SELECT 
    module_name,
    module_description,
    table_count
FROM (
    SELECT 'patient' AS module_name, 'ข้อมูลผู้ป่วยและบุคคล' AS module_description, 
           (SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'hidb10949' 
            AND (table_name LIKE 'person%' OR table_name LIKE 'pt%' OR table_name LIKE 'hn%')) AS table_count
    UNION SELECT 'ipd', 'บริการผู้ป่วยใน', 
           (SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'hidb10949' AND table_name LIKE 'IPD%')
    UNION SELECT 'opd', 'บริการผู้ป่วยนอก', 
           (SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'hidb10949' AND table_name LIKE 'ovst%')
    -- ... other modules
) AS modules
WHERE module_name LIKE :search_term
   OR module_description LIKE :search_term
ORDER BY table_count DESC;

-- Query: search_columns
-- Purpose: Search columns across all tables
-- Parameters: :search_term
-- Returns: Tables with matching column names
-- Estimated Cost: MEDIUM (requires column scan)
-- Cache TTL: 600 seconds (10 minutes)

SELECT 
    c.table_name,
    c.column_name,
    c.column_type,
    c.column_key,
    c.column_comment,
    (SELECT table_rows FROM information_schema.tables t 
     WHERE t.table_schema = 'hidb10949' AND t.table_name = c.table_name) AS table_row_count
FROM information_schema.columns c
WHERE c.table_schema = 'hidb10949'
    AND c.column_name LIKE :search_term
ORDER BY c.table_name, c.ordinal_position
LIMIT 100;

-- ============================================================
-- SECTION 10: HEALTH SCORE CALCULATION
-- Used by: /api/overview
-- ============================================================

-- Query: calculate_health_score
-- Purpose: Calculate overall database health score (0-100)
-- Returns: Score with breakdown by category
-- Estimated Cost: MEDIUM
-- Cache TTL: 3600 seconds

SELECT 
    -- Primary Key Health (40% weight)
    ROUND(
        (SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'hidb10949' AND table_rows > 0)
        -
        (SELECT COUNT(*) FROM information_schema.tables t WHERE t.table_schema = 'hidb10949' AND t.table_rows > 0
         AND (SELECT COUNT(*) FROM information_schema.columns c 
              WHERE c.table_schema = 'hidb10949' AND c.table_name = t.table_name AND c.column_key = 'PRI') = 0)
    ) * 100.0 / 
    NULLIF((SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'hidb10949' AND table_rows > 0), 0)
    AS pk_health_percentage,
    
    -- Index Health (30% weight)
    ROUND(
        (SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'hidb10949' AND table_rows > 1000)
        -
        (SELECT COUNT(*) FROM information_schema.tables t WHERE t.table_schema = 'hidb10949' AND t.table_rows > 1000
         AND (SELECT COUNT(DISTINCT index_name) FROM information_schema.statistics s 
              WHERE s.table_schema = 'hidb10949' AND s.table_name = t.table_name) <= 1)
    ) * 100.0 / 
    NULLIF((SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'hidb10949' AND table_rows > 1000), 0)
    AS index_health_percentage,
    
    -- Table Structure Health (30% weight)
    ROUND(
        (SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'hidb10949')
        -
        (SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'hidb10949' AND table_rows = 0)
    ) * 100.0 / 
    NULLIF((SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'hidb10949'), 0)
    AS table_usage_percentage;

-- Query: get_health_breakdown
-- Purpose: Get detailed health metrics breakdown
-- Returns: Category scores and recommendations
-- Estimated Cost: MEDIUM
-- Cache TTL: 3600 seconds

SELECT 
    'Tables with Primary Key' AS metric,
    (SELECT COUNT(*) FROM information_schema.tables t WHERE t.table_schema = 'hidb10949' AND t.table_rows > 0
     AND (SELECT COUNT(*) FROM information_schema.columns c 
          WHERE c.table_schema = 'hidb10949' AND c.table_name = t.table_name AND c.column_key = 'PRI') > 0) AS compliant_count,
    (SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'hidb10949' AND table_rows > 0) AS total_count,
    ROUND((SELECT COUNT(*) FROM information_schema.tables t WHERE t.table_schema = 'hidb10949' AND t.table_rows > 0
           AND (SELECT COUNT(*) FROM information_schema.columns c 
                WHERE c.table_schema = 'hidb10949' AND c.table_name = t.table_name AND c.column_key = 'PRI') > 0)
          * 100.0 / NULLIF((SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'hidb10949' AND table_rows > 0), 0), 1)
    AS percentage

UNION ALL

SELECT 
    'Tables with Proper Indexes' AS metric,
    (SELECT COUNT(*) FROM information_schema.tables t WHERE t.table_schema = 'hidb10949' AND t.table_rows > 1000
     AND (SELECT COUNT(DISTINCT index_name) FROM information_schema.statistics s 
          WHERE s.table_schema = 'hidb10949' AND s.table_name = t.table_name) > 1) AS compliant_count,
    (SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'hidb10949' AND table_rows > 1000) AS total_count,
    ROUND((SELECT COUNT(*) FROM information_schema.tables t WHERE t.table_schema = 'hidb10949' AND t.table_rows > 1000
           AND (SELECT COUNT(DISTINCT index_name) FROM information_schema.statistics s 
                WHERE s.table_schema = 'hidb10949' AND s.table_name = t.table_name) > 1)
          * 100.0 / NULLIF((SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'hidb10949' AND table_rows > 1000), 0), 1)
    AS percentage

UNION ALL

SELECT 
    'Active Tables (Non-Zero Rows)' AS metric,
    (SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'hidb10949' AND table_rows > 0) AS compliant_count,
    (SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'hidb10949') AS total_count,
    ROUND((SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'hidb10949' AND table_rows > 0)
          * 100.0 / NULLIF((SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'hidb10949'), 0), 1)
    AS percentage;

-- ============================================================
-- SECTION 11: TOP MODULES BY SIZE
-- Used by: /api/overview
-- ============================================================

-- Query: get_top_modules_by_size
-- Purpose: Get top modules ordered by database size
-- Returns: Module name, size, percentage
-- Estimated Cost: LOW
-- Cache TTL: 1800 seconds

SELECT 
    m.module_name,
    m.module_description,
    SUM(t.data_length + t.index_length) AS total_size_bytes,
    ROUND(SUM(t.data_length + t.index_length) / 1024 / 1024, 2) AS size_mb,
    ROUND(SUM(t.data_length + t.index_length) / 1024 / 1024 / 1024, 3) AS size_gb,
    COUNT(DISTINCT t.table_name) AS table_count,
    SUM(t.table_rows) AS estimated_rows
FROM (
    SELECT 'patient' AS module_name, 'ข้อมูลผู้ป่วยและบุคคล' AS module_description
    UNION SELECT 'ipd', 'บริการผู้ป่วยใน'
    UNION SELECT 'opd', 'บริการผู้ป่วยนอก'
    UNION SELECT 'laboratory', 'ห้องปฏิบัติการและผลตรวจ'
    UNION SELECT 'pharmacy', 'ระบบร้านขายยาและยา'
    UNION SELECT 'vaccination', 'วัคซีนและภูมิคุ้มกัน'
    UNION SELECT 'chronic', 'โรคเรื้อรังและ NCD'
    UNION SELECT 'icd', 'รหัสโรค ICD'
    UNION SELECT 'appointment', 'นัดหมายและคิว'
    UNION SELECT 'refer', 'ส่งต่อผู้ป่วย'
    UNION SELECT 'system', 'ระบบและการตั้งค่า'
    UNION SELECT 'other', 'อื่นๆ'
) m
CROSS JOIN information_schema.tables t
WHERE t.table_schema = 'hidb10949'
GROUP BY m.module_name, m.module_description
ORDER BY total_size_bytes DESC;

-- ============================================================
-- SECTION 12: ADDITIONAL UTILITY QUERIES
-- ============================================================

-- Query: get_table_growth_estimate
-- Purpose: Estimate table growth based on auto_increment
-- Returns: Tables with growth potential
-- Estimated Cost: LOW
-- Cache TTL: 3600 seconds

SELECT 
    table_name,
    auto_increment,
    table_rows,
    ROUND(auto_increment / NULLIF(table_rows, 0), 2) AS growth_ratio,
    CASE 
        WHEN auto_increment IS NULL THEN 'No auto_increment'
        WHEN auto_increment > table_rows * 1.5 THEN 'High growth detected'
        WHEN auto_increment > table_rows * 1.2 THEN 'Moderate growth'
        ELSE 'Stable'
    END AS growth_status
FROM information_schema.tables
WHERE table_schema = 'hidb10949'
    AND auto_increment IS NOT NULL
ORDER BY auto_increment DESC
LIMIT 50;

-- Query: get_duplicate_tables
-- Purpose: Find potentially duplicate/backup tables
-- Returns: Tables with similar names (backup indicators)
-- Estimated Cost: LOW
-- Cache TTL: 86400 seconds

SELECT 
    table_name,
    table_rows,
    data_length + index_length AS size_bytes,
    CASE 
        WHEN table_name LIKE '%_copy%' THEN 'Copy'
        WHEN table_name LIKE '%_backup%' THEN 'Backup'
        WHEN table_name LIKE '%_old%' THEN 'Old version'
        WHEN table_name LIKE '%_%' AND table_name REGEXP '_[0-9]{2}-[0-9]{2}-[0-9]{2}' THEN 'Dated backup'
        ELSE 'Possible duplicate'
    END AS duplicate_type
FROM information_schema.tables
WHERE table_schema = 'hidb10949'
    AND (
        table_name LIKE '%_copy%'
        OR table_name LIKE '%_backup%'
        OR table_name LIKE '%_old%'
        OR table_name REGEXP '_[0-9]{2}-[0-9]{2}-[0-9]{2}'
    )
ORDER BY table_name;

-- ============================================================
-- END OF DASHBOARD QUERIES
-- ============================================================