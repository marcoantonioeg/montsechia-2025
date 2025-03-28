import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import confetti from 'canvas-confetti';
import './Postales.css';
import './Flores.css';
import Rojo1 from '../../../public/images/ROJO-01.png';
import Rojo2 from '../../../public/images/ROJO-02.png';
import Rojo3 from '../../../public/images/ROJO-03.png';
import Rojo4 from '../../../public/images/ROJO-04.png';
import Morado1 from '../../../public/images/MORADO-01.png';
import Morado2 from '../../../public/images/MORADO-02.png';
import Morado3 from '../../../public/images/MORADO-03.png';
import Rosa1 from '../../../public/images/ROSA-01.png';
import Rosa2 from '../../../public/images/ROSA-02.png';
import Rosa3 from '../../../public/images/ROSA-03.png';
import Rosa4 from '../../../public/images/ROSA-04.png';
import Rosa5 from '../../../public/images/ROSA-05.png';
import Naranja1 from '../../../public/images/NARANJA-01.png';
import Naranja2 from '../../../public/images/NARANJA-02.png';
import Naranja3 from '../../../public/images/NARANJA-03.png';
import Naranja4 from '../../../public/images/NARANJA-04.png';
import Amarillo1 from '../../../public/images/AMARILLO-01.png';
import Amarillo2 from '../../../public/images/AMARILLO-02.png';
import Amarillo3 from '../../../public/images/AMARILLO-03.png';
import Amarillo4 from '../../../public/images/AMARILLO-04.png';
import Verde1 from '../../../public/images/VERDE-01.png';
import Verde2 from '../../../public/images/VERDE-02.png';
import Verde3 from '../../../public/images/VERDE-03.png';
import Blanco1 from '../../../public/images/BLANCO-01.png';
import Blanco2 from '../../../public/images/BLANCO-02.png';
import Blanco3 from '../../../public/images/BLANCO-03.png';
import Blanco4 from '../../../public/images/BLANCO-04.png';
import Blanco5 from '../../../public/images/BLANCO-05.png';

const Flores = () => {
  const navigate = useNavigate();
  const { cart, addToCart } = useContext(CartContext);
  const [selectedItems, setSelectedItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState('img-rojo');

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleImageClick = (postal) => {
    const isAlreadySelected = selectedItems.some(item => item.id === postal.id);
    
    if (isAlreadySelected) {
      setSelectedItems(selectedItems.filter(item => item.id !== postal.id));
    } else {
      if (selectedItems.length >= 4) {
        alert("Has alcanzado el límite máximo de 4 flores seleccionadas. Por favor deselecciona alguna para añadir otra.");
        return;
      }
      setSelectedItems([...selectedItems, postal]);
    }
  };

  const handleFilterClick = (filterClass) => {
    setActiveFilter(filterClass);
  };

  const handleSelectorClick = (index) => {
    if (selectedItems[index]) {
      setActiveFilter(selectedItems[index].class);
    }
  };

  const getColorClass = (imgClass) => {
    switch(imgClass) {
      case 'img-rojo': return 'rojo';
      case 'img-morado': return 'morado';
      case 'img-rosa': return 'rosa';
      case 'img-naranja': return 'naranja';
      case 'img-amarillo': return 'amarillo';
      case 'img-verde': return 'verde';
      case 'img-blanco': return 'blanco';
      default: return 'gris';
    }
  };

  const postales = [
    { id: 1, src: Rojo1, alt: "Rojo 1", class: "img-rojo" },
    { id: 2, src: Rojo2, alt: "Rojo 2", class: "img-rojo" },
    { id: 3, src: Rojo3, alt: "Rojo 3", class: "img-rojo" },
    { id: 4, src: Rojo4, alt: "Rojo 4", class: "img-rojo" },
    { id: 5, src: Morado1, alt: "Morado 1", class: "img-morado" },
    { id: 6, src: Morado2, alt: "Morado 2", class: "img-morado" },
    { id: 7, src: Morado3, alt: "Morado 3", class: "img-morado" },
    { id: 8, src: Rosa1, alt: "Rosa 1", class: "img-rosa" },
    { id: 9, src: Rosa2, alt: "Rosa 2", class: "img-rosa" },
    { id: 10, src: Rosa3, alt: "Rosa 3", class: "img-rosa" },
    { id: 11, src: Rosa4, alt: "Rosa 4", class: "img-rosa" },
    { id: 12, src: Rosa5, alt: "Rosa 5", class: "img-rosa" },
    { id: 13, src: Naranja1, alt: "Naranja 1", class: "img-naranja" },
    { id: 14, src: Naranja2, alt: "Naranja 2", class: "img-naranja" },
    { id: 15, src: Naranja3, alt: "Naranja 3", class: "img-naranja" },
    { id: 16, src: Naranja4, alt: "Naranja 4", class: "img-naranja" },
    { id: 17, src: Amarillo1, alt: "Amarillo 1", class: "img-amarillo" },
    { id: 18, src: Amarillo2, alt: "Amarillo 2", class: "img-amarillo" },
    { id: 19, src: Amarillo3, alt: "Amarillo 3", class: "img-amarillo" },
    { id: 20, src: Amarillo4, alt: "Amarillo 4", class: "img-amarillo" },
    { id: 21, src: Verde1, alt: "Verde 1", class: "img-verde" },
    { id: 22, src: Verde2, alt: "Verde 2", class: "img-verde" },
    { id: 23, src: Verde3, alt: "Verde 3", class: "img-verde" },
    { id: 24, src: Blanco1, alt: "Blanco 1", class: "img-blanco" },
    { id: 25, src: Blanco2, alt: "Blanco 2", class: "img-blanco" },
    { id: 26, src: Blanco3, alt: "Blanco 3", class: "img-blanco" },
    { id: 27, src: Blanco4, alt: "Blanco 4", class: "img-blanco" },
    { id: 28, src: Blanco5, alt: "Blanco 5", class: "img-blanco" },
  ];

  const handleSubmit = () => {
    if (selectedItems.length === 0) {
      alert("Por favor selecciona al menos una flor");
      return;
    }

    if (cart.length === 0) {
      alert("Primero añade un producto al carrito");
      return;
    }

    triggerConfetti();
    
    addToCart({
      floresSeleccionadas: selectedItems.map(item => ({
        alt: item.alt,
        color: getColorClass(item.class),
        src: item.src
      }))
    });

    navigate('/postal-nota');
  };

  return (
    <div className='pb-5 container'>
      <div className="col-lg-12 p-0">
        <div className="row p-0">
          <div className="col-lg-1">
            <div className="col-lg-12 p-0">
              <div className="row p-0">
                <div className="col-lg-6 p-0 primera-linea">
                  <div 
                    id='rojo' 
                    className={`rojo ${activeFilter === 'img-rojo' ? 'active-filter' : ''}`}
                    onClick={() => handleFilterClick('img-rojo')}
                  />
                  <div 
                    id='morado' 
                    className={`morado ${activeFilter === 'img-morado' ? 'active-filter' : ''}`}
                    onClick={() => handleFilterClick('img-morado')}
                  />
                  <div 
                    id='rosa' 
                    className={`rosa ${activeFilter === 'img-rosa' ? 'active-filter' : ''}`}
                    onClick={() => handleFilterClick('img-rosa')}
                  />
                  <div 
                    id='naranja' 
                    className={`naranja ${activeFilter === 'img-naranja' ? 'active-filter' : ''}`}
                    onClick={() => handleFilterClick('img-naranja')}
                  />
                </div>
                <div className="col-lg-6 p-0">
                  <div 
                    id='amarillo' 
                    className={`amarillo ${activeFilter === 'img-amarillo' ? 'active-filter' : ''}`}
                    onClick={() => handleFilterClick('img-amarillo')}
                  />
                  <div 
                    id='verde' 
                    className={`verde ${activeFilter === 'img-verde' ? 'active-filter' : ''}`}
                    onClick={() => handleFilterClick('img-verde')}
                  />
                  <div 
                    id='blanco' 
                    className={`blanco ${activeFilter === 'img-blanco' ? 'active-filter' : ''}`}
                    onClick={() => handleFilterClick('img-blanco')}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-10 pl-5 pr-5">
            <div className="row">
              {postales
                .filter(postal => activeFilter === '' || postal.class === activeFilter)
                .map((postal) => {
                  const isSelected = selectedItems.some(item => item.id === postal.id);
                  const selectionNumber = isSelected 
                    ? selectedItems.findIndex(item => item.id === postal.id) + 1
                    : null;
                  
                  return (
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={postal.id}>
                      <div className="postal-wrapper">
                        <img 
                          src={postal.src} 
                          className={`flor-img ${postal.class} ${isSelected ? 'selected' : ''}`}
                          alt={postal.alt}
                          onClick={() => handleImageClick(postal)}
                        />
                        {isSelected && (
                          <div className="selection-indicator">
                            {selectionNumber}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="col-lg-1">
            <div className="col-lg-12 p-0">
              <div className="row p-0">
                <div className="col-lg-6 p-0 primera-linea">
                  <div 
                    id='select1' 
                    className={selectedItems[0] ? getColorClass(selectedItems[0].class) : 'gris'}
                    onClick={() => handleSelectorClick(0)}
                  />
                  <div 
                    id='select2' 
                    className={selectedItems[1] ? getColorClass(selectedItems[1].class) : 'gris'}
                    onClick={() => handleSelectorClick(1)}
                  />
                  <div 
                    id='select3' 
                    className={selectedItems[2] ? getColorClass(selectedItems[2].class) : 'gris'}
                    onClick={() => handleSelectorClick(2)}
                  />
                  <div 
                    id='select4' 
                    className={selectedItems[3] ? getColorClass(selectedItems[3].class) : 'gris'}
                    onClick={() => handleSelectorClick(3)}
                  />
                </div>
                <div className="col-lg-6 p-0">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <div className="selection-counter mb-3">
          <strong>Flores seleccionadas: {selectedItems.length}/4</strong>
        </div>
        <button 
          id='postalSelect'
          onClick={handleSubmit}
          className="flor-to-cart titulo cuadro"
          disabled={selectedItems.length === 0}
        >
          {selectedItems.length > 0 
            ? `Continuar con ${selectedItems.length} postal${selectedItems.length !== 1 ? 'es' : ''} seleccionada${selectedItems.length !== 1 ? 's' : ''}`
            : 'Selecciona Flores para continuar'}
        </button>
      </div>
    </div>
  );
};

export default Flores;