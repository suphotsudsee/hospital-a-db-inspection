import Link from 'next/link'
import { getTableByName } from '@/lib/data-loader'

// Force dynamic rendering since we use no-store fetch
export const dynamic = 'force-dynamic'

import { Card, CardHeader, CardBody, CardTitle } from '@/components/ui/card'
import { Badge, SeverityBadge } from '@/components/ui/badge'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'
import { SummaryCard, SummaryCardsGrid } from '@/components/features/summary-card'
import { SQLPreview } from '@/components/features/sql-preview'
import { formatBytes, formatNumber, cn } from '@/lib/utils'

interface TableDetail {
  name: string
  module: string
  row_count: number
  data_size_bytes: number
  index_size_bytes: number
  engine: string
  comment: string
  columns: Array<{
    name: string
    type: string
    nullable: boolean
    key: string
    default: string | null
    extra: string
    comment: string
  }>
  primary_key: string[]
  foreign_keys: Array<{
    columns: string[]
    referenced_table: string
    referenced_columns: string[]
  }>
  indexes: Array<{
    name: string
    columns: string[]
    unique: boolean
  }>
  has_primary_key: boolean
  index_count: number
  column_count: number
  purpose: string
  severity: string
  issues: Array<{ type: string; severity: string; message: string }>
  recommendations: Array<{ priority: string; action: string; reason: string; sql: string }>
}

async function getTableData(name: string): Promise<TableDetail | null> {
  try {
    return await getTableByName(name)
  } catch (error) {
    console.error('Failed to fetch table data:', error)
    return null
  }
}

export default async function TableDetailPage({ 
  params 
}: { 
  params: { name: string } 
}) {
  const data = await getTableData(params.name)
  
  if (!data) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Table Not Found
        </h1>
        <Card variant="bordered">
          <CardBody className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              The table &quot;{params.name}&quot; was not found.
            </p>
            <Link 
              href="/tables" 
              className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
            >
              ← Back to Tables
            </Link>
          </CardBody>
        </Card>
      </div>
    )
  }
  
  const table = data
  
  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm">
        <Link href="/tables" className="text-blue-600 dark:text-blue-400 hover:underline">
          Tables
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-gray-900 dark:text-gray-100 font-medium">{table.name}</span>
      </nav>
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {table.name}
          </h1>
          <Link 
            href={`/modules/${encodeURIComponent(table.module)}`}
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
          >
            {table.module}
          </Link>
        </div>
        <SeverityBadge severity={table.severity} />
      </div>
      
      {/* Summary Cards */}
      <SummaryCardsGrid columns={4}>
        <SummaryCard
          title="Rows"
          value={formatNumber(table.row_count)}
        />
        <SummaryCard
          title="Data Size"
          value={formatBytes(table.data_size_bytes)}
        />
        <SummaryCard
          title="Index Size"
          value={formatBytes(table.index_size_bytes)}
        />
        <SummaryCard
          title="Columns"
          value={table.column_count}
        />
      </SummaryCardsGrid>
      
      {/* Table Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card variant="bordered">
          <CardBody className="text-center py-4">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Engine</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              <Badge variant="default">{table.engine}</Badge>
            </div>
          </CardBody>
        </Card>
        <Card variant="bordered">
          <CardBody className="text-center py-4">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Primary Key</div>
            <div className="text-lg font-semibold">
              {table.has_primary_key ? (
                <span className="text-green-600 dark:text-green-400">✓ Yes</span>
              ) : (
                <span className="text-red-600 dark:text-red-400">✗ No</span>
              )}
            </div>
          </CardBody>
        </Card>
        <Card variant="bordered">
          <CardBody className="text-center py-4">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Indexes</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {table.index_count}
            </div>
          </CardBody>
        </Card>
      </div>
      
      {/* Issues */}
      {table.issues.length > 0 && (
        <Card variant="bordered" className="border-l-4 border-l-yellow-500">
          <CardHeader>
            <CardTitle>Issues ({table.issues.length})</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="space-y-2">
              {table.issues.map((issue, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <SeverityBadge severity={issue.severity} />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">
                      {issue.type}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {issue.message}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      )}
      
      {/* Columns */}
      <Card variant="bordered">
        <CardHeader>
          <CardTitle>Columns ({table.column_count})</CardTitle>
        </CardHeader>
        <CardBody className="p-0">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Column
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Nullable
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Key
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Default
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {table.columns.map((col) => (
                  <tr key={col.name} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                      {col.name}
                      {col.key === 'PRI' && (
                        <span className="ml-2 text-yellow-600 dark:text-yellow-400">🔑</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                      {col.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {col.nullable ? (
                        <span className="text-gray-500">NULL</span>
                      ) : (
                        <span className="text-green-600 dark:text-green-400">NOT NULL</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {col.key && (
                        <Badge variant={col.key === 'PRI' ? 'success' : col.key === 'UNI' ? 'info' : 'default'}>
                          {col.key}
                        </Badge>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                      {col.default || '-'}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400 whitespace-normal">
                      {col.comment || '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
      
      {/* Primary Key */}
      {table.primary_key.length > 0 && (
        <Card variant="bordered">
          <CardHeader>
            <CardTitle>Primary Key</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="flex flex-wrap gap-2">
              {table.primary_key.map((col) => (
                <Badge key={col} variant="success">{col}</Badge>
              ))}
            </div>
          </CardBody>
        </Card>
      )}
      
      {/* Indexes */}
      <Card variant="bordered">
        <CardHeader>
          <CardTitle>Indexes ({table.indexes.length})</CardTitle>
        </CardHeader>
        <CardBody className="p-0">
          {table.indexes.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Columns</TableHead>
                  <TableHead>Unique</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table.indexes.map((idx) => (
                  <TableRow key={idx.name}>
                    <TableCell>
                      <span className="font-medium">{idx.name}</span>
                      {idx.name === 'PRIMARY' && (
                        <span className="ml-2 text-xs text-yellow-600">PRIMARY</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {idx.columns.map((col) => (
                          <span key={col} className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs">
                            {col}
                          </span>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      {idx.unique ? (
                        <span className="text-green-600 dark:text-green-400">Yes</span>
                      ) : (
                        <span className="text-gray-500">No</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              No indexes defined
            </div>
          )}
        </CardBody>
      </Card>
      
      {/* Foreign Keys */}
      {table.foreign_keys.length > 0 && (
        <Card variant="bordered">
          <CardHeader>
            <CardTitle>Foreign Keys ({table.foreign_keys.length})</CardTitle>
          </CardHeader>
          <CardBody className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Columns</TableHead>
                  <TableHead>References</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table.foreign_keys.map((fk, idx) => (
                  <TableRow key={idx}>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {fk.columns.map((col) => (
                          <span key={col} className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded text-xs">
                            {col}
                          </span>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Link 
                        href={`/tables/${encodeURIComponent(fk.referenced_table)}`}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {fk.referenced_table}
                      </Link>
                      <span className="text-gray-500 ml-1">
                        ({fk.referenced_columns.join(', ')})
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      )}
      
      {/* Recommendations */}
      {table.recommendations.length > 0 && (
        <Card variant="bordered">
          <CardHeader>
            <CardTitle>Recommendations</CardTitle>
          </CardHeader>
          <CardBody className="space-y-4">
            {table.recommendations.map((rec, idx) => (
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
