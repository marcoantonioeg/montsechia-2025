import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import confetti from 'canvas-confetti';
import './Postales.css';
import Postal1 from '../../../public/images/Postales_01.png';
import Postal2 from '../../../public/images/Postales_02.png';
import Postal3 from '../../../public/images/Postales_03.png';
import Postal4 from '../../../public/images/Postales_04.png';
import Postal5 from '../../../public/images/Postales_05.png';
import Postal6 from '../../../public/images/Postales_06.png';
import Postal7 from '../../../public/images/Postales_07.png';
import Postal8 from '../../../public/images/Postales_08.png';

const Postales = () => {
  const navigate = useNavigate();
  const { cart, addToCart } = useContext(CartContext);
  const [selectedAlt, setSelectedAlt] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const triggerConfetti = () => {
   confetti({
     particleCount: 100,
     spread: 70,
     origin: { y: 0.6 },
   });
 };
  const handleImageClick = (alt, id) => {
    if (selectedId === id) {
      setSelectedAlt('');
      setSelectedId(null);
    } else {
      setSelectedAlt(alt);
      setSelectedId(id);
    }
  };

  const postales = [
    { id: 1, src: Postal1, alt: "Postal 1" },
    { id: 2, src: Postal2, alt: "Postal 2" },
    { id: 3, src: Postal3, alt: "Postal 3" },
    { id: 4, src: Postal4, alt: "Postal 4" },
    { id: 5, src: Postal5, alt: "Postal 5" },
    { id: 6, src: Postal6, alt: "Postal 6" },
    { id: 7, src: Postal7, alt: "Postal 7" },
    { id: 8, src: Postal8, alt: "Postal 8" }
  ];

  const handleSubmit = () => {
    if (!selectedAlt) {
      alert("Por favor selecciona una postal primero");
      return;
    }

    if (cart.length === 0) {
      alert("Primero añade un producto al carrito");
      return;
    }
    triggerConfetti();
    // Añadir solo la información de la postal al último producto del carrito
    addToCart({
      postalNota: selectedAlt // Solo pasamos el texto alternativo
    });

    navigate('/postal-nota');
  };

  return (
    <div className='pb-5 container'>
      {/* Grid de postales */}
      <div className="row">
        {postales.map((postal) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={postal.id}>
            <div className="postal-wrapper">
              <img 
                src={postal.src} 
                className={`postal-img ${selectedId === postal.id ? 'selected' : ''}`}
                alt={postal.alt}
                onClick={() => handleImageClick(postal.alt, postal.id)}
              />
              {selectedId === postal.id && (
                <div className="selection-indicator">✓</div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Botón de continuar */}
     
      <div className="text-center mt-4">
        <button 
          id='postalSelect'
          onClick={handleSubmit}
          className="add-to-cart titulo cuadro"
          disabled={!selectedAlt}
          
        >
          Continuar con la postal seleccionada
        </button>
      </div>
    </div>
  );
};

export default Postales;