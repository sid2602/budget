import React from "react";
import ReactSelect from "react-select";
import styled from "styled-components";

const StyledSelect = styled(ReactSelect)`
  width: 100%;
  height: auto;

  .select__control {
    height: 48px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    background-color: ${({ theme, isDisabled }) =>
      isDisabled ? theme.colors.grayLight : theme.input.background};
    color: ${({ theme }) => theme.colors.fontColor};
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.primary};
    }
  }

  .select__option {
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryLight};
    }
    cursor: pointer;
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
  disabled?: boolean;
  onChange?: (property: SelectData) => void;
  value?: any;
};

export const Select: React.FC<SelectProps> = ({
  data,
  placeholder,
  onChange,
  value,
  disabled,
  ...rest
}) => (
  <StyledSelect
    options={data}
    className="basic-multi-select"
    classNamePrefix="select"
    placeholder={placeholder ? placeholder : "Wybierz"}
    value={value}
    onChange={onChange}
    isDisabled={disabled}
    {...rest}
  />
);

Select.defaultProps = {
  onChange: () => {},
  value: "",
  disabled: false,
};
