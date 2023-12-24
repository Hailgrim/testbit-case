import React from 'react';
import styled from 'styled-components';

import { ReactComponent as ArrowIcon } from '../../../assets/arrow-narrow-down.svg';
import { SortDirection } from '../../lib/types';
import theme from '../../lib/theme';

const TableHeadCell: React.FC<{
  sortable?: boolean;
  sortDirection?: SortDirection;
  onSort?: () => void;
  text: string;
}> = ({ sortable, sortDirection = 'ASC', onSort, text }) => {
  const [innerDirection, setInnerDirection] = React.useState(sortDirection);

  const clickHandler = () => {
    if (sortable) {
      setInnerDirection((prev) => (prev === 'ASC' ? 'DESC' : 'ASC'));
      onSort && onSort();
    }
  };

  return (
    <CellStyled
      $sortable={sortable}
      $sortDirection={innerDirection}
      onClick={clickHandler}
    >
      <span>{text}</span>
      {sortable && <ArrowIcon />}
    </CellStyled>
  );
};
export default TableHeadCell;

const CellStyled = styled.div<{
  $sortable?: boolean;
  $sortDirection?: SortDirection;
}>`
  font-size: 1.2rem;
  font-weight: 500;
  padding: 1.4rem 2rem;
  cursor: ${(props) => (props.$sortable ? 'pointer' : 'initial')};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: var(--color-gray5);
  transition: color ease-out 0.2s;
  & > svg {
    width: 1.8rem;
    height: 1.8rem;
    margin-left: 1rem;
    flex-shrink: 0;
    transform: rotate(
      ${(props) => (props.$sortDirection === 'ASC' ? '0deg' : '180deg')}
    );
    & path {
      fill: var(--color-gray5);
      transition: fill ease-out 0.2s;
    }
  }
  &:hover {
    color: ${(props) =>
      props.$sortable ? 'var(--color-white)' : 'var(--color-gray5)'};
    & > svg path {
      fill: ${(props) =>
        props.$sortable ? 'var(--color-white)' : 'var(--color-gray5)'};
    }
  }
  ${theme.media.lg} {
    font-size: 1.4rem;
  }
`;
