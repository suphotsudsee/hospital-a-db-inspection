'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SearchInput } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`
    }
  }
  
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="px-4 md:px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          {/* Search */}
          <form onSubmit={handleSearch} className="flex-1 max-w-xl">
            <SearchInput
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tables, modules..."
            />
          </form>
          
          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Refresh button */}
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh
            </Button>
            
            {/* Dark mode toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="p-2"
              onClick={() => {
                document.documentElement.classList.toggle('dark')
              }}
            >
              <svg className="w-5 h-5 dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              <svg className="w-5 h-5 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-gray-900">
          <nav className="space-y-2">
            <Link href="/" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              Overview
            </Link>
            <Link href="/modules" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              Modules
            </Link>
            <Link href="/anomalies" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              Anomalies
            </Link>
            <Link href="/indexes" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              Indexes
            </Link>
            <Link href="/tables" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              Tables
            </Link>
            <Link href="/search" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              Search
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}