import styled from 'styled-components';
import { FC } from 'react';

import { theme, useT } from '@/shared/lib';
import { MenuItem } from './MenuItem';
import { CaseIcon } from '@/shared/ui';

export const Menu: FC = () => {
  const t = useT();

  return (
    <MenuStyled>
      <MenuItem href="/" logo={<CaseIcon />}>
        {t.myOrganization}
      </MenuItem>
    </MenuStyled>
  );
};

const MenuStyled = styled.nav`
  flex-grow: 0;
  display: inline-flex;
  ${theme.media.md} {
    flex-grow: 1;
    margin-inline: 4.4rem;
  }
`;
