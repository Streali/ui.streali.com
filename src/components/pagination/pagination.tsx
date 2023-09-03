import { Icon } from '@streali/ui';
import { Fragment } from 'react';

interface PaginationProps {
  numberOfPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination(props: PaginationProps) {
  const { numberOfPages, currentPage, onPageChange } = props;

  return (
    <div className="flex gap-1 w-full justify-between">
      {currentPage !== 1 ? (
        <button
          className={`w-8 h-8 bg-grey-700 border border-grey-400 rounded hover:bg-grey-400`}
          onClick={() => onPageChange(currentPage - 1)}>
          <Icon name="arrow-left-s-line" />
        </button>
      ) : (
        <div></div>
      )}

      <div className="flex gap-1 w-72 justify-center">
        {currentPage - 2 >= 2 && (
          <>
            <button
              className={`w-8 h-8 bg-grey-700 border border-grey-400 rounded hover:bg-grey-400`}
              onClick={() => onPageChange(1)}>
              1
            </button>
            <div className="text-grey-300">...</div>
          </>
        )}

        {Array.from(Array(numberOfPages).keys()).map((page) => (
          <Fragment key={page}>
            {currentPage - 2 >= page + 2 ||
              (currentPage + 2 >= page + 1 && (
                <button
                  onClick={() => onPageChange(page + 1)}
                  className={`w-8 h-8 bg-grey-700 border border-grey-400 rounded hover:bg-grey-400  ${
                    page + 1 === currentPage
                      ? 'bg-primary-500 border-primary-500 hover:bg-primary-500 cursor-default'
                      : ''
                  }`}>
                  {page + 1}
                </button>
              ))}
          </Fragment>
        ))}

        {currentPage + 2 <= numberOfPages - 1 && (
          <>
            <div className="text-grey-300">...</div>
            <button
              className={`w-8 h-8 bg-grey-700 border border-grey-400 rounded hover:bg-grey-400`}
              onClick={() => onPageChange(numberOfPages)}>
              {numberOfPages}
            </button>
          </>
        )}
      </div>

      {currentPage !== numberOfPages ? (
        <button
          className={`w-8 h-8 bg-grey-700 border border-grey-400 rounded hover:bg-grey-400`}
          onClick={() => onPageChange(currentPage + 1)}>
          <Icon name="arrow-right-s-line" />
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
}
