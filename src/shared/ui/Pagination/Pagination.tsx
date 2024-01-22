import { FC, useMemo } from 'react';

import { createPagination, useT } from '@/shared/lib';
import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/ui';
import { PaginationContainer } from './PaginationContainer';
import { PaginationItem } from './PaginationItem';

export const Pagination: FC<{
  quantity?: number;
  current?: number;
  tiny?: boolean;
  onPageChange?: (page: number) => void;
}> = ({ quantity = 1, current = 1, tiny, onPageChange }) => {
  const pages = useMemo(
    () => createPagination(quantity, current, tiny),
    [quantity, current, tiny]
  );
  const t = useT();

  return (
    <>
      {quantity > 1 && (
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
          {pages.map((page) => (
            <PaginationItem
              key={page.value}
              $active={page.value === current}
              onClick={() => onPageChange && onPageChange(page.value)}
              disabled={current === page.value}
              title={String(page.value)}
            >
              {page.key}
            </PaginationItem>
          ))}
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
      )}
    </>
  );
};
