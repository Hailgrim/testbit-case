import styled from 'styled-components';

export const SearchLabel = styled.label`
  border-radius: 0.8rem;
  border: 1px solid var(--color-gray4);
  padding: 1.4rem 1.6rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: text;
  transition: border-color ease-out 0.2s;
  & > svg {
    width: 1.6rem;
    height: 1.6rem;
  }
  &:hover,
  &:focus-within {
    border-color: var(--color-blue);
  }
`;
