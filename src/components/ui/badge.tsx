import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'critical' | 'warning' | 'info' | 'success'
  size?: 'sm' | 'md'
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center font-medium rounded-full'
    
    const variants = {
      default: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
      critical: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
      warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
      info: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      success: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    }
    
    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-xs',
    }
    
    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

interface PriorityBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  priority: 'HIGH' | 'MEDIUM' | 'LOW' | string
}

const PriorityBadge = forwardRef<HTMLSpanElement, PriorityBadgeProps>(
  ({ priority, className, ...props }, ref) => {
    const p = priority.toUpperCase()
    const variant = p === 'HIGH' ? 'critical' : p === 'MEDIUM' ? 'warning' : 'default'
    
    return (
      <Badge ref={ref} variant={variant} className={className} {...props}>
        {p}
      </Badge>
    )
  }
)

PriorityBadge.displayName = 'PriorityBadge'

interface SeverityBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  severity: 'CRITICAL' | 'HIGH' | 'WARNING' | 'MEDIUM' | 'INFO' | 'LOW' | string
}

const SeverityBadge = forwardRef<HTMLSpanElement, SeverityBadgeProps>(
  ({ severity, className, ...props }, ref) => {
    const s = severity.toUpperCase()
    const variant = 
      s === 'CRITICAL' || s === 'HIGH' ? 'critical' :
      s === 'WARNING' || s === 'MEDIUM' ? 'warning' :
      s === 'SUCCESS' ? 'success' : 'info'
    
    return (
      <Badge ref={ref} variant={variant} className={className} {...props}>
        {severity}
      </Badge>
    )
  }
)

SeverityBadge.displayName = 'SeverityBadge'

export { Badge, PriorityBadge, SeverityBadge }
export type { BadgeProps, PriorityBadgeProps, SeverityBadgeProps }