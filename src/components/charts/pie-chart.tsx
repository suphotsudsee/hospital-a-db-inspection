'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip,
  TooltipProps 
} from 'recharts'
import { Card, CardBody } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface PieChartDataItem {
  name: string
  value: number
  percentage?: number
  color?: string
  tables?: string[]
}

interface ModuleDistributionChartProps {
  data: PieChartDataItem[]
  title?: string
  showLegend?: boolean
  height?: number
}

const COLORS = [
  '#3b82f6', // blue
  '#10b981', // green
  '#f59e0b', // yellow
  '#ef4444', // red
  '#8b5cf6', // purple
  '#ec4899', // pink
  '#06b6d4', // cyan
  '#f97316', // orange
  '#84cc16', // lime
  '#6366f1', // indigo
]

export function ModuleDistributionChart({ 
  data, 
  title,
  showLegend = true,
  height = 300 
}: ModuleDistributionChartProps) {
  const chartData = data.map((item, index) => ({
    ...item,
    color: item.color || COLORS[index % COLORS.length],
  }))
  const [selectedModule, setSelectedModule] = useState<PieChartDataItem | null>(chartData[0] || null)
  
  const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="font-medium text-gray-900 dark:text-gray-100">{data.name}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {data.value.toLocaleString()} tables
          </p>
          {data.percentage !== undefined && (
            <p className="text-sm text-gray-500">
              ({data.percentage.toFixed(1)}%)
            </p>
          )}
        </div>
      )
    }
    return null
  }
  
  const CustomLegend = () => {
    if (!showLegend) return null
    
    return (
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4">
        {chartData.map((item, index) => {
          return (
            <button
              key={index}
              type="button"
              onClick={() => item && setSelectedModule(item)}
              className={cn(
                'flex items-center gap-2 rounded-md px-2 py-1 transition-colors',
                selectedModule?.name === item?.name
                  ? 'bg-gray-100 dark:bg-gray-800'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-800/60'
              )}
            >
              <div 
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {item.name}
              </span>
              <span className="text-xs text-gray-400">
                ({item.value})
              </span>
            </button>
          )
        })}
      </div>
    )
  }
  
  return (
    <div>
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          {title}
        </h3>
      )}
      <div style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              dataKey="value"
              paddingAngle={2}
              stroke="none"
              onClick={(_, index) => {
                const item = chartData[index]
                if (item) setSelectedModule(item)
              }}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke={selectedModule?.name === entry.name ? '#111827' : 'none'}
                  strokeWidth={selectedModule?.name === entry.name ? 2 : 0}
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <CustomLegend />
      {selectedModule && (
        <Card variant="bordered" className="mt-6">
          <CardBody className="space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                  {selectedModule.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {selectedModule.value.toLocaleString()} tables
                  {selectedModule.percentage !== undefined && ` • ${selectedModule.percentage.toFixed(1)}% of size`}
                </p>
              </div>
              <Link
                href={`/modules/${encodeURIComponent(selectedModule.name)}`}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                View module details
              </Link>
            </div>

            {selectedModule.tables && selectedModule.tables.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {selectedModule.tables.map((table) => (
                  <Link
                    key={table}
                    href={`/tables/${encodeURIComponent(table)}`}
                    className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700 transition-colors hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50"
                  >
                    {table}
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                No tables available for this module.
              </p>
            )}
          </CardBody>
        </Card>
      )}
    </div>
  )
}
