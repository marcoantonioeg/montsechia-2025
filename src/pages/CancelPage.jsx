import React from 'react';
import { Link } from 'react-router-dom';
import './CancelPage.css'
const CancelPage = () => {
  return (
    <>
     <div className="checkout-container">
      <h1 className='titulo text-center titulo-cancelado'>Pago Cancelado</h1>
      <h3 className="checkout-total text-center">
      <p className='titulo titulo-no-completado'>Tu pedido no se completó.</p>
      </h3>

     
      <Link to="/" >
      <button className="checkout-button">
        Volver al inicio
      </button>
      </Link>
     
    </div>
   
    </>
  );
};

export default CancelPage;