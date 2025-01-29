import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, image, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <button onClick={onClose} className={css.closeButton}>
        ×
      </button>
      {image && <img src={image} alt="Large preview" className={css.image} />}
    </Modal>
  );
};

export default ImageModal;
