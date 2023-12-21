import styled from "styled-components";

import theme from "../../lib/theme";

const Subtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin-block: 2.6rem;
  ${theme.media.md} {
    font-size: 2rem;
    margin-block: 2.9rem 2.7rem;
  }
  ${theme.media.lg} {
    font-size: 2.2rem;
    margin-block: 2.9rem 2.4rem;
  }
`;
export default Subtitle;
