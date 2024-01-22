import styled from 'styled-components';

export const SearchInput = styled.input`
  flex-grow: 1;
  background-color: transparent;
  border: none;
  outline: none;
  color: inherit;
  font-family: 'IBM Plex Sans';
  font-size: 1.4rem;
  font-weight: 400;
  margin-left: 1rem;
  padding: 0;
  &::placeholder {
    color: var(--color-gray3);
    opacity: 1;
  }
`;
