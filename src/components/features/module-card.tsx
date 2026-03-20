import Link from 'next/link'
import { Card, CardBody } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { formatBytes, formatNumber, cn } from '@/lib/utils'

interface ModuleCardProps {
  name: string
  descriptionTh: string
  descriptionEn: string
  tableCount: number
  totalRows: number
  totalSizeBytes: number
  anomalyCount: number
  healthScore: number
  className?: string
}

export function ModuleCard({ 
  name,
  descriptionTh,
  descriptionEn,
  tableCount,
  totalRows,
  totalSizeBytes,
  anomalyCount,
  healthScore,
  className 
}: ModuleCardProps) {
  const healthColor = healthScore >= 80 ? 'text-green-600 dark:text-green-400' 
    : healthScore >= 60 ? 'text-yellow-600 dark:text-yellow-400' 
    : 'text-red-600 dark:text-red-400'
  
  const healthBg = healthScore >= 80 ? 'bg-green-100 dark:bg-green-900/30'
    : healthScore >= 60 ? 'bg-yellow-100 dark:bg-yellow-900/30'
    : 'bg-red-100 dark:bg-red-900/30'
  
  return (
    <Link href={`/modules/${encodeURIComponent(name)}`}>
      <Card 
        variant="bordered" 
        className={cn(
          'hover:shadow-md transition-all cursor-pointer',
          anomalyCount > 0 && 'border-l-4 border-l-yellow-500',
          className
        )}
      >
        <CardBody className="p-5">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                {name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">
                {descriptionEn || descriptionTh}
              </p>
            </div>
            <div className={cn(
              'px-2 py-1 rounded-full text-sm font-medium',
              healthBg,
              healthColor
            )}>
              {healthScore}%
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Tables</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {formatNumber(tableCount)}
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Rows</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {formatNumber(totalRows)}
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Size</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {formatBytes(totalSizeBytes)}
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Anomalies</div>
              <div className="text-lg font-semibold">
                {anomalyCount > 0 ? (
                  <Badge variant={anomalyCount > 3 ? 'critical' : 'warning'}>
                    {anomalyCount}
                  </Badge>
                ) : (
                  <span className="text-green-600 dark:text-green-400">0</span>
                )}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Link>
  )
}

interface ModuleListProps {
  modules: Array<{
    name: string
    descriptionTh: string
    descriptionEn: string
    tableCount: number
    totalRows: number
    totalSizeBytes: number
    anomalyCount: number
    healthScore: number
  }>
  className?: string
}

export function ModuleList({ modules, className }: ModuleListProps) {
  return (
    <div className={cn('grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3', className)}>
      {modules.map((module) => (
        <ModuleCard key={module.name} {...module} />
      ))}
    </div>
  )
}