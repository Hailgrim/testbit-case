import styled from 'styled-components';

import { ReactComponent as CloseIcon } from '../../../assets/close.svg';

const DrawerClose: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <DrawerCloseStyled {...props}>
      <CloseIcon />
    </DrawerCloseStyled>
  );
};
export default DrawerClose;

const DrawerCloseStyled = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: inline-flex;
  flex-shrink: 0;
  width: 2.4rem;
  height: 2.4rem;
  margin-left: 1.4rem;
  & > svg {
    width: 100%;
    height: 100%;
    & path {
      stroke: var(--color-white);
      transition: stroke ease-out 0.2s;
    }
    &:hover path {
      stroke: var(--color-blue);
    }
  }
`;
