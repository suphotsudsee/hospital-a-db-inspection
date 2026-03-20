// SQL Queries for future database connection
// Currently uses static JSON data, but prepared for mysql2/promise integration

// ============================================================
// Database Connection Configuration
// ============================================================

export interface DatabaseConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
  connectionLimit?: number;
}

export const defaultConfig: DatabaseConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'hidb10949',
  connectionLimit: 10,
};

// ============================================================
// Query Functions (Prepared for Live DB Connection)
// ============================================================

/**
 * Get database overview statistics
 */
export const queries = {
  // Database Stats
  getDatabaseStats: `
    SELECT 
      COUNT(*) as total_tables,
      SUM(TABLE_ROWS) as total_rows,
      SUM(DATA_LENGTH + INDEX_LENGTH) as total_size,
      SUM(DATA_LENGTH) as data_size,
      SUM(INDEX_LENGTH) as index_size
    FROM information_schema.TABLES
    WHERE TABLE_SCHEMA = ?
  `,

  getEngineTypes: `
    SELECT DISTINCT ENGINE
    FROM information_schema.TABLES
    WHERE TABLE_SCHEMA = ?
    AND ENGINE IS NOT NULL
    ORDER BY ENGINE
  `,

  // Tables
  getAllTables: `
    SELECT 
      TABLE_NAME as name,
      TABLE_ROWS as row_count,
      DATA_LENGTH as data_size_bytes,
      INDEX_LENGTH as index_size_bytes,
      ENGINE as engine,
      TABLE_COMMENT as comment
    FROM information_schema.TABLES
    WHERE TABLE_SCHEMA = ?
    ORDER BY TABLE_NAME
    LIMIT ? OFFSET ?
  `,

  getTableCount: `
    SELECT COUNT(*) as count
    FROM information_schema.TABLES
    WHERE TABLE_SCHEMA = ?
  `,

  getTableColumns: `
    SELECT 
      COLUMN_NAME as name,
      COLUMN_TYPE as type,
      IS_NULLABLE as nullable,
      COLUMN_KEY as \`key\`,
      COLUMN_DEFAULT as \`default\`,
      EXTRA as extra,
      COLUMN_COMMENT as comment
    FROM information_schema.COLUMNS
    WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ?
    ORDER BY ORDINAL_POSITION
  `,

  getTableIndexes: `
    SELECT 
      INDEX_NAME as name,
      GROUP_CONCAT(COLUMN_NAME ORDER BY SEQ_IN_INDEX) as columns,
      NOT NON_UNIQUE as \`unique\`
    FROM information_schema.STATISTICS
    WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ?
    GROUP BY INDEX_NAME
  `,

  getTablePrimaryKey: `
    SELECT COLUMN_NAME
    FROM information_schema.KEY_COLUMN_USAGE
    WHERE TABLE_SCHEMA = ? 
    AND TABLE_NAME = ?
    AND CONSTRAINT_NAME = 'PRIMARY'
    ORDER BY ORDINAL_POSITION
  `,

  getTableForeignKeys: `
    SELECT 
      COLUMN_NAME as column_name,
      REFERENCED_TABLE_NAME as referenced_table,
      REFERENCED_COLUMN_NAME as referenced_column
    FROM information_schema.KEY_COLUMN_USAGE
    WHERE TABLE_SCHEMA = ?
    AND TABLE_NAME = ?
    AND REFERENCED_TABLE_NAME IS NOT NULL
  `,

  // Anomalies
  getTablesWithoutPK: `
    SELECT 
      t.TABLE_NAME as table_name,
      t.TABLE_ROWS as row_count,
      t.DATA_LENGTH as data_size
    FROM information_schema.TABLES t
    LEFT JOIN information_schema.TABLE_CONSTRAINTS tc 
      ON t.TABLE_NAME = tc.TABLE_NAME 
      AND t.TABLE_SCHEMA = tc.TABLE_SCHEMA 
      AND tc.CONSTRAINT_TYPE = 'PRIMARY KEY'
    WHERE t.TABLE_SCHEMA = ?
    AND tc.CONSTRAINT_NAME IS NULL
    AND t.TABLE_TYPE = 'BASE TABLE'
    ORDER BY t.TABLE_ROWS DESC
  `,

  getTablesWithoutIndexes: `
    SELECT 
      t.TABLE_NAME as table_name,
      t.TABLE_ROWS as row_count,
      t.DATA_LENGTH as data_size
    FROM information_schema.TABLES t
    LEFT JOIN information_schema.STATISTICS s 
      ON t.TABLE_NAME = s.TABLE_NAME 
      AND t.TABLE_SCHEMA = s.TABLE_SCHEMA
    WHERE t.TABLE_SCHEMA = ?
    AND s.INDEX_NAME IS NULL
    AND t.TABLE_TYPE = 'BASE TABLE'
    ORDER BY t.TABLE_ROWS DESC
  `,

  getLargeTablesWithoutIndexes: `
    SELECT 
      t.TABLE_NAME as table_name,
      t.TABLE_ROWS as row_count,
      t.DATA_LENGTH as data_size,
      CASE WHEN tc.CONSTRAINT_NAME IS NOT NULL THEN 1 ELSE 0 END as has_pk,
      COUNT(DISTINCT s.INDEX_NAME) as index_count
    FROM information_schema.TABLES t
    LEFT JOIN information_schema.TABLE_CONSTRAINTS tc 
      ON t.TABLE_NAME = tc.TABLE_NAME 
      AND t.TABLE_SCHEMA = tc.TABLE_SCHEMA 
      AND tc.CONSTRAINT_TYPE = 'PRIMARY KEY'
    LEFT JOIN information_schema.STATISTICS s 
      ON t.TABLE_NAME = s.TABLE_NAME 
      AND t.TABLE_SCHEMA = s.TABLE_SCHEMA
    WHERE t.TABLE_SCHEMA = ?
    AND t.TABLE_ROWS > 10000
    GROUP BY t.TABLE_NAME
    HAVING index_count < 2
    ORDER BY t.TABLE_ROWS DESC
  `,

  // Module Classification
  getTableClassification: `
    SELECT 
      TABLE_NAME as table_name,
      CASE 
        WHEN TABLE_NAME LIKE 'patient%' OR TABLE_NAME LIKE 'pt%' OR TABLE_NAME LIKE 'PERSON%'
          OR TABLE_NAME LIKE 'hn%' OR TABLE_NAME LIKE 'cid%'
          THEN 'patient'
        WHEN TABLE_NAME LIKE 'ovst%' OR TABLE_NAME LIKE 'opd%'
          THEN 'opd'
        WHEN TABLE_NAME LIKE 'an%' OR TABLE_NAME LIKE 'ipd%' OR TABLE_NAME LIKE 'ward%'
          THEN 'ipd'
        WHEN TABLE_NAME LIKE 'drug%' OR TABLE_NAME LIKE 'pharmacy%' OR TABLE_NAME LIKE 'med%'
          OR TABLE_NAME LIKE 'prsc%' OR TABLE_NAME LIKE 'disp%'
          THEN 'pharmacy'
        WHEN TABLE_NAME LIKE 'lab%' OR TABLE_NAME LIKE 'xray%' OR TABLE_NAME LIKE 'path%'
          THEN 'laboratory'
        WHEN TABLE_NAME LIKE 'refer%' OR TABLE_NAME LIKE 'rf%'
          THEN 'referral'
        WHEN TABLE_NAME LIKE 'finance%' OR TABLE_NAME LIKE 'acc%' OR TABLE_NAME LIKE 'bill%'
          OR TABLE_NAME LIKE 'payment%'
          THEN 'finance'
        WHEN TABLE_NAME LIKE 'staff%' OR TABLE_NAME LIKE 'doctor%' OR TABLE_NAME LIKE 'nurse%'
          OR TABLE_NAME LIKE 'emp%'
          THEN 'personnel'
        WHEN TABLE_NAME LIKE 'app%' OR TABLE_NAME LIKE 'config%' OR TABLE_NAME LIKE 'sys%'
          OR TABLE_NAME LIKE 'setting%'
          THEN 'system'
        ELSE 'other'
      END as module
    FROM information_schema.TABLES
    WHERE TABLE_SCHEMA = ?
    ORDER BY module, TABLE_NAME
  `,

  // Health Score
  getHealthMetrics: `
    SELECT 
      COUNT(*) as total_tables,
      SUM(CASE WHEN tc.CONSTRAINT_TYPE = 'PRIMARY KEY' THEN 1 ELSE 0 END) as tables_with_pk,
      COUNT(DISTINCT s.INDEX_NAME) as total_indexes
    FROM information_schema.TABLES t
    LEFT JOIN information_schema.TABLE_CONSTRAINTS tc 
      ON t.TABLE_NAME = tc.TABLE_NAME 
      AND t.TABLE_SCHEMA = tc.TABLE_SCHEMA 
      AND tc.CONSTRAINT_TYPE = 'PRIMARY KEY'
    LEFT JOIN information_schema.STATISTICS s 
      ON t.TABLE_NAME = s.TABLE_NAME 
      AND t.TABLE_SCHEMA = s.TABLE_SCHEMA
    WHERE t.TABLE_SCHEMA = ?
    AND t.TABLE_TYPE = 'BASE TABLE'
  `,

  // Search
  searchTables: `
    SELECT 
      TABLE_NAME as name,
      TABLE_ROWS as row_count,
      DATA_LENGTH as size_bytes,
      ENGINE as engine
    FROM information_schema.TABLES
    WHERE TABLE_SCHEMA = ?
    AND TABLE_NAME LIKE ?
    ORDER BY TABLE_NAME
    LIMIT ? OFFSET ?
  `,

  // Index Recommendations
  getIndexRecommendations: `
    SELECT 
      TABLE_NAME as table_name,
      COLUMN_NAME as column_name,
      COUNT(*) as usage_count
    FROM information_schema.STATISTICS
    WHERE TABLE_SCHEMA = ?
    GROUP BY TABLE_NAME, COLUMN_NAME
    ORDER BY usage_count DESC
  `,
};

// ============================================================
// Query Execution Helper (for future use with mysql2/promise)
// ============================================================

/**
 * Pool type placeholder (will be mysql2 Pool when enabled)
 */
type DbPool = unknown;

/**
 * Execute a query with the provided pool
 */
export async function executeQuery<T>(
  pool: DbPool,
  sql: string,
  params: unknown[] = []
): Promise<T[]> {
  // This function is prepared for future mysql2 integration
  // Currently returns empty array as static JSON data is used
  console.log('[DB] Query prepared:', sql.substring(0, 100));
  return [] as T[];
}

// ============================================================
// Connection Pool Management
// ============================================================

let pool: DbPool | null = null;

/**
 * Get or create a connection pool
 */
export async function getPool(): Promise<DbPool | null> {
  if (pool) return pool;

  // Check if database connection is enabled
  if (process.env.DB_ENABLED !== 'true') {
    return null;
  }

  try {
    // Dynamic import for mysql2 when needed
    // const mysql = await import('mysql2/promise');
    // pool = mysql.createPool({...});
    console.log('[DB] Database connection not enabled (using static JSON)');
    return null;
  } catch (error) {
    console.error('[DB] Failed to create connection pool:', error);
    return null;
  }
}

/**
 * Close connection pool
 */
export async function closePool(): Promise<void> {
  if (pool) {
    // await pool.end();
    pool = null;
    console.log('[DB] Connection pool closed');
  }
}

// ============================================================
// Query Builders for Complex Operations
// ============================================================

/**
 * Build a search query with filters
 */
export function buildSearchQuery(
  searchTerm: string,
  filters: {
    module?: string;
    engine?: string;
    hasPk?: boolean;
    minRows?: number;
    maxRows?: number;
  }
): { sql: string; params: unknown[] } {
  let sql = `
    SELECT TABLE_NAME, TABLE_ROWS, DATA_LENGTH, ENGINE
    FROM information_schema.TABLES
    WHERE TABLE_SCHEMA = ?
    AND TABLE_NAME LIKE ?
  `;
  const params: unknown[] = [defaultConfig.database, `%${searchTerm}%`];

  if (filters.engine) {
    sql += ' AND ENGINE = ?';
    params.push(filters.engine);
  }

  if (filters.minRows !== undefined) {
    sql += ' AND TABLE_ROWS >= ?';
    params.push(filters.minRows);
  }

  if (filters.maxRows !== undefined) {
    sql += ' AND TABLE_ROWS <= ?';
    params.push(filters.maxRows);
  }

  sql += ' ORDER BY TABLE_ROWS DESC';

  return { sql, params };
}

/**
 * Build pagination clause
 */
export function buildPaginationClause(
  page: number,
  limit: number
): { offset: number; limitQuery: string } {
  const offset = (page - 1) * limit;
  const limitQuery = `LIMIT ${limit} OFFSET ${offset}`;
  return { offset, limitQuery };
}

// ============================================================
// Rate Limiting Helper
// ============================================================

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

/**
 * Check rate limit for an IP
 */
export function checkRateLimit(
  ip: string,
  maxRequests: number = 100,
  windowMs: number = 60000
): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetAt) {
    // Create new entry
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + windowMs,
    });
    return {
      allowed: true,
      remaining: maxRequests - 1,
      resetAt: now + windowMs,
    };
  }

  if (entry.count >= maxRequests) {
    // Rate limit exceeded
    return {
      allowed: false,
      remaining: 0,
      resetAt: entry.resetAt,
    };
  }

  // Increment count
  entry.count++;
  rateLimitStore.set(ip, entry);

  return {
    allowed: true,
    remaining: maxRequests - entry.count,
    resetAt: entry.resetAt,
  };
}

/**
 * Clean up expired rate limit entries
 */
export function cleanupRateLimits(): void {
  const now = Date.now();
  for (const [ip, entry] of rateLimitStore.entries()) {
    if (now > entry.resetAt) {
      rateLimitStore.delete(ip);
    }
  }
}

// Run cleanup every 5 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(cleanupRateLimits, 5 * 60 * 1000);
}