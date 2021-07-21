import styled from "styled-components";
import { Input } from "components/atoms/input/input";
import { Select } from "components/atoms/select/select";
import { TextArea } from "components/atoms/TextArea/TextArea";
import { Button } from "components/atoms/button/button";
export type AddValueModalProps = {};

export const AddValueModal: React.FC<AddValueModalProps> = ({}) => {
  return (
    <StyledAddValueModal>
      <Header>
        <h2>Dodaj wydatki / przychody</h2>
      </Header>
      <InputsContainer>
        <Select data={[]} placeholder="Przychód/wydadki" />
        <Select data={[]} placeholder="Kategoria" />
        <Select data={[]} placeholder="Podkategoria" />
        <Input placeholder="Kwota" error="" value="" />
        <TextArea placeholder="Komentarz ... "></TextArea>
        <Button primary>Zapisz</Button>
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
