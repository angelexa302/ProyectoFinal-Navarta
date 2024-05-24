import React from "react";
import "../css/Cart.css";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <li className="cart-item">
      <img src={item.imagen} alt={item.nombre} />
      <div className="cart-item-details">
        <span className="cart-item-name">{item.nombre}</span> -
        <span className="cart-item-price">
          {item.quantity} x ${item.precio} = ${item.precio * item.quantity}
        </span>
      </div>
      <div>
        <button
          className="cart-item-remove"
          onClick={() => removeFromCart(item)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default CartItem;
