import React, { useState } from "react";

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
      <button onClick={decrement} disabled={count <= initial}>
        -
      </button>
      <span> {count} </span>
      <button onClick={increment} disabled={count >= stock}>
        +
      </button>
      <button onClick={() => onAdd(count)}>Añadir al carrito</button>
    </div>
  );
}

export default ItemCount;
