import styled, { css } from "styled-components";
import React from "react";

export type InputProps = {
  placeholder: string;
  value: string;
  error: string;
};

export const Input: React.FC<InputProps> = ({ placeholder, value, error }) => {
  return (
    <StyledContainer value={value} error={error}>
      <input placeholder=" " value={value} />
      <label>{placeholder}</label>
    </StyledContainer>
  );
};

Input.defaultProps = {
  placeholder: "text",
  value: "",
  error: "",
};

export type InputStyleProps = {
  value: string;
  error: string;
};

const StyledContainer = styled.div<InputStyleProps>`
  position: relative;
  height: 64px;
  input {
    position: absolute;
    border: 1px solid ${({ theme }) => theme.input.border};
    font-weight: bold;
    left: 0;
    top: 0;
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 1.5rem 1rem 1rem 1rem;
    width: 100%;
    height: 100%;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    &:focus {
      outline: none;
    }
  }

  label {
    position: absolute;
    left: 1rem;
    top: 1.5rem;
    transition: 0.3s;
    font-size: 1rem;
  }

  input:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  input:focus + label {
    top: 0.5rem;
    font-size: ${({ theme }) => theme.fontSizes.xxs};
    color: ${({ theme }) => theme.colors.primary};
  }

  ${({ value }) =>
    value &&
    css`
      label {
        top: 0.5rem;
        font-size: ${({ theme }) => theme.fontSizes.xxs};
        color: ${({ theme }) => theme.colors.primary};
      }

      input {
        border-color: ${({ theme }) => theme.colors.primary};
      }
    `}

  ${({ error, value }) =>
    error &&
    css<InputStyleProps>`
      label {
        top: ${({ value }) => (value ? "0.5rem" : "1.5rem")};
        font-size: ${({ value, theme }) =>
          value ? theme.fontSizes.xxs : theme.fontSizes.sm};
        color: ${({ theme }) => theme.colors.error};
      }

      input {
        border-color: ${({ theme }) => theme.colors.error};
      }
    `}
`;
