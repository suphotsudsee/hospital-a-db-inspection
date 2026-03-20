// API Common Types

export interface ErrorDetail {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

export interface BaseResponse {
  success: boolean;
  error?: ErrorDetail;
  timestamp: string;
  generated_at: string;
  cache_expires_at?: string;
}

export interface SearchQuery {
  q?: string;
  type?: 'tables' | 'modules' | 'all';
  page?: number;
  limit?: number;
  sort?: 'name' | 'size' | 'rows';
  order?: 'asc' | 'desc';
}

export interface SearchResult {
  type: 'table' | 'module' | 'anomaly';
  name: string;
  module?: string;
  row_count?: number;
  size_mb?: number;
  severity?: string;
  relevance: number;
  snippet: string;
}

export interface SearchData {
  query: string;
  results: SearchResult[];
  pagination: PaginationMeta;
  filters: {
    type: string;
    applied: boolean;
  };
}

export interface SearchResponse {
  success: boolean;
  timestamp: string;
  generated_at: string;
  data: SearchData;
  error?: ErrorDetail;
}

// Pagination
export interface PaginationMeta {
  page: number;
  limit: number;
  total_count: number;
  total_pages: number;
  has_next_page: boolean;
  has_prev_page: boolean;
}

// CORS headers type
export interface CorsHeaders {
  'Access-Control-Allow-Origin': string;
  'Access-Control-Allow-Methods': string;
  'Access-Control-Allow-Headers': string;
  'Cache-Control': string;
}