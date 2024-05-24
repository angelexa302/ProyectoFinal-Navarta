import React, { useState } from "react";
import "../css/itemCount.css";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button
        className="cart-menos"
        onClick={decrement}
        disabled={count <= initial}
      >
        -
      </button>
      <span> {count} </span>
      <button
        className="cart-mas"
        onClick={increment}
        disabled={count >= stock}
      >
        +
      </button>
      <button className="cart-mas" onClick={() => onAdd(count)}>
        Añadir al carrito
      </button>
    </div>
  );
}

export default ItemCount;
