// API Route: GET /api/tables
// List all tables with pagination and filtering

import { NextRequest, NextResponse } from 'next/server';
import { getTablesList } from '@/lib/data-loader';
import { getTimestamp, getCacheExpiration } from '@/lib/utils';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
};

export const revalidate = 3600;

export async function OPTIONS() {
  return NextResponse.json(null, { headers: corsHeaders });
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const sortBy = (searchParams.get('sort') || 'name') as 'name' | 'size' | 'rows';
    const order = (searchParams.get('order') || 'asc') as 'asc' | 'desc';

    // Validate parameters
    const validPage = Math.max(1, page);
    const validLimit = Math.min(100, Math.max(1, limit));
    const validSortBy = ['name', 'size', 'rows'].includes(sortBy) ? sortBy : 'name';
    const validOrder = ['asc', 'desc'].includes(order) ? order : 'asc';

    const result = await getTablesList(validPage, validLimit, validSortBy as 'name', validOrder as 'asc');

    const response = {
      success: true,
      timestamp: getTimestamp(),
      generated_at: getTimestamp(),
      cache_expires_at: getCacheExpiration(1),
      data: result.data,
      pagination: result.pagination,
    };

    return NextResponse.json(response, { headers: corsHeaders });
  } catch (error) {
    console.error('[API] Tables error:', error);

    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'TABLES_ERROR',
          message: 'Failed to load tables',
          details: error instanceof Error ? error.message : 'Unknown error',
        },
        timestamp: getTimestamp(),
      },
      { status: 500, headers: corsHeaders }
    );
  }
}