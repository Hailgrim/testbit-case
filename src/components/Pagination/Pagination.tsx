import React from 'react';

import PaginationItem from './PaginationItem';
import { ReactComponent as ArrowLeftIcon } from '../../../assets/arrow-narrow-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../../assets/arrow-narrow-right.svg';
import { createPagination } from '../../lib/functions';
import useT from '../../hooks/useT';
import PaginationContainer from './PaginationContainer';

const Pagination: React.FC<{
  quantity?: number;
  current?: number;
  tiny?: boolean;
  onPageChange?: (page: number) => void;
}> = ({ quantity = 1, current = 1, tiny, onPageChange }) => {
  const pages = React.useMemo(
    () => createPagination(quantity, current, tiny),
    [quantity, current, tiny]
  );
  const t = useT();

  return (
    <PaginationContainer>
      {!tiny && (
        <PaginationItem
          $hide={current < 2}
          onClick={() => onPageChange && onPageChange(current - 1)}
          disabled={current < 2}
          title={t.previous}
        >
          <ArrowLeftIcon />
        </PaginationItem>
      )}
      {quantity > 1 ? (
        pages.map((page) => (
          <PaginationItem
            key={page.value}
            $active={page.value === current}
            onClick={() => onPageChange && onPageChange(page.value)}
            disabled={current === page.value}
            title={String(page.value)}
          >
            {page.key}
          </PaginationItem>
        ))
      ) : (
        <PaginationItem $hide disabled>
          &nbsp;
        </PaginationItem>
      )}
      {!tiny && (
        <PaginationItem
          $hide={current >= quantity}
          onClick={() => onPageChange && onPageChange(current + 1)}
          disabled={current >= quantity}
          title={t.next}
        >
          <ArrowRightIcon />
        </PaginationItem>
      )}
    </PaginationContainer>
  );
};
export default Pagination;
