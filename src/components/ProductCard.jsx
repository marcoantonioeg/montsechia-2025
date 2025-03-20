import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ButtonNoFill from '../components/common/ButtonNoFill';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleImageError = (e) => {
    e.target.src = '/images/default.png'; // Imagen de respaldo si falla la carga
  };

  return (
    <Link to={`/producto/${product.id}`} className="text-decoration-none">
      <div key={product.id} className="product-card">
      <img
  src={product.image || '/images/default.png'}
  alt={product.name}
  className="product-image"
  onError={handleImageError}
/>
<h3 className='titulo cuadro'>{product.name}</h3>
<br />
<p>
  {new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(product.price)} MXN.
</p>
{/**
 * 
 * 
 <center>
   <button >Añadir</button>
   <ButtonNoFill text="Ver más" onClick={() => addToCart(product)} />
 </center>
 */}
      </div>
    </Link>
  );
};

export default ProductCard;
