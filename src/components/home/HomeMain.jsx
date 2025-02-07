import React from "react";
import HomePhotoShoot from "./HomePhotoShoot";
import HomeInfo from "./HomeInfo";
import "./HomeMain.css";
import HomeNavbar from "../Navbar/HomeNavbar";
import BestSellers from "./BestSellers";
import Comunidad from "./Comunidad";
import Eventos from "./Eventos";
import VideoHero from "./VideoHero";
import CuadrosInterior from "./CuadrosInterior";
import StudioCreativo from "./StudioCreativo";
import Paquete from "./Paquete";
import Footer from "./Footer";

function HomeMain() {
  return (
    <>
     <VideoHero/>
     <Paquete/>
        {/* 
    <main className="home-main container">
      
      <HomeInfo />
      
  
      <HomePhotoShoot />
    <HomeNavbar/>
    
      

    </main>
    */}
    <CuadrosInterior/>
    <StudioCreativo/>
    <Eventos/>
    <BestSellers/>
    <Comunidad/>
      </>
  );
}

export default HomeMain;
