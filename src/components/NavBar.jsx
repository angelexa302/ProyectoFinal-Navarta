import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div>
        <Link to="/">
          <img
            style={{ borderRadius: 8, width: 180, marginTop: 5 }}
            src="/src/assets/2.svg"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="categorias">
        <div>
          <Link to="/categoria/vinos-tintos">Vinos Tintos</Link>
        </div>
        <div>
          <Link to="/categoria/vinos-blancos">Vinos Blancos</Link>
        </div>
        <div>
          <Link to="/categoria/vinos-rosados">Vinos Rosados</Link>
        </div>
        <div>
          <Link to="/categoria/cervezas">Cervezas</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
