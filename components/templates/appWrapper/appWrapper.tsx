import * as React from "react";
import { Navigation } from "components/organisms/navigation/navigation";
import { TopNav } from "components/organisms/topNav/topNav";
import styled from "styled-components";
export type AppWrapperProps = {
  title: string;
  children?: React.ReactNode;
};

export const AppWrapper: React.FC<AppWrapperProps> = ({ children, title }) => {
  return (
    <Main>
      <Navigation />
      <Column>
        <TopNav title={title} />
        <BodyContainer>{children}</BodyContainer>
      </Column>
    </Main>
  );
};

const BodyContainer = styled.div`
  margin-left: 120px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Main = styled.main`
  display: flex;
  height: 100%;
`;
