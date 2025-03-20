import React from 'react'
import GifFlor from '../../public/images/CompletamenteHechoen3D_GIF.gif'
import CuestionarioForm from '../components/home/CuestionarioForm'
import './Cuestionario.css'
const Cuestionario = () => {
  return (
    <div className='container mt-5'>
      <div className="col-lg-12 p-0">
         <div className="row p-0">
            <div className="col-lg-6 p-0">
                  <img className='gif-flor-contacto' src={GifFlor} alt=""  />
            </div>
          <CuestionarioForm/>
         </div>
      </div>
      
    </div>
  )
}

export default Cuestionario