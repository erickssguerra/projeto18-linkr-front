import Modal from "react-modal";
import { loadingButton } from "../../assets/Spinners";
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
  loading,
}) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="Modal">
        <Style.Title>{title}</Style.Title>
        {loading ? (
          <Style.ButtonContainer>
            <Style.Close disabled={loading}>{close}</Style.Close>
            <Style.Comfirm disabled={loading}>{loadingButton}</Style.Comfirm>
          </Style.ButtonContainer>
        ) : (
          <Style.ButtonContainer>
            <Style.Close onClick={closeModal} disabled={loading}>
              {close}
            </Style.Close>
            <Style.Comfirm onClick={deletePost} disabled={loading}>
              {confirm}
            </Style.Comfirm>
          </Style.ButtonContainer>
        )}
      </Modal>
    </div>
  );
}
