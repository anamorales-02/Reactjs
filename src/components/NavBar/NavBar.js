//barra de menú (Navbar)

//DEF:Toggle>El método toggle permite cada vez que se ejecute cambiar de estado la visibilidad del elemento HTML, es decir si está visible pasa a oculto y si se encuentra oculto pasa a visible
import React from 'react';
import { Link } from "react-router-dom";
import CartWidget from './CartWidget/CartWidget'; //devuelve un icono de carrito

const Navbar = () => {
  //poner en un futuro la ruta de acceso al logo de la marca
  return (
    <header>
    <nav>
      <div className="container-fluid">
      <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <h1>AnBikinis</h1>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to={"/"}>Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to={"/"}>Bikinis</Link>
          </li>
          <li className="nav-item">
            <Link to={"/"}>Deporte</Link>
          </li>
          <li className="nav-item">
            <Link to={"/"}>Accesorios</Link>
          </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
    </header>
  ); // agregar enlace a futuros jsx de cada categoria del menu desplegable
};

export default Navbar;


