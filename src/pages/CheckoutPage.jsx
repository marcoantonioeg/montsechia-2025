import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { loadStripe } from '@stripe/stripe-js';

const CheckoutPage = () => {
  const { cart, total } = useContext(CartContext);

  const handlePayment = async () => {
    const stripe = await loadStripe('pk_test_51QLrGR00HjbbLtoKoE2nv413ueNlfnOGeOxWv2wfM7WO0HTRSyrOee5nlONMmuhkd95ZgE2pPITsx8Wg8TbZ2muX00A33JzmYk');

    // Llama al backend para crear una sesión de Checkout
    const response = await fetch('http://localhost:3001/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cart }), // Envía el carrito al backend
    });

    const { sessionId } = await response.json();

    // Redirige al usuario a Stripe Checkout
    const { error } = await stripe.redirectToCheckout({ sessionId });

    if (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>
      <div className="checkout-summary">
        <h4>Resumen de la Compra</h4>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
        <h4>Total: {new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(total)} MXN.</h4>
        </div>
      <button onClick={handlePayment} className="btn btn-primary">
        Pagar con Stripe
      </button>
    </div>
  );
};

export default CheckoutPage;
