// API Route: GET /api/indexes/recommendations
// Index recommendations with priorities

import { NextRequest, NextResponse } from 'next/server';
import { getIndexRecommendations } from '@/lib/data-loader';
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
    const data = await getIndexRecommendations();

    const response = {
      success: true,
      timestamp: getTimestamp(),
      generated_at: getTimestamp(),
      cache_expires_at: getCacheExpiration(1),
      data,
    };

    return NextResponse.json(response, { headers: corsHeaders });
  } catch (error) {
    console.error('[API] Index recommendations error:', error);

    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'INDEX_RECOMMENDATIONS_ERROR',
          message: 'Failed to load index recommendations',
          details: error instanceof Error ? error.message : 'Unknown error',
        },
        timestamp: getTimestamp(),
      },
      { status: 500, headers: corsHeaders }
    );
  }
}