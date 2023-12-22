import styled from 'styled-components';

import { ITable } from '../../lib/types';
import useT from '../../hooks/useT';
import TableHeadCell from './TableHeadCell';

export default function TableHead<T>({
  columns,
  onEdit,
  onDelete,
}: Omit<ITable<T>, 'data' | 'loading'>) {
  const t = useT();

  return (
    <thead>
      <tr>
        {columns.map((column, index) =>
          !column.hide ? (
            <ThStyled key={`th.${String(column.key)}.${index}`}>
              <TableHeadCell
                sortable={column.sortable}
                sortDirection={column.sortDirection}
                onSort={column.onSort}
                text={column.name || String(column.key)}
              />
            </ThStyled>
          ) : undefined
        )}
        {(onEdit || onDelete) && (
          <ThStyled>
            <TableHeadCell text={t.actions} />
          </ThStyled>
        )}
      </tr>
    </thead>
  );
}

const ThStyled = styled.th`
  background-color: var(--color-black);
  &:first-child {
    border-top-left-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
  }
  &:last-child {
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
  }
`;
