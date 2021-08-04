import styled from "styled-components";
import { useTranslation } from "react-i18next";
export type HistoryTransactionContainerProps = {
  children: JSX.Element[];
  editable?: boolean;
};

export const HistoryTransactionContainer: React.FC<HistoryTransactionContainerProps> = ({
  children,
  editable,
}) => {
  const { t } = useTranslation();

  return (
    <Container editable={editable}>
      <Header>
        <SvgPlace />
        <Category>{t(`transactions.category`)}</Category>
        <Comment>{t(`transactions.comment`)}</Comment>
        <Action>{t(`transactions.action`)}</Action>
        {editable && (
          <>
            <ExtendedHeading>{t(`transactions.edit`)}</ExtendedHeading>
            <ExtendedHeading>{t(`transactions.delete`)}</ExtendedHeading>
          </>
        )}
      </Header>

      {children}
    </Container>
  );
};

HistoryTransactionContainer.defaultProps = {
  editable: false,
};

type ContainerStyledProps = {
  editable?: boolean;
};

const Container = styled.section<ContainerStyledProps>`
  max-width: ${({ editable }) => (editable ? "935px" : "735px")};
`;

const Header = styled.header`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  display: flex;
  padding: 0 1rem;
`;

const SvgPlace = styled.div`
  width: 30px;
  margin-right: 1.5rem;
`;

const Category = styled.div`
  flex: 2;
`;

const Comment = styled.div`
  flex: 0.8;
  margin-right: 1rem;
`;

const Action = styled.div`
  flex: 0.5;
`;

const ExtendedHeading = styled.button`
  flex: 0.3;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;
