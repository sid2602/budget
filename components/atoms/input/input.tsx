import styled, { css } from "styled-components";
import React from "react";

export type InputProps = {
  placeholder: string;
  value: string;
  error: string;
  type?: string;
};

export const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  error,
  type,
}) => {
  return (
    <StyledInputContainer value={value} error={error}>
      <input placeholder=" " value={value} type={type} />
      <label>{placeholder}</label>
    </StyledInputContainer>
  );
};

Input.defaultProps = {
  placeholder: "text",
  value: "",
  error: "",
  type: "text",
};

export type InputStyleProps = {
  value: string;
  error: string;
};

export const StyledInputContainer = styled.div<InputStyleProps>`
  position: relative;
  height: 48px;
  input {
    position: absolute;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    left: 0;
    top: 0;
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 1.5rem 1rem 1rem 1rem;
    width: 100%;
    height: 100%;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    &:focus {
      outline: none;
    }
  }

  label {
    position: absolute;
    left: 1rem;
    top: 1.1rem;
    transition: 0.3s;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.darkGray};
  }

  input:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  input:focus + label {
    top: 0.3rem;
    font-size: ${({ theme }) => theme.fontSizes.xxs};
    color: ${({ theme }) => theme.colors.primary};
  }

  ${({ value }) =>
    value &&
    css`
      label {
        top: 0.3rem;
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
        top: ${({ value }) => (value ? "0.3rem" : "1.5rem")};
        font-size: ${({ value, theme }) =>
          value ? theme.fontSizes.xxs : theme.fontSizes.xs};
        color: ${({ theme }) => theme.colors.error};
      }

      input {
        border-color: ${({ theme }) => theme.colors.error};
      }
    `}
`;
