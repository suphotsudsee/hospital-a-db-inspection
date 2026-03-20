import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/layout/sidebar'
import Header from '@/components/layout/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hospital DB Dashboard',
  description: 'Database inspection dashboard for Hospital A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const renderedAt = new Date().toISOString()

  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-gray-50 dark:bg-gray-900`}>
        <div className="flex h-full">
          {/* Sidebar - Hidden on mobile */}
          <div className="hidden md:flex">
            <Sidebar renderedAt={renderedAt} />
          </div>
          
          {/* Main content area */}
          <div className="flex-1 flex flex-col min-h-screen md:ml-64">
            <Header />
            <main className="flex-1 p-4 md:p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
