import React from "react";
import "./Privacy.css";
import Title from "../components/Title";
const Terms = () => {
  return (
    <div className="container my-5 privacy-policy">
         <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
               <Title text1="Términos y" text2="Condiciones"/>
            </div>
            <div className="col-lg-2"></div>
        </div>
      <p className="subtitle">
        Bienvenido a Montsechia Eternal Flowers Project. Este sitio web, disponible en 
        <span className="website-link"> www.montsechia.com.mx</span>, es operado por Victor Manuel Guadarrama Monroy. 
        Al acceder y utilizar nuestros servicios, aceptas los siguientes términos y condiciones.
      </p>

      <h2 className="section-title">1- Generalidades del Servicio</h2>
      <p>
        Montsechia Eternal Flowers Project ofrece cuadros de decoración de madera con arte 3D, algunos de los cuales incluyen realidad aumentada. Los productos disponibles son:
      </p>
      <ul>
        <li>Cuadros con piezas limitadas.</li>
        <li>Retratos personalizados de clientes.</li>
      </ul>

      <h2 className="section-title">2- Proceso de Compra</h2>
      <p>Las compras se realizan mediante un formulario en el sitio web. Durante el proceso, se solicita información como:</p>
      <ul>
        <li>Selección de marco, postal y mensaje personalizado.</li>
        <li>Nombre del receptor.</li>
        <li>Fotografía del comprador (si aplica).</li>
        <li>Dirección de entrega y datos del comprador.</li>
      </ul>
      <p>
        El pago puede realizarse con tarjeta de débito, crédito o transferencia bancaria.
        <br />
        <strong>Cambios y cancelaciones:</strong> Solo se aceptan cambios si el producto no corresponde al solicitado o si llega dañado (ej., marco o vidrio roto). No se aceptan cancelaciones una vez que el pedido haya sido procesado.
      </p>

      <h2 className="section-title">3- Personalización y Restricciones</h2>
      <p>No se aceptan fotografías con contenido:</p>
      <ul>
        <li>Pornográfico.</li>
        <li>Ofensivo.</li>
        <li>Protegido por derechos de autor sin autorización.</li>
      </ul>
      <p>Mensajes personalizados: No se incluirán textos amenazantes u ofensivos; en estos casos, la postal se enviará sin texto.</p>

      <h2 className="section-title">4- Propiedad Intelectual</h2>
      <p>
        Todos los diseños, incluidos los personalizados, son propiedad exclusiva de Montsechia Eternal Flowers Project. Los productos están destinados únicamente para uso personal o decorativo. Cualquier uso comercial está estrictamente prohibido.
      </p>

      <h2 className="section-title">5- Envíos</h2>
      <p>Cobertura: Envíos a todo México.</p>
      <p>Plazos: 1 a 3 días hábiles, sujetos a zonas de cobertura extendida (consulta aquí).</p>
      <p>
        <strong>Paquetes dañados:</strong> Se realizarán cambios o reembolsos si el marco o vidrio llega roto o maltratado. No se realizará ningún cambio o devolución si la caja interior está dañada, el producto está alterado de alguna manera por el comprador, si no se cuenta con la caja original o número de rastreo, si hay errores en nombres o mensajes proporcionados por el cliente.
      </p>

      <h2 className="section-title">6- Responsabilidad del Cliente</h2>
      <p>Es responsabilidad del cliente proporcionar información precisa y llevar seguimiento del pedido. En caso de errores en la dirección, Montsechia no se hace responsable si el pedido se pierde o llega a otro destinatario. Se aceptan correcciones en la dirección dentro de las primeras 24 horas posteriores a la compra, enviando un mensaje a:</p>
      <ul>
        <li>Correo: <a href="mailto:contacto@montsechia.com.mx" className="contact-link">contacto@montsechia.com.mx</a></li>
        <li>Celular: +52 5521012526</li>
        <li>Instagram: montsechia</li>
      </ul>

      <h2 className="section-title">7- Reembolsos</h2>
      <p>Elegibilidad: Aplica si el pedido se pierde por error directo de la paquetería (DHL).</p>
      <p>Opciones: Reembolso del 100% o reenvío del pedido, según la preferencia del cliente.</p>

      <h2 className="section-title">8- Cancelaciones por la Empresa</h2>
      <p>
        Montsechia se reserva el derecho de cancelar pedidos en los siguientes casos:
      </p>
      <ul>
        <li>Contenido inapropiado o ilegal en fotografías o mensajes.</li>
        <li>Sospecha de fraude.</li>
      </ul>

      <h2 className="section-title">9- Cláusula sobre la Disponibilidad de los Filtros AR</h2>
      <p>
        Montsechia se reserva el derecho de descontinuar, eliminar o cancelar el acceso a los filtros de Realidad Aumentada (AR) en cualquier momento y por cualquier motivo, incluyendo, pero no limitado a, el cierre definitivo de Montsechia, la expiración de licencias de software o cambios en la disponibilidad de las plataformas de soporte. En caso de que esto ocurra, no se generará ningún reembolso ni compensación, ya que el acceso a los filtros AR es un servicio adicional vinculado al producto adquirido y no constituye el producto principal.
      </p>

      <h2 className="section-title">10- Jurisdicción</h2>
      <p>
        Todas las operaciones están regidas por las leyes de México. En caso de disputas, ambas partes aceptan la jurisdicción de los tribunales de la Ciudad de México.
      </p>

      <h2 className="section-title">11- Contacto</h2>
      <p>
        Si tienes preguntas o inquietudes sobre estos términos, puedes contactarnos a través de:
        <br />
        <strong>Correo:</strong> <a href="mailto:contacto@montsechia.com.mx" className="contact-link">contacto@montsechia.com.mx</a>
        <br />
        <strong>Celular:</strong> +52 5521012526
      </p>

      <p>Gracias por elegir Montsechia Eternal Flowers Project.</p>
      <p><strong>Fecha de última actualización:</strong> 1 de enero del 2025</p>
    </div>
  );
};

export default Terms;
