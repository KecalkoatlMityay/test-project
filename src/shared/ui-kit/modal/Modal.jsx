import { CloseIcon } from "../icons/CloseIcon";
import { SuccessIcon } from "../icons/Success";
import style from "./modal.module.css";
import { createPortal } from "react-dom";

export const Modal = ({ setIsOpen }) => {
  const closeModal = () => {
    setIsOpen(false);
  };
  return createPortal(
    <div className={style.backLayer} onClick={closeModal}>
      <div className={style.modalWindow}>
        <CloseIcon className={style.closeIcon} onClick={closeModal} />
        <SuccessIcon />
        <span>Изменения сохранены</span>
      </div>
    </div>,
    document.body
  );
};
