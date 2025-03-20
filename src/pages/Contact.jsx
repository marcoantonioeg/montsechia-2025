import React from 'react'
import './Contact.css'
import ContactoFlor from '../assets/images/Contacto_Anturio.png'
import ButtonNoFillLeft from '../components/common/ButtonNoFillLeft'
const Contact = () => {
  return (
    <div className='container mt-5 mb-5 pb-5'>
      <div className="row p-0 col-lg-12">
        <div className="col-lg-9">
          <h1 className='contacto-title'>¿TIENES ALGO</h1>
        </div>
        <div className="col-lg-3"></div>
      </div>
      <div className="row p-0 col-lg-12">
      <div className="col-lg-5 contacto-flor-div">
        <img src={ContactoFlor} className='contacto-flor' alt="" />
      </div>
        <div className="col-lg-7">
          <h1 className='contacto-title'>EN MENTE?</h1>
          <div className="col-lg-12 p-0">

          <div className='pl-4 ml-3 display-inline-block'>
          <ButtonNoFillLeft text={"Comienza Cuestionario"} direction={"cuestionario"}/>
          </div>
          </div>
         <div className="col-lg-12 p-0">
         <p className='p-contacto pt-3'>
          <b>En Montsechia ofrecemos soluciones para tu evento y proyecto</b> de marca, creando experiencias visuales únicas a través de
arte floral en 3D y realidad aumentada.<br/> Diseñamos instalaciones personalizadas, cuadros interactivos y contenido creativo que
eleva la identidad de tu marca y cautiva a tus invitados.
          </p>
         </div>

        </div>
        
      </div>
    </div>
  )
}

export default Contact