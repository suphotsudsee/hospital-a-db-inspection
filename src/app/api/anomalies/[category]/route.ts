// API Route: GET /api/anomalies/[category]
// Get tables for a specific anomaly category

import { NextRequest, NextResponse } from 'next/server';
import { loadAnomalies, loadSchemaInventory, loadModuleMap } from '@/lib/data-loader';
import { getTimestamp, getCacheExpiration, calculatePagination } from '@/lib/utils';

// Types defined inline
interface AnomalyCategory {
  name: string;
  display_name: string;
  description: string;
  total_count: number;
  severity_breakdown: { critical: number; warning: number; info: number };
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=86400',
};

export const revalidate = 1800;

export async function OPTIONS() {
  return NextResponse.json(null, { headers: corsHeaders });
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ category: string }> }
) {
  try {
    const { category } = await params;
    const categoryName = decodeURIComponent(category);
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');

    // Load data
    const [anomalies, schemaInventory, moduleMap] = await Promise.all([
      loadAnomalies(),
      loadSchemaInventory(),
      loadModuleMap(),
    ]);

    // Filter anomalies by category
    const categoryAnomalies = anomalies.anomalies.filter(
      (a) => a.category.toLowerCase() === categoryName.toLowerCase().replace(/-/g, '_')
    );

    if (categoryAnomalies.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'CATEGORY_NOT_FOUND',
            message: `Category '${categoryName}' not found`,
          },
          timestamp: getTimestamp(),
        },
        { status: 404, headers: corsHeaders }
      );
    }

    // Get module helper
    const getModule = (tableName: string): string => {
      for (const m of moduleMap.modules) {
        if (m.tables.includes(tableName)) return m.name;
      }
      return 'other';
    };

    // Build tables list
    const tables = categoryAnomalies.map((a) => {
      const tableData = schemaInventory.tables[a.table as keyof typeof schemaInventory.tables] as {
        row_count?: number;
        data_size_bytes?: number;
        engine?: string;
      } | undefined;

      return {
        name: a.table,
        module: getModule(a.table),
        row_count: tableData?.row_count || 0,
        size_bytes: tableData?.data_size_bytes || 0,
        size_mb: Math.round((tableData?.data_size_bytes || 0) / (1024 * 1024) * 100) / 100,
        engine: tableData?.engine || 'Unknown',
        severity: a.severity.toUpperCase(),
        issue: a.message,
        recommendation: a.recommendation || `Review and fix ${a.category}`,
        impact: getImpactDescription(a.severity, tableData?.row_count || 0),
      };
    });

    // Sort by severity then by row count
    tables.sort((a, b) => {
      const severityOrder = { CRITICAL: 0, HIGH: 1, WARNING: 2, MEDIUM: 3, INFO: 4, LOW: 5 };
      const aOrder = severityOrder[a.severity as keyof typeof severityOrder] ?? 6;
      const bOrder = severityOrder[b.severity as keyof typeof severityOrder] ?? 6;
      if (aOrder !== bOrder) return aOrder - bOrder;
      return b.row_count - a.row_count;
    });

    // Pagination
    const total = tables.length;
    const pagination = calculatePagination(total, page, limit);
    const paginatedTables = tables.slice(pagination.offset, pagination.offset + limit);

    // Build category info
    const criticalCount = categoryAnomalies.filter(
      (a) => a.severity.toUpperCase() === 'CRITICAL' || a.severity.toUpperCase() === 'HIGH'
    ).length;
    const warningCount = categoryAnomalies.filter(
      (a) => a.severity.toUpperCase() === 'WARNING' || a.severity.toUpperCase() === 'MEDIUM'
    ).length;
    const infoCount = categoryAnomalies.filter(
      (a) => a.severity.toUpperCase() === 'INFO' || a.severity.toUpperCase() === 'LOW'
    ).length;

    const categoryInfo: AnomalyCategory = {
      name: categoryName.replace(/-/g, '_'),
      display_name: formatCategoryName(categoryName),
      description: getCategoryDescription(categoryName),
      total_count: total,
      severity_breakdown: {
        critical: criticalCount,
        warning: warningCount,
        info: infoCount,
      },
    };

    const response = {
      success: true,
      timestamp: getTimestamp(),
      generated_at: getTimestamp(),
      cache_expires_at: getCacheExpiration(0.5),
      pagination: {
        page: pagination.page,
        limit: pagination.limit,
        total_count: total,
        total_pages: pagination.total_pages,
        has_next_page: pagination.page < pagination.total_pages,
        has_prev_page: pagination.page > 1,
      },
      data: {
        category: categoryInfo,
        tables: paginatedTables,
      },
    };

    return NextResponse.json(response, { headers: corsHeaders });
  } catch (error) {
    console.error('[API] Anomaly category error:', error);

    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'ANOMALY_CATEGORY_ERROR',
          message: 'Failed to load anomaly category',
          details: error instanceof Error ? error.message : 'Unknown error',
        },
        timestamp: getTimestamp(),
      },
      { status: 500, headers: corsHeaders }
    );
  }
}

function formatCategoryName(category: string): string {
  return category
    .replace(/-/g, '_')
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
  return descriptions[category.replace(/-/g, '_')] || category;
}

function getImpactDescription(severity: string, rowCount: number): string {
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