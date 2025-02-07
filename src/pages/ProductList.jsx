import React from 'react';
import ProductCard from '../components/ProductCard';
import productsData from '../utils/productsData';  // Importa los datos directamente
import './Productlist.css'
const ProductList = () => {
  return (
    <div className="best-sellers-container">
    <center>

    <h1 className="best-title">Nuestro Arte</h1>
    </center>
    <div className="product-sellers-list col-lg-12 row">
    {productsData.map((product) => (  // Usa los datos importados directamente
          <div key={product.id} className="col-lg-4 mb-4">
            <ProductCard product={product} />
          </div>
        ))}
    </div>

  </div>

  );
};

export default ProductList;
