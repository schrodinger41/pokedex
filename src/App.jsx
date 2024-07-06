import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Pokemon from "./pages/pokemon/Pokemon";
import Info from "./pages/info/Info";
import Search from "./pages/search/Search";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="pokemon" element={<Pokemon />} />
          <Route path="info" element={<Info />} />
          <Route path="search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
