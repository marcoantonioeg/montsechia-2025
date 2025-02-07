import React, { useState, useEffect } from 'react';
import './Loader.css';  // Asegúrate de agregar los estilos

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Desactivar el scroll mientras el loader esté activo
    document.body.style.overflowY = 'hidden';

    const timer = setTimeout(() => {
      setFadeOut(true);  // Inicia la transición de desvanecimiento
      setTimeout(() => {
        setLoading(false); // Después de la transición, quita el loader
        document.body.style.overflowY = 'auto'; // Restaurar el scroll
      }, 2000);  // Tiempo para la transición de desvanecimiento
    }, 4000);  // Mantén el loader durante 3 segundos

    return () => {
      document.body.style.overflowY = 'auto';
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <div className={`loader-container ${fadeOut ? 'fade-out' : ''}`}>
        <img src="/images/loader.gif" alt="Cargando..." className="loader" />
      </div>
    );
  }

  return null;  // Si ya no está cargando, no renderiza nada
};

export default Loader;
