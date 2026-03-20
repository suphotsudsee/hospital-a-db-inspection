import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getModuleByName } from '@/lib/data-loader'

// Force dynamic rendering since we use no-store fetch
export const dynamic = 'force-dynamic'

import { Card, CardHeader, CardBody, CardTitle } from '@/components/ui/card'
import { Badge, SeverityBadge } from '@/components/ui/badge'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'
import { SummaryCard, SummaryCardsGrid } from '@/components/features/summary-card'
import { SQLPreview } from '@/components/features/sql-preview'
import { formatBytes, formatNumber, cn } from '@/lib/utils'

interface ModuleDetailData {
  module: {
    name: string
    description_th: string
    description_en: string
    table_count: number
    total_rows: number
    total_size_bytes: number
    size_mb: number
    size_gb: number
    size_percentage: number
    anomaly_count: number
    health_score: number
  }
  statistics: {
    average_table_size_mb: number
    largest_table: { name: string; size_mb: number }
    smallest_table: { name: string; size_mb: number }
    empty_tables_count: number
    tables_over_1m_rows: number
  }
  tables: Array<{
    name: string
    row_count: number
    size_bytes: number
    size_mb: number
    size_gb: number
    engine: string
    purpose: string
    severity: string
    has_primary_key: boolean
    index_count: number
    column_count: number
    issues: Array<{ type: string; severity: string; message: string }>
  }>
  anomalies: {
    total: number
    by_severity: { critical: number; warning: number; info: number }
    issues: Array<{ table: string; issue: string; severity: string }>
  }
  recommendations: Array<{
    priority: string
    table: string
    action: string
    reason: string
    sql: string
  }>
}

async function getModuleData(name: string): Promise<ModuleDetailData | null> {
  try {
    return await getModuleByName(name)
  } catch (error) {
    console.error('Failed to fetch module data:', error)
    return null
  }
}

export default async function ModuleDetailPage({ 
  params 
}: { 
  params: Promise<{ name: string }> 
}) {
  const { name } = await params
  const data = await getModuleData(name)
  
  if (!data) {
    notFound()
  }
  
  const { module, statistics, tables, anomalies, recommendations } = data
  
  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm">
        <Link href="/modules" className="text-blue-600 dark:text-blue-400 hover:underline">
          Modules
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-gray-900 dark:text-gray-100 font-medium">{module.name}</span>
      </nav>
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {module.name}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {module.description_en}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className={cn(
            'px-3 py-1 rounded-full text-sm font-medium',
            module.health_score >= 80 ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
            module.health_score >= 60 ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
            'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
          )}>
            Health: {module.health_score}%
          </span>
        </div>
      </div>
      
      {/* Summary Cards */}
      <SummaryCardsGrid columns={4}>
        <SummaryCard
          title="Tables"
          value={module.table_count}
          subtitle={`${tables.filter(t => t.has_primary_key).length} with PK`}
        />
        <SummaryCard
          title="Total Rows"
          value={formatNumber(module.total_rows)}
          subtitle={`${statistics.tables_over_1m_rows} tables > 1M rows`}
        />
        <SummaryCard
          title="Total Size"
          value={formatBytes(module.total_size_bytes)}
          subtitle={`Avg: ${statistics.average_table_size_mb.toFixed(2)} MB`}
        />
        <SummaryCard
          title="Anomalies"
          value={anomalies.total}
          subtitle={`${anomalies.by_severity.critical} critical`}
          variant={anomalies.by_severity.critical > 0 ? 'danger' : anomalies.total > 0 ? 'warning' : 'success'}
        />
      </SummaryCardsGrid>
      
      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card variant="bordered">
          <CardBody className="text-center py-4">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Largest Table</div>
            <Link 
              href={`/tables/${encodeURIComponent(statistics.largest_table.name)}`}
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              {statistics.largest_table.name}
            </Link>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {statistics.largest_table.size_mb.toFixed(2)} MB
            </div>
          </CardBody>
        </Card>
        <Card variant="bordered">
          <CardBody className="text-center py-4">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Smallest Table</div>
            <Link 
              href={`/tables/${encodeURIComponent(statistics.smallest_table.name)}`}
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              {statistics.smallest_table.name}
            </Link>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {statistics.smallest_table.size_mb.toFixed(2)} MB
            </div>
          </CardBody>
        </Card>
        <Card variant="bordered">
          <CardBody className="text-center py-4">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Empty Tables</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {statistics.empty_tables_count}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              of {module.table_count} total
            </div>
          </CardBody>
        </Card>
      </div>
      
      {/* Tables List */}
      <Card variant="bordered">
        <CardHeader>
          <CardTitle>Tables in Module</CardTitle>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {tables.length} tables
          </p>
        </CardHeader>
        <CardBody className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Table Name</TableHead>
                <TableHead>Rows</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Engine</TableHead>
                <TableHead>PK</TableHead>
                <TableHead>Indexes</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Issues</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tables.map((table) => (
                <TableRow key={table.name}>
                  <TableCell>
                    <Link 
                      href={`/tables/${encodeURIComponent(table.name)}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      {table.name}
                    </Link>
                  </TableCell>
                  <TableCell>{formatNumber(table.row_count)}</TableCell>
                  <TableCell>{formatBytes(table.size_bytes)}</TableCell>
                  <TableCell>
                    <Badge variant="default" size="sm">{table.engine}</Badge>
                  </TableCell>
                  <TableCell>
                    {table.has_primary_key ? (
                      <span className="text-green-600 dark:text-green-400">✓</span>
                    ) : (
                      <span className="text-red-600 dark:text-red-400">✗</span>
                    )}
                  </TableCell>
                  <TableCell>{table.index_count}</TableCell>
                  <TableCell>
                    <SeverityBadge severity={table.severity} />
                  </TableCell>
                  <TableCell>
                    {table.issues.length > 0 ? (
                      <Badge variant="warning">{table.issues.length}</Badge>
                    ) : (
                      <span className="text-green-600 dark:text-green-400">0</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
      
      {/* Anomalies */}
      {anomalies.total > 0 && (
        <Card variant="bordered">
          <CardHeader>
            <CardTitle>Anomalies</CardTitle>
          </CardHeader>
          <CardBody className="p-0">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                      Table
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                      Issue
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                      Severity
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {anomalies.issues.map((issue, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link 
                          href={`/tables/${encodeURIComponent(issue.table)}`}
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {issue.table}
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                        {issue.issue}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <SeverityBadge severity={issue.severity} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      )}
      
      {/* Recommendations */}
      {recommendations.length > 0 && (
        <Card variant="bordered">
          <CardHeader>
            <CardTitle>Recommendations</CardTitle>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {recommendations.length} recommendations to improve this module
            </p>
          </CardHeader>
          <CardBody className="space-y-4">
            {recommendations.map((rec, idx) => (
              <SQLPreview
                key={idx}
                sql={rec.sql}
                title={`${rec.priority} Priority: ${rec.action}`}
                description={rec.reason}
              />
            ))}
          </CardBody>
        </Card>
      )}
    </div>
  )
}
