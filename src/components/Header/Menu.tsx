import styled from 'styled-components';

import MenuItem from './MenuItem';
import { ReactComponent as CaseIcon } from '../../assets/case.svg';
import useT from '../../hooks/useT';
import theme from '../../lib/theme';

const Menu: React.FC = () => {
  const t = useT();

  return (
    <MenuStyled>
      <MenuItem href="/" logo={<CaseIcon />}>
        {t.myOrganization}
      </MenuItem>
    </MenuStyled>
  );
};
export default Menu;

const MenuStyled = styled.nav`
  flex-grow: 0;
  display: inline-flex;
  ${theme.media.md} {
    flex-grow: 1;
    margin-inline: 4.4rem;
  }
`;
