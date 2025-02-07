import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { cart } = useContext(CartContext);

  return (
    <header className="bg-dark text-white p-3">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="text-white text-decoration-none">
          <h1>Tienda de Cuadros</h1>
        </Link>
        <nav>
          <Link to="/tienda" className="btn btn-primary me-2">
            Comprar
          </Link>
          <button className="btn btn-success" onClick={() => setShowCart(!showCart)}>
            Carrito ({cart.length})
          </button>
        </nav>
      </div>
      {showCart && <Cart />}
    </header>
  );
};

export default Header;