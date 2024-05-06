import Item from "./Item";

function ItemList({ productos }) {
  return (
    <div id="contenedor-productos">
      {productos.map((producto) => (
        <Item producto={producto} key={producto.id} />
      ))}
    </div>
  );
}
export default ItemList;
