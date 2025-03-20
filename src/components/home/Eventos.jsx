import React from "react";
import "./Eventos.css";
import EventosGif from '../../assets/images/EventosTurnAround.gif';
import ButtonNoFillLeft from "../common/ButtonNoFillLeft";

function Eventos() {
  return (
    <center className="pt-5 mt-5">

    <section className="three-parts-grid-section">
      <div className="part parte1">
        <h2 className="titulo cuadros-grande l-h-studio-1">eventos</h2>
        <p>Inmortaliza los momentos más importantes de tu vida con arte <br/>
          personalizado para eventos, ideal para celebrar bodas, aniversarios y <br/>
          ocasiones especiales.</p>
      </div>
      <div className="part pl-0 pr-0">
        <div className="container-gif">
          <img className="gif" src={EventosGif} alt="Eventos GIF" />
        </div>
      </div>
      <div className="part pl-0">
        <h2 className="pregunta titulo cuadros-mediano l-h-studio-1">¿Tienes un <br />
          evento <br />
          proximo?</h2>
        <ButtonNoFillLeft className="ml-button" text="Contactanos" direction="contact"/>
      </div>
    </section>
    </center>
  );
}

export default Eventos;
