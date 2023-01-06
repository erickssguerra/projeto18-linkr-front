import Modal from "react-modal";
import * as Style from "./style";
import "./style.css";

Modal.setAppElement("#root");

export function AlertModalComponent({
  title,
  subtitle,
  alertModalIsOpen,
  setAlertIsOpen,
}) {
  function closeModal() {
    setAlertIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={alertModalIsOpen}
        onRequestClose={closeModal}
        className="AlertModal"
      >
        <Style.Close onClick={closeModal}>X</Style.Close>
        <Style.Title>{title}</Style.Title>
        <Style.Subtitle>{subtitle}</Style.Subtitle>
      </Modal>
    </div>
  );
}
