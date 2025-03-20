import React from "react";
import "./Privacy.css";
import Title from "../components/Title";
const Privacy = () => {
  return (
    <div className="container my-5 privacy-policy">
         <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
               <Title text1="Politica de" text2="Privacidad"/>
            </div>
            <div className="col-lg-3"></div>
        </div>
      <p className="subtitle">
        En Montsechia nos comprometemos a proteger la privacidad de nuestros usuarios. Esta política de privacidad explica cómo
        recopilamos, usamos, almacenamos y protegemos la información personal que obtenemos a través de nuestro sitio web 
        <span className="website-link"> www.montsechia.com</span>. Al usar nuestro sitio web, aceptas los términos de esta política de privacidad.
      </p>

      <h2 className="section-title">1- Información que recopilamos</h2>
      <p>
        Recopilamos información personal cuando visitas nuestro sitio web, te registras, realizas compras o interactúas de cualquier otra forma con el contenido de nuestro sitio. Esto puede incluir:
      </p>
      <ul>
        <li>Nombre, dirección de correo electrónico, dirección de envío, número de teléfono.</li>
        <li>Dirección IP, tipo de navegador, ubicación geográfica, comportamiento de navegación (cookies y otras tecnologías de seguimiento).</li>
        <li>Detalles de tarjeta de crédito o débito cuando se realiza una compra.</li>
      </ul>

      <h2 className="section-title">2- Cómo usamos tu información</h2>
      <ul>
        <li>Proporcionar y mejorar nuestros productos y servicios.</li>
        <li>Procesar pagos y enviar productos.</li>
        <li>Enviar comunicaciones relacionadas con tu cuenta o compras.</li>
        <li>Enviar boletines, promociones o actualizaciones si te has suscrito.</li>
        <li>Personalizar la experiencia de usuario en nuestro sitio web.</li>
      </ul>

      <h2 className="section-title">3- Cookies</h2>
      <p>
        Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web. Puedes deshabilitar las cookies en la configuración de tu navegador, pero esto podría afectar ciertas funciones del sitio.
      </p>

      <h2 className="section-title">4- Seguridad de la información</h2>
      <p>
        Implementamos medidas de seguridad razonables para proteger tu información personal. Sin embargo, ningún método es 100% seguro, por lo que no podemos garantizar la absoluta seguridad de tus datos.
      </p>

      <h2 className="section-title">5- Compartir tu información</h2>
      <p>No vendemos tu información, pero podemos compartirla con terceros en los siguientes casos:</p>
      <ul>
        <li>Procesamiento de pagos a través de plataformas externas.</li>
        <li>Cumplimiento de obligaciones legales o requerimientos oficiales.</li>
      </ul>

      <h2 className="section-title">6- Derechos de los usuarios</h2>
      <p>Puedes ejercer derechos como:</p>
      <ul>
        <li>Acceder, corregir o eliminar tus datos personales.</li>
        <li>Restringir u oponerte al uso de tus datos.</li>
        <li>Retirar tu consentimiento en cualquier momento.</li>
      </ul>

      <h2 className="section-title">7- Enlaces a otros sitios</h2>
      <p>
        Nuestro sitio puede contener enlaces a sitios externos, cuyas políticas de privacidad no controlamos. Te recomendamos revisar dichas políticas al visitarlos.
      </p>

      <h2 className="section-title">8- Cambios a esta política</h2>
      <p>
        Nos reservamos el derecho a modificar esta política de privacidad en cualquier momento. Revisa esta página periódicamente para mantenerte informado.
      </p>

      <h2 className="section-title">9- Contacto</h2>
      <p>
        Si tienes alguna pregunta, contáctanos a través de:
        <br />
        <strong>Correo:</strong> <a href="mailto:correo@montsechia.com" className="contact-link">correo@montsechia.com</a>
        <br />
        <strong>Dirección:</strong> [Dirección de la empresa]
      </p>
    </div>
  );
};

export default Privacy;
