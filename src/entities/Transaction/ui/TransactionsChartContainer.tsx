import styled from 'styled-components';

import { theme } from '@/shared/lib';

export const TransactionsChartContainer = styled.div`
  width: 100%;
  height: 350px;
  overflow: hidden;
  & .transactions {
    & .recharts-brush {
      & > rect:first-child {
        stroke: none;
      }
      &-slide {
        fill: var(--color-blue2);
      }
      &-traveller {
        & rect {
          fill: var(--color-blue2);
          width: 0.3rem;
        }
        & line {
          display: none;
        }
      }
      &-texts {
        font-size: 1rem;
        font-weight: 400;
      }
    }
    & .recharts-surface {
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 0.2rem;
      margin-right: 0.8rem !important;
    }
    & .recharts-legend-item-text {
      font-size: 1.2rem;
      vertical-align: middle;
      color: var(--color-gray3) !important;
      ${theme.media.lg} {
        font-size: 1.4rem;
      }
    }
  }
`;
