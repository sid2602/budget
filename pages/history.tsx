import { AppWrapper } from "components/templates/appWrapper/appWrapper";
import styled from "styled-components";
import { Select } from "components/atoms/select/select";
import { Button } from "components/atoms/button/button";
import { HistoryTransactionContainer } from "components/organisms/historyTransactionContainer/historyTransactionContainer";
import { HistoryTransaction } from "components/molecules/historyTransaction/historyTransaction";
import { history } from "assets/mockedData/history";
import { useTranslation } from "react-i18next";
export default function Home() {
  const { t } = useTranslation();

  return (
    <AppWrapper title={t("filterOptions.history")}>
      <Container>
        <HistoryFiltersContainer>
          <FilterHeader> {t("filterOptions.filters")}</FilterHeader>
          <SelectContainer>
            <Select data={[]} placeholder={t(`filterOptions.incomeExpenses`)} />
            <Select data={[]} placeholder={t(`filterOptions.category`)} />
            <Select data={[]} placeholder={t(`filterOptions.subCategory`)} />
            <Select data={[]} placeholder={t(`filterOptions.sorting`)} />
          </SelectContainer>
          <Button primary={true} fullWidth={true}>
            {t("filterOptions.filter")}
          </Button>
        </HistoryFiltersContainer>
        <HistorySection>
          <HistoryHeader> {t("filterOptions.history")}</HistoryHeader>
          <HistoryTransactionContainer editable={true}>
            {history.map(({ id, Icon, category, date, action, comment }) => (
              <HistoryTransaction
                key={id}
                Icon={Icon}
                category={category}
                date={date}
                action={action}
                comment={comment}
                editable={true}
              />
            ))}
          </HistoryTransactionContainer>
        </HistorySection>
      </Container>
    </AppWrapper>
  );
}

const Container = styled.div`
  max-width: 1200px;
  display: flex;
  width: 100%;
  margin: 0 auto;
`;

const HistoryFiltersContainer = styled.section`
  width: 240px;
  padding: 1rem 0.5rem;
  height: 600px;
`;

const HistoryHeader = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
`;

const FilterHeader = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
`;

const SelectContainer = styled.div`
  margin-left: 2rem;
  height: 250px;
  display: flex;
  margin: 2rem 0;
  flex-direction: column;
  justify-content: space-between;
`;

const HistorySection = styled.section`
  max-width: 950px;
  width: 100%;
  margin-left: 2rem;
`;
