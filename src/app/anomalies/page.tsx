import Link from 'next/link'
import { Card, CardHeader, CardBody, CardTitle } from '@/components/ui/card'
import { getAnomalySummary } from '@/lib/data-loader'

// Force dynamic rendering since we use no-store fetch
export const dynamic = 'force-dynamic'

import { AnomalyCard, AnomalySummaryCard } from '@/components/features/anomaly-card'
import { SummaryCard, SummaryCardsGrid } from '@/components/features/summary-card'
import { AnomalyBarChart } from '@/components/charts/bar-chart'
import { formatNumber } from '@/lib/utils'

interface AnomalyCategory {
  name: string
  display_name: string
  description: string
  count: number
  severity_breakdown: {
    critical: number
    warning: number
    info: number
  }
  percentage_of_total: number
}

interface AnomalySummaryData {
  summary: {
    total_anomalies: number
    critical: number
    warning: number
    info: number
    affected_tables: number
    health_impact: string
  }
  categories: AnomalyCategory[]
  severity_distribution: {
    critical: { count: number; percentage: number; tables_affected: number }
    warning: { count: number; percentage: number; tables_affected: number }
    info: { count: number; percentage: number; tables_affected: number }
  }
  priority_actions: Array<{ priority: number; action: string }>
}

async function getAnomalyData(): Promise<AnomalySummaryData | null> {
  try {
    return await getAnomalySummary()
  } catch (error) {
    console.error('Failed to fetch anomaly data:', error)
    return null
  }
}

export default async function AnomaliesPage({
  searchParams,
}: {
  searchParams?: { severity?: string }
}) {
  const data = await getAnomalyData()
  
  if (!data) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Database Anomalies
        </h1>
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            Unable to load anomaly data. Please try again later.
          </p>
        </div>
      </div>
    )
  }
  
  const { summary, categories, severity_distribution, priority_actions } = data
  const severityFilter = normalizeSeverityFilter(searchParams?.severity)
  
  // Prepare chart data
  const filteredCategories = categories.filter((category) => {
    if (!severityFilter) return true
    return category.severity_breakdown[severityFilter] > 0
  })

  const chartData = filteredCategories.map(cat => ({
    name: cat.display_name.length > 15 ? cat.display_name.substring(0, 15) + '...' : cat.display_name,
    critical: cat.severity_breakdown.critical,
    warning: cat.severity_breakdown.warning,
    info: cat.severity_breakdown.info,
  }))
  
  // Sort categories by count (most issues first)
  const sortedCategories = [...filteredCategories].sort((a, b) => {
    if (!severityFilter) return b.count - a.count
    return b.severity_breakdown[severityFilter] - a.severity_breakdown[severityFilter]
  })
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Database Anomalies
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {summary.total_anomalies} issues across {summary.affected_tables} tables
          </p>
          {severityFilter && (
            <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
              Showing {capitalizeSeverity(severityFilter)} details
              <Link href="/anomalies" className="ml-2 hover:underline">
                Clear filter
              </Link>
            </p>
          )}
        </div>
      </div>
      
      {/* Summary Cards */}
      <SummaryCardsGrid columns={4}>
        <SummaryCard
          title="Total Issues"
          value={summary.total_anomalies}
          subtitle={`${summary.affected_tables} tables affected`}
          variant={summary.critical > 0 ? 'danger' : summary.warning > 0 ? 'warning' : 'default'}
        />
        <SummaryCard
          title="Critical"
          value={summary.critical}
          subtitle={`${severity_distribution.critical.percentage.toFixed(1)}% of total`}
          variant="danger"
        />
        <SummaryCard
          title="Warning"
          value={summary.warning}
          subtitle={`${severity_distribution.warning.percentage.toFixed(1)}% of total`}
          variant="warning"
        />
        <SummaryCard
          title="Info"
          value={summary.info}
          subtitle={`${severity_distribution.info.percentage.toFixed(1)}% of total`}
        />
      </SummaryCardsGrid>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Severity Distribution */}
        <Card variant="bordered">
          <CardHeader>
            <CardTitle>Severity Distribution</CardTitle>
          </CardHeader>
          <CardBody>
            <AnomalyBarChart 
              data={chartData}
              title=""
              height={280}
            />
          </CardBody>
        </Card>
        
        {/* Priority Actions */}
        <Card variant="bordered">
          <CardHeader>
            <CardTitle>Priority Actions</CardTitle>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Top actions to address
            </p>
          </CardHeader>
          <CardBody>
            <div className="space-y-3">
              {priority_actions.length > 0 ? (
                priority_actions.map((action, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
                  >
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                      {action.priority}
                    </span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {action.action}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <svg className="w-12 h-12 mx-auto text-green-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-500 dark:text-gray-400">
                    No critical issues found!
                  </p>
                </div>
              )}
            </div>
          </CardBody>
        </Card>
      </div>
      
      {/* Anomaly Categories */}
      <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Categories
          </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedCategories.map((category) => (
            <AnomalyCard
              key={category.name}
              category={category.name}
              displayName={category.display_name}
              description={category.description}
              count={category.count}
              severityBreakdown={category.severity_breakdown}
              percentageOfTotal={category.percentage_of_total}
            />
          ))}
        </div>
        {sortedCategories.length === 0 && (
          <Card variant="bordered">
            <CardBody className="text-center py-8 text-gray-500 dark:text-gray-400">
              No {capitalizeSeverity(severityFilter)} anomalies found.
            </CardBody>
          </Card>
        )}
      </div>
      
      {/* Health Impact */}
      <Card variant="bordered">
        <CardHeader>
          <CardTitle>Health Impact</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-700 dark:text-gray-300">
                {summary.health_impact}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {summary.critical > 0 && (
                  <span className="text-red-600 dark:text-red-400 font-medium">
                    {summary.critical} critical issue{summary.critical !== 1 ? 's' : ''} require immediate attention.
                  </span>
                )}
                {summary.warning > 0 && summary.critical === 0 && (
                  <span className="text-yellow-600 dark:text-yellow-400 font-medium">
                    {summary.warning} warning{summary.warning !== 1 ? 's' : ''} should be reviewed.
                  </span>
                )}
                {summary.critical === 0 && summary.warning === 0 && (
                  <span className="text-green-600 dark:text-green-400 font-medium">
                    Database is in good condition.
                  </span>
                )}
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
      
      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                Improve query performance
              </p>
            </CardBody>
          </Card>
        </Link>
        
        <Link href="/tables" className="block">
          <Card variant="bordered" className="hover:shadow-md transition-shadow cursor-pointer h-full">
            <CardBody className="text-center py-8">
              <div className="w-12 h-12 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Browse Tables</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Inspect individual tables
              </p>
            </CardBody>
          </Card>
        </Link>
      </div>
    </div>
  )
}

function normalizeSeverityFilter(value?: string): 'critical' | 'warning' | 'info' | undefined {
  if (value === 'critical' || value === 'warning' || value === 'info') {
    return value
  }
  return undefined
}

function capitalizeSeverity(value: 'critical' | 'warning' | 'info' | undefined): string {
  if (!value) return 'all'
  return value.charAt(0).toUpperCase() + value.slice(1)
}
