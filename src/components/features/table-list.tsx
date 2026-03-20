import Link from 'next/link'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'
import { Badge, SeverityBadge } from '@/components/ui/badge'
import { formatBytes, formatNumber, cn } from '@/lib/utils'

interface TableListItem {
  name: string
  module: string
  rowCount: number
  sizeBytes: number
  sizeMb: number
  engine: string
  hasPrimaryKey: boolean
  indexCount: number
  anomalyCount?: number
}

interface TableListProps {
  tables: TableListItem[]
  showModule?: boolean
  showAnomalyCount?: boolean
  sortable?: boolean
  onRowClick?: (table: TableListItem) => void
  className?: string
}

export function TableList({ 
  tables, 
  showModule = true,
  showAnomalyCount = true,
  sortable = false,
  onRowClick,
  className 
}: TableListProps) {
  return (
    <Table className={className}>
      <TableHeader>
        <TableRow>
          <TableHead sortable={sortable}>Table Name</TableHead>
          {showModule && <TableHead sortable={sortable}>Module</TableHead>}
          <TableHead sortable={sortable}>Rows</TableHead>
          <TableHead sortable={sortable}>Size</TableHead>
          <TableHead>Engine</TableHead>
          <TableHead>PK</TableHead>
          <TableHead>Indexes</TableHead>
          {showAnomalyCount && <TableHead>Issues</TableHead>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {tables.map((table) => (
          <TableRow 
            key={table.name}
            clickable={!!onRowClick}
            onClick={() => onRowClick?.(table)}
          >
            <TableCell>
              <Link 
                href={`/tables/${encodeURIComponent(table.name)}`}
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                {table.name}
              </Link>
            </TableCell>
            {showModule && (
              <TableCell>
                <Link 
                  href={`/modules/${encodeURIComponent(table.module)}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  {table.module}
                </Link>
              </TableCell>
            )}
            <TableCell>{formatNumber(table.rowCount)}</TableCell>
            <TableCell>{formatBytes(table.sizeBytes)}</TableCell>
            <TableCell>
              <Badge variant="default" size="sm">
                {table.engine}
              </Badge>
            </TableCell>
            <TableCell>
              {table.hasPrimaryKey ? (
                <span className="text-green-600 dark:text-green-400">✓</span>
              ) : (
                <span className="text-red-600 dark:text-red-400">✗</span>
              )}
            </TableCell>
            <TableCell>{table.indexCount}</TableCell>
            {showAnomalyCount && (
              <TableCell>
                {table.anomalyCount ? (
                  <Badge variant={table.anomalyCount > 2 ? 'critical' : 'warning'}>
                    {table.anomalyCount}
                  </Badge>
                ) : (
                  <span className="text-green-600 dark:text-green-400">0</span>
                )}
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

interface TableDetailCardProps {
  name: string
  module: string
  rowCount: number
  dataSizeBytes: number
  indexSizeBytes: number
  engine: string
  comment?: string
  hasPrimaryKey: boolean
  indexCount: number
  columnCount: number
  severity: string
  className?: string
}

export function TableDetailCard({
  name,
  module,
  rowCount,
  dataSizeBytes,
  indexSizeBytes,
  engine,
  comment,
  hasPrimaryKey,
  indexCount,
  columnCount,
  severity,
  className,
}: TableDetailCardProps) {
  return (
    <div className={cn('bg-white dark:bg-gray-800 rounded-lg p-6', className)}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{name}</h2>
          <Link 
            href={`/modules/${encodeURIComponent(module)}`}
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            {module}
          </Link>
        </div>
        <SeverityBadge severity={severity} />
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Rows</div>
          <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {formatNumber(rowCount)}
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Data Size</div>
          <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {formatBytes(dataSizeBytes)}
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Index Size</div>
          <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {formatBytes(indexSizeBytes)}
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Engine</div>
          <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {engine}
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-4 mt-4 text-sm">
        <div className="flex items-center gap-1">
          <span className={hasPrimaryKey ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
            {hasPrimaryKey ? '✓' : '✗'}
          </span>
          <span className="text-gray-600 dark:text-gray-400">Primary Key</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-gray-900 dark:text-gray-100">{indexCount}</span>
          <span className="text-gray-600 dark:text-gray-400">Indexes</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-gray-900 dark:text-gray-100">{columnCount}</span>
          <span className="text-gray-600 dark:text-gray-400">Columns</span>
        </div>
      </div>
      
      {comment && (
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 italic">
          {comment}
        </p>
      )}
    </div>
  )
}