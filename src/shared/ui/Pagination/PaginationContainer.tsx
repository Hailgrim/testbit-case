import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  & > * + * {
    margin-left: 0.4rem;
  }
`;
