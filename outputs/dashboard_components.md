# Dashboard Components - Hospital DB Dashboard

**Version:** 1.0.0  
**Created:** 2026-03-20  
**Project:** Hospital DB Dashboard (hidb10949)

---

## Table of Contents

1. [Overview](#overview)
2. [Component Architecture](#component-architecture)
3. [Layout Components](#layout-components)
4. [UI Base Components](#ui-base-components)
5. [Chart Components](#chart-components)
6. [Feature Components](#feature-components)
7. [Props Interfaces](#props-interfaces)
8. [State Management](#state-management)
9. [Styling Approach](#styling-approach)
10. [Accessibility Guidelines](#accessibility-guidelines)

---

## Overview

Dashboard ใช้ Next.js App Router พร้อม React Server Components (RSC) เป็นหลัก และ Client Components สำหรับส่วนที่ต้องการ interactivity

### Component Categories

| Category | Description | Rendering |
|----------|-------------|-----------|
| Layout | Sidebar, Header, Footer, Breadcrumb | Server |
| UI Base | Reusable UI primitives | Client |
| Charts | Data visualizations (Recharts) | Client |
| Feature | Page-specific components | Mixed |

---

## Component Architecture

```
components/
├── ui/                    # Base UI components (shadcn/ui compatible)
│   ├── button.tsx
│   ├── card.tsx
│   ├── badge.tsx
│   ├── tabs.tsx
│   ├── table.tsx
│   ├── input.tsx
│   ├── select.tsx
│   ├── skeleton.tsx
│   ├── tooltip.tsx
│   ├── progress.tsx
│   └── dialog.tsx
│
├── layout/                # Layout components
│   ├── sidebar.tsx
│   ├── header.tsx
│   ├── footer.tsx
│   ├── breadcrumb.tsx
│   ├── mobile-nav.tsx
│   └── page-container.tsx
│
├── charts/                # Chart components (Recharts)
│   ├── pie-chart.tsx
│   ├── bar-chart.tsx
│   ├── line-chart.tsx
│   ├── module-distribution-chart.tsx
│   ├── size-distribution-chart.tsx
│   └── trend-chart.tsx
│
├── overview/              # Overview page components
│   ├── summary-cards.tsx
│   ├── health-score-indicator.tsx
│   ├── module-breakdown.tsx
│   └── anomaly-summary-cards.tsx
│
├── modules/               # Module-related components
│   ├── module-card.tsx
│   ├── module-list.tsx
│   ├── module-search.tsx
│   └── module-stats.tsx
│
├── anomalies/             # Anomaly-related components
│   ├── severity-badge.tsx
│   ├── anomaly-card.tsx
│   ├── category-tabs.tsx
│   ├── anomaly-table.tsx
│   └── anomaly-filter.tsx
│
├── tables/                # Table display components
│   ├── data-table.tsx
│   ├── sortable-header.tsx
│   ├── pagination.tsx
│   ├── table-card.tsx
│   └── table-stats.tsx
│
├── indexes/               # Index recommendation components
│   ├── index-card.tsx
│   ├── sql-preview.tsx
│   ├── priority-tabs.tsx
│   └── impact-indicator.tsx
│
└── search/                # Search components
    ├── search-input.tsx
    ├── search-results.tsx
    └── search-filters.tsx
```

---

## Layout Components

### 1. Sidebar Component

```tsx
// components/layout/sidebar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Package,
  AlertTriangle,
  Database,
  Search,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  href: string;
  icon: React.ElementType;
  badge?: number;
}

const navItems: NavItem[] = [
  { title: 'Overview', href: '/', icon: LayoutDashboard },
  { title: 'Modules', href: '/modules', icon: Package },
  { title: 'Anomalies', href: '/anomalies', icon: AlertTriangle, badge: 527 },
  { title: 'Indexes', href: '/indexes', icon: Database },
  { title: 'Search', href: '/search', icon: Search },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        'fixed left-0 top-16 h-[calc(100vh-4rem)] bg-slate-900 text-white transition-all duration-300',
        collapsed ? 'w-16' : 'w-64',
        className
      )}
    >
      <nav className="flex flex-col h-full">
        <div className="flex-1 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 hover:bg-slate-800 transition-colors',
                pathname === item.href && 'bg-slate-800 border-r-2 border-blue-500'
              )}
            >
              <item.icon className="w-5 h-5 shrink-0" />
              {!collapsed && (
                <>
                  <span className="flex-1">{item.title}</span>
                  {item.badge && (
                    <span className="bg-red-500 text-xs px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </Link>
          ))}
        </div>
        
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-4 hover:bg-slate-800 flex items-center justify-center"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </nav>
    </aside>
  );
}
```

### 2. Header Component

```tsx
// components/layout/header.tsx
'use client';

import { Bell, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  title?: string;
}

export function Header({ title }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 z-50">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold text-slate-900 dark:text-white">
            {title || 'Hospital DB Dashboard'}
          </h1>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="w-5 h-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
        </div>
      </div>
    </header>
  );
}
```

### 3. Mobile Navigation

```tsx
// components/layout/mobile-nav.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { title: 'Overview', href: '/' },
    { title: 'Modules', href: '/modules' },
    { title: 'Anomalies', href: '/anomalies' },
    { title: 'Indexes', href: '/indexes' },
    { title: 'Search', href: '/search' },
  ];

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X /> : <Menu />}
      </Button>
      
      {isOpen && (
        <div className="fixed inset-0 top-16 bg-white dark:bg-slate-900 z-40">
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`p-4 rounded-lg ${
                  pathname === item.href
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
```

---

## UI Base Components

### 1. Card Component

```tsx
// components/ui/card.tsx
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm',
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: CardProps) {
  return (
    <div className={cn('p-4 border-b border-slate-200 dark:border-slate-700', className)}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className }: CardProps) {
  return (
    <h3 className={cn('text-lg font-semibold text-slate-900 dark:text-white', className)}>
      {children}
    </h3>
  );
}

export function CardContent({ children, className }: CardProps) {
  return <div className={cn('p-4', className)}>{children}</div>;
}
```

### 2. Badge Component

```tsx
// components/ui/badge.tsx
import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  default: 'bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-white',
  secondary: 'bg-slate-200 text-slate-800 dark:bg-slate-600 dark:text-white',
  success: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
  danger: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  info: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
```

### 3. Tabs Component

```tsx
// components/ui/tabs.tsx
'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface Tab {
  id: string;
  label: string;
  badge?: number | string;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  className?: string;
}

export function Tabs({ tabs, defaultTab, onChange, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  return (
    <div className={cn('border-b border-slate-200 dark:border-slate-700', className)}>
      <nav className="flex gap-4 -mb-px" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={cn(
              'px-4 py-2 text-sm font-medium border-b-2 transition-colors',
              activeTab === tab.id
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
            )}
          >
            {tab.label}
            {tab.badge !== undefined && (
              <span className="ml-2 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full text-xs">
                {tab.badge}
              </span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}
```

### 4. Table Component

```tsx
// components/ui/table.tsx
import { cn } from '@/lib/utils';

interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (value: unknown, row: T) => React.ReactNode;
  sortable?: boolean;
  className?: string;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (row: T) => void;
  className?: string;
}

export function Table<T extends Record<string, unknown>>({
  data,
  columns,
  onRowClick,
  className,
}: TableProps<T>) {
  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="w-full">
        <thead className="bg-slate-50 dark:bg-slate-800">
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className={cn(
                  'px-4 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider',
                  col.className
                )}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-slate-900 divide-y divide-slate-200 dark:divide-slate-700">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              onClick={() => onRowClick?.(row)}
              className={cn(
                'hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors',
                onRowClick && 'cursor-pointer'
              )}
            >
              {columns.map((col) => (
                <td
                  key={String(col.key)}
                  className="px-4 py-3 text-sm text-slate-900 dark:text-slate-100"
                >
                  {col.render
                    ? col.render(row[col.key as keyof T], row)
                    : String(row[col.key as keyof T] ?? '-')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

### 5. Skeleton Component

```tsx
// components/ui/skeleton.tsx
import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse bg-slate-200 dark:bg-slate-700 rounded',
        className
      )}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg border p-4">
      <Skeleton className="h-4 w-1/2 mb-2" />
      <Skeleton className="h-8 w-3/4" />
    </div>
  );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex gap-4">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-1/4" />
        </div>
      ))}
    </div>
  );
}
```

---

## Chart Components

### 1. Module Distribution Chart (Pie)

```tsx
// components/charts/module-distribution-chart.tsx
'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface ModuleData {
  name: string;
  tableCount: number;
  totalRows: number;
  totalSize: number;
}

interface ModuleDistributionChartProps {
  data: ModuleData[];
  metric?: 'tableCount' | 'totalRows' | 'totalSize';
  title?: string;
}

const COLORS = [
  '#3B82F6', // Blue
  '#10B981', // Emerald
  '#F59E0B', // Amber
  '#EF4444', // Red
  '#8B5CF6', // Violet
  '#EC4899', // Pink
  '#06B6D4', // Cyan
  '#84CC16', // Lime
];

const formatNumber = (num: number): string => {
  if (num >= 1e9) return `${(num / 1e9).toFixed(1)}B`;
  if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M`;
  if (num >= 1e3) return `${(num / 1e3).toFixed(1)}K`;
  return num.toString();
};

const formatBytes = (bytes: number): string => {
  if (bytes >= 1e9) return `${(bytes / 1e9).toFixed(1)} GB`;
  if (bytes >= 1e6) return `${(bytes / 1e6).toFixed(1)} MB`;
  if (bytes >= 1e3) return `${(bytes / 1e3).toFixed(1)} KB`;
  return `${bytes} B`;
};

export function ModuleDistributionChart({
  data,
  metric = 'tableCount',
  title = 'Module Distribution',
}: ModuleDistributionChartProps) {
  const metricKey = {
    tableCount: 'tableCount',
    totalRows: 'totalRows',
    totalSize: 'totalSize',
  }[metric];

  const formatValue = (value: number) => {
    if (metric === 'totalSize') return formatBytes(value);
    return formatNumber(value);
  };

  const chartData = data
    .map((item) => ({
      name: item.name,
      value: item[metricKey as keyof ModuleData] as number,
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 8); // Top 8 modules

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                labelLine={true}
              >
                {chartData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => formatValue(value)}
                contentStyle={{
                  backgroundColor: 'var(--tooltip-bg, #fff)',
                  border: '1px solid var(--tooltip-border, #e5e7eb)',
                  borderRadius: '0.5rem',
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
```

### 2. Size Distribution Chart (Bar)

```tsx
// components/charts/size-distribution-chart.tsx
'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface SizeData {
  name: string;
  size: number;
  rows: number;
}

interface SizeDistributionChartProps {
  data: SizeData[];
  title?: string;
  limit?: number;
}

const formatBytes = (bytes: number): string => {
  if (bytes >= 1e9) return `${(bytes / 1e9).toFixed(1)} GB`;
  if (bytes >= 1e6) return `${(bytes / 1e6).toFixed(1)} MB`;
  if (bytes >= 1e3) return `${(bytes / 1e3).toFixed(1)} KB`;
  return `${bytes} B`;
};

export function SizeDistributionChart({
  data,
  title = 'Size Distribution',
  limit = 10,
}: SizeDistributionChartProps) {
  const chartData = data
    .sort((a, b) => b.size - a.size)
    .slice(0, limit)
    .map((item) => ({
      name: item.name.length > 15 ? `${item.name.slice(0, 15)}...` : item.name,
      fullName: item.name,
      size: item.size,
      rows: item.rows,
    }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" tickFormatter={formatBytes} />
              <YAxis type="category" dataKey="name" width={100} />
              <Tooltip
                formatter={(value: number, name: string) => [
                  name === 'size' ? formatBytes(value) : value.toLocaleString(),
                  name === 'size' ? 'Size' : 'Rows',
                ]}
                labelFormatter={(label) => chartData.find((d) => d.name === label)?.fullName || label}
              />
              <Bar dataKey="size" fill="#3B82F6" name="Size" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
```

### 3. Health Score Indicator

```tsx
// components/overview/health-score-indicator.tsx
'use client';

import { useMemo } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface HealthScoreIndicatorProps {
  score: number;
  anomalies: {
    critical: number;
    warning: number;
    info: number;
  };
}

export function HealthScoreIndicator({ score, anomalies }: HealthScoreIndicatorProps) {
  const { color, label } = useMemo(() => {
    if (score >= 80) return { color: 'text-green-500', label: 'Good' };
    if (score >= 60) return { color: 'text-yellow-500', label: 'Fair' };
    if (score >= 40) return { color: 'text-orange-500', label: 'Poor' };
    return { color: 'text-red-500', label: 'Critical' };
  }, [score]);

  const totalIssues = anomalies.critical + anomalies.warning + anomalies.info;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Database Health</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-4">
          {/* Score Circle */}
          <div className="relative w-32 h-32">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="56"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                className="text-slate-200 dark:text-slate-700"
              />
              <circle
                cx="64"
                cy="64"
                r="56"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                strokeDasharray={`${(score / 100) * 352} 352`}
                className={color}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-3xl font-bold ${color}`}>{score}</span>
              <span className="text-sm text-slate-500">{label}</span>
            </div>
          </div>

          {/* Issue Breakdown */}
          <div className="w-full space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-red-500 font-medium">Critical</span>
              <span>{anomalies.critical}</span>
            </div>
            <Progress value={(anomalies.critical / totalIssues) * 100} className="h-2 bg-red-100 [&>div]:bg-red-500" />
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-yellow-500 font-medium">Warning</span>
              <span>{anomalies.warning}</span>
            </div>
            <Progress value={(anomalies.warning / totalIssues) * 100} className="h-2 bg-yellow-100 [&>div]:bg-yellow-500" />
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-blue-500 font-medium">Info</span>
              <span>{anomalies.info}</span>
            </div>
            <Progress value={(anomalies.info / totalIssues) * 100} className="h-2 bg-blue-100 [&>div]:bg-blue-500" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
```

---

## Feature Components

### 1. Summary Cards

```tsx
// components/overview/summary-cards.tsx
import { Card, CardContent } from '@/components/ui/card';
import { Database, Table2, Layers, AlertTriangle } from 'lucide-react';

interface SummaryData {
  totalTables: number;
  totalRows: number;
  totalSize: number;
  moduleCount: number;
  anomalyCount: number;
}

interface SummaryCardsProps {
  data: SummaryData;
}

const formatNumber = (num: number): string => {
  if (num >= 1e9) return `${(num / 1e9).toFixed(1)}B`;
  if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M`;
  if (num >= 1e3) return `${(num / 1e3).toFixed(1)}K`;
  return num.toLocaleString();
};

const formatBytes = (bytes: number): string => {
  if (bytes >= 1e9) return `${(bytes / 1e9).toFixed(2)} GB`;
  if (bytes >= 1e6) return `${(bytes / 1e6).toFixed(2)} MB`;
  if (bytes >= 1e3) return `${(bytes / 1e3).toFixed(2)} KB`;
  return `${bytes} B`;
};

export function SummaryCards({ data }: SummaryCardsProps) {
  const cards = [
    {
      title: 'Total Tables',
      value: formatNumber(data.totalTables),
      icon: Table2,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      title: 'Total Rows',
      value: formatNumber(data.totalRows),
      icon: Database,
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
    },
    {
      title: 'Database Size',
      value: formatBytes(data.totalSize),
      icon: Layers,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    },
    {
      title: 'Anomalies',
      value: formatNumber(data.anomalyCount),
      icon: AlertTriangle,
      color: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.title}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {card.title}
                </p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  {card.value}
                </p>
              </div>
              <div className={`p-3 rounded-lg ${card.bgColor}`}>
                <card.icon className={`w-6 h-6 ${card.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
```

### 2. Anomaly Summary Cards

```tsx
// components/overview/anomaly-summary-cards.tsx
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface AnomalySummaryCardsProps {
  categories: {
    missingPrimaryKeys: number;
    missingIndexes: number;
    largeTablesWithoutIndex: number;
    orphanTables: number;
    namingIssues: number;
  };
}

export function AnomalySummaryCards({ categories }: AnomalySummaryCardsProps) {
  const categoryCards = [
    {
      title: 'Missing Primary Keys',
      count: categories.missingPrimaryKeys,
      severity: 'danger' as const,
      href: '/anomalies/missing_primary_keys',
    },
    {
      title: 'Missing Indexes',
      count: categories.missingIndexes,
      severity: 'warning' as const,
      href: '/anomalies/missing_indexes',
    },
    {
      title: 'Large Tables Without Index',
      count: categories.largeTablesWithoutIndex,
      severity: 'warning' as const,
      href: '/anomalies/large_tables_no_index',
    },
    {
      title: 'Orphan Tables',
      count: categories.orphanTables,
      severity: 'info' as const,
      href: '/anomalies/orphan_tables',
    },
    {
      title: 'Naming Issues',
      count: categories.namingIssues,
      severity: 'info' as const,
      href: '/anomalies/naming_issues',
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {categoryCards.map((card) => (
        <Link key={card.title} href={card.href}>
          <Card className="hover:border-blue-500 transition-colors cursor-pointer">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{card.count}</span>
                <Badge variant={card.severity}>
                  {card.count > 50 ? 'High' : card.count > 10 ? 'Medium' : 'Low'}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
```

### 3. Severity Badge

```tsx
// components/anomalies/severity-badge.tsx
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, AlertCircle, Info } from 'lucide-react';

type Severity = 'CRITICAL' | 'WARNING' | 'INFO';

interface SeverityBadgeProps {
  severity: Severity;
  showIcon?: boolean;
}

const severityConfig: Record<Severity, { variant: 'danger' | 'warning' | 'info'; icon: React.ElementType; label: string }> = {
  CRITICAL: { variant: 'danger', icon: AlertTriangle, label: 'Critical' },
  WARNING: { variant: 'warning', icon: AlertCircle, label: 'Warning' },
  INFO: { variant: 'info', icon: Info, label: 'Info' },
};

export function SeverityBadge({ severity, showIcon = true }: SeverityBadgeProps) {
  const config = severityConfig[severity];
  const Icon = config.icon;

  return (
    <Badge variant={config.variant}>
      {showIcon && <Icon className="w-3 h-3 mr-1" />}
      {config.label}
    </Badge>
  );
}
```

### 4. SQL Preview Component

```tsx
// components/indexes/sql-preview.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';

interface SQLPreviewProps {
  sql: string;
  title?: string;
}

export function SQLPreview({ sql, title = 'SQL Statement' }: SQLPreviewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(sql);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800">
        <span className="text-sm font-medium text-slate-400">{title}</span>
        <Button variant="ghost" size="sm" onClick={handleCopy} className="text-slate-400 hover:text-white">
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? 'Copied!' : 'Copy'}
        </Button>
      </div>
      <pre className="p-4 text-sm text-green-400 overflow-x-auto">
        <code>{sql}</code>
      </pre>
    </div>
  );
}
```

### 5. Module Card

```tsx
// components/modules/module-card.tsx
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table2, Database, Layers } from 'lucide-react';

interface ModuleCardProps {
  module: {
    name: string;
    tableCount: number;
    totalRows: number;
    totalSize: number;
    description?: string;
  };
}

const formatBytes = (bytes: number): string => {
  if (bytes >= 1e9) return `${(bytes / 1e9).toFixed(2)} GB`;
  if (bytes >= 1e6) return `${(bytes / 1e6).toFixed(2)} MB`;
  if (bytes >= 1e3) return `${(bytes / 1e3).toFixed(2)} KB`;
  return `${bytes} B`;
};

const formatNumber = (num: number): string => {
  if (num >= 1e9) return `${(num / 1e9).toFixed(1)}B`;
  if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M`;
  if (num >= 1e3) return `${(num / 1e3).toFixed(1)}K`;
  return num.toLocaleString();
};

export function ModuleCard({ module }: ModuleCardProps) {
  return (
    <Link href={`/modules/${module.name}`}>
      <Card className="hover:border-blue-500 transition-colors cursor-pointer h-full">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">{module.name}</CardTitle>
            <Badge variant="secondary">{module.tableCount} tables</Badge>
          </div>
        </CardHeader>
        <CardContent>
          {module.description && (
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              {module.description}
            </p>
          )}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-sm">
              <Database className="w-4 h-4 text-slate-400" />
              <span>{formatNumber(module.totalRows)} rows</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Layers className="w-4 h-4 text-slate-400" />
              <span>{formatBytes(module.totalSize)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
```

### 6. Search Input

```tsx
// components/search/search-input.tsx
'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';

interface SearchInputProps {
  placeholder?: string;
  defaultValue?: string;
  onSearch?: (query: string) => void;
}

export function SearchInput({
  placeholder = 'Search tables, modules...',
  defaultValue = '',
  onSearch,
}: SearchInputProps) {
  const [query, setQuery] = useState(defaultValue);
  const router = useRouter();

  const handleSearch = useCallback(() => {
    if (query.trim()) {
      if (onSearch) {
        onSearch(query.trim());
      } else {
        router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      }
    }
  }, [query, router, onSearch]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClear = () => {
    setQuery('');
  };

  return (
    <div className="relative flex gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="pl-10 pr-10"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
}
```

---

## Props Interfaces

### Type Definitions

```typescript
// types/overview.ts
export interface DatabaseOverview {
  totalTables: number;
  totalRows: number;
  totalSize: number;
  moduleCount: number;
  anomalyCount: number;
  healthScore: number;
  anomalies: {
    critical: number;
    warning: number;
    info: number;
  };
  topModules: ModuleSummary[];
}

export interface ModuleSummary {
  name: string;
  tableCount: number;
  totalRows: number;
  totalSize: number;
  description?: string;
}

// types/module.ts
export interface Module {
  name: string;
  tables: string[];
  totalRows: number;
  totalSizeBytes: number;
  description: string;
}

export interface ModuleDetail extends Module {
  tables: TableSummary[];
  anomalyCount: number;
}

export interface TableSummary {
  name: string;
  rows: number;
  sizeBytes: number;
  purpose: string;
  hasPk: boolean;
  indexCount: number;
  issues: string[];
}

// types/anomaly.ts
export type Severity = 'CRITICAL' | 'WARNING' | 'INFO';

export interface AnomalyItem {
  table: string;
  rowCount: number;
  severity: Severity;
  module?: string;
  recommendation?: string;
}

export interface AnomalyCategory {
  name: string;
  description: string;
  total: number;
  bySeverity: Record<Severity, number>;
  items: AnomalyItem[];
}

export interface AnomalyOverview {
  categories: Record<string, AnomalyCategory>;
  summary: {
    critical: number;
    warning: number;
    info: number;
  };
}

// types/table.ts
export interface TableDetail {
  name: string;
  module: string;
  purpose: string;
  rowCount: number;
  sizeBytes: number;
  hasPk: boolean;
  indexCount: number;
  indexes: IndexInfo[];
  columns: ColumnInfo[];
  issues: IssueInfo[];
  relatedTables: string[];
}

export interface IndexInfo {
  name: string;
  columns: string[];
  type: 'PRIMARY' | 'UNIQUE' | 'INDEX';
}

export interface ColumnInfo {
  name: string;
  type: string;
  nullable: boolean;
  defaultValue?: string;
}

export interface IssueInfo {
  type: string;
  severity: Severity;
  description: string;
  recommendation?: string;
}

// types/index.ts
export type Priority = 'HIGH' | 'MEDIUM' | 'LOW';

export interface IndexRecommendation {
  table: string;
  rowCount: number;
  priority: Priority;
  recommendation: string;
  sql: string;
  impact: string;
}

export interface IndexRecommendations {
  recommendations: IndexRecommendation[];
  byPriority: Record<Priority, number>;
}

// types/search.ts
export interface SearchResult {
  tables: TableSummary[];
  modules: ModuleSummary[];
  query: string;
  totalResults: number;
}
```

---

## State Management

### Strategy: React Context + URL State

```tsx
// lib/context/filter-context.tsx
'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface FilterState {
  severity: string | null;
  module: string | null;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
  page: number;
  limit: number;
}

interface FilterContextType {
  filters: FilterState;
  setSeverity: (severity: string | null) => void;
  setModule: (module: string | null) => void;
  setSort: (sortBy: string, sortOrder: 'asc' | 'desc') => void;
  setPage: (page: number) => void;
  reset: () => void;
}

const defaultFilters: FilterState = {
  severity: null,
  module: null,
  sortBy: 'name',
  sortOrder: 'asc',
  page: 1,
  limit: 50,
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const setSeverity = useCallback((severity: string | null) => {
    setFilters((prev) => ({ ...prev, severity, page: 1 }));
  }, []);

  const setModule = useCallback((module: string | null) => {
    setFilters((prev) => ({ ...prev, module, page: 1 }));
  }, []);

  const setSort = useCallback((sortBy: string, sortOrder: 'asc' | 'desc') => {
    setFilters((prev) => ({ ...prev, sortBy, sortOrder }));
  }, []);

  const setPage = useCallback((page: number) => {
    setFilters((prev) => ({ ...prev, page }));
  }, []);

  const reset = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  return (
    <FilterContext.Provider value={{ filters, setSeverity, setModule, setSort, setPage, reset }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
}
```

### URL-Based State Hook

```tsx
// hooks/use-url-state.ts
'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useCallback } from 'react';

interface UrlStateOptions {
  pageSize?: number;
}

export function useUrlState(options: UrlStateOptions = {}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const getState = useCallback(() => {
    return {
      query: searchParams.get('q') || '',
      page: parseInt(searchParams.get('page') || '1'),
      limit: parseInt(searchParams.get('limit') || String(options.pageSize || 50)),
      sortBy: searchParams.get('sort') || 'name',
      sortOrder: (searchParams.get('order') || 'asc') as 'asc' | 'desc',
      severity: searchParams.get('severity') || null,
      module: searchParams.get('module') || null,
    };
  }, [searchParams, options.pageSize]);

  const setState = useCallback(
    (updates: Record<string, string | number | null>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (value === null || value === '' || value === undefined) {
          params.delete(key);
        } else {
          params.set(key, String(value));
        }
      });

      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, router, pathname]
  );

  return { getState, setState };
}
```

---

## Styling Approach

### Tailwind CSS Configuration

```javascript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

### Utility Functions

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Number formatting
export function formatNumber(num: number): string {
  if (num >= 1e9) return `${(num / 1e9).toFixed(1)}B`;
  if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M`;
  if (num >= 1e3) return `${(num / 1e3).toFixed(1)}K`;
  return num.toLocaleString();
}

export function formatBytes(bytes: number): string {
  if (bytes >= 1e9) return `${(bytes / 1e9).toFixed(2)} GB`;
  if (bytes >= 1e6) return `${(bytes / 1e6).toFixed(2)} MB`;
  if (bytes >= 1e3) return `${(bytes / 1e3).toFixed(2)} KB`;
  return `${bytes} B`;
}

// Date formatting
export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date));
}

// Severity helpers
export function getSeverityColor(severity: 'CRITICAL' | 'WARNING' | 'INFO'): string {
  switch (severity) {
    case 'CRITICAL':
      return 'text-red-500 bg-red-50 dark:bg-red-900/20';
    case 'WARNING':
      return 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20';
    case 'INFO':
      return 'text-blue-500 bg-blue-50 dark:bg-blue-900/20';
    default:
      return 'text-slate-500 bg-slate-50 dark:bg-slate-900/20';
  }
}
```

---

## Accessibility Guidelines

### Keyboard Navigation

```tsx
// All interactive elements should be keyboard accessible
// Example: Card with keyboard navigation

function AccessibleCard({ onClick, children }: { onClick?: () => void; children: React.ReactNode }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {children}
    </div>
  );
}
```

### ARIA Labels

```tsx
// Always include aria-labels for icons and buttons
<Button aria-label="Copy to clipboard">
  <Copy className="w-4 h-4" />
</Button>

<nav aria-label="Main navigation">
  <ul role="list">
    {items.map(item => (
      <li key={item.id}>
        <Link href={item.href} aria-current={isActive ? 'page' : undefined}>
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
</nav>
```

### Color Contrast

```css
/* Ensure WCAG 2.1 AA contrast ratios */
/* Text on backgrounds should have at least 4.5:1 ratio */

/* Light mode */
.text-on-white { color: #1f2937; } /* Gray 800 - 12.6:1 */
.text-on-blue { color: #1e40af; } /* Blue 800 - 5.9:1 */

/* Dark mode */
.text-on-dark { color: #f3f4f6; } /* Gray 100 - 12.4:1 */
.text-on-blue-dark { color: #93c5fd; } /* Blue 300 - 6.5:1 */
```

### Focus Indicators

```css
/* Visible focus indicators for all interactive elements */
*:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Skip to content link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #3b82f6;
  color: white;
  padding: 8px;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

---

## Chart Specifications

### Recharts Configuration

```tsx
// lib/chart-config.ts

// Color palette for charts
export const CHART_COLORS = {
  primary: '#3B82F6', // Blue
  secondary: '#10B981', // Emerald
  tertiary: '#F59E0B', // Amber
  danger: '#EF4444', // Red
  purple: '#8B5CF6', // Violet
  pink: '#EC4899', // Pink
  cyan: '#06B6D4', // Cyan
  lime: '#84CC16', // Lime
};

// Common chart dimensions
export const CHART_DIMENSIONS = {
  mobile: { width: '100%', height: 200 },
  tablet: { width: '100%', height: 300 },
  desktop: { width: '100%', height: 400 },
};

// Responsive breakpoints
export const CHART_BREAKPOINTS = {
  sm: 640, // Mobile
  md: 768, // Tablet
  lg: 1024, // Desktop
  xl: 1280, // Large desktop
};

// Tooltip style
export const TOOLTIP_STYLE = {
  backgroundColor: 'var(--tooltip-bg, #fff)',
  border: '1px solid var(--tooltip-border, #e5e7eb)',
  borderRadius: '0.5rem',
  padding: '0.75rem',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
};

// Legend style
export const LEGEND_STYLE = {
  fontSize: '0.875rem',
  color: 'var(--text-color, #374151)',
};
```

### Responsive Chart Container

```tsx
// components/charts/responsive-chart-container.tsx
'use client';

import { useState, useEffect } from 'react';

interface ResponsiveChartContainerProps {
  children: React.ReactNode;
  minHeight?: number;
  maxHeight?: number;
}

export function ResponsiveChartContainer({
  children,
  minHeight = 200,
  maxHeight = 500,
}: ResponsiveChartContainerProps) {
  const [height, setHeight] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setHeight(250); // Mobile
      else if (width < 768) setHeight(300); // Tablet
      else setHeight(400); // Desktop
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: Math.min(Math.max(height, minHeight), maxHeight),
      }}
    >
      {children}
    </div>
  );
}
```

---

## Summary

### Component Count

| Category | Count | Status |
|----------|-------|--------|
| Layout Components | 6 | Required |
| UI Base Components | 10 | Required |
| Chart Components | 6 | Required |
| Feature Components | 15+ | Required |
| **Total** | **37+** | - |

### Key Technologies

- **UI Framework**: React 18 with Next.js App Router
- **Styling**: Tailwind CSS 3.4+ with dark mode support
- **Charts**: Recharts 2.10+ for data visualization
- **Icons**: Lucide React for consistent iconography
- **Type Safety**: TypeScript 5+ throughout

### Next Steps

1. Set up Next.js project with TypeScript
2. Configure Tailwind CSS with custom theme
3. Create base UI components
4. Build layout components
5. Implement chart components
6. Develop feature components
7. Add accessibility features
8. Test responsive design

---

**Created by: 13-dashboard-architect**  
**Date: 2026-03-20**