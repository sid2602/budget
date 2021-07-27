import styled, { css } from "styled-components";
import React from "react";
import { Loader } from "../loader/loader";

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
  primary?: boolean;
  small?: boolean;
  fullWidth?: boolean;
  error?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  primary,
  small,
  fullWidth,
  isLoading,
  error,
}) => {
  return (
    <StyledButton
      primary={primary}
      small={small}
      fullWidth={fullWidth}
      onClick={onClick}
      disabled={isLoading}
      error={error}
    >
      {isLoading && <Loader />}
      <span>{children}</span>
    </StyledButton>
  );
};

Button.defaultProps = {
  children: "Button",
  primary: false,
  small: false,
  onClick: () => {},
  fullWidth: false,
  error: false,
};

const StyledButton = styled.button<ButtonProps>`
  position: relative;
  display: inline-block;
  background-color: white;
  font-weight: bold;
  color: black;
  border-radius: 1rem;
  cursor: pointer;
  text-align: center;
  border: none;
  padding: 0.8rem 2.4rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  letter-spacing: 1px;
  ${({ primary }) =>
    primary &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
      :hover {
        background-color: ${({ theme }) => theme.colors.primaryDark};
      }
    `}

  ${({ error }) =>
    error &&
    css`
      background-color: ${({ theme }) => theme.colors.error};
      color: white;
      :hover {
        background-color: ${({ theme }) => theme.colors.errorDark};
      }
    `}

  ${({ small }) =>
    small &&
    css`
      padding: 0.8rem 2rem;
      font-size: 0.8rem;
    `}

		${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

		${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.4;
      span {
        opacity: 0;
      }
    `}
`;
