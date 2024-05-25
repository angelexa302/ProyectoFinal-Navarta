import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Link to="/">
            <img
              style={{ borderRadius: 8, width: 120, marginTop: 5 }}
              src="/assets/2.svg"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="footer-categorias">
          <div className="grid-columna-1">
            <div>
              <Link to="/categoria/vinos-tintos">Vinos Tintos</Link>
            </div>
            <div>
              <Link to="/categoria/vinos-blancos">Vinos Blancos</Link>
            </div>
            <div>
              <Link to="/categoria/vinos-rosados">Vinos Rosados</Link>
            </div>
          </div>
          <div className="grid-columna-2">
            <div>
              <Link to="/categoria/cervezas">Cervezas</Link>
            </div>
            <div>
              <Link to="/categoria/champagne">Champagne</Link>
            </div>
          </div>
        </div>
        <div className="footer-social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
