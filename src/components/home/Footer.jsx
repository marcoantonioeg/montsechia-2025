import React, { useState } from "react";
import emailjs from 'emailjs-com';
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  // Enviar el correo a través de EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert('Por favor ingresa un correo válido.');
      return;
    }

    const templateParams = {
      email
    };

    emailjs.send(
      'service_khu72dm',      // Reemplaza con tu Service ID
      'template_mdo116g',  // Reemplaza con tu Template ID
      templateParams,
      'TnDH5DauQYXfu7jUW'     // Reemplaza con tu Public Key
    )
    .then((result) => {
      console.log('Correo enviado:', result.text);
      alert('¡Gracias por suscribirte a nuestro Newsletter!');
      setEmail(''); // Limpiar el campo después de enviar
    })
    .catch((error) => {
      console.error('Error al enviar el correo:', error.text);
      alert('Hubo un error al enviar el correo. Intenta de nuevo.');
    });
  };

  return (
    <footer className="footer">
      <div className="pl-5 pr-5 mr-5 footer-m">
        <div className="row text-center text-md-left">

          {/* Newsletter */}
          <div className="col-md-4 mb-4">
            <h2 className="newsletter-title titulo">NEWSLETTER</h2>
            <p className="newsletter-description">
              Sé el primero en enterarte de nuevos lanzamientos de arte, productos <br/> exclusivos y recibe acceso VIP a nuestras ventas.
            </p>
            <center>
              <form className="newsletter-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="newsletter-button" type="submit">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </form>
            </center>
            <div className="col-12 pt-3 pl-0 contacto-mont">
              <p className="brand-name titulo">MONTSECHIA</p>
            </div>
          </div>

          {/* Contacto */}
          <div className="col-lg-7 col-md-7 mb-4 pl-5 contacto-div">
            <h2 className="contact-title titulo pb-3">CONTACTO</h2>
            <a href="mailto:contacto@montsechia.com.mx" className="contact-email">contacto@montsechia.com.mx</a>
            
            {/* Links inferiores */}
            <div className="col-12 row p-0 pt-4 mt-2 contact-inner">
              <div className="col-lg-4 p-0">
                <Link to={"/privacy"}>
                  <span className="footer-link">Política de privacidad</span>
                </Link>
              </div>
              <div className="col-lg-4 p-0">
                <Link to={"/terms"}>
                  <span className="footer-link">Términos y condiciones</span>
                </Link>
              </div>
              <div className="col-lg-4 p-0">
                <Link to={"/returns"}>
                  <span className="footer-link">Cambios y devoluciones</span>
                </Link>
              </div>
              <div className="col-lg-4 p-0">
                <Link to={"/nosotros"}>
                  <span className="footer-link">Nosotros</span>
                </Link>
              </div>
              <div className="col-lg-4 p-0">
                <span className="footer-link">Eventos</span>
              </div>
              <div className="col-lg-4 p-0">
                <Link to={"/tienda"}>
                  <span className="footer-link">Catálogo</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="col-md-1 mb-4 p-0">
            <div className="social-links">
              <div className="social-icons">
                <a href="https://www.instagram.com/montsechia/" target="_blank" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.tiktok.com/@montsechia.co?_t=8r87AgBuxl8&_r=1" className="social-icon">
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
              <p className="social-text">Instagram</p>
              <p className="social-text">Tiktok</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
