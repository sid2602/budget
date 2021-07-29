import styled from "styled-components";
import { useTranslation } from "react-i18next";
export type HistoryTransactionExtendedContainerProps = {
  children: JSX.Element[];
};

export const HistoryTransactionExtendedContainer: React.FC<HistoryTransactionExtendedContainerProps> = ({
  children,
}) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Header>
        <SvgPlace />
        <Category>{t(`transactions.category`)}</Category>
        <Heading>{t(`transactions.plannedIncome`)}</Heading>
        <Heading>{t(`transactions.actualIncome`)}</Heading>
        <Heading>{t(`transactions.realizationPercent`)}</Heading>
        <CommentHeading>{t(`transactions.commentShowMore`)}</CommentHeading>
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
  margin-right: 0.1rem;
`;

const CommentHeading = styled(Heading)`
  text-align: center;
`;
