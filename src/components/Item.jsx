import { Link } from "react-router-dom";

function Item({ producto }) {
  return (
    <div className="producto">
      <img
        className="producto-imagen"
        src={producto.imagen}
        alt={producto.titulo}
      />
      <div className="producto-detalles">
        <h3 className="producto-titulo">{producto.titulo}</h3>
        <p className="producto-precio">${producto.precio}</p>
        <Link to={`/producto/${producto.id}`}>
          <button className="producto-descripcion">Descripción</button>
        </Link>
      </div>
    </div>
  );
}
export default Item;
