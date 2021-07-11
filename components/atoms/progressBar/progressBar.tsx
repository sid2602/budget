import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";
type ProgressCircularProps = {
  percent: number;
  red: boolean;
};

export const ProgressCircular: React.FC<ProgressCircularProps> = ({
  percent,
  red,
}) => (
  <CircularContainer>
    <CircularProgressbar
      value={percent}
      text={`${percent} %`}
      styles={buildStyles({
        pathColor: red ? "#FF6C6C" : "#17E4BD",
        textColor: red ? "#FF6C6C" : "#17E4BD",
      })}
    />
  </CircularContainer>
);

const CircularContainer = styled.div`
  svg {
    width: 50px;
  }
`;
