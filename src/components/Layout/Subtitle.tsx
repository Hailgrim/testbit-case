import styled from 'styled-components';

import theme from '../../lib/theme';

const Subtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  ${theme.media.md} {
    font-size: 2rem;
  }
  ${theme.media.lg} {
    font-size: 2.2rem;
  }
`;
export default Subtitle;
