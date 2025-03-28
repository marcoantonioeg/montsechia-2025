import React from 'react'
import './postal.css'
import Postales from '../components/home/Postales'
import HeaderPostal from '../components/home/HeaderPostal'
const Postal = () => {
  return (
    <div className="container pb-5 mb-6">
      <HeaderPostal titulo="escoge una postal a tu paquete" dregresar="/" dsiguiente="postal-nota"/>
      <Postales/>
    </div>
  )
}

export default Postal;