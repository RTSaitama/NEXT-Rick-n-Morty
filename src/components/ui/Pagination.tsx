/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link'

export default function Pagination({ currentPage, totalPages, basePath }: any) {
  return (
    <div className="pagination-container">
      {currentPage > 1 ? (
        <Link href={`${basePath}?page=${currentPage - 1}`} 
              className="pagination-button">
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
        <Link href={`${basePath}?page=${currentPage + 1}`} 
              className="pagination-button">
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