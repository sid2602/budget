import { AppWrapper } from "components/templates/appWrapper/appWrapper";
import styled from "styled-components";
import { Select, SelectData } from "components/atoms/select/select";
import { Button } from "components/atoms/button/button";
import { HistoryTransactionContainer } from "components/organisms/historyTransactionContainer/historyTransactionContainer";
import { HistoryTransaction } from "components/molecules/historyTransaction/historyTransaction";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { ShortTransactionTypes } from "types/transactions";
import { GetServerSideProps } from "next";
import { CategoryWithSubcategories } from "types/category";
import useHistory from "hooks/pageHooks/useHistory";

export type HistoryProps = {
  transactions: ShortTransactionTypes[];
  categories: CategoryWithSubcategories[];
};

export default function Home({ transactions, categories }: HistoryProps) {
  const { t } = useTranslation();
  const {
    selectedCategory,
    allcategories,
    selectedSubCategory,
    allSubCategories,
    handleSelectCategory,
    handleSelectSubCategory,
  } = useHistory(categories);

  return (
    <AppWrapper title={t("filterOptions.history")}>
      <Container>
        <HistoryFiltersContainer>
          <FilterHeader> {t("filterOptions.filters")}</FilterHeader>
          <SelectContainer>
            <Select data={[]} placeholder={t(`filterOptions.incomeExpenses`)} />
            <Select
              data={allcategories}
              placeholder={t(`filterOptions.category`)}
              value={selectedCategory}
              onChange={handleSelectCategory}
            />
            <Select
              data={allSubCategories}
              placeholder={t(`filterOptions.subCategory`)}
              disabled={!selectedCategory}
              value={selectedSubCategory}
              onChange={handleSelectSubCategory}
            />
            <Select data={[]} placeholder={t(`filterOptions.sorting`)} />
          </SelectContainer>
          <Button primary={true} fullWidth={true}>
            {t("filterOptions.filter")}
          </Button>
        </HistoryFiltersContainer>
        <HistorySection>
          <HistoryHeader> {t("filterOptions.history")}</HistoryHeader>
          <HistoryTransactionContainer editable={true}>
            {transactions.map(
              ({ id, subCategory, date, action, comment, expense }) => (
                <HistoryTransaction
                  key={id}
                  Icon={subCategory.icon}
                  category={subCategory.name}
                  date={date}
                  action={action}
                  comment={comment}
                  expense={expense}
                  editable={true}
                />
              )
            )}
          </HistoryTransactionContainer>
        </HistorySection>
      </Container>
    </AppWrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const axiosRequests = [
    axios.get("http://localhost:3000/api/transactions"),
    axios.get("http://localhost:3000/api/categories"),
  ];

  const response = await axios.all(axiosRequests);

  const transactions: ShortTransactionTypes[] = response[0].data;
  const categories: CategoryWithSubcategories[] = response[1].data;
  return { props: { transactions, categories } };
};

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
