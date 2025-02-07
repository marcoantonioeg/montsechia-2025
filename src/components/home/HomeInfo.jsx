import React from "react";
import "./HomeInfo.css";
import { Link } from "react-router-dom";
import BestSellers from "./BestSellers";

function HomeInfo() {
  return (
    <>
       <article className="home-info">
      <div className="info-txt">
        <span>ESTAMOS EN</span>
        <h2>
          CONSTRUCCIÓN
        </h2>
        <p className="body-text">
          ¡Vuelve pronto para descubrir lo que tenemos para ti!
        </p>
      </div>
      
      {/*
      <button className="explore-clothing_btn">
        <Link to="explore/all">Discover Our Products</Link>
      </button>
       */}
    </article>
    
    </>
  );
}

export default HomeInfo;
