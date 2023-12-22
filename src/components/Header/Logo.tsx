import styled from 'styled-components';

import useT from '../../hooks/useT';
import theme from '../../lib/theme';

const Logo: React.FC = () => {
  const t = useT();

  return <LogoStyled>{t.siteName}</LogoStyled>;
};
export default Logo;

const LogoStyled = styled.div`
  font-size: 2.2rem;
  font-weight: 600;
  margin-right: 2.6rem;
  flex-grow: 1;
  ${theme.media.md} {
    flex-grow: 0;
  }
`;
