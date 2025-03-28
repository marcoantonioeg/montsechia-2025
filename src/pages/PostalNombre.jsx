import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import HeaderPostal from '../components/home/HeaderPostal';
import "./PostalNombre.css";
import confetti from 'canvas-confetti';

const PostalNombre = () => {
  const navigate = useNavigate();
  const { addToCart, cart } = useContext(CartContext);
  const [nombre, setNombre] = useState('');
  
  const handleInputChange = (e) => {
    setNombre(e.target.value);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleGuardarNombre = () => {
    if (!nombre.trim()) {
      alert("Por favor escribe un nombre");
      return;
    }

    if (cart.length === 0) {
      alert("Primero añade un producto al carrito");
      navigate('/productos');
      return;
    }

    addToCart({
      nombrePersonalizado: nombre.trim()
    });

    triggerConfetti();

    setTimeout(() => {
      navigate('/postal-foto');
    }, 1000);
  };

  return (
    <div className='container pb-5 mb-6'>
      <HeaderPostal 
        titulo="EL NOMBRE QUE IRÁ ESCRITO EN LA CAJA" 
        dregresar="postal-nota" 
        dsiguiente="postal-foto"
      />
      
      <div className="col-lg-12 p-0">
        <div className="row p-0">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <input 
              type="text" 
              id='postal-nombre' 
              value={nombre}
              onChange={handleInputChange} 
              placeholder='Escribe el nombre del receptor'
              className="form-control mb-3 postal-nombre-input"
              maxLength="50"
            />
            <center>
              <button 
                onClick={handleGuardarNombre}
                className="add-to-cart titulo cuadro mt-3"
                disabled={!nombre.trim()}
              >
                Guardar Nombre
              </button>
            </center>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </div>
  );
};

export default PostalNombre;