import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FC, ReactNode } from 'react';

import { theme } from '@/shared/lib';

export const MenuItem: FC<{
  href: string;
  logo?: ReactNode;
  children?: ReactNode;
}> = ({ href, logo, children }) => {
  return (
    <MenuItemStyled to={href}>
      {logo}
      {children}
    </MenuItemStyled>
  );
};

const MenuItemStyled = styled(NavLink)`
  font-size: 1.4rem;
  text-decoration: none;
  color: inherit;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  transition: color ease-out 0.2s;
  & > svg {
    border-radius: 0.4rem;
    width: 2.4rem;
    height: 2.4rem;
    padding: 0.35rem 0.4rem 0.45rem 0.4rem;
    margin-right: 1rem;
    background-color: var(--color-gray2);
    & path {
      fill: var(--color-blue);
    }
  }
  & + & {
    margin-left: 2rem;
  }
  &:hover {
    color: var(--color-blue);
  }
  ${theme.media.lg} {
    font-size: 1.6rem;
  }
`;
