import React from 'react'
import cuadrosInteriores from '../../assets/images/MueblesyCuadro_Interior.png'
import './CuadrosInterior.css'
import mesa from '../../assets/images/Mesa2.png'
import ButtonNoFill from '../common/ButtonNoFill'
const CuadrosInterior = () => {
  return (
    <>
    <div className='row p-5 pb-0 mb-0'>
       <div className="col-lg-5 p-0">
        <div className="col-lg-12 p-0 pt-5 pl-5 pb-0 cuadros-interior">
            <center className=' pb-0'>
            <h2 className='pt1 pt-5 mt-5 pb-0 titulo cuadros-mediano l-h-0'>CUADROS DE</h2>
            <h2 className='pt2 titulo cuadros-grande titulo-cuadros-interior'>

            interior
            </h2>
        </center>
        </div>
        <div className="col-lg-12 p-0">
            <img src={mesa} className='mesa' alt="" srcSet="" />
        </div>
       </div>
       <div className="col-lg-7 p-0">
        <img src={cuadrosInteriores} className='cuadros' alt="" srcSet="" />
       </div>
       <div className="col-lg-12">

       <center className='btn-comprar'>
     <ButtonNoFill text="Comprar" direction="tienda"/>
     <p className="text-cuadro pt-5">
      Con un tamaño más grande, las flores de Montsechia florecen en diseños únicos con realidad aumentada que <br />
      permitentransformar y complementar espacios 
      </p>
    </center>
  
       </div>
    </div>
    
    </>
  )
}

export default CuadrosInterior