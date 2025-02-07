import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, clearCart, total } = useContext(CartContext);

  return (
    <div className="cart">
      <h3>Carrito de Compras</h3>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} - ${item.price}
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
          <div className="cart-total">
  <h4>Total: {new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(total)}</h4>
</div>
          </div>
          <div className="cart-actions">
            <button onClick={clearCart} className="btn btn-danger">
              Vaciar Carrito
            </button>
            <Link to="/checkout" className="btn btn-success">
              Ir al Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
