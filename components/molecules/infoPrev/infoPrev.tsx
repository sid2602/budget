import styled from "styled-components";
import { IconType } from "react-icons/lib";

export type InfoPrevProps = {
  Icon: IconType;
  title: string;
  score: number;
  percent: number;
  progress: boolean;
  marked?: boolean;
  extended?: boolean;
  lastScore?: number;
};

export const InfoPrev: React.FC<InfoPrevProps> = ({
  Icon,
  title,
  score,
  percent,
  marked,
  progress,
  extended,
  lastScore,
}) => {
  return (
    <InfoPrevSection extended={extended}>
      <InfoHeader>
        <h2>{title}</h2>
      </InfoHeader>
      <InfoContainer marked={marked} extended={extended}>
        <IconContainer>
          <Icon />
        </IconContainer>
        {extended && lastScore ? (
          <Details progress={progress} extended={extended}>
            <DetailsTitle>{title} całkowity</DetailsTitle>
            <BigSpan>{score}zł</BigSpan>
            <DetailsTitle>od ostatniego miesiaca</DetailsTitle>
            <SmallInfoContainer>
              <span>{lastScore} zł</span>
              <span>{percent} %</span>
            </SmallInfoContainer>
          </Details>
        ) : (
          <Details progress={progress}>
            <span>{score} zł</span>
            <span>{percent} %</span>
          </Details>
        )}
      </InfoContainer>
    </InfoPrevSection>
  );
};

InfoPrev.defaultProps = {
  marked: false,
  extended: false,
};

type ExtendedProps = {
  extended?: boolean;
};

const InfoPrevSection = styled.section<ExtendedProps>`
  width: ${({ extended }) => (extended ? "400px" : "300px")};
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
  extended?: boolean;
};

const InfoContainer = styled.div<InfoContainerProps>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme, marked }) =>
    marked ? theme.colors.primaryLight : "#fff"};
  display: flex;
  flex-direction: ${({ extended }) => (extended ? "row-reverse" : "column")};
  justify-content: center;
  align-items: ${({ extended }) => (extended ? "center" : "normal")};
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
  extended?: boolean;
};

const DetailsTitle = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  display: block;
  margin: 1rem 0;
`;

const BigSpan = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

const SmallInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Details = styled.div<DetailsProps>`
  height: ${({ extended }) => (extended ? "100%" : "50px")};
  align-items: ${({ extended }) => (extended ? "normal" : "center")};
  display: flex;
  flex-direction: ${({ extended }) => (extended ? "column" : "row")};
  padding: 0 1rem;

  justify-content: ${({ extended }) => (extended ? "center" : "space-between")};
  font-weight: bold;
  color: ${({ theme, progress }) =>
    progress ? theme.colors.secondary : theme.colors.error};
`;
