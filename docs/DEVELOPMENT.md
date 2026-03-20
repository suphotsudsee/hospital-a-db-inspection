# Development Guide

## Overview

คู่มือสำหรับนักพัฒนาที่ต้องการปรับปรุงหรือขยาย Hospital DB Dashboard

---

## Development Workflow

### 1. Getting Started

```bash
# Clone and install
git clone <repository-url>
cd hospital-db-dashboard
npm install

# Start development server
npm run dev
```

เปิด http://localhost:3000 ในเบราว์เซอร์

### 2. Branch Strategy

```
main        → Production-ready code
develop     → Integration branch
feature/*   → New features
bugfix/*    → Bug fixes
hotfix/*    → Production hotfixes
```

```bash
# Create feature branch
git checkout -b feature/new-feature

# After development
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature

# Create Pull Request to develop
```

### 3. Commit Convention

```
feat:     New feature
fix:      Bug fix
docs:     Documentation changes
style:    Code style (formatting, etc.)
refactor: Code refactoring
test:     Adding/updating tests
chore:    Maintenance tasks
```

Examples:
```
feat: add export to PDF functionality
fix: resolve pagination issue on tables page
docs: update API documentation for search endpoint
refactor: improve data loader caching
```

---

## Project Architecture

### Directory Structure

```
hospital-db-dashboard/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with sidebar
│   ├── page.tsx            # Home (Database Overview)
│   ├── modules/            # Module pages
│   ├── anomalies/          # Anomaly pages
│   ├── indexes/            # Index recommendation pages
│   ├── tables/             # Table detail pages
│   └── search/             # Search page
│
├── components/             # React components
│   ├── ui/                 # Base UI (button, card, badge, etc.)
│   ├── layout/             # Layout (sidebar, header, etc.)
│   ├── charts/             # Chart components (Recharts)
│   ├── tables/             # Table display components
│   ├── anomalies/          # Anomaly-specific components
│   └── overview/           # Overview page components
│
├── lib/                    # Core libraries
│   ├── data-loader.ts      # JSON data loading & caching
│   ├── formatters.ts       # Number/date formatting
│   └── utils.ts            # Utility functions
│
├── types/                  # TypeScript type definitions
│   ├── module.ts
│   ├── table.ts
│   ├── anomaly.ts
│   ├── index.ts
│   └── api.ts
│
├── api/                    # API routes (if using Next.js API)
│   ├── overview/route.ts
│   ├── modules/route.ts
│   └── ...
│
└── public/                 # Static assets
```

### Data Flow

```
┌─────────────────────┐
│   Static JSON Files │
│   (outputs/*.json)  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   lib/data-loader   │
│   - loadJSON()      │
│   - Caching         │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│    API Routes       │
│   /api/overview     │
│   /api/modules      │
│   etc.              │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   Page Components   │
│   (Server & Client) │
└─────────────────────┘
```

---

## Adding New Features

### Adding a New Page

1. **Create page file**:

```typescript
// app/new-page/page.tsx
import { Metadata } from 'next';
import { getSomeData } from '@/lib/data-loader';

export const metadata: Metadata = {
  title: 'New Page - Hospital DB Dashboard',
  description: 'Description of the new page',
};

// Enable ISR caching
export const revalidate = 3600; // 1 hour

export default async function NewPage() {
  const data = await getSomeData();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">New Page</h1>
      {/* Content */}
    </main>
  );
}
```

2. **Add navigation link**:

```typescript
// components/layout/sidebar.tsx
const navigation = [
  // ... existing items
  { name: 'New Page', href: '/new-page', icon: NewIcon },
];
```

### Adding a New API Endpoint

1. **Create route handler**:

```typescript
// app/api/new-endpoint/route.ts
import { NextResponse } from 'next/server';
import { loadSomeData } from '@/lib/data-loader';

export async function GET(request: Request) {
  try {
    const data = await loadSomeData();
    
    return NextResponse.json({
      success: true,
      data,
      meta: {
        cached: true,
        generatedAt: new Date().toISOString(),
        source: 'static',
      },
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
    }, { status: 500 });
  }
}
```

2. **Add to API documentation**:

Update `docs/API.md` with the new endpoint.

### Adding a New Component

1. **Create component file**:

```typescript
// components/ui/new-component.tsx
import { clsx } from 'clsx';

interface NewComponentProps {
  title: string;
  value: number;
  className?: string;
}

export function NewComponent({ title, value, className }: NewComponentProps) {
  return (
    <div className={clsx('rounded-lg border p-4', className)}>
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value.toLocaleString()}</p>
    </div>
  );
}
```

2. **Add Storybook story** (if using Storybook):

```typescript
// components/ui/new-component.stories.tsx
import { NewComponent } from './new-component';

export default {
  title: 'UI/NewComponent',
  component: NewComponent,
};

export const Default = {
  args: {
    title: 'Total Tables',
    value: 847,
  },
};
```

### Adding a New Data Type

1. **Create type file**:

```typescript
// types/new-type.ts
export interface NewType {
  id: string;
  name: string;
  value: number;
  createdAt: string;
  updatedAt: string;
}

export interface NewTypeListResponse {
  items: NewType[];
  total: number;
  page: number;
  limit: number;
}
```

2. **Update data loader**:

```typescript
// lib/data-loader.ts
export async function loadNewTypeData(): Promise<NewType[]> {
  return loadJSON<NewType[]>('new_type_data.json');
}
```

---

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test -- components/ui/button.test.tsx
```

### Writing Unit Tests

```typescript
// components/ui/button.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('handles click events', async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();
    
    render(<Button onClick={handleClick}>Click me</Button>);
    await user.click(screen.getByRole('button'));
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('shows loading state', () => {
    render(<Button loading>Submit</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

### Writing Integration Tests

```typescript
// app/page.test.tsx
import { render, screen } from '@testing-library/react';
import HomePage from './page';

// Mock data loader
jest.mock('@/lib/data-loader', () => ({
  getDatabaseOverview: jest.fn().mockResolvedValue({
    database: { name: 'hidb10949' },
    statistics: { total_tables: 847 },
  }),
}));

describe('HomePage', () => {
  it('displays database statistics', async () => {
    render(await HomePage());
    
    expect(screen.getByText('hidb10949')).toBeInTheDocument();
    expect(screen.getByText('847')).toBeInTheDocument();
  });
});
```

### Writing E2E Tests (Playwright)

```typescript
// e2e/dashboard.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Dashboard', () => {
  test('displays overview page', async ({ page }) => {
    await page.goto('/');
    
    await expect(page.locator('h1')).toContainText('Database Overview');
    await expect(page.locator('[data-testid="total-tables"]')).toBeVisible();
  });

  test('navigates to modules page', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Module Explorer');
    
    await expect(page).toHaveURL('/modules');
    await expect(page.locator('h1')).toContainText('Module Explorer');
  });

  test('searches for tables', async ({ page }) => {
    await page.goto('/search?q=patient');
    
    await expect(page.locator('[data-testid="search-results"]')).toBeVisible();
  });
});
```

---

## Debugging

### Server-Side Debugging

```typescript
// Add console logs for server-side debugging
export default async function Page() {
  const data = await loadData();
  console.log('Loaded data:', data);
  // ...
}
```

### Client-Side Debugging

```typescript
// Use React Developer Tools
// Check component state and props

'use client';

import { useEffect } from 'react';

export function MyComponent({ data }: { data: unknown[] }) {
  useEffect(() => {
    console.log('Data changed:', data);
  }, [data]);
  
  // ...
}
```

### Data Loading Debugging

```typescript
// Enable debug logging in data-loader.ts
const DEBUG = process.env.NODE_ENV === 'development';

async function loadJSON<T>(filename: string): Promise<T> {
  if (DEBUG) {
    console.log(`Loading: ${filename}`);
    const start = Date.now();
    const data = await fs.readFile(path.join(DATA_DIR, filename), 'utf-8');
    console.log(`Loaded ${filename} in ${Date.now() - start}ms`);
    return JSON.parse(data);
  }
  // ... normal loading
}
```

### Network Debugging

```bash
# View network requests in browser DevTools
# Application > Storage > Cache Storage

# Or use curl for API testing
curl -v http://localhost:3000/api/overview
curl -v http://localhost:3000/api/modules?sort=name
```

---

## Performance Optimization

### 1. Code Splitting

```typescript
// Dynamic import for heavy components
import dynamic from 'next/dynamic';

const HeavyChart = dynamic(
  () => import('@/components/charts/heavy-chart'),
  {
    loading: () => <ChartSkeleton />,
    ssr: false, // Disable SSR for client-only components
  }
);
```

### 2. Image Optimization

```typescript
// Use Next.js Image component
import Image from 'next/image';

<Image
  src="/logo.svg"
  alt="Logo"
  width={200}
  height={50}
  priority // For above-fold images
/>
```

### 3. Bundle Analysis

```bash
# Analyze bundle size
ANALYZE=true npm run build

# Check bundle composition
npm run build -- --analyze
```

### 4. Caching Strategy

```typescript
// ISR for static data
export const revalidate = 3600; // Revalidate every hour

// On-demand revalidation
import { revalidatePath } from 'next/cache';

export async function revalidateData() {
  revalidatePath('/api/overview');
  revalidatePath('/api/modules');
}
```

### 5. Memory Optimization

```typescript
// Clear cache periodically
setInterval(() => {
  clearCache();
}, CACHE_TTL);

// Limit cache size
const MAX_CACHE_SIZE = 100;
if (cache.size > MAX_CACHE_SIZE) {
  const oldest = [...cache.entries()]
    .sort((a, b) => a[1].timestamp - b[1].timestamp)[0];
  cache.delete(oldest[0]);
}
```

---

## Code Style Guidelines

### TypeScript

```typescript
// Use explicit types for function parameters and returns
export function formatBytes(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${sizes[i]}`;
}

// Use interfaces for object shapes
interface TableInfo {
  name: string;
  row_count: number;
  size_bytes: number;
  engine?: string;
}

// Use type for unions
type Severity = 'CRITICAL' | 'WARNING' | 'INFO';
```

### React Components

```typescript
// Use named exports
export function Card({ children, className }: CardProps) {
  return (
    <div className={clsx('rounded-lg border bg-white p-4', className)}>
      {children}
    </div>
  );
}

// Use 'use client' directive for client components
'use client';

import { useState } from 'react';

export function InteractiveCard() {
  const [isOpen, setIsOpen] = useState(false);
  // ...
}
```

### CSS/Tailwind

```typescript
// Use Tailwind utility classes
<div className="flex flex-col gap-4 p-4 rounded-lg border bg-white shadow-sm">
  <h2 className="text-lg font-semibold text-gray-900">Title</h2>
  <p className="text-sm text-gray-500">Description</p>
</div>

// Use clsx for conditional classes
<div className={clsx(
  'rounded-lg p-4',
  severity === 'CRITICAL' && 'bg-red-50 border-red-200',
  severity === 'WARNING' && 'bg-yellow-50 border-yellow-200',
  severity === 'INFO' && 'bg-blue-50 border-blue-200',
)}>
```

---

## Common Tasks

### Adding a New Data Source

1. Add JSON file to `outputs/` directory
2. Create loader function in `lib/data-loader.ts`
3. Add TypeScript types in `types/`
4. Create API endpoint in `app/api/`
5. Update documentation

### Adding a New Chart

1. Create chart component in `components/charts/`
2. Use Recharts library
3. Make it responsive with `ResponsiveContainer`
4. Add loading skeleton
5. Test with different data sizes

### Adding a New Table View

1. Create table component in `components/tables/`
2. Use existing `DataTable` component as base
3. Add sorting and pagination support
4. Include loading states
5. Make it keyboard accessible

### Updating Data Files

```bash
# Run Python inspection scripts
cd /path/to/hospital-a-db-inspection
python scripts/generate_dashboard_schema.py
python scripts/analyze_anomalies.py
python scripts/analyze_indexes.py

# Verify generated files
ls -la outputs/
```

---

## Deployment Checklist

### Pre-deployment

- [ ] Run `npm run type-check` - No TypeScript errors
- [ ] Run `npm run lint` - No linting errors
- [ ] Run `npm run build` - Build succeeds
- [ ] Run `npm test` - All tests pass
- [ ] Check bundle size - Under budget
- [ ] Update environment variables
- [ ] Verify data files exist

### Deployment

- [ ] Deploy to staging environment
- [ ] Run smoke tests
- [ ] Verify all pages load
- [ ] Check API endpoints
- [ ] Test search functionality
- [ ] Verify caching headers

### Post-deployment

- [ ] Monitor error logs
- [ ] Check performance metrics
- [ ] Verify ISR revalidation
- [ ] Test from different networks
- [ ] Document any issues

---

## Resources

### Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Recharts](https://recharts.org/en-US/)

### Tools

- [VS Code](https://code.visualstudio.com/) - Recommended IDE
- [React Developer Tools](https://react.dev/learn/react-developer-tools) - Browser extension
- [Next.js DevTools](https://nextjs.org/docs/app/building-your-application/optimizing/testing) - Development tools

---

## Support

For questions or issues:

1. Check existing documentation
2. Review similar issues in the repository
3. Contact the development team
4. Create a detailed bug report if needed