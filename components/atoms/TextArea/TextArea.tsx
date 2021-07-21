import styled from "styled-components";
import { StyledInputContainer } from "components/atoms/input/input";

export type TextAreaProps = {
  rows?: number;
  cols?: number;
  placeholder: string;
  children?: React.ReactNode;
};

export const TextArea: React.FC<TextAreaProps> = ({
  rows,
  cols,
  children,
  placeholder,
}) => {
  return (
    <StyledTextArea rows={rows} cols={cols} placeholder={placeholder}>
      {children}
    </StyledTextArea>
  );
};

TextArea.defaultProps = {
  rows: 10,
  cols: 10,
};

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 120px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding: 1rem;
  resize: none;
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;
