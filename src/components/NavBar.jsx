import React from "react";
import "../styles/NavBar.css";
export default function NavBar() {
  return (
    <nav className="nav">
      <h1>Cristian</h1>
      <ul className="button-container">
        <li>
          <a href="#inicio">Inicio</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contacto">Contacto </a>
        </li>
        <li>
          <a href="#contacto">Tecnologías </a>
        </li>
      </ul>
    </nav>
  );
}
