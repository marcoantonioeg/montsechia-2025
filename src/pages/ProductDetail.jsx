import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../utils/productsData';  
import BestSellers from '../components/home/BestSellers';
import './ProductDetail.css';  // Archivo CSS personalizado

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [selectedMoldura, setSelectedMoldura] = useState("Negro");

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          {/* Imagen del producto */}
          <div className="col-md-6 text-center">
            <img src={product.image} alt={product.title} className="img-fluid product-image" />
          </div>

          {/* Detalles del producto */}
          <div className="col-md-6 product-details">
            <h1 className="product-title">{product.title}</h1>
            <p className="product-price">
              {new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(product.price)}
            </p>

            {/* Opciones de moldura */}
            <div className="product-options mb-3">
              <label className="moldura-label">MOLDURA</label>
              <div className="moldura-options">
                {["Negro", "Marfil", "Ámbar"].map((moldura) => (
                  <div
                    key={moldura}
                    className={`moldura-option ${selectedMoldura === moldura ? "selected" : ""}`}
                    onClick={() => setSelectedMoldura(moldura)}
                  >
                    {moldura}
                  </div>
                ))}
              </div>
            </div>

            {/* Cantidad */}
              <label className="moldura-label">CANTIDAD</label>

            
            <div className="product-quantity mb-3">
              
              <div className='div-quiantity'>

              <button className="quantity-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span className="quantity-value">{quantity}</span>
              <button className="quantity-btn" onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            {/* Botón de agregar al carrito */}
            <button className="add-to-cart">AGREGAR AL CARRITO - {new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(product.price)} MXN</button>
          </div>
        </div>
      </div>
      <BestSellers />
    </>
  );
};

export default ProductDetail;
