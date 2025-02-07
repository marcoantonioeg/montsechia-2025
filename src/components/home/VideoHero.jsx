import React from 'react'
import videoHero from '../../assets/images/Montsechia_Inicio.mp4'
import './VideoHero.css'
import ButtonNoFill from '../common/ButtonNoFill'
const VideoHero = () => {
  return (
   <div className='videoContainer'>
    <video className='videoHero' autoPlay loop muted>
  <source src={videoHero} type="video/mp4" />
  Tu navegador no soporta videos HTML5.
</video>    
<center>
  <p className='textvideo'><b>Montsechia</b> es un estudio creativo enfocado al arte <br />
floral digital que combina el arte contemporáneo con <br />
la tecnología y decoración.</p>
<br />
<ButtonNoFill text="Catálogo"/>
</center>
   </div>
  )
}

export default VideoHero