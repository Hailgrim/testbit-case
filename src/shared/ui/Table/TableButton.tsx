import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styled from 'styled-components';

export const TableButton: FC<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: ReactNode;
    children?: ReactNode;
  }
> = ({ icon, children, ...props }) => {
  return (
    <ButtonStyled {...props}>
      {icon}
      {children && <span>{children}</span>}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  color: inherit;
  cursor: pointer;
  & > svg {
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 0.5rem;
    &:last-child {
      margin-right: 0;
    }
    & path {
      transition: fill ease-out 0.2s;
    }
  }
  &:hover > svg path {
    fill: var(--color-white);
  }
  & + & {
    margin-left: 1rem;
  }
`;
