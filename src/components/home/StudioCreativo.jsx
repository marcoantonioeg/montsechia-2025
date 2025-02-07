import React from 'react'
import "./StudioCreativo.css";
import studioGif from '../../assets/images/Studio_Montsechia_GIF.gif';
import banner from '../../assets/images/Logotipo_ComoSeVioEn.png'
import ButtonNoFill from "../common/ButtonNoFill";
const StudioCreativo = () => {
  return (
    <>
      <center className='pt-5 mt-5 pb-5'>

<section className="three-parts-grid-section">
  <div className="part parte1">
    <h2>Studio <br />
    CREATIVO</h2>
   
  </div>
  <div className="part">
    <div className="container-gif">
      <img className="gif" src={studioGif} alt="Eventos GIF" />
    </div>
  </div>
  <div className="part">
    <h2 className="pregunta">le damos vida <br />
a tu visión <br />
creativa</h2>
    <ButtonNoFill text="Contacto"/>
  </div>

</section>
<p className="text-studio">
Somos un estudio creativo que se enfoca en ofrecer soluciones únicas para empresas, desde proyecto 3D utilizando <br />
nuestras flores hasta cuadros personalizados para tu espacio. 
</p>
</center>
<div className='banner row'>
    <div className="col-lg-4"></div>
    <div className="col-lg-4">
        <center>
        <p className="text-studio pt-3 pb-0">
        como se vió en
</p>
<img className='banner-img' src={banner} alt="" srcset="" />
        </center>
    </div>
    <div className="col-lg-4"></div>
</div>
    </>
  )
}

export default StudioCreativo