// Utility functions for frontend

import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i]
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num)
}

export function formatDisplayDate(
  value: string | number | Date,
  options?: Intl.DateTimeFormatOptions
): string {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Bangkok',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    ...options,
  }).format(new Date(value))
}

export function formatDisplayDateTime(value: string | number | Date): string {
  return formatDisplayDate(value, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}

export function formatPercent(value: number, decimals = 1): string {
  return value.toFixed(decimals) + '%'
}

export function getHealthColor(score: number): string {
  if (score >= 80) return 'text-green-600 dark:text-green-400'
  if (score >= 60) return 'text-yellow-600 dark:text-yellow-400'
  return 'text-red-600 dark:text-red-400'
}

export function getHealthBgColor(score: number): string {
  if (score >= 80) return 'bg-green-500'
  if (score >= 60) return 'bg-yellow-500'
  return 'bg-red-500'
}

export function getSeverityClass(severity: string): string {
  const s = severity.toUpperCase()
  if (s === 'CRITICAL' || s === 'HIGH') return 'badge-critical'
  if (s === 'WARNING' || s === 'MEDIUM') return 'badge-warning'
  return 'badge-info'
}

export function getPriorityClass(priority: string): string {
  const p = priority.toUpperCase()
  if (p === 'HIGH') return 'priority-high'
  if (p === 'MEDIUM') return 'priority-medium'
  return 'priority-low'
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

export function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export function getTimestamp(): string {
  return new Date().toISOString()
}

export function getCacheExpiration(hours: number): string {
  const date = new Date()
  date.setTime(date.getTime() + hours * 60 * 60 * 1000)
  return date.toISOString()
}

export function sanitizeSearchQuery(query: string): string {
  return query.trim().replace(/[<>{}()\\]/g, '').substring(0, 100)
}

export function formatCategoryName(category: string): string {
  return category
    .replace(/-/g, '_')
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

export function calculatePagination(total: number, page: number, limit: number): {
  page: number
  limit: number
  offset: number
  total_pages: number
} {
  const totalPages = Math.ceil(total / limit)
  const validPage = Math.max(1, Math.min(page, totalPages || 1))
  const validLimit = Math.max(1, limit)
  
  return {
    page: validPage,
    limit: validLimit,
    offset: (validPage - 1) * validLimit,
    total_pages: totalPages,
  }
}
