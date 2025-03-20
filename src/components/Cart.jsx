import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Isotipo from '../../public/images/Isotipo.gif'
import './Cart.css';

const Cart = ({ closeCart }) => {
  const { cart, removeFromCart, clearCart, total, setCart } = useContext(CartContext);

  // Cambiar la cantidad de un producto
  const handleQuantityChange = (itemId, operation) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        let newQuantity = item.quantity;
        // Operación de incremento o decremento de cantidad
        if (operation === 'increment') {
          newQuantity = item.quantity + 1;
        } else if (operation === 'decrement') {
          newQuantity = Math.max(1, item.quantity - 1); // Asegura que la cantidad nunca sea menor a 1
        }

        // Crear un nuevo objeto para el producto con la cantidad actualizada
        const updatedItem = { ...item, quantity: newQuantity };
        return updatedItem;
      }
      return item;
    });

    // Actualizar el carrito con los cambios
    setCart(updatedCart);
  };

  return (
    <div className="cart">
      <div className="cart-header float-right mb-5">
      <h4 className='titulo cerrar-menu' onClick={closeCart} >CERRAR</h4>
      </div>
      <div className="cart-header">
        <h4 className='titulo'>Tu</h4>
        <h1 className='titulo cuadros-mediano ml-2'>carrito</h1>
      </div>
      {cart.length === 0 ? (
        <p className='titulo'>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className='pl-0 cart-items'>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <span className='titulo'>{item.name}</span> <br /> 
                  {/* Aquí mostramos la nota de la moldura, si existe */}
                  {item.molduraNota && <span className='cart-item-moldura-note'>{item.molduraNota}</span>} 
                  <strong className='titulo floating-right'>${(item.price * item.quantity).toFixed(2)}</strong>
                 {/**
                  * 
                  <div className="quantity-controls">
                    <button onClick={() => handleQuantityChange(item.id, 'decrement')}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, 'increment')}>+</button>
                  </div>
                  */}
                </div>
                <button className="cart-remove-btn" onClick={() => removeFromCart(item.id)}><i class="fas fa-trash-alt"></i></button>
              </li>
            ))}
          </ul>
          <div className='cart-inner'>
            <div className='cart-flor'>
              <img src={Isotipo} className='isotipo-cart' alt="" srcset="" />
            </div>
            <div className="cart-total">
              <h4 className='titulo titulo-carrito'>Total:</h4>
              <h4 className="titulo titulo-carrito">{new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(total)}<span className='titulo-carrito-mxn'>MXN</span> </h4>
            </div>
            <div className="cart-actions">
              {/**
               * 
               * 
              <button onClick={clearCart} className="btn btn-danger titulo text-white">Vaciar Carrito</button>
               */}
              <Link to="/checkout" className="btn-pagar text-white titulo">PAGAR - {new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(total)} MXN</Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
