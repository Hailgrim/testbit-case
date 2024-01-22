import styled from 'styled-components';

import { theme } from '@/shared/lib';

export const TableRoot = styled.table<{ $fixed?: boolean }>`
  border-spacing: 0;
  white-space: break-spaces;
  word-break: keep-all;
  min-width: 100%;
  table-layout: ${(props) => (props.$fixed ? 'fixed' : 'auto')};
  width: ${(props) => (props.$fixed ? '100%' : 'auto')};
  ${theme.media.lg} {
    width: 100%;
    table-layout: fixed;
    word-break: inherit;
  }
`;
