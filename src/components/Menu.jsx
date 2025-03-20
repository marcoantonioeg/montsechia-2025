import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'; // Reutiliza los estilos del carrito
import './Menu.css'

const Menu = ({ closeMenu }) => {
  return (
    <div className="cart menu-relative"> {/* Reutilizando las clases del carrito */}
      <div className="cart-header float-right mb-5">
        <h4 className='titulo cerrar-menu' onClick={closeMenu} >CERRAR</h4>
      </div>
      <ul className='mt-5 pt-5 pl-5'>

        <li className="cart-item no-border-bottom p-0">
          <Link to="/" className="titulo">
          <h1 className=" titulo-menu">inicio</h1>
          </Link>
        </li>
        <li className="cart-item no-border-bottom p-0">
          <Link to="/tienda" className="titulo">
          <h1 className=" titulo-menu">Catálogo</h1>

          </Link>
        </li>
        <li className="cart-item no-border-bottom p-0">
          <Link to="/nosotros" className="titulo">
          <h1 className=" titulo-menu">nosotros</h1>

          </Link>
        </li>
        <li className="cart-item no-border-bottom p-0">
          <Link to="/contact" className="titulo">
          <h1 className=" titulo-menu">CONTACTO</h1>

          </Link>
        </li>
      </ul>
      <div className='brand-menu'>
         <p className='titulo'>MONTSECHIA</p>
      </div>
    </div>
  );
};

export default Menu;
