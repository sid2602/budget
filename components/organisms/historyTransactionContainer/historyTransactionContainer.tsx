import styled from "styled-components";

export type HistoryTransactionContainerProps = {
  children: JSX.Element[];
};

export const HistoryTransactionContainer: React.FC<HistoryTransactionContainerProps> = ({
  children,
}) => {
  return (
    <Container>
      <Header>
        <SvgPlace />
        <Category>Kategoria</Category>
        <Comment>Komentarz</Comment>
        <Action>Akcja</Action>
      </Header>

      {children}
    </Container>
  );
};

const Container = styled.section`
  max-width: 735px;
`;

const Header = styled.header`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  display: flex;
  padding: 0 1rem;
`;

const SvgPlace = styled.div`
  width: 50px;
  margin-right: 1rem;
`;

const Category = styled.div`
  flex: 2;
`;

const Comment = styled.div`
  flex: 0.8;
`;

const Action = styled.div`
  flex: 0.5;
`;
