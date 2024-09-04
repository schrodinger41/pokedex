import React, { useState, useEffect } from "react";
import "./pokemon.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/Card";
import axios from "axios";
import Loader from "../../components/loader/Loader";

const Pokemon = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };

  const getPokemon = async (res) => {
    const data = await Promise.all(
      res.map(async (item) => {
        const result = await axios.get(item.url);
        return result.data;
      })
    );
    setPokeData(data.sort((a, b) => (a.id > b.id ? 1 : -1)));
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

  return (
    <div className="pokemon">
      <Header />
      {loading ? (
        <div className="loading-container">
          <Loader />
        </div>
      ) : (
        <div className="scroll-container">
          <Card pokemon={pokeData} loading={loading} setLoading={setLoading} />
        </div>
      )}
      <div className="btn-group">
        {prevUrl && (
          <button
            onClick={() => {
              setPokeData([]);
              setUrl(prevUrl);
            }}
          >
            Previous
          </button>
        )}
        {nextUrl && (
          <button
            onClick={() => {
              setPokeData([]);
              setUrl(nextUrl);
            }}
          >
            Next
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Pokemon;
