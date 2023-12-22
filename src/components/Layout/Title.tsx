import styled from 'styled-components';

import theme from '../../lib/theme';

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-block: 1.8rem 1.9rem;
  ${theme.media.md} {
    font-size: 2rem;
    margin-block: 2.4rem 2.5rem;
  }
  ${theme.media.lg} {
    font-size: 2.2rem;
    margin-block: 2.4rem 2.5rem;
  }
`;
export default Title;
