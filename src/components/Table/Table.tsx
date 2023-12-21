import styled from "styled-components";

import { ITable } from "../../lib/types";
import TableHead from "./TableHead";
import TableRows from "./TableRows";
import TableContainer from "./TableContainer";
import theme from "../../lib/theme";

export default function Table<T>(
  { fixed, ...props }: ITable<T> & { fixed?: boolean; }
) {
  return (
    <TableContainer>
      <TableStyled $fixed={fixed}>
        <TableHead<T>
          columns={props.columns}
          onEdit={props.onEdit}
          onDelete={props.onDelete}
        />
        <TableRows<T> {...props} />
      </TableStyled>
    </TableContainer>
  );
};

const TableStyled = styled.table<{ $fixed?: boolean; }>`
  border-spacing: 0;
  white-space: break-spaces;
  word-break: keep-all;
  min-width: 100%;
  table-layout: ${props => props.$fixed ? 'fixed' : 'auto'};
  width: ${props => props.$fixed ? '100%' : 'auto'};
  ${theme.media.lg} {
    width: 100%;
    table-layout: fixed;
    word-break: inherit;
  }
`;
