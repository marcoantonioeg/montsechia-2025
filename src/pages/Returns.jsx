import React from "react";
import "./Privacy.css";
import Title from "../components/Title";
const ReturnsAndRefunds = () => {
  return (
    <div className="container my-5 privacy-policy">
        <div className="row">
            <div className="col-lg-12 p-0">
               <Title text1="Cambios, Devoluciones" text2="y Reembolsos"/>
            </div>
        </div>
      <h2 className="section-title">Cambios, Devoluciones y Reembolsos</h2>
      <p>
        En Montsechia, nuestra prioridad es ofrecerte productos de la más alta calidad y garantizar tu satisfacción. Sin embargo, entendemos que pueden surgir situaciones imprevistas. A continuación, te presentamos nuestras políticas de cambios, devoluciones y reembolsos:
      </p>

      <h2 className="section-title">Cambios</h2>
      <p>
        Solo se aceptan cambios bajo las siguientes condiciones:
      </p>
      <ul>
        <li>Errores en el producto: Si la imagen en el cuadro no corresponde a la adquirida o a la que el cliente subió.</li>
        <li>Daños en el marco o vidrio: Si el marco de madera llega maltratado o el vidrio llega roto.</li>
      </ul>
      <p>No aplican cambios en los siguientes casos:</p>
      <ul>
        <li>Si el nombre del receptor en la caja está mal escrito.</li>
        <li>Si la fotografía instantánea incluida no corresponde o es de baja calidad (cuando fue proporcionada por el cliente).</li>
        <li>Si la caja interior presenta daños o golpes durante el envío.</li>
        <li>Si el producto está alterado de alguna manera por el comprador.</li>
        <li>Si no se cuenta con la caja original.</li>
        <li>Si no se cuenta con el número de rastreo.</li>
      </ul>

      <h2 className="section-title">Devoluciones</h2>
      <p>No aceptamos devoluciones de productos personalizados.</p>

      <h2 className="section-title">Reembolsos</h2>
      <p>
        Los reembolsos solo se aplican en las siguientes circunstancias:
      </p>
      <ul>
        <li>Pérdida del pedido por parte de la paquetería: En caso de pérdida confirmada por DHL, ofrecemos un reembolso completo o el reenvío del pedido, según prefiera el cliente.</li>
        <li>Daños en el producto: Si el marco de madera llega maltratado o el vidrio llega roto, el cliente debe contactarnos con evidencia fotográfica dentro de las primeras 24 horas tras recibir el pedido.</li>
      </ul>

      <h2 className="section-title">Condiciones para procesar reembolsos</h2>
      <ul>
        <li>El cliente debe devolver el producto a Montsechia utilizando la guía que proporcionaremos.</li>
        <li>El reembolso se realizará una vez que el producto haya sido recibido y revisado por nuestro equipo.</li>
        <li>El reembolso puede procesarse a la misma forma de pago utilizada o mediante otras opciones disponibles.</li>
      </ul>

      <h2 className="section-title">Errores de Dirección</h2>
      <p>
        Si el cliente proporciona una dirección incorrecta y el pedido es entregado en ese lugar, no nos hacemos responsables. Si el cliente detecta el error en las primeras 24 horas después de realizar el pedido, puede contactarnos al correo <a href="mailto:contacto@montsechia.com.mx" className="contact-link">contacto@montsechia.com.mx</a> o al celular +52 5521012526 para corregir la información.
      </p>

      <h2 className="section-title">Pasos para Solicitar un Cambio o Reembolso</h2>
      <p>
        Para solicitar un cambio o reembolso, sigue estos pasos:
      </p>
      <ul>
        <li>Envía un correo a <a href="mailto:contacto@montsechia.com.mx" className="contact-link">contacto@montsechia.com.mx</a> con los siguientes detalles:</li>
        <li>Número de pedido.</li>
        <li>Descripción del problema.</li>
        <li>Fotografías claras del producto recibido (en caso de daños).</li>
      </ul>
      <p>
        Nuestro equipo evaluará tu caso y responderá en un plazo de 1 a 3 días hábiles con las instrucciones correspondientes.
      </p>
    </div>
  );
};

export default ReturnsAndRefunds;
