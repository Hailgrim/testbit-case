import styled from 'styled-components';

import theme from '../../lib/theme';

const DrawerHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-block: 1.6rem;
  ${theme.media.md} {
    padding-block: 2rem;
  }
`;
export default DrawerHeader;
