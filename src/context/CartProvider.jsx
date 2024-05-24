import { cartContext } from "./carContext";
import { useState } from "react";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (productToAdd) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(item => item.id === productToAdd.id);

      if (existingProductIndex !== -1) {
        const newCart = [...prevCart];
        newCart[existingProductIndex] = {
          ...newCart[existingProductIndex],
          quantity: newCart[existingProductIndex].quantity + productToAdd.quantity
        };
        if (newCart[existingProductIndex].quantity <= 0) {
          newCart.splice(existingProductIndex, 1);
        }
        return newCart;
      } else {
        if (productToAdd.quantity > 0) {
          return [...prevCart, { ...productToAdd, quantity: productToAdd.quantity }];
        } else {
          return prevCart;
        }
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.precio * item.quantity, 0);
  };
  return (
    <cartContext.Provider value={{ cart, addToCart, clearCart, itemCount, getTotal }}>
      {children}
    </cartContext.Provider>
  );
}

export default CartProvider;
