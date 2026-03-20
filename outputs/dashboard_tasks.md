# Dashboard Tasks - Hospital DB Dashboard

**Project:** Hospital DB Dashboard (hidb10949)
**Created:** 2026-03-20
**Status:** Planning Phase

---

## Overview

โปรเจกต์นี้เป็นการสร้าง Dashboard แบบ Next.js สำหรับแสดงข้อมูลจากการตรวจสอบฐานข้อมูลโรงพยาบาล (hidb10949) โดยใช้ข้อมูลจาก inspection outputs

### Database Summary
- **Total Tables:** 847
- **Modules:** 25
- **Total Rows:** ~100M+ records
- **Total Size:** ~16GB+

---

## Dashboard Pages

### 1. Database Overview Page (`/`)

**Priority:** HIGH (Core Page)

**Description:** หน้าแรกแสดงภาพรวมของฐานข้อมูล

**Components:**
- Summary Cards (Tables, Rows, Size, Modules count)
- Health Score Indicator (based on anomalies)
- Module Distribution Chart (Pie/Bar)
- Anomaly Summary Cards (Critical, Warning, Info counts)
- Recent Database Activity (if available)

**Data Requirements:**
```json
{
  "total_tables": 847,
  "total_rows": 100000000,
  "total_size_bytes": 17179869184,
  "modules_count": 25,
  "anomalies": {
    "critical": 24,
    "warning": 152,
    "info": 240
  },
  "top_modules_by_size": [...],
  "health_score": 65
}
```

**API Endpoint:** `GET /api/overview`

---

### 2. Module Explorer Page (`/modules`)

**Priority:** HIGH (Core Page)

**Description:** แสดงรายการ modules ทั้งหมดพร้อมสถิติ

**Components:**
- Module List with Stats (Tables, Rows, Size)
- Search/Filter Module
- Module Cards with Charts
- Sort by: Size, Tables, Rows, Name

**Data Requirements:**
```json
{
  "modules": [
    {
      "name": "patient",
      "tables_count": 100,
      "total_rows": 28944572,
      "total_size_bytes": 5794839792,
      "description": "ข้อมูลผู้ป่วยและบุคคล",
      "top_tables": ["incoth", "prsc", "symptm", ...]
    },
    ...
  ]
}
```

**API Endpoint:** `GET /api/modules`

---

### 3. Module Detail Page (`/modules/[module_name]`)

**Priority:** MEDIUM

**Description:** แสดงรายละเอียดของแต่ละ module

**Components:**
- Module Summary Header
- Table List (with search/filter)
- Table Cards showing: rows, size, purpose
- Anomaly Count per table
- Size Distribution Chart

**Data Requirements:**
```json
{
  "module_name": "patient",
  "description": "ข้อมูลผู้ป่วยและบุคคล",
  "statistics": {...},
  "tables": [
    {
      "name": "PERSON",
      "rows": 105707,
      "size_bytes": 18399232,
      "purpose": "transaction",
      "has_pk": false,
      "index_count": 0,
      "issues": ["missing_pk", "no_index"]
    },
    ...
  ]
}
```

**API Endpoint:** `GET /api/modules/[module_name]`

---

### 4. Anomaly Dashboard Page (`/anomalies`)

**Priority:** HIGH (Core Page)

**Description:** แสดงปัญหาที่พบในฐานข้อมูล จัดกลุ่มตาม severity

**Components:**
- Severity Tabs (Critical/Warning/Info)
- Anomaly Category Cards:
  - Missing Primary Keys (242 tables)
  - Missing Indexes (172 tables)
  - Large Tables without Proper Indexing (110 tables)
  - Orphan Tables (50 tables)
  - Naming Issues (8 tables)
- Filter by Module
- Sort by Severity/Row Count/Table Name

**Data Requirements:**
```json
{
  "categories": {
    "missing_primary_keys": {
      "total": 242,
      "by_severity": {"critical": 24, "warning": 50, "info": 168},
      "items": [...]
    },
    "missing_indexes": {...},
    "large_tables_no_index": {...},
    "orphan_tables": {...},
    "naming_issues": {...}
  }
}
```

**API Endpoint:** `GET /api/anomalies`

---

### 5. Anomaly Detail Page (`/anomalies/[category]`)

**Priority:** MEDIUM

**Description:** แสดงรายละเอียดของแต่ละประเภท anomaly

**Components:**
- Category Header with Count
- Table List with Issues
- Filter by Severity
- Sort options
- Quick Actions (e.g., "View Table Details")

**Data Requirements:**
```json
{
  "category": "missing_primary_keys",
  "description": "Tables without primary key",
  "total": 242,
  "by_severity": {...},
  "items": [
    {
      "table": "PERSON",
      "row_count": 105707,
      "severity": "CRITICAL",
      "module": "patient",
      "recommendation": "Add PRIMARY KEY on `hn` or `cid`"
    },
    ...
  ]
}
```

**API Endpoint:** `GET /api/anomalies/[category]`

---

### 6. Index Recommendations Page (`/indexes`)

**Priority:** MEDIUM

**Description:** แสดง index ที่ควรเพิ่มเพื่อปรับปรุงประสิทธิภาพ

**Components:**
- Priority Tabs (HIGH/MEDIUM/LOW)
- Recommendation Cards
- Affected Tables Stats
- SQL Preview for implementing indexes

**Data Requirements:**
```json
{
  "recommendations": [
    {
      "priority": "HIGH",
      "table": "data_correct",
      "row_count": 8437993,
      "recommendation": "Add PRIMARY KEY on `hospcode`",
      "sql": "ALTER TABLE data_correct ADD PRIMARY KEY (hospcode);",
      "impact": "High - Large table with no PK"
    },
    ...
  ],
  "by_priority": {
    "high": 25,
    "medium": 40,
    "low": 25
  }
}
```

**API Endpoint:** `GET /api/indexes/recommendations`

---

### 7. Table Details Page (`/tables/[table_name]`)

**Priority:** MEDIUM

**Description:** แสดงรายละเอียดของแต่ละ table

**Components:**
- Table Header (Name, Module, Purpose)
- Statistics Card (Rows, Size, Indexes)
- Schema Information
- Anomaly List for this table
- Module Context (related tables)
- Size in context (percentile)

**Data Requirements:**
```json
{
  "table_name": "PERSON",
  "module": "patient",
  "purpose": "transaction",
  "row_count": 105707,
  "size_bytes": 18399232,
  "has_pk": false,
  "index_count": 0,
  "issues": [
    {"type": "missing_pk", "severity": "CRITICAL"},
    {"type": "no_index", "severity": "WARNING"}
  ],
  "columns": [...],
  "related_tables": [...]
}
```

**API Endpoint:** `GET /api/tables/[table_name]`

---

### 8. Search Page (`/search`)

**Priority:** LOW

**Description:** ค้นหา table หรือ module

**Components:**
- Search Input
- Results List (Tables, Modules)
- Quick Links to Details

**Data Requirements:**
```json
{
  "query": "patient",
  "results": {
    "modules": [...],
    "tables": [...]
  }
}
```

**API Endpoint:** `GET /api/search?q=<query>`

---

## API Endpoints

### Core Endpoints

| Endpoint | Method | Description | Priority |
|----------|--------|-------------|----------|
| `/api/overview` | GET | Database overview statistics | HIGH |
| `/api/modules` | GET | List all modules | HIGH |
| `/api/modules/[name]` | GET | Module details | MEDIUM |
| `/api/anomalies` | GET | All anomalies summary | HIGH |
| `/api/anomalies/[category]` | GET | Anomaly category details | MEDIUM |
| `/api/indexes/recommendations` | GET | Index recommendations | MEDIUM |
| `/api/tables` | GET | List all tables (paginated) | MEDIUM |
| `/api/tables/[name]` | GET | Table details | MEDIUM |
| `/api/search` | GET | Search tables/modules | LOW |

---

## Data Sources

### Source Files

| File | Purpose | Used By |
|------|---------|---------|
| `state/dashboard_schema.json` | Module summary & statistics | Overview, Modules |
| `outputs/schema_inventory.json` | Table details & columns | Table Details |
| `outputs/module_map.json` | Table-to-module mapping | All pages |
| `outputs/anomalies.json` | Anomaly categories & items | Anomaly Dashboard |
| `outputs/index_gap_report.md` | Index recommendations | Index Recommendations |

---

## Implementation Phases

### Phase 1: Core Dashboard (Week 1)
- [ ] Setup Next.js project
- [ ] Create API routes for core endpoints
- [ ] Build Overview Page
- [ ] Build Module Explorer Page
- [ ] Build Anomaly Dashboard Page

### Phase 2: Detail Pages (Week 2)
- [ ] Module Detail Page
- [ ] Table Details Page
- [ ] Anomaly Detail Page
- [ ] Index Recommendations Page

### Phase 3: Enhancement (Week 3)
- [ ] Search functionality
- [ ] Filtering & Sorting
- [ ] Export functionality (CSV/PDF)
- [ ] Real-time Stats (if DB connection available)

---

## Dependencies

### Frontend
- `next` - Next.js framework
- `react` - UI library
- `recharts` or `chart.js` - Charts
- `tailwindcss` - Styling
- `lucide-react` - Icons

### Backend
- `fs` - File system (reading JSON files)
- `path` - Path utilities

### Optional (Real-time)
- `mysql2` or `pg` - Database connection
- Database connection string from env

---

## Priority Summary

| Priority | Pages | API Endpoints |
|----------|-------|---------------|
| HIGH | Overview, Modules, Anomalies | `/api/overview`, `/api/modules`, `/api/anomalies` |
| MEDIUM | Module Detail, Table Details, Index Recs | `/api/modules/[name]`, `/api/tables/[name]`, `/api/indexes/recommendations` |
| LOW | Search | `/api/search` |

---

## Success Metrics

1. **Load Time:** All pages < 2 seconds
2. **Accuracy:** Data matches inspection outputs 100%
3. **Usability:** Clear navigation, responsive design
4. **Completeness:** All 847 tables accessible
5. **Actionability:** Clear recommendations for improvements