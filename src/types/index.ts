// Types barrel export - explicit re-exports to avoid conflicts

// Base types (no dependencies)
export type { ErrorDetail } from './overview';
export type { PaginationMeta } from './api';

// Overview types
export type {
  DatabaseInfo,
  DatabaseStatistics,
  ModuleDistribution,
  AnomalySummary,
  HealthScoreBreakdown,
  HealthScore,
  TopTable,
  TopModule,
  OverviewData,
  OverviewResponse,
} from './overview';

// Module types
export type {
  TablePurpose,
  TopTableInfo,
  ModuleStatistics,
  ModuleAnomalySummary,
  ModuleRecommendation,
  Module,
  ModuleDetailData,
  ModulesListData,
  ModulesListResponse,
  ModuleDetailResponse,
  TableBasicInfo,
} from './module';

// Table types
export type {
  ColumnInfo,
  IndexInfo,
  ForeignKey,
  TableIssue,
  TableRecommendation,
  TableDetail,
  TablesListData,
  TableDetailResponse,
  TablesListResponse,
} from './table';

// Anomaly types
export type {
  SeverityBreakdown,
  AnomalyCategory,
  SeverityDistribution,
  PriorityAction,
  AnomalySummaryData,
  AnomalyTable,
  AnomalyCategoryData,
  AnomalySummaryResponse,
  AnomalyCategoryResponse,
} from './anomaly';

// Index types
export type {
  IndexRecommendation,
  IndexSummary,
  IndexRecommendationsData,
  IndexRecommendationsResponse,
} from './index-rec';

// API types
export type {
  SearchQuery,
  SearchResult,
  SearchData,
  SearchResponse,
  CorsHeaders,
  BaseResponse,
} from './api';