import React from "react";
import ItemCount from "./ItemCount";

function ItemDetail({ detail }) {
  const handleAddToCart = (quantity) => {
    alert(`Añadido al carrito: ${quantity} de ${detail ? detail.titulo : ""}`);
  };

  if (!detail) {
    return <div>Cargando...</div>;
  }

  const stock = detail.stock || 10;

  return (
    <div>
      <h1>{detail.titulo}</h1>
      <img src={detail.imagen} alt={detail.titulo} />
      <p>{detail.descripcion}</p>
      <p>${detail.precio}</p>
      <ItemCount stock={detail.stock} initial={1} onAdd={handleAddToCart} />
    </div>
  );
}
export default ItemDetail;
