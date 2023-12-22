import styled from 'styled-components';

import theme from '../../lib/theme';

const DrawerTitle = styled.h6`
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${theme.media.md} {
    font-size: 2rem;
  }
`;
export default DrawerTitle;
