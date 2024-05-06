import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  const { categoria } = useParams();

  useEffect(() => {
    if (categoria) {
      fetch("/src/data/productos.json")
        .then((res) => res.json())
        .then((data) => {
          const filteredProducts = categoria
            ? data.filter((prod) => prod.categoria.toLowerCase() === categoria)
            : data;
          setProductos(filteredProducts);
        });
    } else {
      fetch("/src/data/productos.json")
        .then((res) => res.json())
        .then((data) => setProductos(data));
    }
  }, [categoria]);

  return <ItemList productos={productos} />;
}

export default ItemListContainer;
