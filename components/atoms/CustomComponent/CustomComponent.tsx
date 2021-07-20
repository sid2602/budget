import styled from "styled-components";

export type CustomComponentProps = {};

export const CustomComponent: React.FC<CustomComponentProps> = ({}) => {
  return <StyledCustomComponent></StyledCustomComponent>;
};

type StyledCustomComponentProps = {};

const StyledCustomComponent = styled.div<StyledCustomComponentProps>``;
