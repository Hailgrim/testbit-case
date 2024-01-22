import styled from 'styled-components';
import { FC } from 'react';

import { theme, useT } from '@/shared/lib';

export const Logo: FC = () => {
  const t = useT();

  return <LogoStyled>{t.siteName}</LogoStyled>;
};

const LogoStyled = styled.div`
  font-size: 2.2rem;
  font-weight: 600;
  margin-right: 2.6rem;
  flex-grow: 1;
  ${theme.media.md} {
    flex-grow: 0;
  }
`;
