import styled from 'styled-components';

import theme from '../../lib/theme';

const DrawerHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 3rem;
  ${theme.media.md} {
    margin-top: 5.6rem;
  }
  ${theme.media.lg} {
    margin-top: 3.1rem;
    margin-right: 0.5rem;
  }
`;
export default DrawerHeader;
