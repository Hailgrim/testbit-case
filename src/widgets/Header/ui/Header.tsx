import styled from 'styled-components';
import { FC } from 'react';

import { Logo } from './Logo';
import { theme } from '@/shared/lib';
import { Menu } from '@/widgets/Menu';
import { Profile } from '@/widgets/Profile';

export const Header: FC = () => {
  return (
    <HeaderStyled>
      <Logo />
      <Menu />
      <Profile />
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  padding: 1rem 1.6rem;
  margin: 2.4rem 1.6rem 2.7rem 1.6rem;
  background-color: var(--color-gray);
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 1rem;
  ${theme.media.md} {
    border-radius: 1.7rem;
    margin: 3.4rem 4rem 3.2rem 4rem;
    padding: 1.4rem 1.8rem;
  }
  ${theme.media.lg} {
    margin: 3.4rem 2.5rem;
    padding: 1.6rem 2.4rem;
  }
`;
