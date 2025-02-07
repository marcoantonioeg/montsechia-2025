import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ButtonNoFill from "../components/common/ButtonNoFill";

import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Link to={`/producto/${product.id}`} className="text-decoration-none">
<div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.title}</h3>
              <p>
  {new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(product.price)} MXN.
</p>
              <center>
                <button onClick={() => addToCart(product)}>añadir</button>
          <ButtonNoFill text="Ver más" onClick={() => addToCart(product)}/>
        </center>
              
            </div>
            </Link>
 
  );
};

export default ProductCard;