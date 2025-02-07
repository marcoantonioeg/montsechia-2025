import React from "react";
import bestSellers from "../../utils/bestSellers";  // Asegúrate de que la ruta sea correcta
import "./BestSellers.css"
import ButtonNoFill from "../common/ButtonNoFill";

const BestSellers = () => {
    return (
      <div className="best-sellers-container">
        <center>

        <h1 className="best-title">Best Sellers</h1>
        </center>
        <div className="best-sellers-list">
          {bestSellers.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} className="product-image" />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
        <center>
          <ButtonNoFill text="Ver más"/>
        </center>
      </div>
    );
  };

export default BestSellers;
