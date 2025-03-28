import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { cart, total, removeFromCart } = useContext(CartContext);

  const handlePayment = async () => {
    const stripe = await loadStripe('pk_test_51QLrGR00HjbbLtoKoE2nv413ueNlfnOGeOxWv2wfM7WO0HTRSyrOee5nlONMmuhkd95ZgE2pPITsx8Wg8TbZ2muX00A33JzmYk');

    const response = await fetch('http://localhost:3001/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cart }),
    });

    const { sessionId } = await response.json();
    const { error } = await stripe.redirectToCheckout({ sessionId });

    if (error) console.error(error);
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
    <div className="checkout-container">
      <h2>Total:</h2>
      <h1 className="checkout-total">
        {new Intl.NumberFormat('es-MX', { 
          style: 'currency', 
          currency: 'MXN' 
        }).format(total)}
      </h1>

      <ul className="checkout-list">
        {cart.map((item) => (
          <li key={item.id} className="checkout-item">
            <img src={item.image} alt={item.name} className="checkout-img" />
            <div className="checkout-item-details">
              <div>
                <span className="checkout-title">{item.name}</span>
                <br />
                {item.molduraNota && (
                  <span className='checkout-note'>Moldura: <span className='checkout-note-desc'>{item.molduraNota}</span></span>
                )}
                <br />
                {item.floresSeleccionadas && (
                 <><span className='checkout-note'>Flores Seleccionadas: {renderFloresSeleccionadas(item.floresSeleccionadas)}</span> <br /></>
                )}
               
                {item.postalNota && (
                  <span className='checkout-note'>Postal: <span className='checkout-note-desc'>{item.postalNota}</span></span>
                )}
                <br />
                {item.notaPersonalizada && (
                  <span className='checkout-note'>Postal: <span className='checkout-note-desc'>{item.notaPersonalizada}</span></span>
                )}
                <br />
                {item.nombrePersonalizado && (
                  <span className='checkout-note'>Nombre: <span className='checkout-note-desc'>{item.nombrePersonalizado}</span></span>
                )}
                <br />
                {item.imageUrl && (
                  <span className='checkout-note'>Foto: <br /> <img className='checkout-img-postal' src={item.imageUrl} alt="" srcset="" /></span>
                )}
                <br />
                {item.enmarcarImageUrl && (
                  <span className='checkout-note'>Foto: <br /> <img className='checkout-img-postal' src={item.enmarcarImageUrl} alt="" srcset="" /></span>
                )}
              </div>
              <span className="checkout-price">
                {new Intl.NumberFormat('es-MX', { 
                  style: 'currency', 
                  currency: 'MXN' 
                }).format(item.price * item.quantity)}
              </span>
            </div>
            <button 
              className="remove-button" 
              onClick={() => removeFromCart(item.id)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      <button 
        onClick={handlePayment} 
        className="checkout-button"
      >
        Pagar ahora
      </button>
    </div>
  );
};

export default CheckoutPage;