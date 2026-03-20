import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAnomalyCategoryByName } from '@/lib/data-loader'

// Force dynamic rendering since we use no-store fetch
export const dynamic = 'force-dynamic'

import { Card, CardHeader, CardBody, CardTitle } from '@/components/ui/card'
import { Badge, SeverityBadge } from '@/components/ui/badge'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'
import { formatBytes, formatNumber, formatCategoryName } from '@/lib/utils'

interface AnomalyTable {
  name: string
  module: string
  row_count: number
  size_bytes: number
  size_mb: number
  engine: string
  severity: string
  issue: string
  recommendation: string
  impact: string
}

interface AnomalyCategoryData {
  category: {
    name: string
    display_name: string
    description: string
    count: number
    severity_breakdown: { critical: number; warning: number; info: number }
  }
  tables: AnomalyTable[]
}

async function getCategoryData(category: string): Promise<AnomalyCategoryData | null> {
  try {
    const result = await getAnomalyCategoryByName(category)
    if (!result) return null
    return {
      category: result.category,
      tables: result.tables,
    }
  } catch (error) {
    console.error('Failed to fetch category data:', error)
    return null
  }
}

export default async function AnomalyCategoryPage({ 
  params 
}: { 
  params: Promise<{ category: string }> 
}) {
  const { category: categoryName } = await params
  const data = await getCategoryData(categoryName)
  
  if (!data) {
    notFound()
  }
  
  const { category, tables } = data
  
  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm">
        <Link href="/anomalies" className="text-blue-600 dark:text-blue-400 hover:underline">
          Anomalies
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-gray-900 dark:text-gray-100 font-medium">{category.display_name}</span>
      </nav>
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {category.display_name}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {category.description}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="default">{category.count} issues</Badge>
        </div>
      </div>
      
      {/* Severity Summary */}
      <div className="grid grid-cols-3 gap-4">
        <Card variant="bordered" className="border-l-4 border-l-red-500">
          <CardBody className="text-center py-4">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">
              {category.severity_breakdown.critical}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Critical</div>
          </CardBody>
        </Card>
        <Card variant="bordered" className="border-l-4 border-l-yellow-500">
          <CardBody className="text-center py-4">
            <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
              {category.severity_breakdown.warning}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Warning</div>
          </CardBody>
        </Card>
        <Card variant="bordered" className="border-l-4 border-l-blue-500">
          <CardBody className="text-center py-4">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {category.severity_breakdown.info}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Info</div>
          </CardBody>
        </Card>
      </div>
      
      {/* Tables List */}
      <Card variant="bordered">
        <CardHeader>
          <CardTitle>Affected Tables</CardTitle>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {tables.length} tables with this issue
          </p>
        </CardHeader>
        <CardBody className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Table</TableHead>
                <TableHead>Module</TableHead>
                <TableHead>Rows</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Issue</TableHead>
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
                  <TableCell>
                    <Link 
                      href={`/modules/${encodeURIComponent(table.module)}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                    >
                      {table.module}
                    </Link>
                  </TableCell>
                  <TableCell>{formatNumber(table.row_count)}</TableCell>
                  <TableCell>{formatBytes(table.size_bytes)}</TableCell>
                  <TableCell>
                    <SeverityBadge severity={table.severity} />
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {table.issue}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
      
      {/* Recommendations */}
      <Card variant="bordered">
        <CardHeader>
          <CardTitle>Recommendations</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="space-y-4">
            {tables.slice(0, 5).map((table, idx) => (
              <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <Link 
                    href={`/tables/${encodeURIComponent(table.name)}`}
                    className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {table.name}
                  </Link>
                  <SeverityBadge severity={table.severity} />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {table.recommendation}
                </p>
                {table.impact && (
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    Impact: {table.impact}
                  </p>
                )}
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
