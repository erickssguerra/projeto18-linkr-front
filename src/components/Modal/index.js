import { useState } from "react";
import Modal from "react-modal";
import * as Style from "./style";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#333333",
    borderRadius: "3rem",
    width: "37rem",
    height: "16rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

Modal.setAppElement("#root");

export function ModalComponent({
  title,
  close,
  confirm,
  modalIsOpen,
  setIsOpen,
  deletePost,
}) {
  let subtitle;

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Style.Title ref={(_subtitle) => (subtitle = _subtitle)}>
          {title}
        </Style.Title>
        <Style.ButtonContainer>
          <Style.Close onClick={closeModal}>{close}</Style.Close>
          <Style.Comfirm onClick={deletePost}>{confirm}</Style.Comfirm>
        </Style.ButtonContainer>
      </Modal>
    </div>
  );
}
