import React from "react";
import "./Privacy.css";
import Title from "../components/Title";
const PaymentInfo = () => {
  return (
    <div className="container my-5 privacy-policy">
         <div className="row">
            <div className="col-lg-3"/>
            <div className="col-lg-6">
               <Title text1="Información" text2="de Pago"/>
            </div>
            <div className="col-lg-3"/>
        </div>
      <h2 className="section-title">Información de Pago</h2>
      <p>
        En Montsechia, queremos asegurarnos de que tu experiencia de compra sea lo más sencilla y segura posible. A continuación, te proporcionamos todos los detalles relacionados con los pagos:
      </p>

      <h2 className="section-title">Métodos de Pago</h2>
      <ul>
        <li>Tarjetas de débito y crédito (a través de Stripe).</li>
        <li>PayPal.</li>
        <li>Transferencias bancarias.</li>
        <li>Pagos en efectivo a través de depósitos en tiendas de conveniencia o bancos.</li>
      </ul>

      <h2 className="section-title">Condiciones de Pago</h2>
      <p>
        El pago debe realizarse en su totalidad para que el pedido sea procesado. No ofrecemos facilidades de pago como meses sin intereses.
      </p>

      <h2 className="section-title">Seguridad en el Pago</h2>
      <p>
        Tu seguridad es nuestra prioridad. Por eso, utilizamos la pasarela de pago Stripe, que incluye:
      </p>
      <ul>
        <li>Certificación SSL para cifrar la información de pago.</li>
        <li>Monitoreo constante para evitar fraudes.</li>
        <li>Cumplimiento con estándares de seguridad internacionales.</li>
      </ul>

      <h2 className="section-title">Moneda y Conversión</h2>
      <p>
        Todos los pagos se realizan exclusivamente en pesos mexicanos (MXN). No aceptamos pagos en otras monedas ni aplicamos costos de conversión.
      </p>

      <h2 className="section-title">Comprobantes y Facturación</h2>
      <p>
        Los comprobantes de pago se envían automáticamente al cliente dentro de 1 a 3 días posteriores a la compra.
      </p>
      <p>
        Si necesitas una factura, proporciona los siguientes datos al momento de la compra:
      </p>
      <ul>
        <li>Razón social.</li>
        <li>RFC.</li>
        <li>Régimen fiscal.</li>
        <li>Uso del CFDI.</li>
        <li>Dirección completa y código postal.</li>
      </ul>
      <p>
        Si los datos proporcionados son incorrectos, puedes solicitar una refacturación enviando un correo a <a href="mailto:contacto@montsechia.com.mx" className="contact-link">contacto@montsechia.com.mx</a>.
      </p>

      <h2 className="section-title">Políticas de Pagos Fallidos</h2>
      <p>
        Si el pago es rechazado, puedes reintentar el proceso. Los pedidos no se reservan hasta que el pago sea completado exitosamente.
      </p>

      <h2 className="section-title">Reembolsos</h2>
      <p>
        Los reembolsos solo se procesan una vez que el cliente haya enviado de vuelta el pedido a Montsechia utilizando la guía proporcionada por nosotros. El reembolso puede realizarse a la misma forma de pago utilizada o a través de otras opciones, según las preferencias del cliente.
      </p>

      <h2 className="section-title">Contacto</h2>
      <p>
        Si tienes preguntas o inquietudes sobre estos términos, puedes contactarnos a través de:
      </p>
      <ul>
        <li>Correo: <a href="mailto:contacto@montsechia.com.mx" className="contact-link">contacto@montsechia.com.mx</a></li>
        <li>Celular: +52 5521012526</li>
      </ul>
    </div>
  );
};

export default PaymentInfo;
