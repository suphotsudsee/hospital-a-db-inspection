// Database Overview Types

export interface DatabaseInfo {
  name: string;
  server_version: string;
  charset?: string;
  collation?: string;
}

export interface DatabaseStatistics {
  total_tables: number;
  total_rows: number;
  total_size_bytes: number;
  total_size_human: string;
  data_size_bytes: number;
  index_size_bytes: number;
  total_columns: number;
  engine_types: string[];
}

export interface ModuleDistribution {
  name: string;
  table_count: number;
  size_percentage: number;
}

export interface AnomalySummary {
  total: number;
  critical: number;
  warning: number;
  info: number;
  by_category: Record<string, number>;
}

export interface HealthScoreBreakdown {
  primary_key_health: number;
  index_health: number;
  table_usage_health: number;
}

export interface HealthScore {
  overall: number;
  breakdown: HealthScoreBreakdown;
  grade: string;
  recommendation: string;
}

export interface TopTable {
  name: string;
  module: string;
  rows: number;
  size_mb: number;
}

export interface TopModule {
  name: string;
  description_th: string;
  description_en: string;
  total_rows: number;
  total_size_bytes: number;
  size_mb: number;
  size_gb: number;
  size_percentage: number;
}

export interface OverviewData {
  database: DatabaseInfo;
  statistics: DatabaseStatistics;
  modules: {
    count: number;
    distribution: ModuleDistribution[];
  };
  anomalies: AnomalySummary;
  health_score: HealthScore;
  top_modules_by_size: TopModule[];
  top_largest_tables: TopTable[];
}

export interface ErrorDetail {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

export interface OverviewResponse {
  success: boolean;
  timestamp: string;
  generated_at: string;
  cache_expires_at?: string;
  data: OverviewData;
  error?: ErrorDetail;
}