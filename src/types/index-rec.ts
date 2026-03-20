// Index Recommendation Types

import { ErrorDetail } from './overview';

export interface IndexRecommendation {
  priority: string;
  priority_order?: number;
  table: string;
  module?: string;
  index_type: string;
  columns: string[];
  suggested_column?: string;
  row_count: number;
  size_mb?: number;
  reason: string;
  impact: string;
  sql: string;
}

export interface IndexSummary {
  total_recommendations: number;
  by_priority: {
    high: number;
    medium: number;
    low: number;
  };
  estimated_impact: {
    high: string;
    medium: string;
    low: string;
  };
}

export interface IndexRecommendationsData {
  summary: IndexSummary;
  recommendations: IndexRecommendation[];
}

export interface IndexRecommendationsResponse {
  success: boolean;
  timestamp: string;
  generated_at: string;
  data: IndexRecommendationsData;
  error?: ErrorDetail;
}