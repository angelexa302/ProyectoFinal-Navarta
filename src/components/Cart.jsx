import React from "react";
import { useCart } from "../context/carContext";
import "../css/Cart.css";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, addToCart } = useCart();

  const removeFromCart = (productToRemove) => {
    addToCart({ ...productToRemove, quantity: -productToRemove.quantity });
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.precio * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h4 className="cart-title">Tu Carrito de Compras</h4>
      {cart.length > 0 ? (
        <>
          <ul className="cart-items">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
              />
            ))}
          </ul>
          <div className="cart-total">Total: ${totalPrice.toFixed(2)}</div>
          <Link to="/chekout">
            <button
              className="cart-checkout-button"
              onClick={() => console.log("Proceder a la compra")}
            >
              Ir al checkout
            </button>
          </Link>
        </>
      ) : (
        <div className="carrito-vacio">
          <p>Tu carrito está vacío!</p>
        </div>
      )}
      <Link to="/">
        <button className="cart-volver-comprar">volver a comprar</button>
      </Link>
    </div>
  );
};

export default Cart;
