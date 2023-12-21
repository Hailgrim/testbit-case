import styled from "styled-components";

import theme from "../../../lib/theme";

const ProfileMain = styled.div`
  height: 5rem;
  padding: 0.8rem 1.4rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--color-gray2);
  display: none;
  flex-direction: row;
  align-items: center;
  & > svg {
    width: 3.2rem;
    height: 3.2rem;
    margin-right: 1.2rem;
  }
  ${theme.media.md} {
    display: flex;
  }
`;
export default ProfileMain;
