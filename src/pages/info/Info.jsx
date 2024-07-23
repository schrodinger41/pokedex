import React from "react";
import { useLocation } from "react-router-dom";
import "./info.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Pokeinfo from "../../components/pokeinfo/Pokeinfo";

const Info = () => {
  const location = useLocation();
  const { pokemon } = location.state || {};

  return (
    <div className="info">
      <Header />
      <Pokeinfo data={pokemon} />
      <Footer />
    </div>
  );
};

export default Info;
