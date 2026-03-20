# Hospital DB Dashboard - System Architecture

**Version:** 1.0.0  
**Created:** 2026-03-20  
**Database:** hidb10949 (MariaDB MySQL)

---

## Table of Contents

1. [Overview](#overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Data Flow](#data-flow)
5. [API Architecture](#api-architecture)
6. [Component Architecture](#component-architecture)
7. [State Management](#state-management)
8. [Security Considerations](#security-considerations)
9. [Performance Optimization](#performance-optimization)
10. [Deployment Strategy](#deployment-strategy)

---

## Overview

### Purpose

Hospital DB Dashboard เป็นเว็บแอปพลิเคชันสำหรับแสดงภาพรวมและรายละเอียดของฐานข้อมูลโรงพยาบาล รวมถึง:

- สถิติฐานข้อมูล (จำนวน tables, rows, sizes)
- การจัดกลุ่ม tables ตาม module
- การตรวจจับ anomalies และปัญหา
- คำแนะนำการเพิ่ม index
- รายละเอียดของแต่ละ table

### Key Metrics

| Metric | Value |
|--------|-------|
| Total Tables | 847 |
| Total Rows | ~125 million |
| Database Size | ~17.9 GB |
| Modules | 25 |
| Anomalies Detected | 527 |

---

## Technology Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 14.x | React framework with App Router |
| **React** | 18.x | UI library |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 3.4.x | Styling |
| **Recharts** | 2.10.x | Charts and visualizations |
| **Lucide React** | 0.300.x | Icons |
| **clsx** | 2.x | Class name utility |
| **date-fns** | 3.x | Date formatting |

### Backend (Optional - Future)

| Technology | Version | Purpose |
|------------|---------|---------|
| **mysql2** | 3.x | MariaDB/MySQL connection |
| **zod** | 3.x | Runtime validation |

### Development

| Technology | Version | Purpose |
|------------|---------|---------|
| **ESLint** | 8.x | Linting |
| **Prettier** | 3.x | Code formatting |

### Why These Choices?

```
Next.js App Router (not Pages Router)
├── Better performance with React Server Components
├── Built-in caching and ISR support
├── Streaming and partial rendering
└── Simplified data fetching patterns

TypeScript
├── Type safety for API responses
├── Better IDE support and autocomplete
├── Catch errors at compile time
└── Self-documenting code

Recharts (not Chart.js)
├── Native React components
├── Responsive by default
├── Better accessibility
└── Smaller bundle size for common use cases
```

---

## Project Structure

```
hospital-db-dashboard/
├── app/                              # Next.js App Router
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Home - Database Overview
│   ├── globals.css                   # Global styles
│   │
│   ├── modules/                      # Module Explorer
│   │   ├── page.tsx                  # Module list
│   │   └── [name]/
│   │       └── page.tsx              # Module detail
│   │
│   ├── anomalies/                    # Anomaly Dashboard
│   │   ├── page.tsx                  # Anomaly overview
│   │   └── [category]/
│   │       └── page.tsx              # Category detail
│   │
│   ├── indexes/                      # Index Recommendations
│   │   └── recommendations/
│   │       └── page.tsx              # Index suggestions
│   │
│   ├── tables/                       # Table Details
│   │   └── [name]/
│   │       └── page.tsx              # Table detail page
│   │
│   └── search/                        # Search
│       └── page.tsx                  # Search page
│
├── components/                        # React components
│   ├── ui/                           # Base UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── tabs.tsx
│   │   ├── table.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   ├── skeleton.tsx
│   │   └── tooltip.tsx
│   │
│   ├── layout/                       # Layout components
│   │   ├── sidebar.tsx
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── breadcrumb.tsx
│   │
│   ├── charts/                       # Chart components
│   │   ├── pie-chart.tsx
│   │   ├── bar-chart.tsx
│   │   ├── line-chart.tsx
│   │   └── module-distribution-chart.tsx
│   │
│   ├── tables/                       # Table display components
│   │   ├── data-table.tsx
│   │   ├── sortable-header.tsx
│   │   └── pagination.tsx
│   │
│   ├── anomalies/                    # Anomaly-specific components
│   │   ├── severity-badge.tsx
│   │   ├── anomaly-card.tsx
│   │   └── category-tabs.tsx
│   │
│   └── overview/                     # Overview components
│       ├── summary-cards.tsx
│       ├── health-score.tsx
│       └── module-breakdown.tsx
│
├── lib/                               # Utility libraries
│   ├── data-loader.ts                # Load static JSON files
│   ├── anomaly-parser.ts             # Parse anomaly data
│   ├── index-recommender.ts          # Parse index recommendations
│   ├── formatters.ts                 # Number/date formatters
│   ├── utils.ts                      # General utilities
│   └── db-connection.ts              # Database connection (optional)
│
├── api/                               # API routes
│   ├── overview/
│   │   └── route.ts                  # GET /api/overview
│   ├── modules/
│   │   ├── route.ts                  # GET /api/modules
│   │   └── [name]/
│   │       └── route.ts              # GET /api/modules/:name
│   ├── anomalies/
│   │   ├── route.ts                  # GET /api/anomalies
│   │   └── [category]/
│   │       └── route.ts              # GET /api/anomalies/:category
│   ├── indexes/
│   │   └── recommendations/
│   │       └── route.ts              # GET /api/indexes/recommendations
│   ├── tables/
│   │   ├── route.ts                  # GET /api/tables
│   │   └── [name]/
│   │       └── route.ts              # GET /api/tables/:name
│   └── search/
│       └── route.ts                  # GET /api/search?q=...
│
├── types/                             # TypeScript types
│   ├── module.ts
│   ├── table.ts
│   ├── anomaly.ts
│   ├── index.ts
│   ├── overview.ts
│   └── api.ts
│
├── data/                              # Static data (symlinks or copies)
│   ├── dashboard_schema.json         # → state/dashboard_schema.json
│   ├── schema_inventory.json         # → outputs/schema_inventory.json
│   ├── module_map.json               # → outputs/module_map.json
│   ├── anomalies.json                 # → outputs/anomalies.json
│   └── index_analysis.json           # → outputs/index_analysis.json
│
├── hooks/                             # Custom React hooks
│   ├── use-modules.ts
│   ├── use-anomalies.ts
│   ├── use-table.ts
│   └── use-search.ts
│
├── public/                            # Static assets
│   ├── favicon.ico
│   └── logo.svg
│
├── styles/                            # Additional styles
│   └── animations.css
│
├── next.config.js                     # Next.js config
├── tailwind.config.ts                 # Tailwind config
├── tsconfig.json                      # TypeScript config
├── package.json
└── README.md
```

---

## Data Flow

### Static Data Flow (Initial Implementation)

```
┌─────────────────────────────────────────────────────────────────────┐
│                        DATA SOURCES                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌──────────────────┐    ┌──────────────────┐    ┌──────────────┐ │
│  │dashboard_schema  │    │ module_map.json  │    │anomalies.json│ │
│  │    .json         │    │                  │    │              │ │
│  └────────┬─────────┘    └────────┬─────────┘    └──────┬───────┘ │
│           │                       │                      │         │
│           │   ┌───────────────────┼──────────────────────┤         │
│           │   │                   │                      │         │
│           ▼   ▼                   ▼                      ▼         │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │                     lib/data-loader.ts                     │   │
│  │                                                            │   │
│  │  - loadDashboardSchema()                                  │   │
│  │  - loadModuleMap()                                        │   │
│  │  - loadAnomalies()                                        │   │
│  │  - loadIndexAnalysis()                                    │   │
│  │  - loadSchemaInventory()                                  │   │
│  └────────────────────────────────────────────────────────────┘   │
│                              │                                     │
└──────────────────────────────┼─────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│                        API LAYER                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                    API Routes (REST)                          │  │
│  │                                                              │  │
│  │  GET /api/overview        → getDatabaseOverview()           │  │
│  │  GET /api/modules         → getAllModules()                  │  │
│  │  GET /api/modules/:name   → getModuleByName()               │  │
│  │  GET /api/anomalies       → getAllAnomalies()               │  │
│  │  GET /api/anomalies/:cat  → getAnomalyCategory()            │  │
│  │  GET /api/indexes/recom  → getIndexRecommendations()        │  │
│  │  GET /api/tables          → getAllTables()                  │  │
│  │  GET /api/tables/:name    → getTableByName()                │  │
│  │  GET /api/search?q=...    → searchDatabase()                │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                              │                                     │
└──────────────────────────────┼─────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│                     FRONTEND LAYER                                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────────┐    ┌─────────────────┐    ┌────────────────┐  │
│  │   Page Server   │    │  Page Client    │    │  Components   │  │
│  │  Components     │───▶│  Components     │───▶│  (Recharts)   │  │
│  │  (RSC)          │    │  ('use client')  │    │              │  │
│  └─────────────────┘    └─────────────────┘    └────────────────┘  │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                    Browser Cache                              │  │
│  │  - Static data cached at build time                         │  │
│  │  - ISR revalidates on schedule                               │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Live Database Connection (Future Enhancement)

```
┌─────────────────────────────────────────────────────────────────────┐
│                    LIVE DATA FLOW (Optional)                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌────────────────┐         ┌────────────────┐                     │
│  │   MariaDB      │         │   Next.js API  │                     │
│  │   (hidb10949)  │◀───────▶│   Route        │                     │
│  │                │  mysql2 │                │                     │
│  └────────────────┘         └────────────────┘                     │
│         │                          │                               │
│         │                          │                               │
│         ▼                          ▼                               │
│  ┌────────────────┐         ┌────────────────┐                     │
│  │  Connection    │         │  Response      │                     │
│  │  Pool          │         │  Cache (SWR)   │                     │
│  └────────────────┘         └────────────────┘                     │
│                                                                     │
│  Environment Variables:                                             │
│  - DB_HOST                                                         │
│  - DB_PORT                                                         │
│  - DB_USER                                                         │
│  - DB_PASSWORD                                                     │
│  - DB_NAME                                                         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## API Architecture

### Design Principles

1. **RESTful Design**: Clear resource-based URLs
2. **JSON Responses**: Consistent response format
3. **Error Handling**: Standardized error codes
4. **Caching**: Built-in ISR for static data
5. **Pagination**: For large datasets

### Response Format

```typescript
// Success Response
interface ApiResponse<T> {
  success: true;
  data: T;
  meta?: {
    cached: boolean;
    generatedAt: string;
    source: 'static' | 'database';
  };
}

// Error Response
interface ApiError {
  success: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
}
```

### Caching Strategy

```typescript
// Static Data (ISR - Incremental Static Regeneration)
export const revalidate = 3600; // Revalidate every hour

// API Route Example
export async function GET(request: Request) {
  const data = await loadData();
  
  return Response.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
    }
  });
}
```

### Endpoints Overview

| Endpoint | Method | Cache | Description |
|----------|--------|-------|-------------|
| `/api/overview` | GET | 1h | Database overview stats |
| `/api/modules` | GET | 1h | All modules list |
| `/api/modules/:name` | GET | 1h | Module detail |
| `/api/anomalies` | GET | 30m | Anomaly summary |
| `/api/anomalies/:category` | GET | 30m | Category detail |
| `/api/indexes/recommendations` | GET | 1h | Index recommendations |
| `/api/tables` | GET | 1h | Tables list (paginated) |
| `/api/tables/:name` | GET | 1h | Table detail |
| `/api/search` | GET | 5m | Search tables/modules |

---

## Component Architecture

### Page Components (Server Components)

```tsx
// app/page.tsx (Database Overview)
import { getDatabaseOverview } from '@/lib/data-loader';
import { SummaryCards } from '@/components/overview/summary-cards';
import { HealthScoreIndicator } from '@/components/overview/health-score';
import { ModuleDistributionChart } from '@/components/charts/module-distribution-chart';

export const revalidate = 3600; // ISR

export default async function OverviewPage() {
  const data = await getDatabaseOverview();
  
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Database Overview</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <SummaryCards data={data.summary} />
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <HealthScoreIndicator score={data.healthScore} />
        <ModuleDistributionChart modules={data.modules} />
      </div>
    </main>
  );
}
```

### Client Components (Interactive)

```tsx
// components/charts/module-distribution-chart.tsx
'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import type { Module } from '@/types/module';

interface Props {
  modules: Module[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export function ModuleDistributionChart({ modules }: Props) {
  const data = modules.map(m => ({
    name: m.name,
    value: m.table_count
  }));
  
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label={({ name }) => name}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
```

---

## State Management

### Strategy: Server State + React Context

```
┌─────────────────────────────────────────────────────────────────────┐
│                    STATE MANAGEMENT                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Server State (Cached)                                               │
│  ├── Database Overview        → ISR Cache (1 hour)                  │
│  ├── Modules List             → ISR Cache (1 hour)                  │
│  ├── Anomalies Summary        → ISR Cache (30 min)                  │
│  └── Index Recommendations     → ISR Cache (1 hour)                 │
│                                                                     │
│  Client State (React)                                               │
│  ├── UI State                 → useState (local)                     │
│  ├── Filters                  → URL SearchParams                     │
│  ├── Pagination               → URL SearchParams                     │
│  └── Theme                    → localStorage                         │
│                                                                     │
│  Why NOT Redux/Zustand?                                              │
│  ├── Most data is server-rendered (RSC)                             │
│  ├── ISR handles data caching                                      │
│  ├── Client state is minimal (filters, pagination)                 │
│  └── URL params enable shareable links                              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### URL-Based State

```tsx
// app/modules/page.tsx
import { Suspense } from 'react';
import { ModuleList } from './module-list';

export default function ModulesPage({
  searchParams,
}: {
  searchParams: { q?: string; sort?: string; order?: 'asc' | 'desc' };
}) {
  return (
    <main>
      <h1>Module Explorer</h1>
      <Suspense fallback={<ModuleListSkeleton />}>
        <ModuleList
          query={searchParams.q}
          sortBy={searchParams.sort}
          sortOrder={searchParams.order}
        />
      </Suspense>
    </main>
  );
}
```

---

## Security Considerations

### Current Implementation (Static)

```
┌─────────────────────────────────────────────────────────────────────┐
│                    SECURITY MODEL                                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ✅ No Authentication Required (Read-Only Dashboard)              │
│  ✅ No Database Credentials Exposed (Static Files)                 │
│  ✅ No User Input to Database (No SQL Injection Risk)              │
│  ✅ No Sensitive Data in Responses                                 │
│                                                                     │
│  Best Practices:                                                     │
│  ├── Environment files not committed to git                        │
│  ├── .env.example provided for setup                               │
│  ├── CORS configured for specific domains                          │
│  ├── Rate limiting on API routes                                   │
│  └── Input validation with Zod schemas                             │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Future: Live Database Connection

```typescript
// lib/db-connection.ts
import mysql from 'mysql2/promise';

// Connection pooling for security and performance
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306'),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
  waitForConnections: true,
  queueLimit: 0,
});

// Read-only queries only
export async function query<T>(sql: string, params?: unknown[]): Promise<T[]> {
  // Only allow SELECT statements
  if (!sql.trim().toUpperCase().startsWith('SELECT')) {
    throw new Error('Only SELECT queries are allowed');
  }
  
  const [rows] = await pool.execute(sql, params);
  return rows as T[];
}
```

### Content Security Policy

```typescript
// next.config.js
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
  }
];
```

---

## Performance Optimization

### 1. ISR (Incremental Static Regeneration)

```typescript
// Static pages with automatic regeneration
export const revalidate = 3600; // 1 hour

// On-demand revalidation (optional)
import { revalidatePath } from 'next/cache';

export async function revalidateData() {
  revalidatePath('/api/overview');
  revalidatePath('/api/modules');
}
```

### 2. Component-Level Code Splitting

```typescript
// Dynamic imports for heavy components
import dynamic from 'next/dynamic';

const ModuleDistributionChart = dynamic(
  () => import('@/components/charts/module-distribution-chart'),
  { 
    loading: () => <ChartSkeleton />,
    ssr: false // Client-only for chart libraries
  }
);
```

### 3. Data Pagination

```typescript
// API route with pagination
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '50');
  const offset = (page - 1) * limit;

  const tables = await getTables(offset, limit);
  const total = await getTableCount();

  return Response.json({
    tables,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    }
  });
}
```

### 4. Virtual Scrolling for Large Lists

```typescript
// Using react-window for large lists
import { FixedSizeList } from 'react-window';

function TableList({ tables }: { tables: Table[] }) {
  return (
    <FixedSizeList
      height={600}
      itemCount={tables.length}
      itemSize={50}
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>
          <TableRow table={tables[index]} />
        </div>
      )}
    </FixedSizeList>
  );
}
```

### 5. Bundle Size Optimization

```javascript
// next.config.js
module.exports = {
  // Tree-shaking for Recharts
  experimental: {
    optimizePackageImports: ['recharts', 'lucide-react']
  },
  
  // Compression
  compress: true,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp']
  }
};
```

### Performance Targets

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Time to Interactive | < 3.5s |
| Bundle Size (Initial) | < 200KB |
| Bundle Size (Full) | < 500KB |
| API Response Time | < 100ms |
| Lighthouse Score | > 90 |

---

## Deployment Strategy

### Option 1: Static Export (Recommended for Initial)

```bash
# Build static site
npm run build

# Output to /out directory
# Deploy to any static hosting:
# - Vercel
# - Netlify
# - GitHub Pages
# - Nginx/Apache
```

### Option 2: Node.js Server

```bash
# Build for Node.js
npm run build

# Start server
npm start

# Or with PM2
pm2 start npm --name "hospital-dashboard" -- start
```

### Option 3: Docker

```dockerfile
# Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

### Environment Variables

```bash
# .env.example
NODE_ENV=production

# Optional: Live database connection
DB_HOST=localhost
DB_PORT=3306
DB_USER=readonly
DB_PASSWORD=your_password
DB_NAME=hidb10949

# Cache settings
CACHE_TTL=3600
ISR_REVALIDATE=3600
```

---

## Development Commands

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start

# Lint
npm run lint

# Type check
npm run type-check

# Export static
npm run export
```

---

## Future Enhancements

### Phase 2: Real-time Features

- WebSocket connection for live updates
- Background data refresh jobs
- Notification system for critical issues

### Phase 3: Advanced Analytics

- Query performance metrics
- Historical trend analysis
- Predictive maintenance alerts

### Phase 4: Integration

- CI/CD pipeline for data updates
- Export to PDF/Excel reports
- API for external monitoring tools

---

## Conclusion

This architecture provides:

1. **Performance**: ISR + Static Generation for optimal load times
2. **Scalability**: Modular structure for easy expansion
3. **Maintainability**: TypeScript + Clear separation of concerns
4. **Security**: Read-only access, no exposed credentials
5. **Flexibility**: Ready for live database connection when needed

The dashboard will serve as a powerful tool for database administrators and developers to understand and maintain the hospital database system.