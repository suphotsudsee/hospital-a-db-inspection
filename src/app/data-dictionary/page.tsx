import Link from 'next/link'
import { Card, CardHeader, CardBody, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SearchInput } from '@/components/ui/input'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'
import { SummaryCard, SummaryCardsGrid } from '@/components/features/summary-card'
import { getDataDictionary } from '@/lib/data-loader'
import { formatNumber, formatDisplayDateTime } from '@/lib/utils'

export const dynamic = 'force-dynamic'

interface DataDictionaryPageData {
  report: {
    path: string
    database: string
    server_version: string
    generated_at: string
    total_tables: number
  }
  summary: {
    total_tables: number
    total_columns: number
    total_rows: number
    modules_count: number
    tables_with_pk: number
    tables_without_pk: number
  }
  modules: Array<{
    name: string
    description_th: string
    description_en: string
    table_count: number
    total_rows: number
    total_columns: number
  }>
  filters: {
    module: string | null
    query: string
  }
  tables: Array<{
    name: string
    module: string
    row_count: number
    column_count: number
    engine: string
    has_primary_key: boolean
    primary_key: string[]
    comment: string
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
}

async function loadPageData(
  page: number,
  query: string,
  moduleName: string
): Promise<DataDictionaryPageData | null> {
  try {
    return await getDataDictionary({
      page,
      query,
      module: moduleName,
      limit: 25,
    })
  } catch (error) {
    console.error('Failed to load data dictionary:', error)
    return null
  }
}

export default async function DataDictionaryPage({
  searchParams,
}: {
  searchParams: {
    page?: string
    q?: string
    module?: string
  }
}) {
  const page = parseInt(searchParams.page || '1', 10)
  const query = searchParams.q || ''
  const moduleName = searchParams.module || ''
  const data = await loadPageData(page, query, moduleName)

  if (!data) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Data Dictionary
        </h1>
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            Unable to load the data dictionary report.
          </p>
        </div>
      </div>
    )
  }

  const createHref = (overrides: Record<string, string | number | undefined>) => {
    const params = new URLSearchParams()
    const nextQuery = overrides.q ?? data.filters.query
    const nextModule = overrides.module ?? data.filters.module ?? ''
    const nextPage = overrides.page ?? data.pagination.page

    if (nextQuery) params.set('q', String(nextQuery))
    if (nextModule) params.set('module', String(nextModule))
    if (nextPage && Number(nextPage) > 1) params.set('page', String(nextPage))

    const queryString = params.toString()
    return queryString ? `/data-dictionary?${queryString}` : '/data-dictionary'
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Data Dictionary
          </h1>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            Structured view of the report in <span className="font-medium text-gray-700 dark:text-gray-300">{data.report.path}</span>
          </p>
        </div>
        <Card variant="bordered" className="min-w-full lg:min-w-[320px]">
          <CardBody className="py-4">
            <div className="text-sm text-gray-500 dark:text-gray-400">Report source</div>
            <div className="mt-2 text-sm text-gray-900 dark:text-gray-100">
              <div>{data.report.database}</div>
              <div>{data.report.server_version}</div>
              <div className="mt-1 text-gray-500 dark:text-gray-400">
                Generated: {formatDisplayDateTime(data.report.generated_at)}
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      <SummaryCardsGrid columns={4}>
        <SummaryCard title="Tables" value={data.summary.total_tables} />
        <SummaryCard title="Columns" value={formatNumber(data.summary.total_columns)} />
        <SummaryCard title="Rows" value={formatNumber(data.summary.total_rows)} />
        <SummaryCard title="Modules" value={data.summary.modules_count} />
      </SummaryCardsGrid>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card variant="bordered" className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Browse Dictionary</CardTitle>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Filter by table name or module from the generated report.
            </p>
          </CardHeader>
          <CardBody className="space-y-4">
            <form action="/data-dictionary" method="get" className="space-y-3">
              <SearchInput
                name="q"
                defaultValue={data.filters.query}
                placeholder="Search table name or description..."
              />
              {data.filters.module && (
                <input type="hidden" name="module" value={data.filters.module} />
              )}
            </form>
            <div className="flex flex-wrap gap-2">
              <Link href="/data-dictionary">
                <Badge variant={!data.filters.module ? 'info' : 'default'} className="cursor-pointer">
                  All modules
                </Badge>
              </Link>
              {data.modules.slice(0, 12).map((module) => (
                <Link key={module.name} href={createHref({ module: module.name, page: 1 })}>
                  <Badge
                    variant={data.filters.module === module.name ? 'info' : 'default'}
                    className="cursor-pointer"
                  >
                    {module.name} ({module.table_count})
                  </Badge>
                </Link>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card variant="bordered">
          <CardHeader>
            <CardTitle>Coverage</CardTitle>
          </CardHeader>
          <CardBody className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">With primary key</span>
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {formatNumber(data.summary.tables_with_pk)}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">Without primary key</span>
              <span className="font-medium text-red-600 dark:text-red-400">
                {formatNumber(data.summary.tables_without_pk)}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">PK coverage</span>
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {((data.summary.tables_with_pk / data.summary.total_tables) * 100).toFixed(1)}%
              </span>
            </div>
            <div className="pt-2 text-xs text-gray-500 dark:text-gray-400">
              Total tables reported: {formatNumber(data.report.total_tables)}
            </div>
          </CardBody>
        </Card>
      </div>

      <Card variant="bordered">
        <CardHeader>
          <CardTitle>Modules in Report</CardTitle>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {data.modules.length} groups found in the generated data dictionary
          </p>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {data.modules.map((module) => (
              <Link key={module.name} href={createHref({ module: module.name, page: 1 })}>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 transition-colors hover:border-blue-300 hover:bg-blue-50/60 dark:border-gray-700 dark:bg-gray-900/40 dark:hover:border-blue-500 dark:hover:bg-blue-950/20">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">{module.name}</div>
                      <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {module.description_en || module.description_th || 'Module grouping from report'}
                      </div>
                    </div>
                    <Badge variant="default">{module.table_count}</Badge>
                  </div>
                  <div className="mt-3 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                    <span>{formatNumber(module.total_rows)} rows</span>
                    <span>{formatNumber(module.total_columns)} columns</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardBody>
      </Card>

      <Card variant="bordered">
        <CardHeader>
          <CardTitle>Tables</CardTitle>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Showing {data.tables.length} of {formatNumber(data.pagination.total_count)} tables
            {data.filters.module ? ` in ${data.filters.module}` : ''}
            {data.filters.query ? ` matching "${data.filters.query}"` : ''}
          </p>
        </CardHeader>
        <CardBody className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Table</TableHead>
                <TableHead>Module</TableHead>
                <TableHead className="text-right">Rows</TableHead>
                <TableHead className="text-right">Columns</TableHead>
                <TableHead>Engine</TableHead>
                <TableHead>Primary Key</TableHead>
                <TableHead className="text-center">Issues</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.tables.map((table) => (
                <TableRow key={table.name}>
                  <TableCell className="whitespace-normal">
                    <div>
                      <Link
                        href={`/tables/${encodeURIComponent(table.name)}`}
                        className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {table.name}
                      </Link>
                      {table.comment && (
                        <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                          {table.comment}
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Link
                      href={createHref({ module: table.module, page: 1 })}
                      className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                    >
                      {table.module}
                    </Link>
                  </TableCell>
                  <TableCell className="text-right">{formatNumber(table.row_count)}</TableCell>
                  <TableCell className="text-right">{formatNumber(table.column_count)}</TableCell>
                  <TableCell>
                    <Badge variant="default">{table.engine}</Badge>
                  </TableCell>
                  <TableCell>
                    {table.has_primary_key ? (
                      <div className="flex flex-wrap gap-1">
                        {table.primary_key.map((column) => (
                          <Badge key={column} variant="success">{column}</Badge>
                        ))}
                      </div>
                    ) : (
                      <Badge variant="critical">Missing</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {table.anomaly_count > 0 ? (
                      <Badge variant={table.anomaly_count > 2 ? 'critical' : 'warning'}>
                        {table.anomaly_count}
                      </Badge>
                    ) : (
                      <Badge variant="success">0</Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>

      {data.pagination.total_pages > 1 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Page {data.pagination.page} of {data.pagination.total_pages}
          </div>
          <div className="flex gap-2">
            {data.pagination.has_prev_page && (
              <Link
                href={createHref({ page: data.pagination.page - 1 })}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Previous
              </Link>
            )}
            {data.pagination.has_next_page && (
              <Link
                href={createHref({ page: data.pagination.page + 1 })}
                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
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
