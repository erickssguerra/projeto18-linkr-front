import Modal from "react-modal";
import * as Style from "./style";
import "./style.css";

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
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="Modal">
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
