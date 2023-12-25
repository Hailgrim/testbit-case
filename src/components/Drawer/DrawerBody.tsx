import styled from 'styled-components';

const DrawerBody = styled.div<{ $loading?: boolean }>`
  position: relative;
  flex-grow: 1;
  overflow: auto;
  & > * {
    opacity: ${(props) => (props.$loading ? 0 : 1)};
    transition: opacity ease-out 0.2s;
  }
  &::after {
    content: '...';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${(props) => (props.$loading ? 1 : 0)};
    visibility: ${(props) => (props.$loading ? 'visible' : 'hidden')};
    transition: opacity ease-out 0.2s, visibility ease-out 0.2s;
  }
`;
export default DrawerBody;
