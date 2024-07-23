import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";
import Loading from "../loader/Loader";

const Card = ({ pokemon, loading, setLoading }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [loading, setLoading]);

  const handleCardClick = (item) => {
    navigate("/info", { state: { pokemon: item } });
  };

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <Loading />
        </div>
      ) : (
        pokemon.map((item) => (
          <div
            className="card"
            key={item.id}
            onClick={() => handleCardClick(item)}
          >
            <h2 className="id">{item.id}.</h2>
            <h2 className="name">{item.name}</h2>
            <img
              src={item.sprites.front_default}
              alt={item.name}
              className="rotating-image"
            />
          </div>
        ))
      )}
    </>
  );
};

export default Card;
