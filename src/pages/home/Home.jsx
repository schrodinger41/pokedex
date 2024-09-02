import React from "react";
import Header from "../../components/header/Header";
import Text from "../../images/pokedextextnobg.png";
import Footer from "../../components/footer/Footer";
import { Outlet, Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <main>
      <Header />
      <div className="login-page">
        <div className="container">
          <img src={Text} alt="Pokedex" className="pokedex-image" />
          <Link to="/pokemon">
            <div className="button_container">
              <a className="button">
                <div className="button__content">
                  <span className="button__text">Open Pokedex</span>

                  <div className="button__reflection-1"></div>
                  <div className="button__reflection-2"></div>
                </div>

                <img src="/button/star.png" alt="" className="button__star-1" />
                <img src="/button/star.png" alt="" className="button__star-2" />
                <img
                  src="/button/circle.png"
                  alt=""
                  className="button__circle-1"
                />
                <img
                  src="/button/circle.png"
                  alt=""
                  className="button__circle-2"
                />
                <img
                  src="/button/diamond.png"
                  alt=""
                  className="button__diamond"
                />
                <img
                  src="/button/triangle.png"
                  alt=""
                  className="button__triangle"
                />

                <div className="button__shadow"></div>
              </a>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
