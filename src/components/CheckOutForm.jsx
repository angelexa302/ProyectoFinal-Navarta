import React, { useState } from "react";
import "../css/CheckOutForm.css";
import { serverTimestamp } from "firebase/firestore";
import { useCart } from "../context/carContext";
import { createOrder } from "../firebase/db";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function CheckOutForm() {
  const { cart, itemCount, getTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    nombre: "",
    direccion: "",
    email: "",
    celular: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado", formData);

    const order = {
      buyer: {
        nombre: formData.nombre,
        email: formData.email,
        celular: formData.celular,
      },
      total: getTotal(),
      items: cart,
      date: serverTimestamp(),
    };
    createOrder(order)
      .then((orderId) => {
        Swal.fire({
          title: "Tu compra ha sido procesada!",
          html: `Tu ID de compra es: <strong>${orderId}.</strong> <br>Apreta el botón ok, para continuar!`,
          icon: "success",
          customClass: {
            confirmButton: "my-custom-button",
          },
        }).then(() => {
          clearCart();
          navigate("/cart");
          window.location.reload();
        });
      })
      .catch((error) => {
        console.error("Error al crear la orden: ", error);
        Swal.fire({
          title: "Error!",
          text: "Hubo un problema al procesar tu orden.",
          icon: "error",
        });
      });
  };
  return (
    <div className="checkout-form-container">
      <h2>Formulario de Pago</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            placeholder="Nombre"
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="direccion">Dirección:</label>
          <input
            placeholder="Direccion"
            type="text"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            placeholder="Correo Electrónico"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="celular">Teléfono:</label>
          <input
            placeholder="Teléfono"
            type="tel"
            id="celular"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn-enviar" type="submit">
          Enviar
        </button>
      </form>
      <div className="checkout-summary">
        <p>Total de Items: {itemCount}</p>
        <p className="total-checkOut">
          Total a Pagar: ${getTotal().toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default CheckOutForm;
