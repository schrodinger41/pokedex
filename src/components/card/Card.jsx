import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";
import Loading from "../loader/Loader";

import fireIcon from "../../../public/type/fire.svg";
import waterIcon from "../../../public/type/water.svg";
import bugIcon from "../../../public/type/bug.svg";
import darkIcon from "../../../public/type/dark.svg";
import dragonIcon from "../../../public/type/dragon.svg";
import electricIcon from "../../../public/type/electric.svg";
import fairyIcon from "../../../public/type/fairy.svg";
import fightingIcon from "../../../public/type/fighting.svg";
import flyingIcon from "../../../public/type/flying.svg";
import ghostIcon from "../../../public/type/ghost.svg";
import grassIcon from "../../../public/type/grass.svg";
import groundIcon from "../../../public/type/ground.svg";
import iceIcon from "../../../public/type/ice.svg";
import normalIcon from "../../../public/type/normal.svg";
import poisonIcon from "../../../public/type/poison.svg";
import psychicIcon from "../../../public/type/psychic.svg";
import rockIcon from "../../../public/type/rock.svg";
import steelIcon from "../../../public/type/steel.svg";

const typeIcons = {
  fire: fireIcon,
  water: waterIcon,
  bug: bugIcon,
  dark: darkIcon,
  dragon: dragonIcon,
  electric: electricIcon,
  fairy: fairyIcon,
  fighting: fightingIcon,
  flying: flyingIcon,
  ghost: ghostIcon,
  grass: grassIcon,
  ground: groundIcon,
  ice: iceIcon,
  normal: normalIcon,
  poison: poisonIcon,
  psychic: psychicIcon,
  rock: rockIcon,
  steel: steelIcon,
};

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
        pokemon.map((item, index) => (
          <div
            className="card"
            key={`${item.id}-${item.name}-${index}`}
            onClick={() => handleCardClick(item)}
          >
            <h2 className="id">{item.id}.</h2>
            <h2 className="name">{item.name}</h2>
            <img
              src={item.sprites.front_default}
              alt={item.name}
              className="rotating-image"
            />
            <div className="types">
              {item.types.map((typeInfo, typeIndex) => (
                <img
                  key={typeIndex}
                  src={typeIcons[typeInfo.type.name]}
                  alt={typeInfo.type.name}
                  className="type-icon"
                />
              ))}
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Card;
