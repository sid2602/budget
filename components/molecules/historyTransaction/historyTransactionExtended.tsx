import { IconType } from "react-icons/lib";
import { StyledHistoryTransaction, IconContainer } from "./historyTransaction";
import styled from "styled-components";
import { ProgressCircular } from "../../atoms/progressBar/progressBar";
import { BsChevronDown } from "react-icons/bs";
export type HistoryTransactionExtendedProps = {
  Icon: IconType;
  category: string;
  expectedPrice: number;
  actualPrice: number;
  comment: string;
  extended?: boolean;
  children?: React.ReactNode;
  podcategory?: boolean;
};

export const HistoryTransactionExtended: React.FC<HistoryTransactionExtendedProps> = ({
  Icon,
  category,
  expectedPrice,
  actualPrice,
  comment,
  extended,
  children,
  podcategory,
}) => {
  const percent = Math.round((actualPrice / expectedPrice) * 100);

  return (
    <StyledHistoryTransactionContainer extended={extended}>
      <StyledHistoryTransactionExtended podcategory={podcategory}>
        <IconContainer>
          <Icon />
        </IconContainer>
        <Category>{category}</Category>
        <div>{expectedPrice} zł</div>
        <div>{actualPrice} zł</div>

        <Chart>
          <ProgressCircular percent={percent} red={true} />
        </Chart>

        {!extended ? (
          <Comment>{comment}</Comment>
        ) : (
          <MoreButton>
            <BsChevronDown />
          </MoreButton>
        )}
      </StyledHistoryTransactionExtended>
      {extended && children && <>{children}</>}
    </StyledHistoryTransactionContainer>
  );
};

HistoryTransactionExtended.defaultProps = {
  extended: false,
  podcategory: false,
};

type StyledHistoryTransactionContainerProps = {
  extended?: boolean;
};

const StyledHistoryTransactionContainer = styled.div<StyledHistoryTransactionContainerProps>`
  height: ${({ extended }) => (extended ? "400px" : "72px")};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

type StyledHistoryTransactionExtendedProps = {
  podcategory?: boolean;
};

const StyledHistoryTransactionExtended = styled(
  StyledHistoryTransaction
)<StyledHistoryTransactionExtendedProps>`
  background-color: ${({ podcategory, theme }) =>
    podcategory ? theme.colors.grayLight : "white"};

  & > * {
    flex: 1;
  }
`;

const Category = styled.div`
  flex: 1.5;
`;

const Chart = styled.div`
  display: flex;
  justify-content: center;
`;

const Comment = styled.div`
  display: flex;
  justify-content: center;
`;

const MoreButton = styled.button`
  width: 100%;
  height: 100%;
  display: block;
  text-align: center;
  svg {
    width: 25px;
    height: 25px;
  }
`;
