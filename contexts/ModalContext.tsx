import { createContext, useContext, useState } from "react";
import styled from "styled-components";
import { Modal } from "components/organisms/Modal/Modal";
import { AddValueModal } from "components/organisms/Modal/AddValueModal";
import { DeleteValueModal } from "components/organisms/Modal/DeleteValueModal";
export enum ModalType {
  deleteModal = "deleteValue",
  addValue = "addValue",
}

export type ModalContextTypes = {
  modalType: ModalType;
  isVisable: boolean;
  handleModalVisabilityChange: () => void;
  handleModadlTypeChange: (type: ModalType) => void;
};

const ModalContext = createContext<ModalContextTypes>({
  modalType: ModalType.addValue,
  isVisable: false,
  handleModalVisabilityChange: () => {},
  handleModadlTypeChange: (type: ModalType) => {},
});

export const useModalContext = () => useContext(ModalContext);

type ModalProviderTypes = {
  children: React.ReactNode;
};

export const ModalProvider: React.FC<ModalProviderTypes> = ({ children }) => {
  const [isVisable, setIsVisable] = useState<boolean>(false);
  const [modalType, setModalType] = useState<ModalType>(ModalType.addValue);

  const handleModalVisabilityChange = () => {
    setIsVisable((prevState) => !prevState);
  };

  const handleModadlTypeChange = (type: ModalType) => {
    setModalType(type);
  };

  return (
    <ModalContext.Provider
      value={{
        isVisable,
        modalType,
        handleModalVisabilityChange,
        handleModadlTypeChange,
      }}
    >
      {children}
      {isVisable && (
        <Modal onBackgroundClick={handleModalVisabilityChange}>
          {modalType === ModalType.addValue && <AddValueModal />}
          {modalType === ModalType.deleteModal && <DeleteValueModal />}
        </Modal>
      )}
    </ModalContext.Provider>
  );
};
