import styled from 'styled-components';

import theme from '../../lib/theme';

const UserTitle = styled.h6`
  font-size: 1.8rem;
  font-weight: 600;
  ${theme.media.md} {
    font-size: 2rem;
  }
`;
export default UserTitle;
