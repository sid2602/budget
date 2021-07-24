import { AppWrapper } from "components/templates/appWrapper/appWrapper";
import styled from "styled-components";
import { Select } from "components/atoms/select/select";
import { Button } from "components/atoms/button/button";
import { HistoryTransactionContainer } from "components/organisms/historyTransactionContainer/historyTransactionContainer";
import { HistoryTransaction } from "components/molecules/historyTransaction/historyTransaction";
import { history } from "assets/mockedData/history";

export default function Home() {
  return (
    <AppWrapper title="Historia">
      <HistoryFiltersContainer>
        <FilterHeader>Filtry</FilterHeader>
        <SelectContainer>
          <Select data={[]} placeholder="Przychód/wydatki" />
          <Select data={[]} placeholder="Kategory" />
          <Select data={[]} placeholder="Pod kategoria" />
          <Select data={[]} placeholder="Sortowanie" />
        </SelectContainer>
        <Button primary={true} fullWidth={true}>
          Filtruj
        </Button>
      </HistoryFiltersContainer>
      <HistorySection>
        <HistoryHeader>Historia</HistoryHeader>
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
    </AppWrapper>
  );
}

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
  width: calc(95% - 240px);
  height: 600px;
  margin-left: auto;
`;
