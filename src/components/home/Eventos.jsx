import React from "react";
import "./Eventos.css";
import EventosGif from '../../assets/images/EventosTurnAround.gif';
import ButtonNoFill from "../common/ButtonNoFill";

function Eventos() {
  return (
    <center className="pt-5 mt-5 pb-5 mb-5">

    <section className="three-parts-grid-section">
      <div className="part parte1">
        <h2>eventos</h2>
        <p>Inmortaliza los momentos más importantes de tu vida con arte
          personalizado para eventos, ideal para celebrar bodas, aniversarios y
          ocasiones especiales.</p>
      </div>
      <div className="part">
        <div className="container-gif">
          <img className="gif" src={EventosGif} alt="Eventos GIF" />
        </div>
      </div>
      <div className="part">
        <h2 className="pregunta">¿Tienes un <br />
          evento <br />
          proximo?</h2>
        <ButtonNoFill text="Contactanos"/>
      </div>
    </section>
    </center>
  );
}

export default Eventos;
