import styled from 'styled-components';

import { theme } from '@/shared/lib';

export const DrawerHead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-block: 1.6rem;
  ${theme.media.md} {
    padding-block: 2rem;
  }
`;
