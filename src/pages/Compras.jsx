import React from "react";
import "./Privacy.css";
import Title from "../components/Title";
const PurchaseProcess = () => {
  return (
    <div className="container my-5 privacy-policy">
        <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
               <Title text1="Compra" text2="y Envío"/>
            </div>
            <div className="col-lg-3"></div>
        </div>
      <h2 className="section-title">Proceso de Compra</h2>
      <h2 className="section-title">Selección del producto:</h2>
      <ul>
        <li>Elige el cuadro que deseas (limitado, personalizado, o retrato).</li>
        <li>Configura los detalles como el color del marco, postal y mensaje personalizado.</li>
      </ul>
      <h2 className="section-title">Subir fotografías requeridas:</h2>
      <p>
        Si es un retrato, la fotografía se requiere en alta calidad. (De no ser así, Montsechia no se hará responsable de la calidad del producto final).
      </p>
      <h2 className="section-title">Formulario de datos:</h2>
      <p>
        Proporciona la información del comprador, dirección del receptor y nombre que aparecerá en el paquete.
      </p>
      <h2 className="section-title">Pago:</h2>
      <p>Puedes pagar con tarjeta de débito, crédito o transferencia bancaria.</p>

      <h2 className="section-title">Envíos</h2>
      <h2 className="section-title">Cobertura:</h2>
      <p>
        Realizamos envíos a todo México a través de DHL, nuestro proveedor principal. En caso de que no sea posible utilizar este servicio, recurriremos a otra plataforma de envíos y notificaremos al cliente por correo electrónico, informando el nuevo plazo de entrega.
      </p>
      <h2 className="section-title">Plazos de entrega:</h2>
      <p>1 a 3 días hábiles.</p>
      <p>
        Para códigos postales en zonas extendidas, pueden aplicarse retrasos adicionales (consulta aquí).
      </p>
      <h2 className="section-title">Costo de envío:</h2>
      <p>El costo de envío es gratuito a todo México.</p>

      <h2 className="section-title">Políticas de Envío</h2>
      <h2 className="section-title">Errores en la dirección:</h2>
      <p>
        Es responsabilidad del cliente proporcionar una dirección correcta. Correcciones aceptadas dentro de las primeras 24 horas tras la compra a través de:
      </p>
      <ul>
        <li>Correo: <a href="mailto:contacto@montsechia.com.mx" className="contact-link">contacto@montsechia.com.mx</a></li>
        <li>Celular: +52 5521012526</li>
        <li>Instagram: [perfil correspondiente]</li>
      </ul>
      <h2 className="section-title">Paquetes dañados:</h2>
      <p>
        Aplica cambio o reembolso si el marco o vidrio llegan dañados. No se realizará ningún cambio o devolución si la caja interior está dañada, el producto está alterado de alguna manera por el comprador, si no se cuenta con la caja original o número de rastreo, si hay errores en nombres o mensajes proporcionados por el cliente.
      </p>
    </div>
  );
};

export default PurchaseProcess;
