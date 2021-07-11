import { IconType } from "react-icons/lib";
import { StyledHistoryTransaction, IconContainer } from "./historyTransaction";
import styled from "styled-components";
import { ProgressCircular } from "../../atoms/progressBar/progressBar";
export type HistoryTransactionExtendedProps = {
  Icon: IconType;
  category: string;
  expectedPrice: number;
  actualPrice: number;
  comment: string;
};

export const HistoryTransactionExtended: React.FC<HistoryTransactionExtendedProps> = ({
  Icon,
  category,
  expectedPrice,
  actualPrice,
  comment,
}) => {
  const percent = Math.round((actualPrice / expectedPrice) * 100);

  return (
    <StyledHistoryTransactionExtended>
      <IconContainer>
        <Icon />
      </IconContainer>
      <Category>{category}</Category>
      <div>{expectedPrice} zł</div>
      <div>{actualPrice} zł</div>

      <div>
        <ProgressCircular percent={percent} red={true} />
      </div>

      <div>{comment}</div>
    </StyledHistoryTransactionExtended>
  );
};

const StyledHistoryTransactionExtended = styled(StyledHistoryTransaction)`
  & > * {
    flex: 1;
  }
`;

const Category = styled.div`
  flex: 1.5;
`;
