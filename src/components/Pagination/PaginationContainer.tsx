import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-block: 2.4rem;
  & > * + * {
    margin-left: 0.4rem;
  }
`;
export default PaginationContainer;
