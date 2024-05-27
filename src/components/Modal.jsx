import React from "react";
import "../css/Modal.css";

const Modal = ({ children, isOpen }) => {
  return (
    <>
      <article className={`modal-custom ${isOpen ? "is-open" : "is-closed"}`}>
        <div className="modal-container">{children}</div>
      </article>
    </>
  );
};

export default Modal;
