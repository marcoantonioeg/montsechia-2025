import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import Menu from './Menu';
import { CartContext } from '../context/CartContext';
import './Header.css';
import Logo from '../../public/images/Isotipo_Montsechia.svg';

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { cart } = useContext(CartContext);

  const cartRef = useRef(null);
  const menuRef = useRef(null);

  // 👉 Detectar clics fuera del carrito y menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showCart && cartRef.current && !cartRef.current.contains(event.target)) {
        setShowCart(false);
      }

      if (showMenu && menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCart, showMenu]);

  return (
    <nav className="col-lg-12 custom-navbar d-flex align-items-center justify-content-between px-4">
      {/* Iconos de redes sociales */}
      <div className="d-flex align-items-center col-lg-4">
        <a href="https://www.instagram.com/montsechia/" target="_blank" className='social-icon icono-pequeno' rel="noopener noreferrer">
          <i className="fab fa-instagram mr-3"></i>
        </a>
        <a href="https://www.tiktok.com/@montsechia.co?_t=8r87AgBuxl8&_r=1" className='social-icon icono-pequeno' target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok"></i>
        </a>
      </div>

      {/* Logo y título */}
      <div className="navbar-logo col-lg-4">
        <center>
          <Link to="/">
            <img src={Logo} className="logo-text" alt="Montsechia Logo" />
            <span className="titulo ml-2 mont-m">MONTSECHIA</span>
          </Link>
        </center>
      </div>

      {/* Menú y carrito */}
      <div className="d-flex justify-content-end align-items-center col-lg-4 carrito-navbar">
        <span className="mr-2 titulo mt-1 cursor-pointer" onClick={() => setShowMenu(!showMenu)}>MENÚ</span>
        <Link to="/tienda">
          <i className="fas fa-shopping-bag tienda mr-3"></i>
        </Link>
        <i className="fas fa-shopping-cart cursor-pointer" onClick={() => setShowCart(!showCart)}></i>
        <span className='titulo ml-1 mt-1'>({cart.length})</span>
      </div>

      {/* Carrito */}
      {showCart && (
        <div ref={cartRef}>
          <Cart closeCart={() => setShowCart(false)} />
        </div>
      )}

      {/* Menú */}
      {showMenu && (
        <div ref={menuRef}>
          <Menu closeMenu={() => setShowMenu(false)} />
        </div>
      )}
    </nav>
  );
};

export default Header;
