import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { cart, total, removeFromCart } = useContext(CartContext);

  // Aquí manejamos el proceso de pago
  const handlePayment = async () => {
    const stripe = await loadStripe('pk_test_51QLrGR00HjbbLtoKoE2nv413ueNlfnOGeOxWv2wfM7WO0HTRSyrOee5nlONMmuhkd95ZgE2pPITsx8Wg8TbZ2muX00A33JzmYk');

    // Asegúrate de agregar la 'molduraNota' de cada producto en el carrito
    const cartWithMolduraNotes = cart.map(item => ({
      ...item,
      molduraNota: item.molduraNota || 'Sin nota', // Añade la nota o "Sin nota" si no hay
    }));

    const response = await fetch('http://localhost:3001/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cart: cartWithMolduraNotes }),
    });

    const { sessionId } = await response.json();
    const { error } = await stripe.redirectToCheckout({ sessionId });

    if (error) console.error(error);
  };

  return (
    <div className="checkout-container">
      <h2>Total:</h2>
      <h1 className="checkout-total">
        {new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(total)}
      </h1>

      <ul className="checkout-list">
        {cart.map((item) => (
          <li key={item.id} className="checkout-item">
            <img src={item.image} alt={item.name} className="checkout-img" />
            <div className="checkout-item-details">
              <div>
              <span className="checkout-title">{item.name}</span>
              <span className='checkout-moldura'>{item.molduraNota && <p>{item.molduraNota}</p>}</span> {/* Mostrar la nota de la moldura */}
              </div>
              <span className="checkout-price">{new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(item.price)}</span>
            </div>
            <button className="remove-button" onClick={() => removeFromCart(item.id)}>✕</button>
          </li>
        ))}
      </ul>

      <button onClick={handlePayment} className="checkout-button">
        Pagar ahora
      </button>
    </div>
  );
};

export default CheckoutPage;
