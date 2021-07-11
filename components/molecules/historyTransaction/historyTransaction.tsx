import styled from "styled-components";
import { IconType } from "react-icons/lib";
import { convertDateToString } from "../../../helpers/convertDateToString";
export type HistoryTransactionProps = {
  Icon: IconType;
  category: string;
  date: Date;
  comment: string;
  action: number;
};

export const HistoryTransaction: React.FC<HistoryTransactionProps> = ({
  Icon,
  category,
  date,
  comment,
  action,
}) => {
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
    </StyledHistoryTransaction>
  );
};

export const StyledHistoryTransaction = styled.div`
  display: flex;
  height: 72px;
  align-items: center;

  padding: 0 1rem;
  font-weight: bold;
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
  flex: 2;
`;

const Category = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  display: block;
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
`;
