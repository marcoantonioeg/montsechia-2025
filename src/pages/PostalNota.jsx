import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import HeaderPostal from '../components/home/HeaderPostal';
import "./postalNota.css";
import confetti from 'canvas-confetti';

const PostalNota = () => {
  const navigate = useNavigate();
  const { addToCart, cart } = useContext(CartContext);
  const [notaTexto, setNotaTexto] = useState('');
  
  const handleTextareaChange = (e) => {
    setNotaTexto(e.target.value);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleGuardarNota = () => {
    if (!notaTexto.trim()) return;

    if (cart.length === 0) {
      alert("Primero añade un producto al carrito");
      return;
    }

    // Añadir la nota personalizada al último producto del carrito
    addToCart({
      notaPersonalizada: notaTexto
    });

    // Mostrar confeti
    triggerConfetti();

    // Redirigir después de 1 segundo
    setTimeout(() => {
      navigate('/postal-nombre');
    }, 1000);
  };

  return (
    <div className="container pb-5 mb-6">
      <HeaderPostal 
        titulo="AÑADE UNA NOTA" 
        dregresar="postal" 
        dsiguiente="postal-nombre"
      />
      
      <div className="col-lg-12 p-0">
        <div className="row p-0">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <textarea 
              id="textarea-nota"
              value={notaTexto}
              onChange={handleTextareaChange}
              placeholder="Escribe tu nota aquí..."
              className="form-control mb-3"
              rows="8"
            />
            <center>
              <button 
                id="guardarNOTA"
                onClick={handleGuardarNota}
                className="add-to-cart titulo cuadro"
                disabled={!notaTexto.trim()}
              >
                Guardar nota
              </button>
            </center>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </div>
  );
};

export default PostalNota;