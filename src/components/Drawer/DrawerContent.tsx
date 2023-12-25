import styled from 'styled-components';

import theme from '../../lib/theme';

const DrawerContent = styled.div<{ $open?: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-gray);
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  margin-right: calc(100% - 100vw);
  transform: translateX(${(props) => (props.$open ? '0%' : '100%')});
  animation: ${(props) =>
      props.$open ? 'slide-left-open' : 'slide-left-close'}
    ease-out 0.2s;
  @keyframes slide-left-open {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }
  @keyframes slide-left-close {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(100%);
    }
  }
  & > * {
    padding-inline: 1.6rem;
  }
  ${theme.media.md} {
    max-width: 470px;
    & > * {
      padding-inline: 2rem 4rem;
    }
  }
  ${theme.media.lg} {
    & > * {
      padding-inline: 2rem;
    }
  }
`;
export default DrawerContent;
