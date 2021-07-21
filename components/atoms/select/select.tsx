import React from "react";
import ReactSelect from "react-select";
import styled from "styled-components";

const StyledSelect = styled(ReactSelect)`
  width: 100%;
  height: auto;
  .select__control {
    height: 48px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    background-color: ${({ theme }) => theme.input.background};
    color: ${({ theme }) => theme.colors.fontColor};
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 10px;

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.primary};
    }
  }

  .select__option {
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryLight};
    }
  }
  .select__option--is-selected {
    background-color: ${({ theme }) => theme.colors.primary};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export type SelectData = {
  value: string | number | boolean;
  label: string;
};

export type SelectProps = {
  data: SelectData[];
  placeholder?: String;
};

export const Select: React.FC<SelectProps> = ({
  data,
  placeholder,
  ...rest
}) => (
  <StyledSelect
    options={data}
    className="basic-multi-select"
    classNamePrefix="select"
    placeholder={placeholder ? placeholder : "Wybierz"}
    {...rest}
  />
);
