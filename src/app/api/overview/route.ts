// API Route: GET /api/overview
// Database overview statistics

import { NextRequest, NextResponse } from 'next/server';
import { getDatabaseOverview } from '@/lib/data-loader';
import { getTimestamp, getCacheExpiration } from '@/lib/utils';

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
};

// ISR: Revalidate every hour
export const revalidate = 3600;

export async function OPTIONS() {
  return NextResponse.json(null, { headers: corsHeaders });
}

export async function GET(request: NextRequest) {
  try {
    const data = await getDatabaseOverview();

    const response = {
      success: true,
      timestamp: getTimestamp(),
      generated_at: getTimestamp(),
      cache_expires_at: getCacheExpiration(1),
      data,
    };

    return NextResponse.json(response, { headers: corsHeaders });
  } catch (error) {
    console.error('[API] Overview error:', error);

    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'OVERVIEW_ERROR',
          message: 'Failed to load database overview',
          details: error instanceof Error ? error.message : 'Unknown error',
        },
        timestamp: getTimestamp(),
      },
      { status: 500, headers: corsHeaders }
    );
  }
}