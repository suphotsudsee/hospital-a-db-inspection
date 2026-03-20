// API Route: GET /api/search
// Search tables and modules

import { NextRequest, NextResponse } from 'next/server';
import { searchDatabase } from '@/lib/data-loader';
import { getTimestamp, getCacheExpiration, sanitizeSearchQuery } from '@/lib/utils';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=86400',
};

// Short cache for search (5 minutes)
export const revalidate = 300;

export async function OPTIONS() {
  return NextResponse.json(null, { headers: corsHeaders });
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q') || '';
    const type = (searchParams.get('type') || 'all') as 'tables' | 'modules' | 'all';
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');

    // Validate parameters
    const sanitizedQuery = sanitizeSearchQuery(query);

    if (!sanitizedQuery || sanitizedQuery.length < 1) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'INVALID_QUERY',
            message: 'Search query must be at least 1 character',
          },
          timestamp: getTimestamp(),
        },
        { status: 400, headers: corsHeaders }
      );
    }

    const validType = ['tables', 'modules', 'all'].includes(type) ? type : 'all';
    const validPage = Math.max(1, page);
    const validLimit = Math.min(50, Math.max(1, limit));

    const data = await searchDatabase(sanitizedQuery, validType as 'all', validPage, validLimit);

    const response = {
      success: true,
      timestamp: getTimestamp(),
      generated_at: getTimestamp(),
      cache_expires_at: getCacheExpiration(0.083), // 5 minutes
      data,
    };

    return NextResponse.json(response, { headers: corsHeaders });
  } catch (error) {
    console.error('[API] Search error:', error);

    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'SEARCH_ERROR',
          message: 'Failed to perform search',
          details: error instanceof Error ? error.message : 'Unknown error',
        },
        timestamp: getTimestamp(),
      },
      { status: 500, headers: corsHeaders }
    );
  }
}