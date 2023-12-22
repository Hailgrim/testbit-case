import styled from 'styled-components';

const TableButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: React.ReactNode;
    children?: React.ReactNode;
  }
> = ({ icon, children, ...props }) => {
  return (
    <ButtonStyled {...props}>
      {icon}
      {children && <span>{children}</span>}
    </ButtonStyled>
  );
};
export default TableButton;

const ButtonStyled = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  color: inherit;
  cursor: pointer;
  & > svg {
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 0.5rem;
    &:last-child {
      margin-right: 0;
    }
    & path {
      transition: fill ease-out 0.2s;
    }
  }
  &:hover > svg path {
    fill: var(--color-white);
  }
  & + & {
    margin-left: 1rem;
  }
`;
