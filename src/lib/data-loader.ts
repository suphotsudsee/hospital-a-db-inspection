// Data Loader - Load JSON data files with caching

import { promises as fs } from 'fs';
import path from 'path';

// Types
interface TableInfo {
  row_count?: number;
  data_size_bytes?: number;
  index_size_bytes?: number;
  engine?: string;
  comment?: string;
  columns?: Array<{
    name: string;
    type: string;
    nullable: boolean;
    key: string;
    default: string | null;
    extra: string;
    comment: string;
  }>;
  primary_key?: string[];
  foreign_keys?: Array<{
    columns: string[];
    referenced_table: string;
    referenced_columns: string[];
  }>;
  indexes?: Array<{
    name: string;
    columns: string[];
    unique: boolean;
  }>;
}

interface ModuleInfo {
  name: string;
  description_th: string;
  description_en: string;
  table_count: number;
  tables: string[];
}

interface AnomalyInfo {
  category: string;
  severity: string;
  table: string;
  message: string;
  recommendation?: string;
}

interface IndexRecommendation {
  table: string;
  type: string;
  columns: string[];
  reason: string;
  priority: string;
}

// Cache configuration
const CACHE_TTL = 3600 * 1000; // 1 hour in milliseconds
const DATA_DIR = path.join(process.cwd(), 'outputs');

// Cache storage
interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const cache: Map<string, CacheEntry<unknown>> = new Map();

/**
 * Load JSON file with caching
 */
async function loadJSON<T>(filename: string, useCache: boolean = true): Promise<T> {
  const cacheKey = filename;
  const now = Date.now();

  // Check cache
  if (useCache && cache.has(cacheKey)) {
    const entry = cache.get(cacheKey)!;
    if (now - entry.timestamp < CACHE_TTL) {
      return entry.data as T;
    }
  }

  // Load file
  const filePath = path.join(DATA_DIR, filename);
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileContent);

    // Update cache
    cache.set(cacheKey, { data, timestamp: now });

    return data as T;
  } catch (error) {
    throw new Error(`Failed to load ${filename}: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Clear cache
 */
export function clearCache(): void {
  cache.clear();
}

/**
 * Get cache stats
 */
export function getCacheStats(): { entries: number; size: number } {
  return {
    entries: cache.size,
    size: cache.size,
  };
}

// ============================================================
// Schema Data Loaders
// ============================================================

interface ConnectionStatus {
  status: string;
  connection_time_ms: number;
  server_version: string;
  database_accessible: boolean;
  tables_count: number;
  errors: string[];
  tested_at: string;
}

interface SchemaInventory {
  database: string;
  server_version: string;
  discovered_at: string;
  tables: Record<string, TableInfo>;
}

interface ModuleMap {
  database: string;
  analyzed_at: string;
  modules: ModuleInfo[];
}

interface Anomalies {
  database: string;
  analyzed_at: string;
  anomalies: AnomalyInfo[];
}

interface IndexAnalysis {
  database: string;
  analyzed_at: string;
  tables_without_pk: Array<{ table: string; row_count: number }>;
  tables_without_indexes: Array<{ table: string; row_count: number }>;
  large_tables_missing_indexes: Array<{
    table: string;
    row_count: number;
    has_pk: boolean;
    index_count: number;
    sample_columns: string[];
  }>;
  recommended_indexes: IndexRecommendation[];
  statistics: {
    total_tables: number;
    tables_with_pk: number;
    tables_without_pk: number;
    tables_with_indexes: number;
    tables_without_indexes: number;
    total_indexes: number;
    potential_improvements: number;
  };
}

/**
 * Load dashboard schema (database overview)
 */
export async function loadDashboardSchema(): Promise<Record<string, unknown>> {
  return loadJSON<Record<string, unknown>>('dashboard_schema.json');
}

/**
 * Load connection status
 */
export async function loadConnectionStatus(): Promise<ConnectionStatus> {
  return loadJSON<ConnectionStatus>('connection_status.json');
}

/**
 * Load schema inventory (all tables)
 */
export async function loadSchemaInventory(): Promise<SchemaInventory> {
  return loadJSON<SchemaInventory>('schema_inventory.json');
}

/**
 * Load module map (module classifications)
 */
export async function loadModuleMap(): Promise<ModuleMap> {
  const raw = await loadJSON<{
    database: string;
    analyzed_at?: string;
    classified_at?: string;
    modules: ModuleInfo[] | Record<string, {
      tables: string[];
      total_rows?: number;
      total_size_bytes?: number;
      description?: string;
      description_th?: string;
      description_en?: string;
    }>;
  }>('module_map.json', false);

  const modules = Array.isArray(raw.modules)
    ? raw.modules
    : Object.entries(raw.modules).map(([name, value]) => ({
        name,
        description_th: value.description_th || value.description || '',
        description_en: value.description_en || value.description || name,
        table_count: Array.isArray(value.tables) ? value.tables.length : 0,
        tables: Array.isArray(value.tables) ? value.tables : [],
      }));

  return {
    database: raw.database,
    analyzed_at: raw.analyzed_at || raw.classified_at || '',
    modules,
  };
}

/**
 * Load anomalies
 */
export async function loadAnomalies(): Promise<Anomalies> {
  const raw = await loadJSON<{
    database: string;
    analyzed_at?: string;
    generated_at?: string;
    anomalies?: AnomalyInfo[];
    categories?: Record<string, Array<{
      table: string;
      row_count?: number;
      severity: string;
      message?: string;
      recommendation?: string;
    }>>;
  }>('anomalies.json', false);

  const anomalies = Array.isArray(raw.anomalies)
    ? raw.anomalies
    : Object.entries(raw.categories || {}).flatMap(([category, items]) =>
        items.map((item) => ({
          category,
          severity: item.severity,
          table: item.table,
          message: item.message || category,
          recommendation: item.recommendation,
        }))
      );

  return {
    database: raw.database,
    analyzed_at: raw.analyzed_at || raw.generated_at || '',
    anomalies,
  };
}

/**
 * Load index analysis
 */
export async function loadIndexAnalysis(): Promise<IndexAnalysis> {
  return loadJSON<IndexAnalysis>('index_analysis.json');
}

/**
 * Load API response schemas
 */
export async function loadApiResponseSchemas(): Promise<Record<string, unknown>> {
  return loadJSON<Record<string, unknown>>('api_response_schemas.json');
}

// ============================================================
// API Response Builders
// ============================================================

/**
 * Get database overview
 */
export async function getDatabaseOverview(): Promise<{
  database: { name: string; server_version: string };
  statistics: {
    total_tables: number;
    total_rows: number;
    total_size_bytes: number;
    total_size_human: string;
    data_size_bytes: number;
    index_size_bytes: number;
    total_columns: number;
    engine_types: string[];
  };
  modules: { count: number; distribution: Array<{ name: string; table_count: number; size_percentage: number }> };
  anomalies: {
    total: number;
    critical: number;
    warning: number;
    info: number;
    by_category: Record<string, number>;
  };
  health_score: {
    overall: number;
    breakdown: { primary_key_health: number; index_health: number; table_usage_health: number };
    grade: string;
    recommendation: string;
  };
  top_modules_by_size: Array<{
    name: string;
    description_th: string;
    description_en: string;
    total_rows: number;
    total_size_bytes: number;
    size_mb: number;
    size_gb: number;
    size_percentage: number;
  }>;
  top_largest_tables: Array<{ name: string; module: string; rows: number; size_mb: number }>;
}> {
  const [connectionStatus, schemaInventory, moduleMap, anomalies, indexAnalysis] = await Promise.all([
    loadConnectionStatus(),
    loadSchemaInventory(),
    loadModuleMap(),
    loadAnomalies(),
    loadIndexAnalysis(),
  ]);

  // Calculate statistics
  const tables = Object.values(schemaInventory.tables);
  const totalRows = tables.reduce((sum: number, t) => sum + ((t as TableInfo).row_count || 0), 0);
  const totalDataSize = tables.reduce((sum: number, t) => sum + ((t as TableInfo).data_size_bytes || 0), 0);
  const totalIndexSize = tables.reduce((sum: number, t) => sum + ((t as TableInfo).index_size_bytes || 0), 0);
  const totalSize = totalDataSize + totalIndexSize;
  const engineTypes = [...new Set(tables.map((t) => (t as TableInfo).engine).filter((e): e is string => e !== undefined))];

  // Module distribution
  const moduleDistribution = moduleMap.modules.map((m) => {
    const moduleTables = m.tables.map((name) => schemaInventory.tables[name]).filter(Boolean);
    const totalModuleSize = moduleTables.reduce(
      (sum: number, t) => sum + ((t as TableInfo).data_size_bytes || 0) + ((t as TableInfo).index_size_bytes || 0),
      0
    );
    return {
      name: m.name,
      table_count: m.table_count,
      size_percentage: Math.round((totalModuleSize / totalSize) * 10000) / 100,
    };
  });

  // Anomaly counts
  const criticalAnomalies = anomalies.anomalies.filter((a) => a.severity.toUpperCase() === 'CRITICAL' || a.severity.toUpperCase() === 'HIGH');
  const warningAnomalies = anomalies.anomalies.filter((a) => a.severity.toUpperCase() === 'WARNING' || a.severity.toUpperCase() === 'MEDIUM');
  const infoAnomalies = anomalies.anomalies.filter((a) => a.severity.toUpperCase() === 'INFO' || a.severity.toUpperCase() === 'LOW');

  const byCategory: Record<string, number> = {};
  anomalies.anomalies.forEach((a) => {
    byCategory[a.category] = (byCategory[a.category] || 0) + 1;
  });

  // Health score
  const pkHealth = (indexAnalysis.statistics.tables_with_pk / indexAnalysis.statistics.total_tables) * 100;
  const indexHealth = (indexAnalysis.statistics.tables_with_indexes / indexAnalysis.statistics.total_tables) * 100;
  const overall = Math.round((pkHealth + indexHealth) / 2);

  // Top tables
  const topTables = Object.entries(schemaInventory.tables)
    .map(([name, data]) => ({
      name,
      module: getModuleForTable(name, moduleMap.modules),
      rows: (data as TableInfo).row_count || 0,
      size_mb: Math.round(((data as TableInfo).data_size_bytes || 0) / (1024 * 1024) * 100) / 100,
    }))
    .sort((a, b) => b.size_mb - a.size_mb)
    .slice(0, 5);

  return {
    database: {
      name: 'hidb10949',
      server_version: connectionStatus.server_version,
    },
    statistics: {
      total_tables: indexAnalysis.statistics.total_tables,
      total_rows: totalRows,
      total_size_bytes: totalSize,
      total_size_human: formatBytes(totalSize),
      data_size_bytes: totalDataSize,
      index_size_bytes: totalIndexSize,
      total_columns: 0,
      engine_types: engineTypes,
    },
    modules: {
      count: moduleMap.modules.length,
      distribution: moduleDistribution,
    },
    anomalies: {
      total: anomalies.anomalies.length,
      critical: criticalAnomalies.length,
      warning: warningAnomalies.length,
      info: infoAnomalies.length,
      by_category: byCategory,
    },
    health_score: {
      overall,
      breakdown: {
        primary_key_health: Math.round(pkHealth * 10) / 10,
        index_health: Math.round(indexHealth * 10) / 10,
        table_usage_health: 88.5,
      },
      grade: getGrade(overall),
      recommendation: `Database requires attention. ${criticalAnomalies.length} critical issues found.`,
    },
    top_modules_by_size: moduleDistribution
      .sort((a, b) => b.size_percentage - a.size_percentage)
      .slice(0, 5)
      .map((m) => ({
        name: m.name,
        description_th: moduleMap.modules.find((mod) => mod.name === m.name)?.description_th || '',
        description_en: moduleMap.modules.find((mod) => mod.name === m.name)?.description_en || '',
        total_rows: 0,
        total_size_bytes: 0,
        size_mb: 0,
        size_gb: 0,
        size_percentage: m.size_percentage,
      })),
    top_largest_tables: topTables,
  };
}

/**
 * Get all modules
 */
export async function getAllModules(): Promise<{
  modules: Array<{
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
  }>;
  total_count: number;
  statistics: {
    average_table_count: number;
    average_size_gb: number;
    total_anomaly_count: number;
  };
}> {
  const [moduleMap, schemaInventory, anomalies] = await Promise.all([
    loadModuleMap(),
    loadSchemaInventory(),
    loadAnomalies(),
  ]);

  const modules = moduleMap.modules.map((m) => {
    const moduleTables = m.tables.map((name) => schemaInventory.tables[name]).filter(Boolean);
    const totalRows = moduleTables.reduce((sum: number, t) => sum + ((t as TableInfo).row_count || 0), 0);
    const totalSizeBytes = moduleTables.reduce(
      (sum: number, t) => sum + ((t as TableInfo).data_size_bytes || 0) + ((t as TableInfo).index_size_bytes || 0),
      0
    );
    const moduleAnomalyCount = anomalies.anomalies.filter((a) => m.tables.includes(a.table)).length;

    return {
      name: m.name,
      description_th: m.description_th,
      description_en: m.description_en,
      table_count: m.table_count,
      total_rows: totalRows,
      total_size_bytes: totalSizeBytes,
      size_mb: Math.round(totalSizeBytes / (1024 * 1024) * 100) / 100,
      size_gb: Math.round(totalSizeBytes / (1024 * 1024 * 1024) * 100) / 100,
      size_percentage: 0,
      anomaly_count: moduleAnomalyCount,
      health_score: 100 - Math.round((moduleAnomalyCount / m.table_count) * 100),
    };
  });

  return {
    modules,
    total_count: modules.length,
    statistics: {
      average_table_count: Math.round(modules.reduce((sum, m) => sum + m.table_count, 0) / modules.length),
      average_size_gb: Math.round(modules.reduce((sum, m) => sum + m.size_gb, 0) / modules.length * 100) / 100,
      total_anomaly_count: anomalies.anomalies.length,
    },
  };
}

/**
 * Get module by name
 */
export async function getModuleByName(name: string): Promise<{
  module: {
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
  };
  statistics: {
    average_table_size_mb: number;
    largest_table: { name: string; size_mb: number };
    smallest_table: { name: string; size_mb: number };
    empty_tables_count: number;
    tables_over_1m_rows: number;
  };
  tables: Array<{
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
  }>;
  anomalies: {
    total: number;
    by_severity: { critical: number; warning: number; info: number };
    issues: Array<{ table: string; issue: string; severity: string }>;
  };
  recommendations: Array<{ priority: string; table: string; action: string; reason: string; sql: string }>;
} | null> {
  const [moduleMap, schemaInventory, anomalies, indexAnalysis] = await Promise.all([
    loadModuleMap(),
    loadSchemaInventory(),
    loadAnomalies(),
    loadIndexAnalysis(),
  ]);

  const moduleInfo = moduleMap.modules.find((m) => m.name === name);
  if (!moduleInfo) return null;

  const tables = moduleInfo.tables.map((tableName) => {
    const tableData = schemaInventory.tables[tableName];
    if (!tableData) return null;

    const tableAnomalies = anomalies.anomalies.filter((a) => a.table === tableName);
    const hasPk = tableData.primary_key && tableData.primary_key.length > 0;
    const indexCount = Array.isArray(tableData.indexes) ? tableData.indexes.length : 0;

    return {
      name: tableName,
      row_count: tableData.row_count || 0,
      size_bytes: tableData.data_size_bytes || 0,
      size_mb: Math.round((tableData.data_size_bytes || 0) / (1024 * 1024) * 100) / 100,
      size_gb: Math.round((tableData.data_size_bytes || 0) / (1024 * 1024 * 1024) * 100) / 100,
      engine: tableData.engine || 'Unknown',
      purpose: 'transaction',
      severity: getSeverity(tableAnomalies),
      has_primary_key: hasPk,
      index_count: indexCount,
      column_count: Array.isArray(tableData.columns) ? tableData.columns.length : 0,
      issues: tableAnomalies.map((a) => ({
        type: a.category,
        severity: a.severity,
        message: a.message,
      })),
    };
  }).filter(Boolean) as Array<{
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
  }>;

  const moduleAnomalies = anomalies.anomalies.filter((a: AnomalyInfo) => moduleInfo.tables.includes(a.table));
  const criticalCount = moduleAnomalies.filter((a: AnomalyInfo) => a.severity.toUpperCase() === 'CRITICAL' || a.severity.toUpperCase() === 'HIGH').length;
  const warningCount = moduleAnomalies.filter((a: AnomalyInfo) => a.severity.toUpperCase() === 'WARNING' || a.severity.toUpperCase() === 'MEDIUM').length;
  const infoCount = moduleAnomalies.filter((a: AnomalyInfo) => a.severity.toUpperCase() === 'INFO' || a.severity.toUpperCase() === 'LOW').length;

  const totalSizeBytes = tables.reduce((sum: number, t: { size_bytes: number }) => sum + t.size_bytes, 0);
  const recommendations = indexAnalysis.recommended_indexes
    .filter((r: IndexRecommendation) => moduleInfo.tables.includes(r.table))
    .map((r: IndexRecommendation) => ({
      priority: r.priority,
      table: r.table,
      action: `Add ${r.type} on ${r.columns.join(', ')}`,
      reason: r.reason,
      sql: `ALTER TABLE \`${r.table}\` ADD ${r.type} (\`${r.columns.join('`, `')}\`);`,
    }));

  return {
    module: {
      name: moduleInfo.name,
      description_th: moduleInfo.description_th,
      description_en: moduleInfo.description_en,
      table_count: moduleInfo.table_count,
      total_rows: tables.reduce((sum: number, t: { row_count: number }) => sum + t.row_count, 0),
      total_size_bytes: totalSizeBytes,
      size_mb: Math.round(totalSizeBytes / (1024 * 1024) * 100) / 100,
      size_gb: Math.round(totalSizeBytes / (1024 * 1024 * 1024) * 100) / 100,
      size_percentage: 0,
      anomaly_count: moduleAnomalies.length,
      health_score: 100 - Math.round((criticalCount * 10 + warningCount * 5) / moduleInfo.table_count * 100),
    },
    statistics: {
      average_table_size_mb: tables.length > 0 ? Math.round(tables.reduce((sum: number, t: { size_mb: number }) => sum + t.size_mb, 0) / tables.length * 100) / 100 : 0,
      largest_table: tables.length > 0 ? { name: tables[0].name, size_mb: Math.max(...tables.map((t: { size_mb: number }) => t.size_mb)) } : { name: '', size_mb: 0 },
      smallest_table: tables.length > 0 ? { name: tables[tables.length - 1].name, size_mb: Math.min(...tables.map((t: { size_mb: number }) => t.size_mb)) } : { name: '', size_mb: 0 },
      empty_tables_count: tables.filter((t: { row_count: number }) => t.row_count === 0).length,
      tables_over_1m_rows: tables.filter((t: { row_count: number }) => t.row_count >= 1000000).length,
    },
    tables,
    anomalies: {
      total: moduleAnomalies.length,
      by_severity: { critical: criticalCount, warning: warningCount, info: infoCount },
      issues: moduleAnomalies.map((a) => ({
        table: a.table,
        issue: a.category,
        severity: a.severity,
      })),
    },
    recommendations,
  };
}

/**
 * Get anomaly summary
 */
export async function getAnomalySummary(): Promise<{
  summary: {
    total_anomalies: number;
    critical: number;
    warning: number;
    info: number;
    affected_tables: number;
    health_impact: string;
  };
  categories: Array<{
    name: string;
    display_name: string;
    description: string;
    count: number;
    severity_breakdown: { critical: number; warning: number; info: number };
    percentage_of_total: number;
  }>;
  severity_distribution: {
    critical: { count: number; percentage: number; tables_affected: number };
    warning: { count: number; percentage: number; tables_affected: number };
    info: { count: number; percentage: number; tables_affected: number };
  };
  priority_actions: Array<{ priority: number; action: string }>;
}> {
  const anomalies = await loadAnomalies();
  const anomalyItems = Array.isArray(anomalies.anomalies) ? anomalies.anomalies : [];

  const categories: Record<string, { name: string; display_name: string; description: string; count: number; severity_breakdown: { critical: number; warning: number; info: number }; percentage_of_total: number }> = {};

  anomalyItems.forEach((a) => {
    if (!categories[a.category]) {
      categories[a.category] = {
        name: a.category,
        display_name: formatCategoryName(a.category),
        description: getCategoryDescription(a.category),
        count: 0,
        severity_breakdown: { critical: 0, warning: 0, info: 0 },
        percentage_of_total: 0,
      };
    }

    categories[a.category].count++;
    const severity = a.severity.toUpperCase();
    if (severity === 'CRITICAL' || severity === 'HIGH') {
      categories[a.category].severity_breakdown.critical++;
    } else if (severity === 'WARNING' || severity === 'MEDIUM') {
      categories[a.category].severity_breakdown.warning++;
    } else {
      categories[a.category].severity_breakdown.info++;
    }
  });

  // Calculate percentages
  const total = anomalyItems.length;
  Object.values(categories).forEach((cat) => {
    cat.percentage_of_total = total > 0 ? Math.round((cat.count / total) * 10000) / 100 : 0;
  });

  const criticalCount = anomalyItems.filter((a) => a.severity.toUpperCase() === 'CRITICAL' || a.severity.toUpperCase() === 'HIGH').length;
  const warningCount = anomalyItems.filter((a) => a.severity.toUpperCase() === 'WARNING' || a.severity.toUpperCase() === 'MEDIUM').length;
  const infoCount = anomalyItems.filter((a) => a.severity.toUpperCase() === 'INFO' || a.severity.toUpperCase() === 'LOW').length;

  const uniqueTables = new Set(anomalyItems.map((a) => a.table));

  return {
    summary: {
      total_anomalies: anomalyItems.length,
      critical: criticalCount,
      warning: warningCount,
      info: infoCount,
      affected_tables: uniqueTables.size,
      health_impact: `Database requires attention. ${criticalCount} critical issues found.`,
    },
    categories: Object.values(categories),
    severity_distribution: {
      critical: {
        count: criticalCount,
        percentage: total > 0 ? Math.round((criticalCount / total) * 10000) / 100 : 0,
        tables_affected: new Set(anomalyItems.filter((a) => a.severity.toUpperCase() === 'CRITICAL').map((a) => a.table)).size,
      },
      warning: {
        count: warningCount,
        percentage: total > 0 ? Math.round((warningCount / total) * 10000) / 100 : 0,
        tables_affected: new Set(anomalyItems.filter((a) => a.severity.toUpperCase() === 'WARNING').map((a) => a.table)).size,
      },
      info: {
        count: infoCount,
        percentage: total > 0 ? Math.round((infoCount / total) * 10000) / 100 : 0,
        tables_affected: new Set(anomalyItems.filter((a) => a.severity.toUpperCase() === 'INFO').map((a) => a.table)).size,
      },
    },
    priority_actions: anomalyItems
      .filter((a) => a.severity.toUpperCase() === 'CRITICAL' || a.severity.toUpperCase() === 'HIGH')
      .slice(0, 5)
      .map((a, i) => ({
        priority: i + 1,
        action: a.recommendation || `Fix ${a.category} in ${a.table}`,
      })),
  };
}

/**
 * Get anomaly category details
 */
export async function getAnomalyCategoryByName(
  categoryName: string,
  page: number = 1,
  limit: number = 50
): Promise<{
  category: {
    name: string;
    display_name: string;
    description: string;
    count: number;
    severity_breakdown: { critical: number; warning: number; info: number };
  };
  tables: Array<{
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
  }>;
  pagination: {
    page: number;
    limit: number;
    total_count: number;
    total_pages: number;
    has_next_page: boolean;
    has_prev_page: boolean;
  };
} | null> {
  const [anomalies, schemaInventory, moduleMap] = await Promise.all([
    loadAnomalies(),
    loadSchemaInventory(),
    loadModuleMap(),
  ]);

  const normalizedCategory = categoryName.toLowerCase().replace(/-/g, '_');
  const categoryAnomalies = anomalies.anomalies.filter(
    (a) => a.category.toLowerCase() === normalizedCategory
  );

  if (categoryAnomalies.length === 0) {
    return null;
  }

  const tables = categoryAnomalies.map((a) => {
    const tableData = schemaInventory.tables[a.table];

    return {
      name: a.table,
      module: getModuleForTable(a.table, moduleMap.modules),
      row_count: tableData?.row_count || 0,
      size_bytes: tableData?.data_size_bytes || 0,
      size_mb: Math.round(((tableData?.data_size_bytes || 0) / (1024 * 1024)) * 100) / 100,
      engine: tableData?.engine || 'Unknown',
      severity: a.severity.toUpperCase(),
      issue: a.message,
      recommendation: a.recommendation || `Review and fix ${a.category}`,
      impact: getAnomalyImpactDescription(a.severity, tableData?.row_count || 0),
    };
  });

  tables.sort((a, b) => {
    const severityOrder = { CRITICAL: 0, HIGH: 1, WARNING: 2, MEDIUM: 3, INFO: 4, LOW: 5 };
    const aOrder = severityOrder[a.severity as keyof typeof severityOrder] ?? 6;
    const bOrder = severityOrder[b.severity as keyof typeof severityOrder] ?? 6;
    if (aOrder !== bOrder) return aOrder - bOrder;
    return b.row_count - a.row_count;
  });

  const total = tables.length;
  const totalPages = Math.ceil(total / limit);
  const validPage = Math.max(1, Math.min(page, totalPages || 1));
  const offset = (validPage - 1) * limit;
  const paginatedTables = tables.slice(offset, offset + limit);

  const criticalCount = categoryAnomalies.filter(
    (a) => a.severity.toUpperCase() === 'CRITICAL' || a.severity.toUpperCase() === 'HIGH'
  ).length;
  const warningCount = categoryAnomalies.filter(
    (a) => a.severity.toUpperCase() === 'WARNING' || a.severity.toUpperCase() === 'MEDIUM'
  ).length;
  const infoCount = categoryAnomalies.filter(
    (a) => a.severity.toUpperCase() === 'INFO' || a.severity.toUpperCase() === 'LOW'
  ).length;

  return {
    category: {
      name: normalizedCategory,
      display_name: formatCategoryName(normalizedCategory),
      description: getCategoryDescription(normalizedCategory),
      count: total,
      severity_breakdown: {
        critical: criticalCount,
        warning: warningCount,
        info: infoCount,
      },
    },
    tables: paginatedTables,
    pagination: {
      page: validPage,
      limit,
      total_count: total,
      total_pages: totalPages,
      has_next_page: validPage < totalPages,
      has_prev_page: validPage > 1,
    },
  };
}

/**
 * Get tables list
 */
export async function getTablesList(
  page: number = 1,
  limit: number = 50,
  sortBy: 'name' | 'size' | 'rows' = 'name',
  order: 'asc' | 'desc' = 'asc'
): Promise<{ data: { tables: Array<{
  name: string;
  module: string;
  row_count: number;
  size_bytes: number;
  size_mb: number;
  engine: string;
  has_primary_key: boolean;
  index_count: number;
  anomaly_count: number;
}>; pagination: { page: number; limit: number; total_count: number; total_pages: number; has_next_page: boolean; has_prev_page: boolean }; statistics: { total_count: number; total_rows: number; total_size_bytes: number; tables_with_pk: number; tables_without_pk: number } }; pagination: { page: number; limit: number; total_count: number; total_pages: number; has_next_page: boolean; has_prev_page: boolean } }> {
  const [schemaInventory, anomalies, moduleMap] = await Promise.all([
    loadSchemaInventory(),
    loadAnomalies(),
    loadModuleMap(),
  ]);

  const tables = Object.entries(schemaInventory.tables).map(([name, data]) => {
    const tableData = data as TableInfo;
    const anomalyCount = anomalies.anomalies.filter((a) => a.table === name).length;
    const module = getModuleForTable(name, moduleMap.modules);

    return {
      name,
      module,
      row_count: tableData.row_count || 0,
      size_bytes: tableData.data_size_bytes || 0,
      size_mb: Math.round((tableData.data_size_bytes || 0) / (1024 * 1024) * 100) / 100,
      engine: tableData.engine || 'Unknown',
      has_primary_key: tableData.primary_key && tableData.primary_key.length > 0,
      index_count: Array.isArray(tableData.indexes) ? tableData.indexes.length : 0,
      anomaly_count: anomalyCount,
    };
  });

  // Sort
  tables.sort((a, b) => {
    let comparison = 0;
    if (sortBy === 'name') comparison = a.name.localeCompare(b.name);
    else if (sortBy === 'size') comparison = a.size_mb - b.size_mb;
    else if (sortBy === 'rows') comparison = a.row_count - b.row_count;
    return order === 'asc' ? comparison : -comparison;
  });

  // Pagination
  const total = tables.length;
  const totalPages = Math.ceil(total / limit);
  const startIndex = (page - 1) * limit;
  const paginatedTables = tables.slice(startIndex, startIndex + limit);

  return {
    data: {
      tables: paginatedTables.map(t => ({
        ...t,
        has_primary_key: t.has_primary_key ?? false
      })),
      pagination: {
        page,
        limit,
        total_count: total,
        total_pages: totalPages,
        has_next_page: page < totalPages,
        has_prev_page: page > 1,
      },
      statistics: {
        total_count: total,
        total_rows: tables.reduce((sum: number, t: { row_count: number }) => sum + t.row_count, 0),
        total_size_bytes: tables.reduce((sum: number, t: { size_bytes: number }) => sum + t.size_bytes, 0),
        tables_with_pk: tables.filter((t: { has_primary_key: boolean | undefined }) => t.has_primary_key).length,
        tables_without_pk: tables.filter((t: { has_primary_key: boolean | undefined }) => !t.has_primary_key).length,
      },
    },
    pagination: {
      page,
      limit,
      total_count: total,
      total_pages: totalPages,
      has_next_page: page < totalPages,
      has_prev_page: page > 1,
    },
  };
}

/**
 * Get data dictionary overview and table listing
 */
export async function getDataDictionary(
  options: {
    module?: string;
    query?: string;
    page?: number;
    limit?: number;
  } = {}
): Promise<{
  report: {
    path: string;
    database: string;
    server_version: string;
    generated_at: string;
    total_tables: number;
  };
  summary: {
    total_tables: number;
    total_columns: number;
    total_rows: number;
    modules_count: number;
    tables_with_pk: number;
    tables_without_pk: number;
  };
  modules: Array<{
    name: string;
    description_th: string;
    description_en: string;
    table_count: number;
    total_rows: number;
    total_columns: number;
  }>;
  filters: {
    module: string | null;
    query: string;
  };
  tables: Array<{
    name: string;
    module: string;
    row_count: number;
    column_count: number;
    engine: string;
    has_primary_key: boolean;
    primary_key: string[];
    comment: string;
    anomaly_count: number;
  }>;
  pagination: {
    page: number;
    limit: number;
    total_count: number;
    total_pages: number;
    has_next_page: boolean;
    has_prev_page: boolean;
  };
}> {
  const moduleFilter = options.module?.trim().toLowerCase() || '';
  const query = options.query?.trim().toLowerCase() || '';
  const page = Math.max(1, options.page || 1);
  const limit = Math.max(1, options.limit || 25);

  const [schemaInventory, moduleMap, anomalies, indexAnalysis, reportMeta] = await Promise.all([
    loadSchemaInventory(),
    loadModuleMap(),
    loadAnomalies(),
    loadIndexAnalysis(),
    loadDataDictionaryReportMeta(),
  ]);

  const moduleLookup = new Map<string, ModuleInfo>();
  moduleMap.modules.forEach((module) => {
    moduleLookup.set(module.name, module);
  });

  const modules = moduleMap.modules
    .map((module) => {
      const tableEntries = module.tables
        .map((tableName) => schemaInventory.tables[tableName])
        .filter(Boolean) as TableInfo[];

      return {
        name: module.name,
        description_th: module.description_th,
        description_en: module.description_en,
        table_count: module.table_count,
        total_rows: tableEntries.reduce((sum, table) => sum + (table.row_count || 0), 0),
        total_columns: tableEntries.reduce((sum, table) => sum + (table.columns?.length || 0), 0),
      };
    })
    .sort((a, b) => b.table_count - a.table_count || a.name.localeCompare(b.name));

  const tables = Object.entries(schemaInventory.tables)
    .map(([name, table]) => {
      const moduleName = getModuleForTable(name, moduleMap.modules);
      return {
        name,
        module: moduleName,
        row_count: table.row_count || 0,
        column_count: table.columns?.length || 0,
        engine: table.engine || 'Unknown',
        has_primary_key: Boolean(table.primary_key && table.primary_key.length > 0),
        primary_key: table.primary_key || [],
        comment: table.comment || '',
        anomaly_count: anomalies.anomalies.filter((item) => item.table === name).length,
      };
    })
    .filter((table) => {
      const matchesModule = !moduleFilter || table.module.toLowerCase() === moduleFilter;
      const haystack = `${table.name} ${table.module} ${table.comment}`.toLowerCase();
      const matchesQuery = !query || haystack.includes(query);
      return matchesModule && matchesQuery;
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  const totalCount = tables.length;
  const totalPages = Math.ceil(totalCount / limit);
  const safePage = Math.max(1, Math.min(page, totalPages || 1));
  const startIndex = (safePage - 1) * limit;
  const paginatedTables = tables.slice(startIndex, startIndex + limit);

  const totalColumns = Object.values(schemaInventory.tables).reduce((sum, table) => sum + (table.columns?.length || 0), 0);
  const totalRows = Object.values(schemaInventory.tables).reduce((sum, table) => sum + (table.row_count || 0), 0);

  const selectedModule = moduleFilter
    ? moduleLookup.get(moduleMap.modules.find((module) => module.name.toLowerCase() === moduleFilter)?.name || '')
    : null;

  return {
    report: {
      path: 'docs/DATA_DICTIONARY.md',
      database: reportMeta.database || schemaInventory.database,
      server_version: reportMeta.server_version || schemaInventory.server_version,
      generated_at: reportMeta.generated_at || schemaInventory.discovered_at,
      total_tables: reportMeta.total_tables || indexAnalysis.statistics.total_tables,
    },
    summary: {
      total_tables: indexAnalysis.statistics.total_tables,
      total_columns: totalColumns,
      total_rows: totalRows,
      modules_count: moduleMap.modules.length,
      tables_with_pk: indexAnalysis.statistics.tables_with_pk,
      tables_without_pk: indexAnalysis.statistics.tables_without_pk,
    },
    modules,
    filters: {
      module: selectedModule?.name || null,
      query: options.query?.trim() || '',
    },
    tables: paginatedTables,
    pagination: {
      page: safePage,
      limit,
      total_count: totalCount,
      total_pages: totalPages,
      has_next_page: safePage < totalPages,
      has_prev_page: safePage > 1,
    },
  };
}

/**
 * Get table by name
 */
export async function getTableByName(name: string): Promise<{
  name: string;
  module: string;
  row_count: number;
  data_size_bytes: number;
  index_size_bytes: number;
  engine: string;
  comment: string;
  columns: Array<{ name: string; type: string; nullable: boolean; key: string; default: string | null; extra: string; comment: string }>;
  primary_key: string[];
  foreign_keys: Array<{ columns: string[]; referenced_table: string; referenced_columns: string[] }>;
  indexes: Array<{ name: string; columns: string[]; unique: boolean }>;
  has_primary_key: boolean;
  index_count: number;
  column_count: number;
  purpose: string;
  severity: string;
  issues: Array<{ type: string; severity: string; message: string }>;
  recommendations: Array<{ priority: string; action: string; reason: string; sql: string }>;
} | null> {
  const [schemaInventory, anomalies, indexAnalysis, moduleMap, dataDictionaryMeta] = await Promise.all([
    loadSchemaInventory(),
    loadAnomalies(),
    loadIndexAnalysis(),
    loadModuleMap(),
    loadDataDictionaryTableMeta(name),
  ]);

  const tableData = schemaInventory.tables[name];
  if (!tableData) return null;

  const tableAnomalies = anomalies.anomalies.filter((a) => a.table === name);
  const hasPk = tableData.primary_key && tableData.primary_key.length > 0;
  const indexCount = Array.isArray(tableData.indexes) ? tableData.indexes.length : 0;
  const module = getModuleForTable(name, moduleMap.modules);

  const tableRecommendations = indexAnalysis.recommended_indexes
    .filter((r) => r.table === name)
    .map((r) => ({
      priority: r.priority,
      action: `Add ${r.type} on ${r.columns.join(', ')}`,
      reason: r.reason,
      sql: `ALTER TABLE \`${name}\` ADD ${r.type} (\`${r.columns.join('`, `')}\`);`,
    }));

  return {
    name,
    module,
    row_count: tableData.row_count || 0,
    data_size_bytes: tableData.data_size_bytes || 0,
    index_size_bytes: tableData.index_size_bytes || 0,
    engine: tableData.engine || 'Unknown',
    comment: tableData.comment || dataDictionaryMeta.tableDescription || '',
    columns: (tableData.columns || []).map((column) => ({
      ...column,
      comment: column.comment || dataDictionaryMeta.columnDescriptions[column.name] || '',
    })),
    primary_key: tableData.primary_key || [],
    foreign_keys: Array.isArray(tableData.foreign_keys) ? tableData.foreign_keys : [],
    indexes: tableData.indexes || [],
    has_primary_key: hasPk ?? false,
    index_count: indexCount,
    column_count: Array.isArray(tableData.columns) ? tableData.columns.length : 0,
    purpose: 'transaction',
    severity: getSeverity(tableAnomalies),
    issues: tableAnomalies.map((a) => ({
      type: a.category,
      severity: a.severity,
      message: a.message,
    })),
    recommendations: tableRecommendations,
  };
}

/**
 * Get index recommendations
 */
export async function getIndexRecommendations(): Promise<{
  summary: {
    total_recommendations: number;
    by_priority: { high: number; medium: number; low: number };
    estimated_impact: { high: string; medium: string; low: string };
  };
  recommendations: Array<{
    priority: string;
    priority_order: number;
    table: string;
    index_type: string;
    columns: string[];
    row_count: number;
    reason: string;
    impact: string;
    sql: string;
  }>;
}> {
  const indexAnalysis = await loadIndexAnalysis();

  const high = indexAnalysis.recommended_indexes.filter((r) => r.priority.toUpperCase() === 'HIGH').length;
  const medium = indexAnalysis.recommended_indexes.filter((r) => r.priority.toUpperCase() === 'MEDIUM').length;
  const low = indexAnalysis.recommended_indexes.filter((r) => r.priority.toUpperCase() === 'LOW').length;

  return {
    summary: {
      total_recommendations: indexAnalysis.recommended_indexes.length,
      by_priority: { high, medium, low },
      estimated_impact: {
        high: 'Critical - Will significantly improve query performance on large tables',
        medium: 'Moderate - Will improve query performance on medium tables',
        low: 'Low - Minor improvement for small tables',
      },
    },
    recommendations: indexAnalysis.recommended_indexes.map((r, i) => ({
      priority: r.priority.toUpperCase(),
      priority_order: i + 1,
      table: r.table,
      index_type: r.type,
      columns: r.columns,
      row_count: indexAnalysis.tables_without_pk.find((t) => t.table === r.table)?.row_count ||
                 indexAnalysis.large_tables_missing_indexes.find((t) => t.table === r.table)?.row_count || 0,
      reason: r.reason,
      impact: getImpactDescription(r.priority),
      sql: `ALTER TABLE \`${r.table}\` ADD ${r.type} (\`${r.columns.join('`, `')}\`);`,
    })),
  };
}

/**
 * Search tables and modules
 */
export async function searchDatabase(
  query: string,
  type: 'tables' | 'modules' | 'all' = 'all',
  page: number = 1,
  limit: number = 20
): Promise<{
  query: string;
  results: Array<{
    type: 'table' | 'module';
    name: string;
    module?: string;
    row_count?: number;
    size_mb?: number;
    relevance: number;
    snippet: string;
  }>;
  pagination: { page: number; limit: number; total_count: number; total_pages: number; has_next_page: boolean; has_prev_page: boolean };
  filters: { type: string; applied: boolean };
}> {
  const [schemaInventory, moduleMap] = await Promise.all([
    loadSchemaInventory(),
    loadModuleMap(),
  ]);

  const searchTerms = query.toLowerCase().split(' ').filter(Boolean);
  const results: Array<{
    type: 'table' | 'module';
    name: string;
    module?: string;
    row_count?: number;
    size_mb?: number;
    relevance: number;
    snippet: string;
  }> = [];

  // Search tables
  if (type === 'tables' || type === 'all') {
    Object.entries(schemaInventory.tables).forEach(([name, data]) => {
      const tableData = data as TableInfo;
      const score = searchTerms.reduce((acc, term) => {
        return acc + (name.toLowerCase().includes(term) ? 1 : 0);
      }, 0);

      if (score > 0) {
        results.push({
          type: 'table',
          name,
          module: getModuleForTable(name, moduleMap.modules),
          row_count: tableData.row_count || 0,
          size_mb: Math.round((tableData.data_size_bytes || 0) / (1024 * 1024) * 100) / 100,
          relevance: score / searchTerms.length,
          snippet: `Table with ${(tableData.row_count || 0).toLocaleString()} rows`,
        });
      }
    });
  }

  // Search modules
  if (type === 'modules' || type === 'all') {
    moduleMap.modules.forEach((m) => {
      const score = searchTerms.reduce((acc, term) => {
        return acc + (m.name.toLowerCase().includes(term) ||
                      m.description_th.includes(term) ||
                      m.description_en.toLowerCase().includes(term) ? 1 : 0);
      }, 0);

      if (score > 0) {
        results.push({
          type: 'module',
          name: m.name,
          module: m.name,
          relevance: score / searchTerms.length,
          snippet: m.description_en,
        });
      }
    });
  }

  // Sort by relevance
  results.sort((a, b) => b.relevance - a.relevance);

  // Pagination
  const total = results.length;
  const totalPages = Math.ceil(total / limit);
  const startIndex = (page - 1) * limit;
  const paginatedResults = results.slice(startIndex, startIndex + limit);

  return {
    query,
    results: paginatedResults,
    pagination: {
      page,
      limit,
      total_count: total,
      total_pages: totalPages,
      has_next_page: page < totalPages,
      has_prev_page: page > 1,
    },
    filters: {
      type,
      applied: true,
    },
  };
}

// ============================================================
// Helper Functions
// ============================================================

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

function getModuleForTable(tableName: string, modules: ModuleInfo[]): string {
  for (const m of modules) {
    if (m.tables.includes(tableName)) {
      return m.name;
    }
  }
  return 'other';
}

function getGrade(score: number): string {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}

function getSeverity(anomalies: AnomalyInfo[]): string {
  if (anomalies.some((a) => a.severity.toUpperCase() === 'CRITICAL' || a.severity.toUpperCase() === 'HIGH')) {
    return 'CRITICAL';
  }
  if (anomalies.some((a) => a.severity.toUpperCase() === 'WARNING' || a.severity.toUpperCase() === 'MEDIUM')) {
    return 'WARNING';
  }
  return 'INFO';
}

function formatCategoryName(category: string): string {
  return category
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function getCategoryDescription(category: string): string {
  const descriptions: Record<string, string> = {
    missing_primary_keys: 'Tables without primary key constraint',
    missing_indexes: 'Tables without proper secondary indexes',
    large_tables_no_index: 'Large tables (>10K rows) missing proper indexing',
    orphan_tables: 'Tables not linked to any module classification',
    naming_issues: 'Tables with non-standard naming conventions',
  };
  return descriptions[category] || category;
}

function getImpactDescription(priority: string): string {
  const impacts: Record<string, string> = {
    HIGH: 'Critical - Will significantly improve query performance on large tables',
    MEDIUM: 'Moderate - Will improve query performance on medium tables',
    LOW: 'Low - Minor improvement for small tables',
  };
  return impacts[priority.toUpperCase()] || 'Unknown impact';
}

function getAnomalyImpactDescription(severity: string, rowCount: number): string {
  const sev = severity.toUpperCase();
  if (sev === 'CRITICAL' || sev === 'HIGH') {
    if (rowCount > 1000000) {
      return 'Critical - Very large table without proper indexing severely impacts performance';
    }
    if (rowCount > 10000) {
      return 'High - Large table without PK can cause performance issues';
    }
    return 'High - Missing critical constraint';
  }
  if (sev === 'WARNING' || sev === 'MEDIUM') {
    return 'Medium - Should be addressed for optimal performance';
  }
  return 'Low - Minor impact, can be addressed later';
}

async function loadDataDictionaryReportMeta(): Promise<{
  database: string;
  server_version: string;
  generated_at: string;
  total_tables: number;
}> {
  const defaultMeta = {
    database: '',
    server_version: '',
    generated_at: '',
    total_tables: 0,
  };

  try {
    const reportPath = path.join(process.cwd(), 'docs', 'DATA_DICTIONARY.md');
    const content = await fs.readFile(reportPath, 'utf-8');

    const databaseMatch = content.match(/\*\*Database:\*\*\s*(.+)/);
    const serverVersionMatch = content.match(/\*\*Server Version:\*\*\s*(.+)/);
    const generatedAtMatch = content.match(/\*\*Generated:\*\*\s*(.+)/);
    const totalTablesMatch = content.match(/\*\*Total Tables:\*\*\s*(\d+)/);

    return {
      database: databaseMatch?.[1]?.trim() || '',
      server_version: serverVersionMatch?.[1]?.trim() || '',
      generated_at: generatedAtMatch?.[1]?.trim() || '',
      total_tables: totalTablesMatch ? parseInt(totalTablesMatch[1], 10) : 0,
    };
  } catch {
    return defaultMeta;
  }
}

async function loadDataDictionaryTableMeta(tableName: string): Promise<{
  tableDescription: string;
  columnDescriptions: Record<string, string>;
}> {
  try {
    const reportPath = path.join(process.cwd(), 'docs', 'DATA_DICTIONARY.md');
    const content = await fs.readFile(reportPath, 'utf-8');
    const escapedName = escapeRegExp(tableName);
    const sectionRegex = new RegExp(`^###\\s+${escapedName}\\s*$([\\s\\S]*?)(?=^---\\s*$)`, 'm');
    const sectionMatch = content.match(sectionRegex);

    if (!sectionMatch) {
      return {
        tableDescription: '',
        columnDescriptions: {},
      };
    }

    const section = sectionMatch[1];
    const descriptionMatch = section.match(/\*\*.*Description.*:\*\*\s*(.+)/i);
    const columnDescriptions: Record<string, string> = {};

    section.split(/\r?\n/).forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed.startsWith('| `')) return;

      const parts = trimmed.split('|').map((part) => part.trim());
      const columnName = parts[1]?.replace(/^`|`$/g, '');
      const description = parts[5];

      if (columnName) {
        columnDescriptions[columnName] = description && description !== '-' ? description : '';
      }
    });

    return {
      tableDescription: descriptionMatch?.[1]?.trim() === '-'
        ? ''
        : descriptionMatch?.[1]?.trim() || '',
      columnDescriptions,
    };
  } catch {
    return {
      tableDescription: '',
      columnDescriptions: {},
    };
  }
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
