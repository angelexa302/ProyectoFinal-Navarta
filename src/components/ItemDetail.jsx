import React from "react";
import ItemCount from "./ItemCount";
import { useCart } from "../context/carContext.jsx";
import "../css/ItemDetail.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import MySpinner from "./MySpinner.jsx";

function ItemDetail({ detail }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const handleAddToCart = (quantity) => {
    const productToAdd = {
      id: detail.id,
      nombre: detail.nombre,
      precio: detail.precio,
      imagen: detail.imagen,
      quantity: quantity,
    };

    addToCart(productToAdd);
    Swal.fire({
      title: "Añadido al carrito!",
      text: "Apreta el botón ok, para continuar!",
      icon: "success",
      customClass: {
        confirmButton: "my-custom-button",
      },
    }).then(() => {
      navigate("/cart");
    });
  };

  if (!detail) {
    return (
    <>
      <MySpinner />
    </>
    )
  }

  const stock = detail.stock || 10;

  return (
    <div className="itemDetail">
      <h2>{detail.nombre}</h2>
      <img src={detail.imagen} alt={detail.nombre} />
      <p>{detail.descripcion}</p>
      <p className="itemDetailPrice">${detail.precio}</p>
      <ItemCount stock={stock} initial={1} onAdd={handleAddToCart} />
    </div>
  );
}

export default ItemDetail;
