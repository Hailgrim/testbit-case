import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

import { Content } from './Content';
import { Title } from './Title';
import { Devider } from './Devider';
import { Header } from '@/widgets/Header';

export const Layout: FC<PropsWithChildren & { h1: string }> = ({
  h1,
  children,
}) => {
  return (
    <LayoutStyled>
      <Header />
      <Content>
        <Title>{h1}</Title>
        <Devider />
        {children}
      </Content>
    </LayoutStyled>
  );
};

const LayoutStyled = styled.div`
  min-height: 100vh;
  background-color: var(--color-black);
  display: flex;
  flex-direction: column;
  color: var(--color-white);
`;
