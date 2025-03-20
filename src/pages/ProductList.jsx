import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import LogoGif from '../../public/images/Isotipo.gif';
import './Productlist.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // IDs de productos que se deben excluir
  const excludedProductIds = [
    'prod_RyW0HWc08wZQNO',
    'prod_RyVsHGjiFUcFdt',
    'prod_RyVrs4nKbDD6jU'
  ];

  // Obtener productos desde tu servidor
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/products');
        const data = await response.json();

        // Filtrar los productos que NO estén en la lista de IDs excluidos
        const filteredProducts = data.filter(product => !excludedProductIds.includes(product.id));

        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Calcular el índice del primer y último producto por página
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Cambiar de página y hacer scroll arriba
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);

    // Desplazar la página hacia arriba
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (loading) {
    return (
      <div className="loading">
        <center>
          <img src={LogoGif} className='logoGif' alt="" srcSet="" />
        </center>
      </div>
    );
  }

  return (
    <div className="best-sellers-container">
      <center>
        <h1 className="best-title titulo grande">Catálogo</h1>
      </center>
      <div className="product-sellers-list col-lg-12 row">
        {currentProducts.map((product) => (
          <div key={product.id} className="col-lg-4 mb-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Paginación */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
