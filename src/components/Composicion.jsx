import React from 'react'
import ComposicionImg from '../../public/images/Composicion_Cuadros_Texto.png'
import './Composicion.css'
const Composicion = () => {
  return (
    <div className='container composicionDiv'>
      <center>
         <h1 className='titulo chico'>cOMPOSICIÓN</h1>
         <h2 className='titulo chico'>del arte</h2>
         <img src={ComposicionImg} className='composicionImg' alt="" srcset="" />
      </center>
    </div>
  )
}

export default Composicion