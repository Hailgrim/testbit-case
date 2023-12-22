import styled from 'styled-components';

import theme from '../../lib/theme';

const Content = styled.main`
  background-color: var(--color-gray);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  & > * {
    margin-inline: 1.6rem;
  }
  ${theme.media.md} {
    border-radius: 1.8rem;
    margin: 0 4rem 3.4rem 4rem;
    & > * {
      margin-inline: 2.4rem;
    }
  }
  ${theme.media.lg} {
    margin: 0 2.5rem 3.4rem 2.5rem;
    & > * {
      margin-inline: 3.4rem;
    }
  }
`;
export default Content;
