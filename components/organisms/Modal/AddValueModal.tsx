import styled from "styled-components";
import { Input } from "components/atoms/input/input";
import { Select } from "components/atoms/select/select";
import { TextArea } from "components/atoms/TextArea/TextArea";
import { Button } from "components/atoms/button/button";
import { useTranslation } from "react-i18next";

export type AddValueModalProps = {};

export const AddValueModal: React.FC<AddValueModalProps> = ({}) => {
  const { t } = useTranslation();

  return (
    <StyledAddValueModal>
      <Header>
        <h2>{t(`filterOptions.incomeExpenses`)}</h2>
      </Header>
      <InputsContainer>
        <Select data={[]} placeholder={t(`filterOptions.incomeExpenses`)} />
        <Select data={[]} placeholder={t(`filterOptions.category`)} />
        <Select data={[]} placeholder={t(`filterOptions.subCategory`)} />
        <Input placeholder={t(`filterOptions.value`)} error="" value="" />
        <TextArea placeholder={t(`transactions.comment`) + " ..."}></TextArea>
        <Button primary>{t(`filterOptions.save`)}</Button>
      </InputsContainer>
    </StyledAddValueModal>
  );
};

type StyledAddValueModalPropsl = {};

const StyledAddValueModal = styled.div<StyledAddValueModalPropsl>`
  width: 450px;
  height: 600px;
  padding: 3rem;
  background-color: white;
  border-radius: 1rem;
`;

const Header = styled.header`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 2rem;
`;

const InputsContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
`;
