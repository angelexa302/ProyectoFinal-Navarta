import React from "react";
import Modal from "./Modal";
import { useModal } from "../hooks/useModal";

const Modals = () => {
  const [isOpenModal, openModal, closeModal] = useModal(true);

  return (
    <div>
      <section className="modal-custom">
        <Modal isOpen={isOpenModal} closeModal={closeModal}>
          <h2>La Boutique del Vino</h2>
          <p>¿Eres mayor de edad?</p>
          <img src="/assets/la-boutique-del-vino.jpg" alt="foto del comercio" />
          <div className="button-modal">
            <button className="modal-close" onClick={closeModal}>
              SI
            </button>
            <button
              onClick={() =>
                alert("No puedes continuar si no eres mayor de edad")
              }
            >
              NO
            </button>
          </div>
          <p className="cookies-message">
            Este sitio utiliza cookies.{" "}
            <a href="#">Términos y Condiciones de uso</a>
          </p>
        </Modal>
      </section>
    </div>
  );
};

export default Modals;
