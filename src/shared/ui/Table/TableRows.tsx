import styled from 'styled-components';
import { useMemo } from 'react';

import { ITable, createTableData, theme, useT } from '@/shared/lib';
import { EditIcon, TrashIcon } from '@/shared/ui';
import { TableBody } from './TableBody';
import { TableButton } from './TableButton';

export function TableRows<T>({
  columns,
  data,
  loading,
  error,
  onEdit,
  onDelete,
}: ITable<T>) {
  const rows = useMemo(
    () => createTableData<T>(columns, data),
    [columns, data]
  );
  const t = useT();

  const colCounter = useMemo(() => {
    let counter = 0;
    if (onEdit || onDelete) {
      counter++;
    }
    counter += columns.filter((column) => !column.hide).length;
    return counter || 1;
  }, [columns, onEdit, onDelete]);

  return (
    <TableBody $loading={loading}>
      {rows.map((row) => (
        <tr key={`tr.${row.key}`}>
          {row.values.map((item, itemIndex) => (
            <TdStyled key={`td.${row.key}.${itemIndex}`}>{item}</TdStyled>
          ))}
          {(onEdit || onDelete) && (
            <TdStyled>
              <TableButton
                title={t.edit}
                icon={<EditIcon />}
                onClick={() => onEdit && onEdit(row.data)}
              />
              <TableButton
                title={t.delete}
                icon={<TrashIcon />}
                onClick={() => onDelete && onDelete(row.data)}
              />
            </TdStyled>
          )}
        </tr>
      ))}
      {(rows.length === 0 || (loading && rows.length === 0) || error) && (
        <tr>
          <TdStyled colSpan={colCounter}>
            {loading === true && t.loading}
            {error === true && t.error}
            {loading !== true &&
              error !== true &&
              rows.length === 0 &&
              t.nothingFound}
          </TdStyled>
        </tr>
      )}
    </TableBody>
  );
}

const TdStyled = styled.td`
  font-size: 1.2rem;
  padding: 1.4rem 2rem;
  vertical-align: middle;
  text-align: center;
  border-bottom: 1px solid var(--color-gray2);
  height: 64px;
  ${theme.media.lg} {
    font-size: 1.4rem;
  }
`;
