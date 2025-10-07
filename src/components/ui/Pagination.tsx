'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

type PaginationProps = {
  currentPage: number
  totalPages: number
  basePath: string
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  const searchParams = useSearchParams()
  
  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', String(page))
    return `${basePath}?${params.toString()}`
  }

  return (
    <div className="pagination-container">
      {currentPage > 1 ? (
        <Link href={createPageUrl(currentPage - 1)} className="pagination-button">
          Previous
        </Link>
      ) : (
        <button className="pagination-button" disabled>
          Previous
        </button>
      )}
      
      <span className="pagination-info">
        Page {currentPage} of {totalPages}
      </span>
      
      {currentPage < totalPages ? (
        <Link href={createPageUrl(currentPage + 1)} className="pagination-button">
          Next
        </Link>
      ) : (
        <button className="pagination-button" disabled>
          Next
        </button>
      )}
    </div>
  )
}