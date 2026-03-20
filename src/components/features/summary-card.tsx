import { Card, CardHeader, CardBody } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface SummaryCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon?: React.ReactNode
  trend?: {
    value: number
    direction: 'up' | 'down'
  }
  variant?: 'default' | 'success' | 'warning' | 'danger'
  className?: string
}

export function SummaryCard({ 
  title, 
  value, 
  subtitle, 
  icon, 
  trend,
  variant = 'default',
  className 
}: SummaryCardProps) {
  const variants = {
    default: 'bg-white dark:bg-gray-800',
    success: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
    warning: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
    danger: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
  }
  
  const valueColors = {
    default: 'text-gray-900 dark:text-gray-100',
    success: 'text-green-700 dark:text-green-400',
    warning: 'text-yellow-700 dark:text-yellow-400',
    danger: 'text-red-700 dark:text-red-400',
  }
  
  return (
    <Card variant="bordered" className={cn(variants[variant], className)}>
      <CardBody className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {title}
            </p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className={cn('text-2xl font-bold', valueColors[variant])}>
                {typeof value === 'number' ? value.toLocaleString() : value}
              </span>
              {trend && (
                <span className={cn(
                  'text-sm font-medium',
                  trend.direction === 'up' 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-red-600 dark:text-red-400'
                )}>
                  {trend.direction === 'up' ? '↑' : '↓'} {Math.abs(trend.value)}%
                </span>
              )}
            </div>
            {subtitle && (
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {subtitle}
              </p>
            )}
          </div>
          {icon && (
            <div className={cn(
              'p-3 rounded-lg',
              variant === 'success' && 'bg-green-100 dark:bg-green-900/30',
              variant === 'warning' && 'bg-yellow-100 dark:bg-yellow-900/30',
              variant === 'danger' && 'bg-red-100 dark:bg-red-900/30',
              variant === 'default' && 'bg-blue-100 dark:bg-blue-900/30'
            )}>
              {icon}
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  )
}

interface SummaryCardsGridProps {
  children: React.ReactNode
  columns?: 2 | 3 | 4
  className?: string
}

export function SummaryCardsGrid({ children, columns = 4, className }: SummaryCardsGridProps) {
  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }
  
  return (
    <div className={cn('grid gap-4', gridCols[columns], className)}>
      {children}
    </div>
  )
}