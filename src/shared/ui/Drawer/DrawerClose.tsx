import styled from 'styled-components';

import { CloseIcon } from '@/shared/ui';
import { ButtonHTMLAttributes, FC } from 'react';

export const DrawerClose: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <DrawerCloseStyled {...props}>
      <CloseIcon />
    </DrawerCloseStyled>
  );
};

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
