import styled from "styled-components";

import theme from "../../lib/theme";

const MenuItem: React.FC<{
  href: string;
  logo?: React.ReactNode;
  children?: React.ReactNode;
}> = ({ href, logo, children }) => {
  return (
    <MenuItemStyled href={href}>
      {logo}
      {children}
    </MenuItemStyled>
  );
};
export default MenuItem;

const MenuItemStyled = styled.a`
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
