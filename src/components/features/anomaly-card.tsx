import Link from 'next/link'
import { Card, CardHeader, CardBody } from '@/components/ui/card'
import { Badge, SeverityBadge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface AnomalyCardProps {
  category: string
  displayName: string
  description: string
  count: number
  severityBreakdown: {
    critical: number
    warning: number
    info: number
  }
  percentageOfTotal?: number
  className?: string
}

export function AnomalyCard({ 
  category,
  displayName,
  description, 
  count, 
  severityBreakdown,
  percentageOfTotal,
  className 
}: AnomalyCardProps) {
  const total = severityBreakdown.critical + severityBreakdown.warning + severityBreakdown.info
  
  return (
    <Link href={`/anomalies/${category}`}>
      <Card 
        variant="bordered" 
        className={cn(
          'hover:shadow-md transition-shadow cursor-pointer',
          severityBreakdown.critical > 0 && 'border-l-4 border-l-red-500',
          severityBreakdown.critical === 0 && severityBreakdown.warning > 0 && 'border-l-4 border-l-yellow-500',
          className
        )}
      >
        <CardBody className="p-5">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                {displayName}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {description}
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {count}
              </div>
              {percentageOfTotal !== undefined && (
                <div className="text-xs text-gray-500">
                  {percentageOfTotal.toFixed(1)}%
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-2 flex-wrap">
            {severityBreakdown.critical > 0 && (
              <Badge variant="critical">
                {severityBreakdown.critical} Critical
              </Badge>
            )}
            {severityBreakdown.warning > 0 && (
              <Badge variant="warning">
                {severityBreakdown.warning} Warning
              </Badge>
            )}
            {severityBreakdown.info > 0 && (
              <Badge variant="info">
                {severityBreakdown.info} Info
              </Badge>
            )}
          </div>
        </CardBody>
      </Card>
    </Link>
  )
}

interface AnomalySummaryCardProps {
  total: number
  critical: number
  warning: number
  info: number
  affectedTables: number
  healthImpact: string
  className?: string
}

export function AnomalySummaryCard({ 
  total, 
  critical, 
  warning, 
  info, 
  affectedTables,
  healthImpact,
  className 
}: AnomalySummaryCardProps) {
  const summaryLinks = [
    {
      href: '/anomalies',
      value: total,
      label: 'Total',
      valueClassName: 'text-gray-900 dark:text-gray-100',
    },
    {
      href: '/anomalies?severity=critical',
      value: critical,
      label: 'Critical',
      valueClassName: 'text-red-600 dark:text-red-400',
    },
    {
      href: '/anomalies?severity=warning',
      value: warning,
      label: 'Warning',
      valueClassName: 'text-yellow-600 dark:text-yellow-400',
    },
    {
      href: '/anomalies?severity=info',
      value: info,
      label: 'Info',
      valueClassName: 'text-blue-600 dark:text-blue-400',
    },
  ]

  return (
    <Card variant="bordered" className={cn('bg-gray-50 dark:bg-gray-800/50', className)}>
      <CardHeader>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Anomaly Summary
        </h3>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-4 gap-4 mb-4">
          {summaryLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-lg p-2 text-center transition-colors hover:bg-white dark:hover:bg-gray-800"
            >
              <div className={cn('text-2xl font-bold', item.valueClassName)}>
                {item.value}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{item.label}</div>
            </Link>
          ))}
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">Affected Tables:</span>
            <span className="font-medium text-gray-900 dark:text-gray-100">
              {affectedTables}
            </span>
          </div>
        </div>
        
        {healthImpact && (
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            {healthImpact}
          </p>
        )}
      </CardBody>
    </Card>
  )
}
