import React from 'react';
import { Link } from 'react-router-dom';
import './CancelPage.css'
const SuccessPage = () => {
  return (
    <div className="checkout-container">
            <h1 className='titulo text-center titulo-cancelado'>¡Gracias por tu compra!</h1>

      <h3 className="checkout-total text-center">
      <p className='titulo titulo-no-completado'>Tu pedido se completó correctamente.</p>
      <p className="titulo">Espera las notificaciones de tu envío por correo.</p>

      </h3>
      <Link to="/" >
      <button className="checkout-button">
        Volver al inicio
      </button>
      </Link>
     
    </div>
  );
};

export default SuccessPage;