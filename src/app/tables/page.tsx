import Link from 'next/link'
import { Card, CardHeader, CardBody, CardTitle } from '@/components/ui/card'
import { getTablesList } from '@/lib/data-loader'

// Force dynamic rendering since we use no-store fetch
export const dynamic = 'force-dynamic'

import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'
import { Badge, SeverityBadge } from '@/components/ui/badge'
import { SearchInput } from '@/components/ui/input'
import { formatBytes, formatNumber } from '@/lib/utils'

interface TablesData {
  tables: Array<{
    name: string
    module: string
    row_count: number
    size_bytes: number
    size_mb: number
    engine: string
    has_primary_key: boolean
    index_count: number
    anomaly_count: number
  }>
  pagination: {
    page: number
    limit: number
    total_count: number
    total_pages: number
    has_next_page: boolean
    has_prev_page: boolean
  }
  statistics: {
    total_count: number
    total_rows: number
    total_size_bytes: number
    tables_with_pk: number
    tables_without_pk: number
  }
}

async function getTablesData(page: number = 1, limit: number = 50): Promise<TablesData | null> {
  try {
    const result = await getTablesList(page, limit)
    return result.data
  } catch (error) {
    console.error('Failed to fetch tables data:', error)
    return null
  }
}

export default async function TablesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const resolvedSearchParams = await searchParams
  const page = parseInt(resolvedSearchParams.page || '1')
  const data = await getTablesData(page, 30)
  
  if (!data) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Database Tables
        </h1>
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            Unable to load tables. Please try again later.
          </p>
        </div>
      </div>
    )
  }
  
  const { tables, pagination, statistics } = data
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Database Tables
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {statistics.total_count} tables • {formatNumber(statistics.total_rows)} rows • {formatBytes(statistics.total_size_bytes)}
          </p>
        </div>
      </div>
      
      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card variant="bordered">
          <CardBody className="text-center py-4">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {statistics.tables_with_pk}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Tables with Primary Key
            </div>
          </CardBody>
        </Card>
        <Card variant="bordered" className="border-l-4 border-l-red-500">
          <CardBody className="text-center py-4">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">
              {statistics.tables_without_pk}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Tables without Primary Key
            </div>
          </CardBody>
        </Card>
        <Card variant="bordered">
          <CardBody className="text-center py-4">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {((statistics.tables_with_pk / statistics.total_count) * 100).toFixed(1)}%
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              PK Coverage
            </div>
          </CardBody>
        </Card>
      </div>
      
      {/* Search */}
      <Card variant="bordered">
        <CardBody className="py-4">
          <form action="/search" method="get">
            <SearchInput 
              name="q"
              placeholder="Search tables by name..." 
            />
          </form>
        </CardBody>
      </Card>
      
      {/* Tables List */}
      <Card variant="bordered">
        <CardHeader>
          <CardTitle>All Tables</CardTitle>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Showing {tables.length} of {statistics.total_count} tables
          </p>
        </CardHeader>
        <CardBody className="p-0">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Table Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Module
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Rows
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Size
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Engine
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    PK
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Indexes
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Issues
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {tables.map((table) => (
                  <tr key={table.name} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link 
                        href={`/tables/${encodeURIComponent(table.name)}`}
                        className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                      >
                        {table.name}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link 
                        href={`/modules/${encodeURIComponent(table.module)}`}
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 text-sm"
                      >
                        {table.module}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-900 dark:text-gray-100">
                      {formatNumber(table.row_count)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-900 dark:text-gray-100">
                      {formatBytes(table.size_bytes)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant="default" size="sm">{table.engine}</Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {table.has_primary_key ? (
                        <span className="text-green-600 dark:text-green-400">✓</span>
                      ) : (
                        <span className="text-red-600 dark:text-red-400">✗</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900 dark:text-gray-100">
                      {table.index_count}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {table.anomaly_count > 0 ? (
                        <Badge variant={table.anomaly_count > 2 ? 'critical' : 'warning'} size="sm">
                          {table.anomaly_count}
                        </Badge>
                      ) : (
                        <span className="text-green-600 dark:text-green-400 text-sm">0</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
      
      {/* Pagination */}
      {pagination.total_pages > 1 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Page {pagination.page} of {pagination.total_pages}
          </div>
          <div className="flex gap-2">
            {pagination.has_prev_page && (
              <Link 
                href={`/tables?page=${pagination.page - 1}`}
                className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Previous
              </Link>
            )}
            {pagination.has_next_page && (
              <Link 
                href={`/tables?page=${pagination.page + 1}`}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Next
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
