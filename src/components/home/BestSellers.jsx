import React, { useEffect, useState } from "react";
import "./BestSellers.css";
import ButtonNoFill from "../common/ButtonNoFill";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const BestSellers = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // IDs de productos que se deben excluir
    const excludedProductIds = [
        'prod_RyW0HWc08wZQNO',
        'prod_RyVsHGjiFUcFdt',
        'prod_RyVrs4nKbDD6jU'
    ];

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3001/products');
                const allProducts = await response.json();

                // Filtrar los productos excluyendo los que tienen IDs en excludedProductIds
                const filteredProducts = allProducts.filter(
                    (product) => !excludedProductIds.includes(product.id)
                );

                // Tomar 4 productos aleatorios de la lista filtrada
                const randomProducts = filteredProducts
                    .sort(() => 0.5 - Math.random()) // Mezcla aleatoria
                    .slice(0, 4); // Toma solo 4 productos

                setProducts(randomProducts);
            } catch (err) {
                console.error("Error al obtener productos:", err);
                setError('Error al cargar los productos.');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <Loader />;
    if (error) return <div>{error}</div>;

    return (
        <div className="best-sellers-container">
            <center>
                <h1 className="best-title titulo cuadros-mediano">Best Sellers</h1>
            </center>

            <div className="best-sellers-list">
                {products.map((product) => (
                    <Link to={`/producto/${product.id}`} className="text-decoration-none" key={product.id}>
                        <div className="product-card">
                            <img src={product.image} alt={product.title} className="product-image" />
                            <h3 className="titulo cuadro">{product.title}</h3>
                            <p>{new Intl.NumberFormat('es-MX', {
                                style: 'currency',
                                currency: 'MXN'
                            }).format(product.price)}</p>
                        </div>
                    </Link>
                ))}
            </div>

            <center>
                <ButtonNoFill text="Ver más" direction="tienda"/>
            </center>
        </div>
    );
};

export default BestSellers;
