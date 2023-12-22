import styled from 'styled-components';

import theme from '../../lib/theme';

const UserTitle = styled.h6`
  font-size: 2rem;
  font-weight: 600;
  margin-block: 1.4rem;
  ${theme.media.md} {
    margin-block: 1.8rem;
  }
  ${theme.media.lg} {
    margin-block: 2rem;
  }
`;
export default UserTitle;
