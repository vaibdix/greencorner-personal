import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, paginate }) => {
  return (
    
    <nav aria-label="Page navigation" className="mb-10 -mt-5 grid col-start-2 justify-end">
    <ul className="flex text-sm">
      <li>
        <a
          href="#"
          onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
          className="ms-0 flex h-8 items-center justify-center rounded-s-lg border-gray-300 px-3 leading-tight text-gray-500"
        >
          <span className="sr-only">Previous</span>
          <ChevronLeft />
        </a>
      </li>
      {[...Array(totalPages)].map((_, index) => (
        <li key={index}>
          <a
            href="#"
            onClick={() => paginate(index + 1)}
            className={`flex h-8 items-center justify-center px-3 leading-tight text-gray-500 ${currentPage === index + 1 ? 'bg-[#1C3035] text-white' : 'hover:bg-gray-100'}`}
          >
            {index + 1}
          </a>
        </li>
      ))}
      <li>
        <a
          href="#"
          onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
          className="flex h-8 items-center justify-center rounded-e-lg border-gray-300 px-3 leading-tight text-gray-500"
        >
          <span className="sr-only">Next</span>
          <ChevronRight />
        </a>
      </li>
    </ul>
  </nav>
  );
};

export default Pagination;