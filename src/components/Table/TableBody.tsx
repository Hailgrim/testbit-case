import styled from "styled-components";

const TableBody = styled.tbody<{ $loading?: boolean; }>`
  transition: opacity ease-out 0.2s;
  opacity: ${props => props.$loading ? 0.5 : 1};
`;
export default TableBody;
