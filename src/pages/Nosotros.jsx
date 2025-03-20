import React from 'react'
import './Nosotros.css'
import Celular from '../../public/images/Celular_NosotroS_GIF.gif'
import FlorGif from '../../public/images/ArteCompletamenteHechoEn3D_3_GIF.gif'
import Victor from '../../public/images/Conoce_Victor_GIF.gif'
import ButtonNoFill from '../components/common/ButtonNoFill'
const Nosotros = () => {
  return (
    <>
    
    <div className='nosotros-flores'>
      <div className="container">
        <center className="nostros-mt">
          <h1>Sobre nosotros,</h1>
          <h1 className='titulo grande'>MONTSECHIA</h1>
          <p className="victor-text mt-5">
          Somos una marca mexicana dedicada a transformar espacios a través de piezas de arte 3D y experiencias de<br/>
realidad aumentada (AR) que reinventan el diseño floral con un enfoque contemporáneo, combinando la esencia <br/>

de la naturaleza con la innovación tecnológica
          </p>
          <p className="victor-text">
          Nuestra misión es resignificar el arte 3D, elevándolo al nivel de las técnicas tradicionales, y ofrecer experiencias<br/>
únicas y personalizadas que celebran la belleza y diversidad de la naturaleza. Cada creación refleja nuestra pasión<br/>

por la estética moderna y la conexión emocional que las flores evocan.
          </p>
        </center>
      </div>
    </div>
    <div className="flores-futuro">
      <div className="container">
        <div className="col-lg-12">
          <div className="row">
<div className="col-lg-4"></div>
        <div className="col-lg-8">
        <section class="three-parts-grid-section">
          <div class="part"><div class="container-gif "><img class="gif bg-flores-futuro" src={Celular} alt="Eventos GIF"/></div></div><div class="part"><h2 class="pregunta titulo mediano">Cuando <br/>las flores<br/>cONOCEN<br/>con el futuro</h2></div></section>
        </div>
          </div>
          <div className="container">
            <center>
              <p className="victor-text text-futuro">
              Cada obra de Montsechia es creada meticulosamente por un jardinero digital, quien utiliza <br/>

herramientas tecnoloógicas avanzadas para dar vida a cada pieza de arte.
              </p>
            </center>
          </div>
        </div>

      </div>
    </div>
    <div className="arte">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <center>
              <h1 className='titulo grande m-0'>ARTE COMPLETAMENTE</h1>
              <h1 className='titulo mediano m-0'>HECHO EN 3D</h1>
              <img className="florGif" src={FlorGif} alt="" srcset="" />
              <p className="victor-text">
              Todo el proceso es completamente artesanal y no utilizamos inteligencia artificial, lo que garantiza <br/>

que cada creación sea única y realizada con el más alto nivel de detalle y dedicación.
              </p>
            </center>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </div>
    <div className="victor">
      <div className="">

      <div className="col-lg-12">
        <div className="row">

        <div className="col-lg-7">
          <img src={Victor} className="victor-img" alt="" srcset="" />
        </div>
        <div className="col-lg-5 mt-5 pt-5 victor-p-m">
          <p class="victor-text pt-5 mt-5 victor-p-m">El corazón detrás de Montsechia, Víctor Monroy, dio vida a esta
marca inspirándose en su pasión por combinar naturaleza y
tecnología. Como artista 3D, Víctor notó que las experiencias
florales y decorativas tradicionales no siempre conectaban con
las emociones y la modernidad que muchas personas buscaban.
Esto lo llevó a explorar nuevas formas de expresión artística que

unieran lo orgánico con lo digital.</p>
        </div>
        </div>
      </div>
      </div>
    </div>
    <div className="tiempo">
      <div className="container">
        <center>
          <p className="tiempo-texto victor-text">En el mundo del arte, las flores trascienden los límites del tiempo; sus delicados pétalos se conservan<br/>

en un estado eterno de floración, brindando belleza e inspiración a generaciones futuras.</p>
<ButtonNoFill text="Comprar" direction="tienda"/>
        </center>
      </div>
    </div>
    </>
  )
}

export default Nosotros