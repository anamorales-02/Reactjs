//barra de menú (Navbar)

//DEF:Toggle>El método toggle permite cada vez que se ejecute cambiar de estado la visibilidad del elemento HTML, es decir si está visible pasa a oculto y si se encuentra oculto pasa a visible
import React from 'react';
import CartWidget from './CartWidget/CartWidget'; //devuelve un icono de carrito

const Navbar = () => {
  //poner en un futuro la ruta de acceso al logo de la marca
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <h1>AnBikinis</h1>
        <button
         id="toggleButton"
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Mostrar menú de navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Bikinis
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Deporte
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Accesorios
              </a>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  ); // agregar enlace a futuros jsx de cada categoria del menu desplegable
};

export default Navbar;


