import React from "react";
import "./info.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Pokeinfo from "../../components/pokeinfo/Pokeinfo";

const Info = ({ data }) => {
  return (
    <>
      <div className="info">
        <Header />
        <Pokeinfo />
        <Footer />
      </div>
    </>
  );
};

export default Header;
