import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

export const ActionButton = () => {
  return (
    <ActionButtonStyled>
      <AiOutlinePlus />
    </ActionButtonStyled>
  );
};

const ActionButtonStyled = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;
