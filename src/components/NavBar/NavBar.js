import React from 'react';
import { Link } from "react-router-dom";
import CartWidget from './CartWidget/CartWidget'; 

const Navbar = () => {
  return (
    <header>
   <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
      <h1>AnBikinis</h1>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {' '}
              <Link className="nav-link active" aria-current="page" to='/'>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              {' '}
              <Link className="nav-link active" aria-current="page" to="/category/men's clothing">
              Men's clothing
              </Link>
            </li>
            <li className="nav-item">
              {' '}
              <Link className="nav-link active" aria-current="page" to='/category/jewelery'>
              Accesorios
              </Link>
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

