import styled from "styled-components";
import { IconType } from "react-icons/lib";
import { convertDateToString } from "helpers/convertDateToString";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useModalContext, ModalType } from "contexts/ModalContext";
export type HistoryTransactionProps = {
  Icon: IconType;
  category: string;
  date: Date;
  comment: string;
  action: number;
  editable?: boolean;
};

export const HistoryTransaction: React.FC<HistoryTransactionProps> = ({
  Icon,
  category,
  date,
  comment,
  action,
  editable,
}) => {
  const editRecord = () => {};

  const {
    handleModadlTypeChange,
    handleModalVisabilityChange,
  } = useModalContext();

  const deleteRecord = () => {
    handleModadlTypeChange(ModalType.deleteModal);
    handleModalVisabilityChange();
  };

  return (
    <StyledHistoryTransaction>
      <IconContainer>
        <Icon />
      </IconContainer>
      <CategoryContainer>
        <Category>{category}</Category>
        <Date>{convertDateToString(date)}</Date>
      </CategoryContainer>
      <Comment>{comment}</Comment>
      <Action minus={action < 0}>{action} zł</Action>
      {editable && (
        <>
          <Recordbutton>
            <FiEdit2 />
          </Recordbutton>
          <Recordbutton onClick={deleteRecord}>
            <AiOutlineDelete />
          </Recordbutton>
        </>
      )}
    </StyledHistoryTransaction>
  );
};

HistoryTransaction.defaultProps = {
  editable: false,
};

export const StyledHistoryTransaction = styled.div`
  display: flex;
  height: 72px;
  padding: 0 1rem;
  font-weight: bold;

  & > * {
    height: 72px;
    display: flex;
    align-items: center;
  }
`;

export const IconContainer = styled.div`
  flex: none;
  max-width: 75px;
  margin-right: 1rem;
  svg {
    width: 50px;
    height: 50px;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 2;
`;

const Category = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  display: block;
  margin-bottom: 0.5rem;
`;

const Date = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: normal;
`;

type ActionType = {
  minus: boolean;
};

const Action = styled.div<ActionType>`
  flex: 0.5;
  color: ${({ theme, minus }) =>
    minus ? theme.colors.error : theme.colors.secondary};
`;

const Comment = styled.div`
  flex: 0.8;
  margin-right: 1rem;
`;

const Recordbutton = styled.button`
  display: block;
  flex: 0.3;
  width: 100%;
  height: 100%;

  svg {
    width: 25px;
    height: 25px;
  }
`;
