// Table Types

import { ErrorDetail } from './overview';

export interface PaginationMeta {
  page: number;
  limit: number;
  total_count: number;
  total_pages: number;
  has_next_page: boolean;
  has_prev_page: boolean;
}

export interface ColumnInfo {
  name: string;
  type: string;
  nullable: boolean;
  key: string;
  default: string | null;
  extra: string;
  comment: string;
}

export interface IndexInfo {
  name: string;
  columns: string[];
  unique: boolean;
}

export interface ForeignKey {
  columns: string[];
  referenced_table: string;
  referenced_columns: string[];
}

export interface TableIssue {
  type: string;
  severity: string;
  message: string;
}

export interface TableRecommendation {
  priority: string;
  action: string;
  reason: string;
  sql: string;
}

export interface TableDetail {
  name: string;
  module: string;
  row_count: number;
  data_size_bytes: number;
  index_size_bytes: number;
  engine: string;
  comment: string;
  columns: ColumnInfo[];
  primary_key: string[];
  foreign_keys: ForeignKey[];
  indexes: IndexInfo[];
  has_primary_key: boolean;
  index_count: number;
  column_count: number;
  purpose: string;
  severity: string;
  issues: TableIssue[];
  recommendations: TableRecommendation[];
}

export interface TablesListData {
  tables: Array<{
    name: string;
    module: string;
    row_count: number;
    size_bytes: number;
    size_mb: number;
    engine: string;
    has_primary_key: boolean;
    index_count: number;
    anomaly_count: number;
  }>;
  pagination: PaginationMeta;
  statistics: {
    total_count: number;
    total_rows: number;
    total_size_bytes: number;
    tables_with_pk: number;
    tables_without_pk: number;
  };
}

export interface TableDetailResponse {
  success: boolean;
  timestamp: string;
  generated_at: string;
  data: TableDetail;
  error?: ErrorDetail;
}

export interface TablesListResponse {
  success: boolean;
  timestamp: string;
  generated_at: string;
  data: TablesListData;
  pagination: PaginationMeta;
  error?: ErrorDetail;
}