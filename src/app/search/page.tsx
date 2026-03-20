'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Card, CardBody } from '@/components/ui/card'
import { SearchInput } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SkeletonCard } from '@/components/ui/skeleton'
import { formatBytes, formatNumber } from '@/lib/utils'

interface SearchResult {
  type: 'table' | 'module'
  name: string
  module?: string
  row_count?: number
  size_mb?: number
  relevance: number
  snippet: string
}

interface SearchData {
  query: string
  results: SearchResult[]
  pagination: {
    page: number
    limit: number
    total_count: number
    total_pages: number
    has_next_page: boolean
    has_prev_page: boolean
  }
  filters: {
    type: string
    applied: boolean
  }
}

function SearchContent() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  const initialType = searchParams.get('type') || 'all'
  
  const [query, setQuery] = useState(initialQuery)
  const [type, setType] = useState(initialType)
  const [data, setData] = useState<SearchData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  
  useEffect(() => {
    if (initialQuery) {
      performSearch(initialQuery, initialType, 1)
    }
  }, [initialQuery, initialType])
  
  const performSearch = async (searchQuery: string, searchType: string, pageNum: number) => {
    if (!searchQuery.trim()) return
    
    setLoading(true)
    setError(null)
    
    try {
      const res = await fetch(
        `/api/search?q=${encodeURIComponent(searchQuery)}&type=${searchType}&page=${pageNum}&limit=20`
      )
      if (!res.ok) throw new Error('Search failed')
      const json = await res.json()
      setData(json.data)
      setPage(pageNum)
    } catch (err) {
      console.error('Search error:', err)
      setError('Failed to perform search. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      // Update URL
      const url = new URL(window.location.href)
      url.searchParams.set('q', query)
      url.searchParams.set('type', type)
      window.history.pushState({}, '', url)
      
      performSearch(query, type, 1)
    }
  }
  
  const handleTypeChange = (newType: string) => {
    setType(newType)
    if (query.trim()) {
      performSearch(query, newType, 1)
    }
  }
  
  const handlePageChange = (newPage: number) => {
    performSearch(query, type, newPage)
  }
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Search
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Search for tables and modules across the database
        </p>
      </div>
      
      {/* Search Form */}
      <Card variant="bordered">
        <CardBody>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <SearchInput
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search tables, modules..."
                />
              </div>
              <Button type="submit" disabled={loading || !query.trim()}>
                {loading ? 'Searching...' : 'Search'}
              </Button>
            </div>
            
            {/* Filters */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">Filter by:</span>
              <div className="flex gap-2">
                {['all', 'tables', 'modules'].map((filterType) => (
                  <button
                    key={filterType}
                    type="button"
                    onClick={() => handleTypeChange(filterType)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      type === filterType
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </form>
        </CardBody>
      </Card>
      
      {/* Error */}
      {error && (
        <Card variant="bordered" className="border-red-500">
          <CardBody>
            <p className="text-red-600 dark:text-red-400">{error}</p>
          </CardBody>
        </Card>
      )}
      
      {/* Loading */}
      {loading && (
        <div className="space-y-4">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      )}
      
      {/* Results */}
      {data && !loading && (
        <div className="space-y-4">
          {/* Results Summary */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Found {data.pagination.total_count} result{data.pagination.total_count !== 1 ? 's' : ''} for &quot;{data.query}&quot;
            </p>
          </div>
          
          {/* Results List */}
          {data.results.length > 0 ? (
            <div className="space-y-3">
              {data.results.map((result, idx) => (
                <Link 
                  key={idx}
                  href={result.type === 'table' 
                    ? `/tables/${encodeURIComponent(result.name)}`
                    : `/modules/${encodeURIComponent(result.name)}`
                  }
                >
                  <Card variant="bordered" className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardBody className="py-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant={result.type === 'table' ? 'info' : 'success'}>
                              {result.type}
                            </Badge>
                            <span className="font-semibold text-gray-900 dark:text-gray-100">
                              {result.name}
                            </span>
                          </div>
                          {result.module && (
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Module: {result.module}
                            </p>
                          )}
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {result.snippet}
                          </p>
                        </div>
                        <div className="text-right">
                          {result.row_count !== undefined && (
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {formatNumber(result.row_count)} rows
                            </div>
                          )}
                          {result.size_mb !== undefined && (
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {formatBytes(result.size_mb * 1024 * 1024)}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <Card variant="bordered">
              <CardBody className="text-center py-12">
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                  No results found
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Try searching with different keywords or filters
                </p>
              </CardBody>
            </Card>
          )}
          
          {/* Pagination */}
          {data.pagination.total_pages > 1 && (
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                onClick={() => handlePageChange(page - 1)}
                disabled={!data.pagination.has_prev_page}
              >
                Previous
              </Button>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Page {page} of {data.pagination.total_pages}
              </span>
              <Button
                variant="outline"
                onClick={() => handlePageChange(page + 1)}
                disabled={!data.pagination.has_next_page}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      )}
      
      {/* Empty State */}
      {!data && !loading && !query && (
        <Card variant="bordered">
          <CardBody className="text-center py-12">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              Search the Database
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Enter a search term to find tables and modules
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => {
                  setQuery('patient')
                  setType('tables')
                }}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                Try: patient
              </button>
              <button
                onClick={() => {
                  setQuery('appointment')
                  setType('all')
                }}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                Try: appointment
              </button>
              <button
                onClick={() => {
                  setQuery('billing')
                  setType('modules')
                }}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                Try: billing
              </button>
            </div>
          </CardBody>
        </Card>
      )}
    </div>
  )
}

function SearchLoading() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Search</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Search for tables and modules across the database
        </p>
      </div>
      <Card variant="bordered">
        <CardBody className="py-4">
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
        </CardBody>
      </Card>
      <SkeletonCard />
      <SkeletonCard />
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchLoading />}>
      <SearchContent />
    </Suspense>
  )
}