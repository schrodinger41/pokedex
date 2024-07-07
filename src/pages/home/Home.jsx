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
        <div class="container">
          <img src={Text} alt="Pokedex" className="pokedex-image" />
          <Link to="/pokemon">
            <div className="button_container">
              <a class="button">
                <div class="button__content">
                  <span class="button__text">Open Pokedex</span>

                  <div class="button__reflection-1"></div>
                  <div class="button__reflection-2"></div>
                </div>

                <img src="/button/star.png" alt="" class="button__star-1" />
                <img src="/button/star.png" alt="" class="button__star-2" />
                <img src="/button/circle.png" alt="" class="button__circle-1" />
                <img src="/button/circle.png" alt="" class="button__circle-2" />
                <img src="/button/diamond.png" alt="" class="button__diamond" />
                <img
                  src="/button/triangle.png"
                  alt=""
                  class="button__triangle"
                />

                <div class="button__shadow"></div>
              </a>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
