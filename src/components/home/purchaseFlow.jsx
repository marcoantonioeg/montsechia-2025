import React from 'react'
import { Link } from "react-router-dom";
const purchaseFlow = () => {
  return (
    <div>
      <h1>Bienvenido a Montsechia</h1>
      <Link to="/purchase" className="start-purchase-button">
        Iniciar compra
      </Link>
    </div>
  )
}

export default purchaseFlow