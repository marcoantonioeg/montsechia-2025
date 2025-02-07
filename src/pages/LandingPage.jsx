import React from 'react';
import { Link } from 'react-router-dom';
import HomeMain from "../components/home/HomeMain";

const LandingPage = () => {
  return (
    <>
    <HomeMain/>
    <Link to="/tienda" className="btn btn-primary btn-lg">
        Comprar Ahora
      </Link>
    </>
    
  );
};

export default LandingPage;