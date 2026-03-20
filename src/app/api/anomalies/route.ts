// API Route: GET /api/anomalies
// Anomaly summary and categories

import { NextRequest, NextResponse } from 'next/server';
import { getAnomalySummary } from '@/lib/data-loader';
import { getTimestamp, getCacheExpiration } from '@/lib/utils';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=86400',
};

// Shorter cache for anomalies (30 minutes)
export const revalidate = 1800;

export async function OPTIONS() {
  return NextResponse.json(null, { headers: corsHeaders });
}

export async function GET(request: NextRequest) {
  try {
    const data = await getAnomalySummary();

    const response = {
      success: true,
      timestamp: getTimestamp(),
      generated_at: getTimestamp(),
      cache_expires_at: getCacheExpiration(0.5),
      data,
    };

    return NextResponse.json(response, { headers: corsHeaders });
  } catch (error) {
    console.error('[API] Anomalies error:', error);

    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'ANOMALIES_ERROR',
          message: 'Failed to load anomalies',
          details: error instanceof Error ? error.message : 'Unknown error',
        },
        timestamp: getTimestamp(),
      },
      { status: 500, headers: corsHeaders }
    );
  }
}