import Link from 'next/link'
import { Card, CardHeader, CardBody, CardTitle } from '@/components/ui/card'
import { getDatabaseOverview, loadModuleMap } from '@/lib/data-loader'

// Force dynamic rendering so overview data is loaded at request time
export const dynamic = 'force-dynamic'

import { SummaryCard, SummaryCardsGrid } from '@/components/features/summary-card'
import { AnomalyCard, AnomalySummaryCard } from '@/components/features/anomaly-card'
import { ModuleDistributionChart } from '@/components/charts/pie-chart'
import { SizeBarChart } from '@/components/charts/bar-chart'
import { HealthScoreIndicator } from '@/components/charts/health-score'
import { SkeletonCard, SkeletonText, SkeletonTable } from '@/components/ui/skeleton'
import { formatBytes, formatDisplayDateTime, formatNumber } from '@/lib/utils'

// Types for API response
interface OverviewData {
  database: {
    name: string
    server_version: string
  }
  statistics: {
    total_tables: number
    total_rows: number
    total_size_bytes: number
    total_size_human: string
    data_size_bytes: number
    index_size_bytes: number
    engine_types: string[]
  }
  modules: {
    count: number
    distribution: Array<{
      name: string
      table_count: number
      size_percentage: number
    }>
  }
  anomalies: {
    total: number
    critical: number
    warning: number
    info: number
    by_category: Record<string, number>
  }
  health_score: {
    overall: number
    breakdown: {
      primary_key_health: number
      index_health: number
      table_usage_health: number
    }
    grade: string
    recommendation: string
  }
  top_modules_by_size: Array<{
    name: string
    description_en: string
    size_percentage: number
    total_rows: number
  }>
  top_largest_tables: Array<{
    name: string
    module: string
    rows: number
    size_mb: number
  }>
}

async function getOverviewData(): Promise<OverviewData | null> {
  try {
    return await getDatabaseOverview()
  } catch (error) {
    console.error('Failed to fetch overview data:', error)
    return null
  }
}

export default async function OverviewPage() {
  const data = await getOverviewData()
  const moduleMap = await loadModuleMap()
  const renderedAt = new Date().toISOString()
  
  if (!data) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Database Overview
        </h1>
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            Unable to load database overview. Please try again later.
          </p>
        </div>
      </div>
    )
  }
  
  const { database, statistics, modules, anomalies, health_score, top_modules_by_size, top_largest_tables } = data
  
  // Prepare chart data
  const moduleDistributionData = modules.distribution.map(m => ({
    name: m.name,
    value: m.table_count,
    percentage: m.size_percentage,
    tables: moduleMap.modules.find((module) => module.name === m.name)?.tables || [],
  }))
  
  const topTablesData = top_largest_tables.map(t => ({
    name: t.name,
    value: t.size_mb * 1024 * 1024, // Convert back to bytes
    extra: { rows: t.rows, module: t.module },
  }))
  
  // Prepare anomaly categories
  const anomalyCategories = Object.entries(anomalies.by_category).map(([category, count]) => ({
    category,
    displayName: formatCategoryName(category),
    description: getCategoryDescription(category),
    count,
    severityBreakdown: { critical: 0, warning: 0, info: 0 }, // Would need separate API call
  }))
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Database Overview
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {database.name} • MySQL {database.server_version}
          </p>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Last updated: {formatDisplayDateTime(renderedAt)}
        </div>
      </div>
      
      {/* Summary Cards */}
      <SummaryCardsGrid columns={4}>
        <SummaryCard
          title="Total Tables"
          value={statistics.total_tables}
          icon={
            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          }
        />
        <SummaryCard
          title="Total Rows"
          value={formatNumber(statistics.total_rows)}
          icon={
            <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          }
        />
        <SummaryCard
          title="Database Size"
          value={statistics.total_size_human}
          subtitle={`Data: ${formatBytes(statistics.data_size_bytes)} • Index: ${formatBytes(statistics.index_size_bytes)}`}
          icon={
            <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          }
        />
        <SummaryCard
          title="Anomalies"
          value={anomalies.total}
          subtitle={`${anomalies.critical} critical • ${anomalies.warning} warning`}
          variant={anomalies.critical > 0 ? 'danger' : anomalies.warning > 0 ? 'warning' : 'default'}
          icon={
            <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          }
        />
      </SummaryCardsGrid>
      
      {/* Health Score and Anomaly Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Health Score */}
        <Card variant="bordered">
          <CardHeader>
            <CardTitle>Health Score</CardTitle>
          </CardHeader>
          <CardBody>
            <HealthScoreIndicator
              score={health_score.overall}
              grade={health_score.grade}
              breakdown={health_score.breakdown}
              recommendation={health_score.recommendation}
              showBreakdown
            />
          </CardBody>
        </Card>
        
        {/* Anomaly Summary */}
        <AnomalySummaryCard
          total={anomalies.total}
          critical={anomalies.critical}
          warning={anomalies.warning}
          info={anomalies.info}
          affectedTables={0}
          healthImpact={health_score.recommendation}
        />
      </div>
      
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Module Distribution */}
        <Card variant="bordered">
          <CardHeader>
            <CardTitle>Module Distribution</CardTitle>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {modules.count} modules found
            </p>
          </CardHeader>
          <CardBody>
            <ModuleDistributionChart
              data={moduleDistributionData}
              title=""
              height={280}
            />
          </CardBody>
        </Card>
        
        {/* Top Tables */}
        <Card variant="bordered">
          <CardHeader>
            <CardTitle>Top Tables by Size</CardTitle>
          </CardHeader>
          <CardBody>
            <SizeBarChart
              data={topTablesData}
              valueLabel="Size"
              height={280}
            />
          </CardBody>
        </Card>
      </div>
      
      {/* Anomaly Categories */}
      {anomalyCategories.length > 0 && (
        <Card variant="bordered">
          <CardHeader>
            <CardTitle>Anomaly Categories</CardTitle>
            <Link 
              href="/anomalies" 
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              View all anomalies →
            </Link>
          </CardHeader>
          <CardBody className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
              {anomalyCategories.slice(0, 6).map((cat) => (
                <AnomalyCard
                  key={cat.category}
                  category={cat.category}
                  displayName={cat.displayName}
                  description={cat.description}
                  count={cat.count}
                  severityBreakdown={cat.severityBreakdown}
                />
              ))}
            </div>
          </CardBody>
        </Card>
      )}
      
      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Link href="/modules" className="block">
          <Card variant="bordered" className="hover:shadow-md transition-shadow cursor-pointer h-full">
            <CardBody className="text-center py-8">
              <div className="w-12 h-12 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Modules</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Browse {modules.count} database modules
              </p>
            </CardBody>
          </Card>
        </Link>
        
        <Link href="/anomalies" className="block">
          <Card variant="bordered" className="hover:shadow-md transition-shadow cursor-pointer h-full">
            <CardBody className="text-center py-8">
              <div className="w-12 h-12 mx-auto bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Anomalies</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {anomalies.total} issues to review
              </p>
            </CardBody>
          </Card>
        </Link>
        
        <Link href="/indexes" className="block">
          <Card variant="bordered" className="hover:shadow-md transition-shadow cursor-pointer h-full">
            <CardBody className="text-center py-8">
              <div className="w-12 h-12 mx-auto bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Index Recommendations</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Optimize query performance
              </p>
            </CardBody>
          </Card>
        </Link>

        <Link href="/data-dictionary" className="block">
          <Card variant="bordered" className="hover:shadow-md transition-shadow cursor-pointer h-full">
            <CardBody className="text-center py-8">
              <div className="w-12 h-12 mx-auto bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-5.747-8.62l11.494 5.747M6.253 14.873l11.494-5.746" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Data Dictionary</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Browse report structure by module and table
              </p>
            </CardBody>
          </Card>
        </Link>
      </div>
    </div>
  )
}

function formatCategoryName(category: string): string {
  return category
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

function getCategoryDescription(category: string): string {
  const descriptions: Record<string, string> = {
    missing_primary_keys: 'Tables without primary key constraint',
    missing_indexes: 'Tables without proper secondary indexes',
    large_tables_no_index: 'Large tables missing proper indexing',
    orphan_tables: 'Tables not linked to any module',
    naming_issues: 'Tables with non-standard naming',
  }
  return descriptions[category] || category
}
