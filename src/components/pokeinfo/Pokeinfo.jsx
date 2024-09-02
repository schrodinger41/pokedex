import React from "react";
import "./pokeinfo.css";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

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

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const Pokeinfo = ({ data }) => {
  if (!data) {
    return "No data available";
  }

  const stats = data.stats.reduce((acc, stat) => {
    if (["hp", "attack", "defense", "speed"].includes(stat.stat.name)) {
      acc[stat.stat.name] = stat.base_stat;
    }
    return acc;
  }, {});

  const labels = ["HP", "Attack", "Defense", "Speed", "Height", "Weight"];
  const values = [
    stats.hp || 0,
    stats.attack || 0,
    stats.defense || 0,
    stats.speed || 0,
    (data.height / 10).toFixed(2) || 0,
    (data.weight / 10).toFixed(2) || 0,
  ];

  return (
    <div className="container-info">
      <div className="pokeinfo-card">
        <div className="pokeinfo-header">
          <img
            src={data.sprites.front_default}
            alt={data.name}
            className="pokeinfo-image"
          />
          <div className="pokeinfo-details">
            <div className="pokeinfo-name-container">
              <div className="pokeinfo-types">
                {data.types.map((typeInfo, index) => (
                  <img
                    key={index}
                    src={typeIcons[typeInfo.type.name]}
                    alt={typeInfo.type.name}
                    className="type-icon"
                  />
                ))}
              </div>
              <h1>{data.name}</h1>
            </div>
            <h3>
              <strong>Height:</strong> {(data.height / 10).toFixed(2)} m
            </h3>
            <h3>
              <strong>Weight:</strong> {(data.weight / 10).toFixed(2)} kg
            </h3>
          </div>
        </div>
        <div className="base-stat-container">
          <div className="base-stat">
            <h1>Base Stats</h1>
            <div className="stat p-2">
              <div className="stat-icon w-8"></div>
              <div className="stat-attr w-24">HP</div>
              <div className="stat-value">{stats.hp || 0}</div>
            </div>
            <div className="stat p-2">
              <div className="stat-icon w-8"></div>
              <div className="stat-attr w-24">Attack</div>
              <div className="stat-value">{stats.attack || 0}</div>
            </div>
            <div className="stat p-2">
              <div className="stat-icon w-8"></div>
              <div className="stat-attr w-24">Defense</div>
              <div className="stat-value">{stats.defense || 0}</div>
            </div>
            <div className="stat p-2">
              <div className="stat-icon w-8"></div>
              <div className="stat-attr w-24">Speed</div>
              <div className="stat-value">{stats.speed || 0}</div>
            </div>
            <div className="stat p-2">
              <div className="stat-icon w-8"></div>
              <div className="stat-attr w-24">Height</div>
              <div className="stat-value">
                {(data.height / 10).toFixed(2)} m
              </div>
            </div>
            <div className="stat p-2">
              <div className="stat-icon w-8"></div>
              <div className="stat-attr w-24">Weight</div>
              <div className="stat-value">
                {(data.weight / 10).toFixed(2)} kg
              </div>
            </div>
          </div>
          <div className="stat-graph">
            <Radar
              data={{
                labels: labels,
                datasets: [
                  {
                    label: "Base Stats",
                    data: values,
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderColor: "rgba(255, 99, 132, 0.2)",
                    borderWidth: 2,
                  },
                ],
              }}
              options={{
                scales: {
                  r: {
                    suggestedMin: 0,
                    suggestedMax: 120,
                    ticks: {
                      stepSize: 50,
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokeinfo;
