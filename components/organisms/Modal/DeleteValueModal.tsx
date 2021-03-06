import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";
import { Button } from "components/atoms/button/button";

export type DeleteValueModal = {};

export const DeleteValueModal: React.FC<DeleteValueModal> = ({}) => {
  return (
    <StyledDeleteValueModal>
      <AiOutlineDelete />
      <Heading>Jesteś pewny?</Heading>
      <Text>
        Czy napewno checesz usunąć ten wydatek / przychód ? Informacje te nie
        mogą zostać odzyskane
      </Text>
      <ButtonsContainer>
        <Button primary={true}>Anuluj</Button>
        <Button error={true}>Usuń</Button>
      </ButtonsContainer>
    </StyledDeleteValueModal>
  );
};

const StyledDeleteValueModal = styled.div`
  padding: 2rem;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;

  svg {
    width: 100px;
    height: 100px;
    color: ${({ theme }) => theme.colors.error};
  }
`;

const Heading = styled.h3`
  margin: 1rem 0;
`;

const Text = styled.p`
  width: 300px;
  display: inline-block;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.lineHeights.xs};
`;

const ButtonsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
