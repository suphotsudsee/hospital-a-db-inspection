import Link from 'next/link'
import { Card, CardHeader, CardBody, CardTitle } from '@/components/ui/card'
import { getAllModules } from '@/lib/data-loader'

// Force dynamic rendering since we use no-store fetch
export const dynamic = 'force-dynamic'

import { ModuleCard, ModuleList } from '@/components/features/module-card'
import { SummaryCard, SummaryCardsGrid } from '@/components/features/summary-card'
import { SkeletonCard } from '@/components/ui/skeleton'
import { SearchInput } from '@/components/ui/input'
import { formatBytes, formatNumber, cn } from '@/lib/utils'

interface Module {
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

interface ModulesData {
  modules: Module[]
  total_count: number
  statistics: {
    average_table_count: number
    average_size_gb: number
    total_anomaly_count: number
  }
}

async function getModulesData(): Promise<ModulesData | null> {
  try {
    return await getAllModules()
  } catch (error) {
    console.error('Failed to fetch modules data:', error)
    return null
  }
}

export default async function ModulesPage() {
  const data = await getModulesData()
  
  if (!data) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Database Modules
        </h1>
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            Unable to load modules. Please try again later.
          </p>
        </div>
      </div>
    )
  }
  
  const { modules, total_count, statistics } = data
  
  // Sort modules by size
  const sortedModules = [...modules].sort((a, b) => b.total_size_bytes - a.total_size_bytes)
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Database Modules
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {total_count} modules • {formatNumber(statistics.total_anomaly_count)} total anomalies
          </p>
        </div>
      </div>
      
      {/* Summary Cards */}
      <SummaryCardsGrid columns={3}>
        <SummaryCard
          title="Total Modules"
          value={total_count}
          subtitle={`${statistics.average_table_count} tables avg`}
        />
        <SummaryCard
          title="Total Anomalies"
          value={statistics.total_anomaly_count}
          variant={statistics.total_anomaly_count > 0 ? 'warning' : 'success'}
        />
        <SummaryCard
          title="Avg Size"
          value={`${statistics.average_size_gb.toFixed(2)} GB`}
          subtitle="Per module"
        />
      </SummaryCardsGrid>
      
      {/* Search and Filters */}
      <Card variant="bordered">
        <CardBody className="py-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <SearchInput placeholder="Search modules..." />
            </div>
            <div className="flex gap-2">
              <select className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                <option value="size">Sort by Size</option>
                <option value="name">Sort by Name</option>
                <option value="anomalies">Sort by Anomalies</option>
                <option value="health">Sort by Health</option>
              </select>
            </div>
          </div>
        </CardBody>
      </Card>
      
      {/* Module Grid */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          All Modules
        </h2>
        <ModuleList modules={sortedModules.map(m => ({
          name: m.name,
          descriptionTh: m.description_th,
          descriptionEn: m.description_en,
          tableCount: m.table_count,
          totalRows: m.total_rows,
          totalSizeBytes: m.total_size_bytes,
          anomalyCount: m.anomaly_count,
          healthScore: m.health_score,
        }))} />
      </div>
      
      {/* Module Details Table (Alternative View) */}
      <Card variant="bordered">
        <CardHeader>
          <CardTitle>Module Summary</CardTitle>
        </CardHeader>
        <CardBody className="p-0">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Module
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Tables
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Rows
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Size
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Health
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Anomalies
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {sortedModules.map((module) => (
                  <tr key={module.name} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link 
                        href={`/modules/${encodeURIComponent(module.name)}`}
                        className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                      >
                        {module.name}
                      </Link>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">
                        {module.description_en}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                      {formatNumber(module.table_count)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                      {formatNumber(module.total_rows)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                      {formatBytes(module.total_size_bytes)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={cn(
                        'px-2 py-1 rounded-full text-xs font-medium',
                        module.health_score >= 80 ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                        module.health_score >= 60 ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                        'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                      )}>
                        {module.health_score}%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {module.anomaly_count > 0 ? (
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                          {module.anomaly_count}
                        </span>
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
    </div>
  )
}
