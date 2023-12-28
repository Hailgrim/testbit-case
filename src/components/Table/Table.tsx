import styled from 'styled-components';

import { ITable } from '../../lib/types';
import TableHead from './TableHead';
import TableRows from './TableRows';
import TableRoot from './TableRoot';

export default function Table<T>({
  fixed,
  ...props
}: ITable<T> & { fixed?: boolean }) {
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
