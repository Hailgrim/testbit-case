import styled from "styled-components";
import theme from "../../lib/theme";

const PaginationItem = styled.button<{
  $active?: boolean;
  $hide?: boolean;
}>`
  padding: 0.6rem 1.4rem;
  border-radius: 0.8rem;
  border: none;
  font-size: 1.4rem;
  color: inherit;
  cursor: ${props => props.$active ? 'default' : 'pointer'};
  background-color: ${props => props.$active ? 'var(--color-blue2)' : 'transparent'};
  transition: background-color ease-out 0.2s;
  visibility: ${props => props.$hide ? 'hidden' : 'visible'};
  & > svg {
    width: 1.2rem;
    height: 1.2rem;
    & path {
      fill: var(--color-gray3);
    }
  }
  ${theme.media.lg} {
    font-size: 1.6rem;
    line-height: 2.2rem;
  }
`;
export default PaginationItem;
