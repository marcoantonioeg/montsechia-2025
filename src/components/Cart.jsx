import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Isotipo from '../../public/images/Isotipo.gif';
import './Cart.css';

const Cart = ({ closeCart }) => {
  const { cart, removeFromCart, clearCart, total, setCart } = useContext(CartContext);

  const handleQuantityChange = (itemId, operation) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        let newQuantity = item.quantity;
        if (operation === 'increment') {
          newQuantity = item.quantity + 1;
        } else if (operation === 'decrement') {
          newQuantity = Math.max(1, item.quantity - 1);
        }

        const updatedItem = { ...item, quantity: newQuantity };
        return updatedItem;
      }
      return item;
    });

    setCart(updatedCart);
  };

  const renderFloresSeleccionadas = (flores) => {
    return (
      <div className="flores-seleccionadas">
        <span className='cart-item-moldura-note'>Flores seleccionadas:</span>
        <div className="flores-container">
          {flores.map((flor, index) => (
            <div key={index} className={`flor-seleccionada ${flor.color}`}>
              {flor.alt}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="cart">
      <div className="cart-header float-right mb-5">
        <h4 className='titulo cerrar-menu' onClick={closeCart}>CERRAR</h4>
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
                <img src={item.image} alt={item.name} className="cart-item-image" />

                <div className="cart-item-details">
                  <span className='titulo'>{item.name}</span> <br /> 
                  {item.molduraNota && <> <span className='cart-item-moldura-note'>{item.molduraNota}</span> <br /></>} 
                  {item.enmarcarImageUrl && <> <img src={item.enmarcarImageUrl} alt="Foto personalizada" className="cart-item-image" /> <br /></>}
                  {item.postalNota && <> <span className='cart-item-moldura-note'>{item.postalNota}</span><br /></>}
                  {item.floresSeleccionadas && renderFloresSeleccionadas(item.floresSeleccionadas)}
                  {item.notaPersonalizada && <span className='cart-item-moldura-note'>{item.notaPersonalizada}</span>} 
                  {item.nombrePersonalizado && <> <span className='cart-item-moldura-note'>{item.nombrePersonalizado}</span><br /></>}
                  {item.imageUrl && <> <img src={item.imageUrl} alt="Foto personalizada" className="cart-item-image" /><br /></>}
                  <strong className='titulo floating-right'>${(item.price * item.quantity).toFixed(2)}</strong>
                </div>
                <button className="cart-remove-btn" onClick={() => removeFromCart(item.id)}>
                  <i className="fas fa-trash-alt"></i>
                </button>
              </li>
            ))}
          </ul>
          <div className='cart-inner'>
            <div className='cart-flor'>
              <img src={Isotipo} className='isotipo-cart' alt="" />
            </div>
            <div className="cart-total">
              <h4 className='titulo titulo-carrito'>Total:</h4>
              <h4 className="titulo titulo-carrito">
                {new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(total)}
                <span className='titulo-carrito-mxn'>MXN</span>
              </h4>
            </div>
            <div className="cart-actions">
              <Link to="/checkout" className="btn-pagar text-white titulo">
                PAGAR - {new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(total)} MXN
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;