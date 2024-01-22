import styled from 'styled-components';

export const DrawerModal = styled.div<{ $open?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.$open ? 1 : 0)};
  animation: ${(props) => (props.$open ? 'show' : 'hide')} ease-out 0.2s;
  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes hide {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
