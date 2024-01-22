import styled from 'styled-components';

import { TableRoot } from './TableRoot';
import { TableHead } from './TableHead';
import { TableRows } from './TableRows';
import { ITable } from '@/shared/lib';

export function Table<T>({ fixed, ...props }: ITable<T> & { fixed?: boolean }) {
  return (
    <TableContainer>
      <TableRoot $fixed={fixed}>
        <TableHead<T>
          columns={props.columns}
          onEdit={props.onEdit}
          onDelete={props.onDelete}
        />
        <TableRows<T> {...props} />
      </TableRoot>
    </TableContainer>
  );
}

const TableContainer = styled.div`
  overflow: auto;
`;
