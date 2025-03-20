import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BestSellers from '../components/home/BestSellers';
import './ProductDetail.css';
import molduraNegra from '../../public/images/Moldura_Negra.png';
import molduraCafe from '../../public/images/Moldura_Madera.png';
import molduraBlanca from '../../public/images/Moldura_Blanca.png';
import Composicion from '../components/Composicion';
import { CartContext } from '../context/CartContext';
import ButtonNoFillLeft from '../components/common/ButtonNoFillLeft';
import confetti from 'canvas-confetti';  // Importamos canvas-confetti

const ProductDetail = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedMoldura, setSelectedMoldura] = useState(molduraNegra);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [isShippingVisible, setIsShippingVisible] = useState(false);

  const toggleDescription = () => setIsDescriptionVisible(!isDescriptionVisible);
  const toggleShipping = () => setIsShippingVisible(!isShippingVisible);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/products/${id}`);
        setProduct(response.data);
        setTotalPrice(parseFloat(response.data.metadata.precio));
      } catch (error) {
        setError('Error al cargar el producto.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product) {
      setTotalPrice(parseFloat(product.metadata.precio) * quantity);
    }
  }, [quantity, product]);

  if (loading) return <div>Cargando producto...</div>;
  if (error || !product) return <div>{error || 'Producto no encontrado'}</div>;

  const productImage = product.images[0] || '/images/default.png';

  // Función para lanzar el confeti al hacer clic en el botón
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <>
      <div className="container mt-5 ProductDetailComponent">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <div
              className={`bg-negro ${
                selectedMoldura === molduraNegra
                  ? 'bg-negro'
                  : selectedMoldura === molduraCafe
                  ? 'bg-cafe'
                  : selectedMoldura === molduraBlanca
                  ? 'bg-blanco'
                  : 'bg-negro'
              }`}
            />
            <div className="ar-flag">Incluye experiencia ar</div>
            <img
              src={productImage}
              alt={product.title}
              className="img-fluid product-image-detail mb-3"
              onError={(e) => { e.target.src = '/images/default.png'; }}
            />
            <div className="ml-4 pl-2 boton-nosotros">
              <ButtonNoFillLeft text="Sobre Nosotros" direction="Nosotros" />
            </div>
          </div>

          <div className="col-md-6 product-details">
            <h1 className="product-title titulo chico">{product.name}</h1>
            <p className="product-price titulo precio">
              {new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(product.metadata.precio)}
            </p>

            <div className="product-options mb-3">
              <label className="moldura-label titulo cuadro">MOLDURA</label>
              <div className="moldura-options">
                {[molduraNegra, molduraCafe, molduraBlanca].map((moldura) => (
                  <div
                    key={moldura}
                    className={`moldura-option ${selectedMoldura === moldura ? 'selected' : ''}`}
                    style={{ backgroundImage: `url(${moldura})` }}
                    onClick={() => setSelectedMoldura(moldura)}
                  >
                    {console.log(selectedMoldura)}
                  </div>
                ))}
              </div>
            </div>

            <label className="moldura-label titulo cuadro">CANTIDAD</label>
            <div className="product-quantity mb-3">
              <div className="div-quantity">
                <button
                  className="quantity-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="quantity-value">{quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <button
              className="add-to-cart titulo cuadro"
              onClick={() => {
                addToCart({
                  ...product,
                  price: parseFloat(product.metadata.precio),
                  quantity: quantity,
                  molduraNota: selectedMoldura === molduraNegra
                    ? 'Moldura Negra'
                    : selectedMoldura === molduraCafe
                    ? 'Moldura Café'
                    : 'Moldura Blanca'
                });
                triggerConfetti();  // Llamamos a la función de confeti
              }}
            >
              AGREGAR AL CARRITO - {new Intl.NumberFormat('es-MX', {
                style: 'currency',
                currency: 'MXN'
              }).format(totalPrice)} MXN
            </button>
            <div className='mt-4'>
              <p
                id="productDescriptionTrigger"
                className="product-detail-content pb-0 mb-0"
                onClick={toggleDescription}
              >
                Descripción <i className="fas fa-chevron-right flecha-derecha"></i>
              </p>
              <p
                id="productDescription"
                className={`product-detail-content ${isDescriptionVisible ? '' : 'no-show'} pt-0 mt-0 pb-0 mb-0`}
              >
                {product.description}
              </p>
            </div>
            <div>
              <p className='product-detail-content pt-4 pb-0 mb-0' onClick={toggleShipping}>Pedido y tiempos de envío <i className="fas fa-chevron-right flecha-derecha"></i></p>
              <p id='productDescription' className={`product-detail-content ${isShippingVisible ? '' : 'no-show'} pt-0 mt-0 pb-0 mb-0`}>
                <ul className='mt-1'>
                  <li>
                    <p className='product-detail-content mb-1'>Envío 1 a 3 días hábiles.</p>
                  </li>
                  <li>
                    <p className='product-detail-content mb-1'>Los pedidos de nuestra sección de “Interior” se enviarán los lunes de cada semana.</p>
                  </li>
                  <li>
                    <p className='product-detail-content mb-1'>Se aceptan envíos urgentes con un costo extra de $100 MXN. </p>
                  </li>
                  <li>
                    <p className='product-detail-content mb-1'>El costo de envío es gratuito a todo México.
                    </p>
                  </li>
                  <li>
                    <p className='product-detail-content'>Los pedidos realizados durante el fin de semana se enviarán en un plazo de dos lunes.
                    </p>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Composicion />
      <BestSellers />
    </>
  );
};

export default ProductDetail;
