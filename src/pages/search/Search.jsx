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
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${searchInput.toLowerCase()}`
      );
      setSearchResults([res.data]);
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
            placeholder="Search..."
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
