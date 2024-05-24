import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "./Loader";
import { getItemFromCategory } from "../firebase/db";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  useEffect(() => {
    getItemFromCategory(categoria);

    const getAndSetItems = async () => {
      setLoading(true);
      const items = await getItemFromCategory(categoria);
      setProductos(items);
      setLoading(false);
    };

    getAndSetItems();
  }, [categoria]);

  return (
    <>
      <Loader loading={loading} />
      {!loading && <ItemList productos={productos} />}
    </>
  );
}

export default ItemListContainer;
