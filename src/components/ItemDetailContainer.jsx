import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../firebase/db";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [detail, setDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getSetItem = async () => {
      const item = await getItem(id);
      setDetail(item);
    };
    getSetItem(id);
  }, [id]);

  return (
    <>
      <ItemDetail detail={detail} />
    </>
  );
}
export default ItemDetailContainer;
