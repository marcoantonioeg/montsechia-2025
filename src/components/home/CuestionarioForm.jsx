import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './CuestionarioForm.css';
import ButtonNoIcon from '../common/ButtonNoIcon';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

const CuestionarioForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    lookingFor: '',
    date: '',
    idea: ''
  });
  const navigate = useNavigate(); // Hook para la navegación

  // Manejar el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Enviar el formulario a EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_khu72dm',  // Reemplaza con tu ID de servicio
      'template_qkxcm8e', // Reemplaza con tu ID de plantilla
      e.target,          // El formulario
      'TnDH5DauQYXfu7jUW'      // Reemplaza con tu ID de usuario (API Key)
    )
    .then((result) => {
      //console.log('Correo enviado:', result.text);
      alert('Formulario enviado con éxito');

      // Redirigir a la página de agradecimiento
      navigate('/agradecimiento');
    }, (error) => {
      console.log('Error al enviar el correo:', error.text);
      alert('Hubo un error al enviar el formulario');
    });

    // Limpiar el formulario después de enviarlo
    setFormData({
      name: '',
      email: '',
      lookingFor: '',
      date: '',
      idea: ''
    });
  };

  return (
    <div className="col-lg-6 p-0 mt-5 pt-5 m-cuestionario">
      <form onSubmit={handleSubmit}>
        <div className="row col-lg-12 pt-5 p-0 container">
          <div className="col-lg-6 p-0">
            <div>
              <p className='texto-form'>Nombre y Apellido</p>
              <input 
                className='input-form' 
                placeholder='Nombre' 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
              />
            </div>
            <div className='mt-4'>
              <p className='texto-form'>Correo Electrónico</p>
              <input 
                type="email" 
                className='input-form' 
                placeholder='Correo Electrónico' 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
              />
            </div>
            <div className='mt-4'>
              <p className='texto-form'>Estoy Buscando</p>
              <div className="col-lg-12 row">
              <select 
    className='input-form select-form' 
    name="lookingFor" 
    value={formData.lookingFor} 
    onChange={handleChange}
  >
    <option value="" disabled>Selecciona una opción</option>
    <option value="Arte para evento">Arte para evento</option>
    <option value="Proyecto 3D">Proyecto 3D</option>
  </select>
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div>
            <p className='texto-form'>Fecha Estimada</p>
<input 
  type="date" 
  className='input-form' 
  name="date" 
  value={formData.date} 
  onChange={handleChange} 
/>

            </div>
            <div className='mt-4'>
              <p className='texto-form'>¿Qué Tienes en Mente?</p>
              <textarea 
                className='textarea-form' 
                placeholder="Platícanos tu idea" 
                name="idea" 
                value={formData.idea} 
                onChange={handleChange} 
              ></textarea>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mt-5">
          <div className='container-float-right mr-4'>
            <button className='btn-form' type="submit">Enviar</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CuestionarioForm;
