import React, { useEffect } from "react";
import "./card.css";
import Loading from "../loader/Loader";

const Card = ({ pokemon, loading, setLoading, infoPokemon }) => {
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [loading, setLoading]);

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <Loading />
        </div>
      ) : (
        pokemon.map((item) => (
          <div className="card" key={item.id} onClick={() => infoPokemon(item)}>
            <h2 className="id">{item.id}.</h2>
            <h2 className="name">{item.name}</h2>
            <img
              src={item.sprites.front_default}
              alt=""
              className="rotating-image"
            />
          </div>
        ))
      )}
    </>
  );
};

export default Card;
