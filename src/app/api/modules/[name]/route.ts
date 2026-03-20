// API Route: GET /api/modules/[name]
// Get detailed information for a specific module

import { NextRequest, NextResponse } from 'next/server';
import { getModuleByName } from '@/lib/data-loader';
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

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  try {
    const { name } = await params;
    const moduleName = decodeURIComponent(name);

    const data = await getModuleByName(moduleName);

    if (!data) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'MODULE_NOT_FOUND',
            message: `Module '${moduleName}' not found`,
          },
          timestamp: getTimestamp(),
        },
        { status: 404, headers: corsHeaders }
      );
    }

    const response = {
      success: true,
      timestamp: getTimestamp(),
      generated_at: getTimestamp(),
      cache_expires_at: getCacheExpiration(1),
      data,
    };

    return NextResponse.json(response, { headers: corsHeaders });
  } catch (error) {
    console.error('[API] Module detail error:', error);

    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'MODULE_DETAIL_ERROR',
          message: 'Failed to load module details',
          details: error instanceof Error ? error.message : 'Unknown error',
        },
        timestamp: getTimestamp(),
      },
      { status: 500, headers: corsHeaders }
    );
  }
}