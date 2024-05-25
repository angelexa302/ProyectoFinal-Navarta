import { Link } from "react-router-dom";
import CartWidget from "./Cartwidget";
import React, { useState } from "react";
import "../css/NavBar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav>
      <div>
        <Link to="/">
          <img
            style={{ borderRadius: 8, width: 120, marginTop: 5 }}
            src="/assets/2.svg"
            alt="Logo"
          />
        </Link>
      </div>
      <div className={`navbar-categorias categorias ${menuOpen ? "open" : ""}`}>
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
        <div>
          <Link to="/categoria/champagne">Champagne</Link>
        </div>
      </div>
      <div>
        <Link to="/Cart">
          <CartWidget />
        </Link>
      </div>
      <div className="navbar-menu-icon" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
}

export default NavBar;
