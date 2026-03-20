'use client'

import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  TooltipProps 
} from 'recharts'
import { formatBytes, formatNumber } from '@/lib/utils'

interface SizeBarChartDataItem {
  name: string
  value: number
  secondaryValue?: number
  extra?: {
    rows?: number
    module?: string
  }
}

interface SizeBarChartProps {
  data: SizeBarChartDataItem[]
  title?: string
  valueLabel?: string
  secondaryValueLabel?: string
  height?: number
  showGrid?: boolean
  color?: string
  secondaryColor?: string
  formatType?: 'bytes' | 'number' | 'percent'
}

export function SizeBarChart({ 
  data, 
  title,
  valueLabel = 'Size',
  secondaryValueLabel,
  height = 300,
  showGrid = true,
  color = '#3b82f6',
  secondaryColor = '#10b981',
  formatType = 'bytes'
}: SizeBarChartProps) {
  const formatValue = (value: number) => {
    switch (formatType) {
      case 'bytes':
        return formatBytes(value)
      case 'number':
        return formatNumber(value)
      case 'percent':
        return `${value.toFixed(1)}%`
      default:
        return value.toString()
    }
  }
  
  const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      const mainData = payload[0].payload
      return (
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="font-medium text-gray-900 dark:text-gray-100 mb-1">{label}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {valueLabel}: {formatValue(mainData.value)}
          </p>
          {secondaryValueLabel && mainData.secondaryValue !== undefined && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {secondaryValueLabel}: {formatValue(mainData.secondaryValue)}
            </p>
          )}
          {mainData.extra?.rows !== undefined && (
            <p className="text-sm text-gray-500">
              Rows: {formatNumber(mainData.extra.rows)}
            </p>
          )}
          {mainData.extra?.module && (
            <p className="text-sm text-gray-500">
              Module: {mainData.extra.module}
            </p>
          )}
        </div>
      )
    }
    return null
  }
  
  // Truncate long names
  const formattedData = data.map(item => ({
    ...item,
    displayName: item.name.length > 15 ? `${item.name.substring(0, 15)}...` : item.name,
  }))
  
  return (
    <div>
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          {title}
        </h3>
      )}
      <div style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={formattedData} 
            layout="vertical"
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            {showGrid && (
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="#e5e7eb"
                className="dark:stroke-gray-700"
              />
            )}
            <XAxis 
              type="number"
              tickFormatter={formatValue}
              tick={{ fontSize: 12 }}
              stroke="#9ca3af"
              className="dark:stroke-gray-500"
            />
            <YAxis 
              type="category"
              dataKey="displayName"
              width={100}
              tick={{ fontSize: 11 }}
              stroke="#9ca3af"
              className="dark:stroke-gray-500"
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="value" 
              fill={color}
              radius={[0, 4, 4, 0]}
            />
            {secondaryValueLabel && (
              <Bar 
                dataKey="secondaryValue" 
                fill={secondaryColor}
                radius={[0, 4, 4, 0]}
              />
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

interface AnomalyBarChartProps {
  data: { name: string; critical: number; warning: number; info: number }[]
  title?: string
  height?: number
}

export function AnomalyBarChart({ data, title, height = 300 }: AnomalyBarChartProps) {
  const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="font-medium text-gray-900 dark:text-gray-100 mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      )
    }
    return null
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
          <BarChart 
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="name"
              tick={{ fontSize: 11 }}
              stroke="#9ca3af"
            />
            <YAxis tick={{ fontSize: 11 }} stroke="#9ca3af" />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="critical" stackId="a" fill="#ef4444" name="Critical" />
            <Bar dataKey="warning" stackId="a" fill="#f59e0b" name="Warning" />
            <Bar dataKey="info" stackId="a" fill="#3b82f6" name="Info" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}