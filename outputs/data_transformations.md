# Data Transformations

## Overview
การแปลงข้อมูลจาก JSON sources เป็น API responses สำหรับ Hospital DB Dashboard

## Data Sources

| Source File | Description | Primary Usage |
|------------|-------------|----------------|
| `schema_inventory.json` | Table statistics & classifications | Overview, Tables, Modules |
| `module_map.json` | Module classification mapping | Module endpoints |
| `anomalies.json` | Pre-computed anomaly data | Anomaly endpoints |
| `query_metrics.json` | Query performance metadata | Health calculations |

---

## Transformers

### 1. getDatabaseOverview()

**Input:**
- `schema_inventory.json` (statistics, table_classifications)
- `anomalies.json` (summary)

**Output:** `OverviewResponse`

**Transformation Steps:**
```
1. Extract total counts from schema_inventory.json:
   - total_tables: statistics.total_tables (847)
   - modules_count: statistics.modules_count (25)

2. Calculate aggregate metrics:
   - Sum all module total_rows → total_rows
   - Sum all module total_size_bytes → total_size_bytes

3. Format sizes using formatBytes():
   - total_size_human = formatBytes(total_size_bytes)

4. Load anomaly summary from anomalies.json:
   - Extract categories counts
   - Map severity levels

5. Calculate health score:
   - pk_health = (tables_with_pk / total_tables) * 100
   - index_health = (tables_with_proper_indexes / large_tables) * 100
   - usage_health = (active_tables / total_tables) * 100
   - health_score = (pk_health * 0.4) + (index_health * 0.3) + (usage_health * 0.3)

6. Get top modules by size (top 5)

7. Format response with timestamps
```

**Example Transformation:**
```javascript
// Input: schema_inventory.json
{
  "statistics": { "total_tables": 847, "modules_count": 25 },
  "modules": {
    "patient": { "total_rows": 28944572, "total_size_bytes": 5794839792 },
    "other": { "total_rows": 43688780, "total_size_bytes": 5673441304 },
    // ... 23 more modules
  }
}

// Output: OverviewResponse
{
  "success": true,
  "data": {
    "database_name": "hidb10949",
    "total_tables": 847,
    "total_rows": 124948696,
    "total_size_bytes": 17930886144,
    "total_size_human": "16.70 GB",
    "modules_count": 25,
    "anomalies": { "total": 527, "critical": 24, "warning": 152, "info": 240 },
    "health_score": 65,
    "top_modules_by_size": [...]
  }
}
```

---

### 2. getModules()

**Input:**
- `module_map.json`
- `schema_inventory.json` (modules section)

**Output:** `ModulesListResponse`

**Transformation Steps:**
```
1. Load modules from module_map.json (ordered by size)

2. For each module:
   - Get table list from schema_inventory.json
   - Calculate statistics:
     * table_count: length of tables array
     * total_rows: sum of table_rows
     * total_size_bytes: sum of (data_length + index_length)
     * size_percentage: (size / total_db_size) * 100

3. Determine top tables per module (by size, limit 5)

4. Calculate anomaly counts per module from anomalies.json

5. Sort modules by total_size_bytes DESC

6. Format response
```

**Example Transformation:**
```javascript
// Input: modules from schema_inventory.json
{
  "patient": {
    "tables": ["PERSON", "PTINFO", "pt", ...],
    "total_rows": 28944572,
    "total_size_bytes": 5794839792,
    "description": "ข้อมูลผู้ป่วยและบุคคล"
  }
}

// Output: Module summary
{
  "name": "patient",
  "description_th": "ข้อมูลผู้ป่วยและบุคคล",
  "description_en": "Patient and Personal Data",
  "table_count": 123,
  "total_rows": 28944572,
  "total_size_bytes": 5794839792,
  "size_mb": 5525.87,
  "size_gb": 5.40,
  "size_percentage": 32.32,
  "anomaly_count": 15,
  "top_tables": [
    { "name": "incoth", "rows": 11694065, "size_mb": 2030.54 },
    ...
  ]
}
```

---

### 3. getModuleDetail(moduleName)

**Input:**
- `schema_inventory.json` (modules, table_classifications)
- `anomalies.json`

**Parameters:**
- `moduleName`: string (e.g., "patient", "ipd", "opd")

**Output:** `ModuleDetailResponse`

**Transformation Steps:**
```
1. Validate module name exists in modules

2. Get module metadata:
   - description
   - table list

3. For each table in module:
   - Get row_count from table_classifications
   - Get size_bytes from table_classifications
   - Get purpose (data/reference/transaction/link/log)
   - Determine severity based on row count:
     * CRITICAL: rows > 100000
     * WARNING: rows > 10000
     * INFO: rows <= 10000

4. Get anomaly issues for module tables from anomalies.json

5. Calculate module-specific statistics:
   - Average table size
   - Largest table
   - Smallest non-empty table
   - Empty tables count

6. Format response
```

---

### 4. getAnomalies()

**Input:**
- `anomalies.json`

**Output:** `AnomaliesResponse`

**Transformation Steps:**
```
1. Load anomaly categories from anomalies.json

2. For each category (missing_primary_keys, missing_indexes, large_tables_no_index, orphan_tables, naming_issues):
   - Count total tables
   - Group by severity
   - Calculate percentage of total tables

3. Generate summary:
   - total_anomalies: sum of all category counts
   - severity_breakdown: { critical, warning, info }
   - categories_with_counts

4. Format response
```

**Example Transformation:**
```javascript
// Input: anomalies.json categories
{
  "missing_primary_keys": [
    { "table": "PERSON", "row_count": 105707, "severity": "CRITICAL" },
    ...
  ],
  "missing_indexes": [...],
  "large_tables_no_index": [...]
}

// Output: AnomaliesResponse
{
  "success": true,
  "data": {
    "summary": {
      "total": 527,
      "critical": 24,
      "warning": 152,
      "info": 240,
      "by_category": {
        "missing_primary_keys": { "total": 242, "critical": 8, "warning": 45, "info": 189 },
        "missing_indexes": { "total": 155, "critical": 10, "warning": 52, "info": 93 },
        "large_tables_no_index": { "total": 104, "critical": 6, "warning": 48, "info": 50 },
        "orphan_tables": { "total": 50, "critical": 0, "warning": 0, "info": 50 },
        "naming_issues": { "total": 8, "critical": 0, "warning": 0, "info": 8 }
      }
    }
  }
}
```

---

### 5. getAnomalyCategory(categoryName)

**Input:**
- `anomalies.json` (specific category)

**Parameters:**
- `categoryName`: string (missing_primary_keys, missing_indexes, etc.)

**Output:** `AnomalyCategoryResponse`

**Transformation Steps:**
```
1. Validate category name

2. Load category tables from anomalies.json

3. For each table in category:
   - Get additional metadata from schema_inventory.json:
     * module classification
     * exact size
     * engine type
   - Generate recommendation based on category type

4. Sort by severity (CRITICAL → WARNING → INFO), then by row_count DESC

5. Support pagination (page, limit)

6. Format response
```

---

### 6. getIndexRecommendations()

**Input:**
- `anomalies.json` (large_tables_no_index, missing_primary_keys)
- `schema_inventory.json`

**Output:** `IndexRecommendationsResponse`

**Transformation Steps:**
```
1. Extract tables without primary keys:
   - Priority: HIGH (rows > 10000)
   - Priority: MEDIUM (rows 1000-10000)
   - Priority: LOW (rows < 1000)

2. Extract tables missing secondary indexes:
   - Only consider tables with rows > 1000
   - Check existing index count

3. For each recommendation:
   - Generate suggested SQL statement
   - Estimate impact (based on row count)
   - Categorize by module

4. Calculate summary:
   - total_recommendations
   - by_priority
   - estimated_total_impact

5. Sort by priority, then by impact

6. Format response
```

---

### 7. getTablesPaginated(page, limit, moduleFilter, sortBy, sortOrder)

**Input:**
- `schema_inventory.json` (table_classifications)
- `module_map.json`

**Parameters:**
- `page`: number (default: 1)
- `limit`: number (default: 50, max: 100)
- `moduleFilter`: string (optional)
- `sortBy`: string (name, size, rows)
- `sortOrder`: string (asc, desc)

**Output:** `TablesListResponse`

**Transformation Steps:**
```
1. Load all tables from table_classifications

2. Apply module filter if provided:
   - Get table list from module_map.json
   - Filter tables by module

3. Apply sorting:
   - sortBy 'name': sort by table_name
   - sortBy 'size': sort by size_bytes
   - sortBy 'rows': sort by row_count
   - Default: size DESC

4. Calculate pagination:
   - total_count: filtered table count
   - total_pages: ceil(total / limit)
   - offset: (page - 1) * limit

5. Slice results for current page

6. For each table:
   - Add module name from classification
   - Add anomaly flags
   - Calculate size_human

7. Format response with pagination metadata
```

---

### 8. getTableDetail(tableName)

**Input:**
- `schema_inventory.json` (table_classifications)
- `anomalies.json`
- `module_map.json`

**Parameters:**
- `tableName`: string

**Output:** `TableDetailResponse`

**Transformation Steps:**
```
1. Validate table exists in table_classifications

2. Get basic info:
   - row_count
   - size_bytes
   - engine
   - module
   - purpose

3. Get anomaly info:
   - Check if table appears in any anomaly category
   - Get severity for each issue

4. Calculate statistics:
   - size_human: formatBytes(size_bytes)
   - row_count_formatted: formatNumber(row_count)
   - size_percentage_of_module: (size / module_total_size) * 100
   - size_percentage_of_db: (size / total_db_size) * 100

5. Generate recommendations based on issues found

6. Format response
```

---

### 9. searchTables(query, type)

**Input:**
- `schema_inventory.json`
- `module_map.json`

**Parameters:**
- `query`: string (search term)
- `type`: string (tables, modules, columns)

**Output:** `SearchResponse`

**Transformation Steps:**
```
1. Normalize query (lowercase, trim)

2. Search based on type:

   For 'tables':
   - Filter tables where table_name LIKE '%query%'
   - Calculate relevance score:
     * 100: exact match
     * 80: starts with query
     * 60: contains query
   - Sort by relevance, then by size DESC
   - Limit to 50 results

   For 'modules':
   - Filter modules where name or description LIKE '%query%'
   - Include module statistics
   - Sort by relevance

   For 'columns':
   - Scan all tables for matching columns
   - Include table name, column type
   - Limit to 100 results

3. Format response with result type, relevance scores
```

---

## Utility Functions

### formatBytes(bytes, decimals = 2)

```typescript
function formatBytes(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
  
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Examples:
// formatBytes(5794839792) → "5.40 GB"
// formatBytes(6356992) → "6.07 MB"
// formatBytes(16384) → "16 KB"
```

---

### formatNumber(num)

```typescript
function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Examples:
// formatNumber(124948696) → "124,948,696"
// formatNumber(105707) → "105,707"
```

---

### calculatePercentage(value, total)

```typescript
function calculatePercentage(value: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((value / total) * 100 * 100) / 100; // 2 decimal places
}

// Examples:
// calculatePercentage(5794839792, 17930886144) → 32.32
// calculatePercentage(242, 847) → 28.57
```

---

### sortByKey(array, key, order = 'desc')

```typescript
function sortByKey<T>(array: T[], key: keyof T, order: 'asc' | 'desc' = 'desc'): T[] {
  return [...array].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];
    
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return order === 'asc' ? aVal - bVal : bVal - aVal;
    }
    
    const aStr = String(aVal).toLowerCase();
    const bStr = String(bVal).toLowerCase();
    
    if (order === 'asc') {
      return aStr.localeCompare(bStr);
    }
    return bStr.localeCompare(aStr);
  });
}
```

---

### getSeverity(rowCount)

```typescript
function getSeverity(rowCount: number): 'CRITICAL' | 'WARNING' | 'INFO' {
  if (rowCount > 100000) return 'CRITICAL';
  if (rowCount > 10000) return 'WARNING';
  return 'INFO';
}

// Examples:
// getSeverity(8437993) → 'CRITICAL'
// getSeverity(52687) → 'WARNING'
// getSeverity(1234) → 'INFO'
```

---

### aggregateByModule(tables, moduleMap)

```typescript
interface TableInfo {
  name: string;
  rows: number;
  size_bytes: number;
}

interface ModuleAggregate {
  name: string;
  tables: TableInfo[];
  total_rows: number;
  total_size_bytes: number;
}

function aggregateByModule(
  tables: TableInfo[],
  moduleMap: Record<string, string[]>
): ModuleAggregate[] {
  const aggregates: Record<string, ModuleAggregate> = {};
  
  for (const [moduleName, moduleTables] of Object.entries(moduleMap)) {
    aggregates[moduleName] = {
      name: moduleName,
      tables: [],
      total_rows: 0,
      total_size_bytes: 0
    };
    
    for (const tableName of moduleTables) {
      const table = tables.find(t => t.name === tableName);
      if (table) {
        aggregates[moduleName].tables.push(table);
        aggregates[moduleName].total_rows += table.rows;
        aggregates[moduleName].total_size_bytes += table.size_bytes;
      }
    }
  }
  
  return Object.values(aggregates);
}
```

---

## Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        JSON Data Sources                        │
├────────────────┬────────────────┬───────────────┬───────────────┤
│ schema_inventory│ module_map.json│ anomalies.json│query_metrics │
│     .json      │                │               │    .json      │
└───────┬────────┴───────┬────────┴───────┬───────┴───────┬───────┘
        │                │                │               │
        ▼                ▼                ▼               ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Data Transformation Layer                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │   Overview   │  │   Modules    │  │   Anomalies  │          │
│  │ Transformer  │  │ Transformer  │  │ Transformer  │          │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘          │
│         │                 │                 │                   │
│  ┌──────┴───────┐  ┌──────┴───────┐  ┌──────┴───────┐          │
│  │   Tables     │  │   Search     │  │   Indexes    │          │
│  │ Transformer  │  │ Transformer  │  │ Transformer  │          │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘          │
│         │                 │                 │                   │
└─────────┴─────────────────┴─────────────────┴───────────────────┘
          │                 │                 │
          ▼                 ▼                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                      API Response Schemas                        │
├─────────────────────────────────────────────────────────────────┤
│ OverviewResponse │ ModulesListResponse │ AnomaliesResponse     │
│ TableDetailResponse │ SearchResponse │ IndexRecommendations    │
└─────────────────────────────────────────────────────────────────┘
          │
          ▼
┌─────────────────────────────────────────────────────────────────┐
│                       Next.js API Routes                         │
│  /api/overview  │ /api/modules  │ /api/anomalies  │ /api/tables │
│  /api/search    │ /api/indexes │ /api/health                      │
└─────────────────────────────────────────────────────────────────┘
```

---

## Performance Notes

### Caching Strategy

| Data Type | Recommended TTL | Cache Location |
|-----------|-----------------|----------------|
| Overview | 3600s (1 hour) | In-memory + HTTP |
| Modules | 1800s (30 min) | In-memory |
| Anomalies | 3600s (1 hour) | In-memory |
| Tables list | 1800s (30 min) | HTTP cache |
| Table detail | 3600s (1 hour) | In-memory |
| Search results | 300s (5 min) | No cache (user input) |

### Optimization Tips

1. **Pre-compute aggregates**: Load JSON once, compute all stats in memory
2. **Use indexes for search**: Build lookup maps for fast table/module search
3. **Lazy load details**: Only load full table details when requested
4. **Pagination**: Always paginate large lists (tables, anomalies)
5. **Compression**: Enable gzip for API responses

---

## Error Handling

All transformers should return consistent error format:

```typescript
interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
  timestamp: string;
}

// Example error codes:
// - "MODULE_NOT_FOUND"
// - "TABLE_NOT_FOUND"
// - "INVALID_CATEGORY"
// - "INVALID_PAGE_NUMBER"
```

---

## TypeScript Interfaces Summary

All interfaces are defined in `api_response_schemas.json` with corresponding TypeScript definitions.