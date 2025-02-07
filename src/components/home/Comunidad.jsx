import React from 'react';
import comunidad from "../../utils/comunidad"; // Asegúrate de que la ruta sea correcta
import "./Comunidad.css";

const Comunidad = () => {
  return (
    <div className="best-sellers-container-comunidad">
      <center>
        <h1 className="best-title-comunidad">Comunidad</h1>
        <p className="subtitle-comunidad">
        Descubre cómo nuestros cuadros cobran vida en los hogares de nuestra comunidad, transformando cada espacio en un rincón lleno de arte y personalidad.        </p>
      </center>
      <div className="best-sellers-list-comunidad">
        {comunidad.map((product, index) => (
          <div
            key={product.id}
            className={`product-card-comunidad ${index === 0 ? 'first-comunidad' : ''} ${index === comunidad.length - 1 ? 'last-comunidad' : ''}`}
          >
            <img src={product.image} alt={product.id} className="product-image-comunidad" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comunidad;
