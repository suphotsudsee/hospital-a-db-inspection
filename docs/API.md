# API Documentation

## Overview

Hospital DB Dashboard API เป็น REST API ที่ให้ข้อมูลเกี่ยวกับฐานข้อมูลโรงพยาบาล รวมถึงสถิติ, anomalies, และคำแนะนำการปรับปรุง

**Base URL**: `http://localhost:3000/api`

## Response Format

### Success Response

```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "cached": true,
    "generatedAt": "2026-03-20T10:00:00.000Z",
    "source": "static"
  }
}
```

### Error Response

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": { ... }
  }
}
```

---

## Endpoints

### 1. Database Overview

```
GET /api/overview
```

Returns comprehensive database statistics including table counts, row counts, sizes, module distribution, and health indicators.

#### Response

```json
{
  "success": true,
  "data": {
    "database": {
      "name": "hidb10949",
      "server_version": "10.11.16-MariaDB-ubu2404-log"
    },
    "statistics": {
      "total_tables": 847,
      "total_rows": 124948696,
      "total_size_bytes": 18764353536,
      "total_size_human": "17.47 GB",
      "data_size_bytes": 12058583040,
      "index_size_bytes": 6705770496,
      "engine_types": ["InnoDB", "MyISAM"]
    },
    "modules": {
      "count": 25,
      "distribution": [
        { "name": "patient", "table_count": 130, "size_percentage": 30.85 },
        { "name": "opd", "table_count": 28, "size_percentage": 13.48 }
      ]
    },
    "anomalies": {
      "total": 527,
      "critical": 24,
      "warning": 152,
      "info": 240,
      "by_category": {
        "missing_primary_keys": 192,
        "missing_indexes": 115,
        "large_tables_no_index": 105
      }
    },
    "health_score": {
      "overall": 72,
      "breakdown": {
        "primary_key_health": 77.3,
        "index_health": 66.5,
        "table_usage_health": 88.5
      },
      "grade": "C",
      "recommendation": "Database requires attention. 24 critical issues found."
    },
    "top_modules_by_size": [...],
    "top_largest_tables": [...]
  }
}
```

---

### 2. List All Modules

```
GET /api/modules
```

Returns list of all database modules with statistics.

#### Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `sort` | string | `tables_count` | Sort field (`name`, `tables_count`, `total_rows`, `total_size`) |
| `order` | string | `desc` | Sort order (`asc`, `desc`) |
| `q` | string | - | Search query to filter modules |

#### Response

```json
{
  "success": true,
  "data": {
    "modules": [
      {
        "name": "patient",
        "description_th": "ข้อมูลผู้ป่วยและบุคคล",
        "description_en": "Patient and person data",
        "table_count": 130,
        "total_rows": 28944572,
        "total_size_bytes": 5794839792,
        "size_mb": 5526.39,
        "size_gb": 5.39,
        "size_percentage": 30.85,
        "anomaly_count": 45,
        "health_score": 65
      }
    ],
    "total_count": 25,
    "statistics": {
      "average_table_count": 33.88,
      "average_size_gb": 0.70,
      "total_anomaly_count": 527
    }
  }
}
```

---

### 3. Get Module by Name

```
GET /api/modules/:name
```

Returns detailed information about a specific module.

#### Path Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | string | Module name (e.g., `patient`, `opd`, `ipd`) |

#### Response

```json
{
  "success": true,
  "data": {
    "module": {
      "name": "patient",
      "description_th": "ข้อมูลผู้ป่วยและบุคคล",
      "description_en": "Patient and person data",
      "table_count": 130,
      "total_rows": 28944572,
      "total_size_bytes": 5794839792,
      "size_mb": 5526.39,
      "anomaly_count": 45,
      "health_score": 65
    },
    "statistics": {
      "average_table_size_mb": 42.51,
      "largest_table": { "name": "incoth", "size_mb": 2032.89 },
      "smallest_table": { "name": "pttype", "size_mb": 0.02 },
      "empty_tables_count": 3,
      "tables_over_1m_rows": 8
    },
    "tables": [
      {
        "name": "PERSON",
        "row_count": 105707,
        "size_bytes": 18399232,
        "size_mb": 17.55,
        "engine": "InnoDB",
        "purpose": "transaction",
        "severity": "CRITICAL",
        "has_primary_key": false,
        "index_count": 0,
        "column_count": 15,
        "issues": [
          {
            "type": "missing_primary_keys",
            "severity": "CRITICAL",
            "message": "Table has 105,707 rows but no primary key"
          }
        ]
      }
    ],
    "anomalies": {
      "total": 45,
      "by_severity": { "critical": 2, "warning": 15, "info": 8 },
      "issues": [...]
    },
    "recommendations": [...]
  }
}
```

#### Error Response (404)

```json
{
  "success": false,
  "error": {
    "code": "MODULE_NOT_FOUND",
    "message": "Module 'unknown' not found",
    "details": {
      "available_modules": ["patient", "opd", "ipd", "pharmacy", "laboratory"]
    }
  }
}
```

---

### 4. Get Anomalies Summary

```
GET /api/anomalies
```

Returns summary of all database anomalies.

#### Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `severity` | string | `all` | Filter by severity (`all`, `critical`, `warning`, `info`) |

#### Response

```json
{
  "success": true,
  "data": {
    "summary": {
      "total_anomalies": 527,
      "critical": 24,
      "warning": 152,
      "info": 240,
      "affected_tables": 192,
      "health_impact": "Database requires attention. 24 critical issues found."
    },
    "categories": [
      {
        "name": "missing_primary_keys",
        "display_name": "Missing Primary Keys",
        "description": "Tables without primary key constraint",
        "count": 192,
        "severity_breakdown": {
          "critical": 24,
          "warning": 45,
          "info": 123
        },
        "percentage_of_total": 36.43
      },
      {
        "name": "missing_indexes",
        "display_name": "Missing Indexes",
        "description": "Tables without proper secondary indexes",
        "count": 115,
        "severity_breakdown": {
          "critical": 0,
          "warning": 83,
          "info": 32
        },
        "percentage_of_total": 21.82
      }
    ],
    "severity_distribution": {
      "critical": { "count": 24, "percentage": 4.55, "tables_affected": 24 },
      "warning": { "count": 152, "percentage": 28.84, "tables_affected": 98 },
      "info": { "count": 240, "percentage": 45.54, "tables_affected": 156 }
    },
    "priority_actions": [
      { "priority": 1, "action": "Add PRIMARY KEY on PERSON.id column" },
      { "priority": 2, "action": "Add PRIMARY KEY on data_correct (hospcode, tablename)" }
    ]
  }
}
```

---

### 5. Get Anomaly Category Details

```
GET /api/anomalies/:category
```

Returns detailed list of anomalies for a specific category.

#### Path Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `category` | string | Anomaly category (`missing_primary_keys`, `missing_indexes`, `large_tables_no_index`, `orphan_tables`, `naming_issues`) |

#### Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `page` | integer | 1 | Page number |
| `limit` | integer | 50 | Items per page (max 100) |
| `severity` | string | `all` | Filter by severity |

#### Response

```json
{
  "success": true,
  "data": {
    "category": "missing_primary_keys",
    "description": "Tables without primary key",
    "total": 192,
    "by_severity": {
      "critical": 24,
      "warning": 45,
      "info": 123
    },
    "items": [
      {
        "table": "PERSON",
        "row_count": 105707,
        "severity": "CRITICAL",
        "module": "patient",
        "recommendation": "Add PRIMARY KEY on 'id' column"
      },
      {
        "table": "data_correct",
        "row_count": 8437993,
        "severity": "CRITICAL",
        "module": "other",
        "recommendation": "Add PRIMARY KEY on (hospcode, tablename)"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 50,
      "total": 192,
      "total_pages": 4
    }
  }
}
```

---

### 6. Get Index Recommendations

```
GET /api/indexes/recommendations
```

Returns list of recommended indexes to improve database performance.

#### Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `priority` | string | `all` | Filter by priority (`all`, `high`, `medium`, `low`) |
| `limit` | integer | 50 | Maximum results (max 100) |

#### Response

```json
{
  "success": true,
  "data": {
    "summary": {
      "total_recommendations": 90,
      "by_priority": { "high": 30, "medium": 35, "low": 25 },
      "estimated_impact": {
        "high": "Critical - Will significantly improve query performance on large tables",
        "medium": "Moderate - Will improve query performance on medium tables",
        "low": "Low - Minor improvement for small tables"
      }
    },
    "recommendations": [
      {
        "priority": "HIGH",
        "priority_order": 1,
        "table": "data_correct",
        "index_type": "PRIMARY KEY",
        "columns": ["hospcode", "tablename"],
        "row_count": 8437993,
        "reason": "Large table (>1M rows) without primary key",
        "impact": "Critical - Will significantly improve query performance",
        "sql": "ALTER TABLE `data_correct` ADD PRIMARY KEY (`hospcode`, `tablename`);"
      },
      {
        "priority": "HIGH",
        "priority_order": 2,
        "table": "PERSON",
        "index_type": "PRIMARY KEY",
        "columns": ["id"],
        "row_count": 105707,
        "reason": "Core patient table without primary key",
        "impact": "Essential for data integrity and query performance",
        "sql": "ALTER TABLE `PERSON` ADD PRIMARY KEY (`id`);"
      }
    ]
  }
}
```

---

### 7. Get Tables List

```
GET /api/tables
```

Returns paginated list of all database tables.

#### Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `page` | integer | 1 | Page number |
| `limit` | integer | 50 | Items per page (max 100) |
| `module` | string | - | Filter by module name |
| `search` | string | - | Search tables by name |
| `sort` | string | `name` | Sort field (`name`, `row_count`, `size_bytes`) |
| `order` | string | `asc` | Sort order (`asc`, `desc`) |

#### Response

```json
{
  "success": true,
  "data": {
    "tables": [
      {
        "name": "PERSON",
        "module": "patient",
        "row_count": 105707,
        "size_bytes": 18399232,
        "size_mb": 17.55,
        "engine": "InnoDB",
        "has_primary_key": false,
        "index_count": 0,
        "anomaly_count": 1
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 50,
      "total_count": 847,
      "total_pages": 17,
      "has_next_page": true,
      "has_prev_page": false
    },
    "statistics": {
      "total_count": 847,
      "total_rows": 124948696,
      "total_size_bytes": 18764353536,
      "tables_with_pk": 655,
      "tables_without_pk": 192
    }
  }
}
```

---

### 8. Get Table by Name

```
GET /api/tables/:name
```

Returns detailed information about a specific table.

#### Path Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | string | Table name |

#### Response

```json
{
  "success": true,
  "data": {
    "name": "PERSON",
    "module": "patient",
    "row_count": 105707,
    "data_size_bytes": 18399232,
    "index_size_bytes": 0,
    "engine": "InnoDB",
    "comment": "Patient information table",
    "columns": [
      {
        "name": "id",
        "type": "int",
        "nullable": "NO",
        "key": "",
        "default": null,
        "extra": "auto_increment",
        "comment": "Primary identifier"
      },
      {
        "name": "hn",
        "type": "varchar(13)",
        "nullable": "YES",
        "key": "",
        "default": null,
        "extra": "",
        "comment": "Hospital number"
      }
    ],
    "primary_key": [],
    "foreign_keys": [],
    "indexes": [],
    "has_primary_key": false,
    "index_count": 0,
    "column_count": 15,
    "purpose": "transaction",
    "severity": "CRITICAL",
    "issues": [
      {
        "type": "missing_primary_keys",
        "severity": "CRITICAL",
        "message": "Table has 105,707 rows but no primary key"
      }
    ],
    "recommendations": [
      {
        "priority": "HIGH",
        "action": "Add PRIMARY KEY on id",
        "reason": "Core patient table without primary key",
        "sql": "ALTER TABLE `PERSON` ADD PRIMARY KEY (`id`);"
      }
    ]
  }
}
```

---

### 9. Search Database

```
GET /api/search?q={query}
```

Search for tables and modules matching the query string.

#### Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `q` | string | **required** | Search query (min 1 character) |
| `type` | string | `all` | Filter by type (`all`, `tables`, `modules`) |
| `limit` | integer | 20 | Maximum results per category |

#### Response

```json
{
  "success": true,
  "data": {
    "query": "patient",
    "results": [
      {
        "type": "module",
        "name": "patient",
        "module": "patient",
        "relevance": 1.0,
        "snippet": "Patient and person data"
      },
      {
        "type": "table",
        "name": "PERSON",
        "module": "patient",
        "row_count": 105707,
        "size_mb": 17.55,
        "relevance": 0.95,
        "snippet": "Table with 105,707 rows"
      },
      {
        "type": "table",
        "name": "patient_profile",
        "module": "patient",
        "row_count": 52340,
        "size_mb": 8.32,
        "relevance": 0.90,
        "snippet": "Table with 52,340 rows"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total_count": 15,
      "total_pages": 1,
      "has_next_page": false,
      "has_prev_page": false
    },
    "filters": {
      "type": "all",
      "applied": true
    }
  }
}
```

#### Error Response (400)

```json
{
  "success": false,
  "error": {
    "code": "INVALID_QUERY",
    "message": "Search query must be at least 1 character"
  }
}
```

---

## Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `MODULE_NOT_FOUND` | 404 | Module not found |
| `TABLE_NOT_FOUND` | 404 | Table not found |
| `CATEGORY_NOT_FOUND` | 404 | Anomaly category not found |
| `INVALID_QUERY` | 400 | Invalid search query |
| `INVALID_PAGINATION` | 400 | Invalid page/limit parameters |
| `INTERNAL_ERROR` | 500 | Internal server error |

---

## Caching

API responses are cached using Next.js ISR (Incremental Static Regeneration):

| Endpoint | Cache TTL |
|----------|-----------|
| `/api/overview` | 1 hour |
| `/api/modules` | 1 hour |
| `/api/modules/:name` | 1 hour |
| `/api/anomalies` | 30 minutes |
| `/api/anomalies/:category` | 30 minutes |
| `/api/indexes/recommendations` | 1 hour |
| `/api/tables` | 1 hour |
| `/api/tables/:name` | 1 hour |
| `/api/search` | 5 minutes |

Cache headers:
```
Cache-Control: public, s-maxage=3600, stale-while-revalidate=86400
```

---

## Rate Limiting

- Default: 100 requests per minute per IP
- Burst: 20 requests per second
- Headers included in response:
  - `X-RateLimit-Limit`
  - `X-RateLimit-Remaining`
  - `X-RateLimit-Reset`

---

## OpenAPI Specification

Full OpenAPI 3.0.3 specification available at `/api_spec.json`

Key schemas:
- `OverviewResponse`
- `ModulesListResponse`
- `ModuleDetailResponse`
- `AnomaliesSummaryResponse`
- `AnomalyCategoryResponse`
- `IndexRecommendationsResponse`
- `TablesListResponse`
- `TableDetailResponse`
- `SearchResponse`
- `ErrorResponse`

---

## Examples

### JavaScript/TypeScript

```typescript
// Fetch database overview
const overview = await fetch('/api/overview');
const data = await overview.json();
console.log(data.data.statistics.total_tables);

// Search for tables
const searchResults = await fetch('/api/search?q=patient&type=tables');
const results = await searchResults.json();
console.log(results.data.results);

// Get module details
const moduleData = await fetch('/api/modules/patient');
const module = await moduleData.json();
console.log(module.data.tables);
```

### cURL

```bash
# Get overview
curl http://localhost:3000/api/overview

# Get modules sorted by size
curl "http://localhost:3000/api/modules?sort=total_size&order=desc"

# Get anomalies for missing primary keys
curl "http://localhost:3000/api/anomalies/missing_primary_keys?severity=critical"

# Search for tables
curl "http://localhost:3000/api/search?q=patient&limit=10"

# Get table details
curl "http://localhost:3000/api/tables/PERSON"
```

---

## Future Enhancements

1. **Authentication** - JWT-based authentication for API access
2. **WebSocket** - Real-time updates for live database monitoring
3. **Export** - PDF/Excel report generation
4. **Query History** - Track and replay previous queries
5. **Comparison** - Compare database states over time