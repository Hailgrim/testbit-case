import styled from 'styled-components';

import { theme } from '@/shared/lib';

export const ProfileMain = styled.div`
  height: 5rem;
  padding: 0.8rem 1.4rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--color-gray2);
  display: none;
  grid-template-areas: 'avatar status' 'avatar name';
  grid-template-columns: 3.2rem 1fr;
  gap: 0 1.2rem;
  align-items: center;
  height: 100%;
  & > svg {
    width: 100%;
    grid-area: avatar;
  }
  ${theme.media.md} {
    display: grid;
  }
`;
