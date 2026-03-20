'use client'

import { useState } from 'react'
import { Card, CardHeader, CardBody } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SQLPreviewProps {
  sql: string
  title?: string
  description?: string
  maxHeight?: number
  className?: string
}

export function SQLPreview({ 
  sql, 
  title = 'SQL Statement',
  description,
  maxHeight = 200,
  className 
}: SQLPreviewProps) {
  const [copied, setCopied] = useState(false)
  const [expanded, setExpanded] = useState(false)
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(sql)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }
  
  // Simple SQL syntax highlighting
  const highlightSQL = (code: string) => {
    const keywords = [
      'SELECT', 'FROM', 'WHERE', 'AND', 'OR', 'NOT', 'IN', 'JOIN', 'LEFT', 'RIGHT',
      'INNER', 'OUTER', 'ON', 'GROUP', 'BY', 'ORDER', 'HAVING', 'LIMIT', 'OFFSET',
      'INSERT', 'INTO', 'VALUES', 'UPDATE', 'SET', 'DELETE', 'CREATE', 'ALTER',
      'DROP', 'TABLE', 'INDEX', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'UNIQUE',
      'NULL', 'NOT NULL', 'DEFAULT', 'AUTO_INCREMENT', 'ENGINE', 'CHARSET', 'COLLATE',
      'ADD', 'CONSTRAINT', 'VARCHAR', 'INT', 'INTEGER', 'BIGINT', 'TEXT', 'DATETIME',
      'TIMESTAMP', 'BOOLEAN', 'DECIMAL', 'FLOAT', 'DOUBLE', 'IF', 'EXISTS'
    ]
    
    const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi')
    return code
      .replace(regex, '<span class="text-blue-600 dark:text-blue-400 font-semibold">$1</span>')
      .replace(/`([^`]+)`/g, '<span class="text-green-600 dark:text-green-400">`$1`</span>')
      .replace(/'([^']+)'/g, '<span class="text-orange-600 dark:text-orange-400">\'$1\'</span>')
  }
  
  const lines = sql.split('\n')
  const needsExpansion = lines.length > 10 || sql.length > 500
  
  return (
    <Card variant="bordered" className={className}>
      <CardHeader className="flex flex-row items-center justify-between py-3">
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-gray-100">{title}</h4>
          {description && (
            <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
          )}
        </div>
        <Button variant="ghost" size="sm" onClick={handleCopy}>
          {copied ? (
            <span className="text-green-600 dark:text-green-400">Copied!</span>
          ) : (
            <span>Copy</span>
          )}
        </Button>
      </CardHeader>
      <CardBody className="p-0">
        <div 
          className={cn(
            'overflow-auto bg-gray-50 dark:bg-gray-900 font-mono text-sm',
          )}
          style={{ maxHeight: expanded ? undefined : maxHeight }}
        >
          <pre className="p-4">
            <code 
              dangerouslySetInnerHTML={{ __html: highlightSQL(sql) }}
              className="text-gray-800 dark:text-gray-200"
            />
          </pre>
        </div>
        {needsExpansion && !expanded && (
          <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setExpanded(true)}
              className="w-full"
            >
              Show More
            </Button>
          </div>
        )}
      </CardBody>
    </Card>
  )
}

interface IndexRecommendationCardProps {
  priority: string
  table: string
  indexType: string
  columns: string[]
  reason: string
  impact: string
  sql: string
  className?: string
}

export function IndexRecommendationCard({
  priority,
  table,
  indexType,
  columns,
  reason,
  impact,
  sql,
  className,
}: IndexRecommendationCardProps) {
  const priorityVariant = priority.toUpperCase() === 'HIGH' ? 'critical' 
    : priority.toUpperCase() === 'MEDIUM' ? 'warning' 
    : 'default'
  
  return (
    <Card variant="bordered" className={cn('border-l-4', 
      priorityVariant === 'critical' && 'border-l-red-500',
      priorityVariant === 'warning' && 'border-l-yellow-500',
      className
    )}>
      <CardBody>
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className={cn(
              'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium',
              priorityVariant === 'critical' && 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
              priorityVariant === 'warning' && 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
              priorityVariant === 'default' && 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
            )}>
              {priority}
            </span>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-2">
              Add {indexType} on {table}
            </h4>
          </div>
        </div>
        
        <div className="space-y-3">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Columns:</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {columns.map((col, i) => (
                <span 
                  key={col}
                  className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-sm"
                >
                  {col}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Reason:</span>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{reason}</p>
          </div>
          
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Impact:</span>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{impact}</p>
          </div>
          
          <SQLPreview sql={sql} title="SQL" maxHeight={100} />
        </div>
      </CardBody>
    </Card>
  )
}