import React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function PaginationDemo({ totalPages, currentPage, onPageChange }) {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page)
    }
  }

  const renderPageNumbers = () => {
    const pageNumbers = []
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <PaginationItem key={i}>
          <PaginationLink 
            href="#"
            onClick={(e) => {
              e.preventDefault()
              handlePageChange(i)
            }}
            isActive={currentPage === i}
            className={`w-10 h-10 border-2 ${
              currentPage === i 
                ? 'bg-[#3A6BE4] text-white  border-none' 
                : 'border-purple-200 text-[#3A6BE4] '
            } rounded-full flex items-center justify-center`}
          >
            {i.toString().padStart(2, '0')}
          </PaginationLink>
        </PaginationItem>
      )
    }
    return pageNumbers
  }

  return (
    <div className="bg-white p-4 rounded-full ">
      <Pagination>
        <PaginationContent className="space-x-2">
          <PaginationItem>
            <PaginationPrevious 
              href="#" 
              onClick={(e) => {
                e.preventDefault()
                handlePageChange(currentPage - 1)
              }}
              className="hover:bg-purple-100 text-[#3A6BE4] border-none rounded-full"
              aria-label="Go to previous page"
            />
          </PaginationItem>
          {renderPageNumbers()}
          <PaginationItem>
            <PaginationNext 
              href="#" 
              onClick={(e) => {
                e.preventDefault()
                handlePageChange(currentPage + 1)
              }}
              className="hover:bg-purple-100 text-[#3A6BE4] border-none rounded-full"
              aria-label="Go to next page"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

