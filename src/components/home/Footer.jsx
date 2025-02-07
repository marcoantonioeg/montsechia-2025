import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row text-center text-md-left">
          {/* Newsletter */}
          <div className="col-md-4 mb-4">
            <h2 className="newsletter-title">NEWSLETTER</h2>
            <p className="newsletter-description">
              Sé el primero en enterarte de nuevos lanzamientos de arte, productos exclusivos y recibe acceso VIP a nuestras ventas.
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                className="newsletter-input"
                placeholder="correo electrónico"
              />
              <button className="newsletter-button" type="submit">
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
            <div className="col-12 pt-5 pl-0">
            <p className="brand-name">MONTSECHIA</p>
          </div>
          </div>

          {/* Contacto */}
          <div className="col-lg-7 mb-4">
            <h2 className="contact-title">CONTACTO</h2>
            <p className="contact-email">contacto@montsechia.com.mx</p>
             {/* Links inferiores */}
             <div className=" col-12 row p-0">
         
        
           <div className="col-lg-4 p-0">
           <a href="#" className="footer-link">Política de privacidad</a>

           </div>
           <div className="col-lg-4 p-0">
           <a href="#" className="footer-link">Términos y condiciones</a>

           </div>
           <div className="col-lg-4 p-0">
           <a href="#" className="footer-link">Cambios y devoluciones</a>

           </div>
           <div className="col-lg-4 p-0">
           <a href="#" className="footer-link">Nosotros</a>
           </div>
           <div className="col-lg-4 p-0">
           <a href="#" className="footer-link">Eventos</a>

           </div>
           <div className="col-lg-4 p-0">
           <a href="#" className="footer-link">Catálogo</a>

           </div>
         
       </div>
          </div>

          {/* Redes sociales */}
          <div className="col-md-1 mb-4">
            <div className="social-links">
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-icon">
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
