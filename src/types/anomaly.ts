// Anomaly Types

import { ErrorDetail } from './overview';

export interface PaginationMeta {
  page: number;
  limit: number;
  total_count: number;
  total_pages: number;
  has_next_page: boolean;
  has_prev_page: boolean;
}

export interface SeverityBreakdown {
  critical: number;
  warning: number;
  info: number;
}

export interface AnomalyCategory {
  name: string;
  display_name: string;
  description: string;
  count: number;
  severity_breakdown: SeverityBreakdown;
  percentage_of_total?: number;
}

export interface SeverityDistribution {
  critical: { count: number; percentage: number; tables_affected: number };
  warning: { count: number; percentage: number; tables_affected: number };
  info: { count: number; percentage: number; tables_affected: number };
}

export interface PriorityAction {
  priority: number;
  action: string;
}

export interface AnomalySummaryData {
  summary: {
    total_anomalies: number;
    critical: number;
    warning: number;
    info: number;
    affected_tables: number;
    health_impact: string;
  };
  categories: AnomalyCategory[];
  severity_distribution: SeverityDistribution;
  priority_actions: PriorityAction[];
}

export interface AnomalyTable {
  name: string;
  module: string;
  row_count: number;
  size_bytes: number;
  size_mb: number;
  engine: string;
  severity: string;
  issue: string;
  recommendation: string;
  impact: string;
}

export interface AnomalyCategoryData {
  category: AnomalyCategory;
  tables: AnomalyTable[];
}

export interface AnomalySummaryResponse {
  success: boolean;
  timestamp: string;
  generated_at: string;
  data: AnomalySummaryData;
  error?: ErrorDetail;
}

export interface AnomalyCategoryResponse {
  success: boolean;
  timestamp: string;
  generated_at: string;
  pagination: PaginationMeta;
  data: AnomalyCategoryData;
  error?: ErrorDetail;
}