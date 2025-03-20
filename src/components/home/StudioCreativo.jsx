import React from 'react'
import "./StudioCreativo.css";
import studioGif from '../../assets/images/Studio_Montsechia_GIF.gif';
import banner from '../../assets/images/Logotipo_ComoSeVioEn.png'
import ButtonNoFillLeft from '../common/ButtonNoFillLeft';
const StudioCreativo = () => {
  return (
    <>
      <center className=' pb-5'>

<section className="three-parts-grid-section">
  <div className="part parte1 pt-creative pl-0">
    <h2 className='titulo cuadros-mediano l-h-studio'>Studio <br />
    <span className='titulo cuadros-grande'>CREATIVO</span></h2>
   
  </div>
  <div className="part pr-cel">
    <div className="container-gif">
      <img className="gif" src={studioGif} alt="Eventos GIF" />
    </div>
  </div>
  <div className="part p-0 pt-5">
    <h2 className="pregunta titulo cuadros-mediano l-h-studio-1 ml-vida">le damos vida <br />
a tu visión <br />
creativa</h2>
    <ButtonNoFillLeft text="Contacto" direction="contact"/>
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
        <p className="text-studio pt-3 pb-0 mb-0">
        como se vió en
</p>
<img className='banner-img' src={banner} alt="" srcSet="" />
        </center>
    </div>
    <div className="col-lg-4"></div>
</div>
    </>
  )
}

export default StudioCreativo