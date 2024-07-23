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

  // Prepare data for the radar chart
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
    (data.height / 10) * 100 || 0, // Convert height to cm
    data.weight / 10 || 0,
  ];

  return (
    <div className="container-info">
      <div className="pokeinfo-card">
        <div className="pokeinfo-header">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt={data.name}
            className="pokeinfo-image"
          />
          <div className="pokeinfo-details">
            <h1>{data.name}</h1>
            <h3>
              <strong>Height:</strong> {(data.height / 10) * 100} cm
            </h3>
            <h3>
              <strong>Weight:</strong> {data.weight / 10} kg
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
              <div className="stat-value">{(data.height / 10) * 100} cm</div>
            </div>
            <div className="stat p-2">
              <div className="stat-icon w-8"></div>
              <div className="stat-attr w-24">Weight</div>
              <div className="stat-value">{data.weight / 10} kg</div>
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
