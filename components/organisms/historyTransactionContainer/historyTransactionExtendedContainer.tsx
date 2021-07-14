import styled from "styled-components";

export type HistoryTransactionExtendedContainerProps = {
  children: JSX.Element[];
};

export const HistoryTransactionExtendedContainer: React.FC<HistoryTransactionExtendedContainerProps> = ({
  children,
}) => {
  return (
    <Container>
      <Header>
        <SvgPlace />
        <Category>Kategoria</Category>
        <Heading>Planowane przychody</Heading>
        <Heading>Rzeczywiste przychody</Heading>
        <Heading>Stopień realizacji %</Heading>
        <CommentHeading>Komenatrz/ Pokaż więcej</CommentHeading>
      </Header>

      {children}
    </Container>
  );
};

const Container = styled.section`
  max-width: 935px;
`;

const Header = styled.header`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  display: flex;
  padding: 0 1rem;
`;

const SvgPlace = styled.div`
  width: 75px;
  margin-right: 1rem;
`;

const Category = styled.div`
  flex: 1.5;
`;

const Heading = styled.div`
  flex: 1;
`;

const CommentHeading = styled(Heading)`
  text-align: center;
`;
