// Module Types

import { ErrorDetail } from './overview';

export interface TablePurpose {
  transaction: number;
  data: number;
  reference: number;
  link: number;
  log: number;
}

export interface TopTableInfo {
  name: string;
  rows: number;
  size_mb: number;
  purpose: string;
}

export interface ModuleStatistics {
  average_table_size_mb: number;
  largest_table: { name: string; size_mb: number };
  smallest_table: { name: string; size_mb: number };
  empty_tables_count: number;
  tables_over_1m_rows: number;
}

export interface ModuleAnomalySummary {
  total: number;
  by_severity: { critical: number; warning: number; info: number };
  issues: Array<{
    table: string;
    issue: string;
    severity: string;
  }>;
}

export interface ModuleRecommendation {
  priority: string;
  table: string;
  action: string;
  reason: string;
  sql: string;
}

export interface Module {
  name: string;
  description_th: string;
  description_en: string;
  table_count: number;
  total_rows: number;
  total_size_bytes: number;
  size_mb: number;
  size_gb: number;
  size_percentage: number;
  anomaly_count: number;
  health_score: number;
  top_tables?: TopTableInfo[];
  purpose_distribution?: TablePurpose;
}

export interface TableBasicInfo {
  name: string;
  row_count: number;
  size_bytes: number;
  size_mb: number;
  size_gb: number;
  engine: string;
  purpose: string;
  severity: string;
  has_primary_key: boolean;
  index_count: number;
  column_count: number;
  issues: Array<{ type: string; severity: string; message: string }>;
}

export interface ModuleDetailData {
  module: Module;
  statistics: ModuleStatistics;
  tables: TableBasicInfo[];
  anomalies: ModuleAnomalySummary;
  recommendations: ModuleRecommendation[];
}

export interface ModulesListData {
  modules: Module[];
  total_count: number;
  statistics: {
    average_table_count: number;
    average_size_gb: number;
    total_anomaly_count: number;
  };
}

export interface ModulesListResponse {
  success: boolean;
  timestamp: string;
  generated_at: string;
  data: ModulesListData;
  error?: ErrorDetail;
}

export interface ModuleDetailResponse {
  success: boolean;
  timestamp: string;
  generated_at: string;
  data: ModuleDetailData;
  error?: ErrorDetail;
}