import React, { useState } from "react";
import "./search.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    if (searchInput.trim() === "") return;

    setLoading(true);
    setSearched(true);
    try {
      if (!isNaN(searchInput)) {
        // If the search input is a number, search by ID
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${searchInput}`
        );
        setSearchResults([res.data]);
      } else {
        // Fetch all Pokémon species from PokéAPI and filter based on input
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=1000`
        );
        const filteredResults = res.data.results.filter((pokemon) =>
          pokemon.name.toLowerCase().startsWith(searchInput.toLowerCase())
        );

        // Fetch detailed data for each filtered Pokémon
        const detailedResults = await Promise.all(
          filteredResults.map(async (pokemon) => {
            const detailRes = await axios.get(pokemon.url);
            return detailRes.data;
          })
        );

        setSearchResults(detailedResults);
      }
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search">
      <Header />
      <div className="search-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by name or ID..."
            className="search-input"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="search-button" onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="results-container">
        {loading ? (
          <Loader />
        ) : searched && searchResults.length === 0 ? (
          <h2 className="no-results">No Pokémon found</h2>
        ) : (
          <Card
            pokemon={searchResults}
            loading={loading}
            additionalClass="search-card"
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Search;
