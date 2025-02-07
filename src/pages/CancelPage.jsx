import React from 'react';
import { Link } from 'react-router-dom';

const CancelPage = () => {
  return (
    <div className="container mt-5">
      <h2>Pago Cancelado</h2>
      <p>Tu pago no se completó.</p>
      <Link to="/" className="btn btn-primary">
        Volver a la Tienda
      </Link>
    </div>
  );
};

export default CancelPage;