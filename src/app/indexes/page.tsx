import Link from 'next/link'
import { Card, CardHeader, CardBody, CardTitle } from '@/components/ui/card'
import { getIndexRecommendations } from '@/lib/data-loader'

// Force dynamic rendering since we use no-store fetch
export const dynamic = 'force-dynamic'

import { Badge, PriorityBadge } from '@/components/ui/badge'
import { SummaryCard, SummaryCardsGrid } from '@/components/features/summary-card'
import { IndexRecommendationCard } from '@/components/features/sql-preview'
import { formatNumber } from '@/lib/utils'

interface IndexRecommendation {
  priority: string
  priority_order: number
  table: string
  index_type: string
  columns: string[]
  row_count: number
  reason: string
  impact: string
  sql: string
}

interface IndexRecommendationsData {
  summary: {
    total_recommendations: number
    by_priority: { high: number; medium: number; low: number }
    estimated_impact: { high: string; medium: string; low: string }
  }
  recommendations: IndexRecommendation[]
}

async function getIndexData(): Promise<IndexRecommendationsData | null> {
  try {
    return await getIndexRecommendations()
  } catch (error) {
    console.error('Failed to fetch index data:', error)
    return null
  }
}

export default async function IndexesPage() {
  const data = await getIndexData()
  
  if (!data) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Index Recommendations
        </h1>
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            Unable to load index recommendations. Please try again later.
          </p>
        </div>
      </div>
    )
  }
  
  const { summary, recommendations } = data
  
  // Group recommendations by priority
  const highPriority = recommendations.filter(r => r.priority === 'HIGH')
  const mediumPriority = recommendations.filter(r => r.priority === 'MEDIUM')
  const lowPriority = recommendations.filter(r => r.priority === 'LOW')
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Index Recommendations
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {summary.total_recommendations} recommendations to improve query performance
          </p>
        </div>
      </div>
      
      {/* Summary Cards */}
      <SummaryCardsGrid columns={4}>
        <SummaryCard
          title="Total"
          value={summary.total_recommendations}
          subtitle="recommendations"
        />
        <SummaryCard
          title="High Priority"
          value={summary.by_priority.high}
          subtitle="immediate attention"
          variant={summary.by_priority.high > 0 ? 'danger' : 'default'}
        />
        <SummaryCard
          title="Medium Priority"
          value={summary.by_priority.medium}
          subtitle="should implement"
          variant={summary.by_priority.medium > 0 ? 'warning' : 'default'}
        />
        <SummaryCard
          title="Low Priority"
          value={summary.by_priority.low}
          subtitle="nice to have"
        />
      </SummaryCardsGrid>
      
      {/* Impact Summary */}
      <Card variant="bordered">
        <CardHeader>
          <CardTitle>Estimated Impact</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {summary.by_priority.high > 0 && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <div className="flex items-center gap-2 mb-2">
                  <PriorityBadge priority="HIGH" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {summary.by_priority.high} recommendations
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {summary.estimated_impact.high}
                </p>
              </div>
            )}
            {summary.by_priority.medium > 0 && (
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <div className="flex items-center gap-2 mb-2">
                  <PriorityBadge priority="MEDIUM" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {summary.by_priority.medium} recommendations
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {summary.estimated_impact.medium}
                </p>
              </div>
            )}
            {summary.by_priority.low > 0 && (
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <PriorityBadge priority="LOW" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {summary.by_priority.low} recommendations
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {summary.estimated_impact.low}
                </p>
              </div>
            )}
          </div>
        </CardBody>
      </Card>
      
      {/* High Priority */}
      {highPriority.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            <span className="text-red-600 dark:text-red-400">High Priority</span>
            <span className="ml-2 text-sm font-normal text-gray-500">
              {highPriority.length} recommendations
            </span>
          </h2>
          <div className="space-y-4">
            {highPriority.map((rec, idx) => (
              <IndexRecommendationCard
                key={idx}
                priority={rec.priority}
                table={rec.table}
                indexType={rec.index_type}
                columns={rec.columns}
                reason={rec.reason}
                impact={rec.impact}
                sql={rec.sql}
              />
            ))}
          </div>
        </div>
      )}
      
      {/* Medium Priority */}
      {mediumPriority.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            <span className="text-yellow-600 dark:text-yellow-400">Medium Priority</span>
            <span className="ml-2 text-sm font-normal text-gray-500">
              {mediumPriority.length} recommendations
            </span>
          </h2>
          <div className="space-y-4">
            {mediumPriority.map((rec, idx) => (
              <IndexRecommendationCard
                key={idx}
                priority={rec.priority}
                table={rec.table}
                indexType={rec.index_type}
                columns={rec.columns}
                reason={rec.reason}
                impact={rec.impact}
                sql={rec.sql}
              />
            ))}
          </div>
        </div>
      )}
      
      {/* Low Priority */}
      {lowPriority.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            <span className="text-gray-600 dark:text-gray-400">Low Priority</span>
            <span className="ml-2 text-sm font-normal text-gray-500">
              {lowPriority.length} recommendations
            </span>
          </h2>
          <div className="space-y-4">
            {lowPriority.slice(0, 10).map((rec, idx) => (
              <IndexRecommendationCard
                key={idx}
                priority={rec.priority}
                table={rec.table}
                indexType={rec.index_type}
                columns={rec.columns}
                reason={rec.reason}
                impact={rec.impact}
                sql={rec.sql}
              />
            ))}
            {lowPriority.length > 10 && (
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
                And {lowPriority.length - 10} more low priority recommendations...
              </p>
            )}
          </div>
        </div>
      )}
      
      {/* Empty State */}
      {summary.total_recommendations === 0 && (
        <Card variant="bordered">
          <CardBody className="text-center py-12">
            <svg className="w-16 h-16 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              All Good!
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              No index recommendations at this time. Your database indexes are well optimized.
            </p>
          </CardBody>
        </Card>
      )}
      
      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/anomalies" className="block">
          <Card variant="bordered" className="hover:shadow-md transition-shadow cursor-pointer h-full">
            <CardBody className="text-center py-8">
              <div className="w-12 h-12 mx-auto bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">View Anomalies</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Check other database issues
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
