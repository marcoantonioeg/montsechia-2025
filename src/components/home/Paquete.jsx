import React from 'react'
import paqueteImg from '../../assets/images/PaqueteMontsechiaCarrusel.png'
import './Paquete.css'
import ButtonNoFill from '../common/ButtonNoFill'
const Paquete = () => {
  return (
    <div className='container'>
        <center>
            <img className='img-paquete' src={paqueteImg} alt="" srcSet="" />
            <br />
            <ButtonNoFill text="Comprar" direction="tienda"/>
            <br />
            <p className="text-paquete pt-5">
            Conoce nuestros paquetes Montsechia: arte de flores y retratos personalizados hechos en 3D con una experiencia en <br />
            realidad aumentada perfecto para regalar a tu ser querido.
            </p>
        </center>
        
    </div>
  )
}

export default Paquete