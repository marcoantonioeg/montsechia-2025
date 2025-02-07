import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <div className="container mt-5">
      <h2>¡Pago Exitoso!</h2>
      <p>Gracias por tu compra.</p>
      <Link to="/" className="btn btn-primary">
        Volver a la Tienda
      </Link>
    </div>
  );
};

export default SuccessPage;