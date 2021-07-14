import styled from "styled-components";
import { IconType } from "react-icons/lib";

export type InfoPrevProps = {
  Icon: IconType;
  title: string;
  score: number;
  percent: number;
  progress: boolean;
  marked?: boolean;
};

export const InfoPrev: React.FC<InfoPrevProps> = ({
  Icon,
  title,
  score,
  percent,
  marked,
  progress,
}) => {
  return (
    <InfoPrevSection>
      <InfoHeader>
        <h2>{title}</h2>
      </InfoHeader>
      <InfoContainer marked={marked}>
        <IconContainer>
          <Icon />
        </IconContainer>
        <Details progress={progress}>
          <span>{score} zł</span>
          <span>{percent} %</span>
        </Details>
      </InfoContainer>
    </InfoPrevSection>
  );
};

InfoPrev.defaultProps = {
  marked: false,
};

const InfoPrevSection = styled.section`
  width: 300px;
  height: 300px;

  display: flex;
  flex-direction: column;
`;

const InfoHeader = styled.header`
  height: 50px;
  display: flex;
  align-items: center;

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

type InfoContainerProps = {
  marked?: boolean;
};

const InfoContainer = styled.div<InfoContainerProps>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme, marked }) =>
    marked ? theme.colors.primaryLight : "#fff"};
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  padding: 1rem;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  svg {
    width: 140px;
    height: 140px;
  }
`;

type DetailsProps = {
  progress: boolean;
};

const Details = styled.div<DetailsProps>`
  height: 50px;
  align-items: center;
  display: flex;
  padding: 0 1rem;
  justify-content: space-between;
  font-weight: bold;
  color: ${({ theme, progress }) =>
    progress ? theme.colors.secondary : theme.colors.error};
`;
