'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { cn } from '@/lib/utils'

interface HealthScoreIndicatorProps {
  score: number
  grade: string
  breakdown?: {
    primary_key_health: number
    index_health: number
    table_usage_health: number
  }
  recommendation?: string
  size?: 'sm' | 'md' | 'lg'
  showBreakdown?: boolean
}

export function HealthScoreIndicator({ 
  score, 
  grade, 
  breakdown, 
  recommendation,
  size = 'md',
  showBreakdown = false 
}: HealthScoreIndicatorProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return '#10b981' // green
    if (score >= 60) return '#f59e0b' // yellow
    return '#ef4444' // red
  }
  
  const getGradeColor = (grade: string) => {
    if (['A', 'B'].includes(grade)) return 'text-green-600 dark:text-green-400'
    if (grade === 'C') return 'text-yellow-600 dark:text-yellow-400'
    return 'text-red-600 dark:text-red-400'
  }
  
  const color = getScoreColor(score)
  
  const sizes = {
    sm: { outerRadius: 60, innerRadius: 45, fontSize: 'text-2xl' },
    md: { outerRadius: 80, innerRadius: 60, fontSize: 'text-4xl' },
    lg: { outerRadius: 100, innerRadius: 80, fontSize: 'text-5xl' },
  }
  
  const { outerRadius, innerRadius, fontSize } = sizes[size]
  
  const data = [
    { name: 'Score', value: score },
    { name: 'Remaining', value: 100 - score },
  ]
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: outerRadius * 2 + 40, height: outerRadius * 2 + 40 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              strokeWidth={0}
            >
              <Cell fill={color} />
              <Cell fill="#e5e7eb" className="dark:fill-gray-700" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={cn(fontSize, 'font-bold', getGradeColor(grade))}>
            {grade}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {score}%
          </span>
        </div>
      </div>
      
      {showBreakdown && breakdown && (
        <div className="mt-4 grid grid-cols-3 gap-4 w-full">
          <div className="text-center">
            <div className="text-xs text-gray-500 dark:text-gray-400">Primary Key</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {breakdown.primary_key_health.toFixed(1)}%
            </div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500 dark:text-gray-400">Index</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {breakdown.index_health.toFixed(1)}%
            </div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500 dark:text-gray-400">Usage</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {breakdown.table_usage_health.toFixed(1)}%
            </div>
          </div>
        </div>
      )}
      
      {recommendation && (
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 text-center">
          {recommendation}
        </p>
      )}
    </div>
  )
}