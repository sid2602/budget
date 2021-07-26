import styled from "styled-components";

export type ModalProps = {
  children: React.ReactNode;
  onBackgroundClick: () => void;
};

export const Modal: React.FC<ModalProps> = ({
  children,
  onBackgroundClick,
}) => {
  return (
    <>
      <ModalBackground onClick={onBackgroundClick} />
      <StyledModal>{children}</StyledModal>
    </>
  );
};

type StyledModalProps = {};

const StyledModal = styled.div<StyledModalProps>`
  position: fixed;
  z-index: 1001;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const ModalBackground = styled.div`
  position: fixed;
  z-index: 1000;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;
