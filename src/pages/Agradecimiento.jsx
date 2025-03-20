import React from 'react'
import GifFlor from '../../public/images/CompletamenteHechoen3D_GIF.gif'
import './Cuestionario.css'
import './Agradecimiento.css'
import ButtonNoIcon from '../components/common/ButtonNoIcon'
const Agradecimiento = () => {
  return (
   <div className='container mt-5'>
   <div className="col-lg-12 p-0">
      <div className="row p-0">
         <div className="col-lg-6 p-0">
               <img className='gif-flor-contacto' src={GifFlor} alt=""  />
         </div>
         <div className="col-lg-6 pt-5 mt-5">
            <div className='col-lg-12 p-0 row mt-5 pt-5'>
               <div className="col-lg-1 p-0"></div>
               <div className="col-lg-10 p-0">
               <h1 className='agradecimiento-texto'>¡gracias!</h1>
               </div>
               <div className="col-lg-1 p-0"></div>
               <div className="col-lg-12">

               <div className='display-inline'>
               <p className='texto-agradecimiento-1'>Nos pondremos en contacto</p>
               <p className='texto-agradecimiento-2'>contigo, muy pronto.</p>
               <center className='mt-3'>
               <ButtonNoIcon text={"Regresar al Inicio"} direction={" "}/>
               </center>
               </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   
 </div>
  )
}

export default Agradecimiento