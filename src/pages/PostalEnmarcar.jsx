import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { TailSpin } from 'react-loader-spinner';
import HeaderPostal from '../components/home/HeaderPostal';
import './PostalFoto.css';
import './PostalEnmarcar.css';
import confetti from 'canvas-confetti';
import Contraste from '../../public/images/Buen_Contraste.png'
import Resolucion from '../../public/images/Buena_Resolucion.png'

const PostalEnmarcar = () => {
  const navigate = useNavigate();
  const { addToCart, cart } = useContext(CartContext);
  const [imagePreview, setImagePreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validaciones
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      setUploadError('Solo se permiten imágenes JPEG, PNG o WEBP');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setUploadError('La imagen no puede exceder los 5MB');
      return;
    }

    // Mostrar preview
    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);

    setIsUploading(true);
    setUploadError(null);

    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('http://localhost:3001/upload-image', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al subir la imagen');
      }

      const data = await response.json();
      
      // Verificar si hay productos en el carrito
      if (cart.length === 0) {
        alert("Primero añade un producto al carrito");
        navigate('/tienda');
        return;
      }

      addToCart({
         enmarcarFotoId: data.public_id,  // Cambiado de fotoId a enmarcarFotoId
         enmarcarImageUrl: data.url,      // Cambiado de imageUrl a enmarcarImageUrl
         tipoFoto: 'enmarcar'             // Añadido para identificar el tipo
       });

      triggerConfetti();
       // Redirigir después de 1 segundo
    setTimeout(() => {
      navigate('/postal-flores');
    }, 1000);

      console.log('Imagen agregada al carrito:', data.url);

    } catch (error) {
      console.error('Error en la subida:', error);
      setUploadError(error.message);
      setImagePreview(null);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className='container pb-5 mb-6'>
      <HeaderPostal titulo="añade LA FOTOGRAFÍA A ENMARCAR" dregresar="postal-nombre" dsiguiente=""/>
    <div className="col-lg-12 p-0">
      <div className="row p-0">
      <div className="col-lg-3 p-0 mt-4">
         <span className='span-enmarcar titulo'>Fotografía con una resolución ALTA (2k)</span>
        <img src={Resolucion} alt="" className='w-100 mt-4' srcset="" />

        </div>
        <div className="col-lg-6 p-0">
        <div className="upload-container">
        <label className={`upload-label ${isUploading ? 'uploading' : ''}`}>
          <input 
            type="file" 
            id="file-upload"
            onChange={handleImageUpload}
            accept="image/*"
            disabled={isUploading}
          />
          
          {isUploading ? (
            <div className="upload-status">
              <TailSpin color="#000" height={40} width={40} />
              <p>Subiendo imagen...</p>
            </div>
          ) : imagePreview ? (
            <>
              <img src={imagePreview} alt="Preview" className="image-preview" />
              <p className="success-message">✓ Imagen cargada</p>
            </>
          ) : (
            <div className="upload-prompt">
              <i className="fas fa-camera"></i>
              <p>Haz clic para subir una foto</p>
              <small>(Formatos: JPEG, PNG. Máx. 5MB)</small>
            </div>
          )}
        </label>

        {uploadError && (
          <div className="error-message">
            <i className="fas fa-exclamation-circle"></i>
            {uploadError}
          </div>
        )}
      </div>
        </div>
        <div className="col-lg-3 p-0 mt-4">
         <span className='span-enmarcar titulo'>buen contraste entre la persona y el fondo</span>
        <img src={Contraste} alt="" className='w-100 mt-4' srcset="" />

        </div>
      </div>
    </div>
     
    </div>
  );
};

export default PostalEnmarcar;