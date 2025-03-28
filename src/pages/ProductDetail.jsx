import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BestSellers from '../components/home/BestSellers';
import './ProductDetail.css';
import molduraNegra from '../../public/images/Moldura_Negra.png';
import molduraCafe from '../../public/images/Moldura_Madera.png';
import molduraBlanca from '../../public/images/Moldura_Blanca.png';
import Composicion from '../components/Composicion';
import { CartContext } from '../context/CartContext';
import ButtonNoFillLeft from '../components/common/ButtonNoFillLeft';
import confetti from 'canvas-confetti';

const ProductDetail = () => {
  const navigate = useNavigate(); // Añade esto dentro del componente
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

  // IDs de productos que deben mostrar el botón de paquete
  const paqueteProductIds = [
    "prod_RooAZXx63jRw1N", 
    "prod_RooAbpaUYb5S9s", 
    "prod_RooAPMQP4pUI42", 
    "prod_Roo9OFDZ2IhrGR"
  ];

  // Determinar si el producto actual es un paquete
  const isPaquete = paqueteProductIds.includes(id);

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
                  />
                ))}
              </div>
            </div>
{/* Botón normal - visible solo si NO es paquete Y NO es el producto de retrato */}
{!isPaquete && id !== "prod_RooAotE1MdTfou" && (
  <button
    id='button-normal'
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
      triggerConfetti();
    }}
  >
    AGREGAR AL CARRITO - {new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    }).format(totalPrice)} MXN
  </button>
)}

{/* Botón paquete - visible solo si ES paquete */}
{isPaquete && (
  <button
    id='button-paquete'
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
      triggerConfetti();
      navigate('/postal');
    }}
  >
    PERSONALIZAR PAQUETE
  </button>
)}

{/* Botón retrato - visible solo si el ID es prod_RooAotE1MdTfou */}
{id === "prod_RooAotE1MdTfou" && (
  <button
    id='button-retrato'
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
      triggerConfetti();
      navigate('/postal-enmarcar');
    }}
  >
    PERSONALIZAR RETRATO
  </button>
)}
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
                    <p className='product-detail-content mb-1'>Los pedidos de nuestra sección de "Interior" se enviarán los lunes de cada semana.</p>
                  </li>
                  <li>
                    <p className='product-detail-content mb-1'>Se aceptan envíos urgentes con un costo extra de $100 MXN. </p>
                  </li>
                  <li>
                    <p className='product-detail-content mb-1'>El costo de envío es gratuito a todo México.</p>
                  </li>
                  <li>
                    <p className='product-detail-content'>Los pedidos realizados durante el fin de semana se enviarán en un plazo de dos lunes.</p>
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