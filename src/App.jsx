import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase"; // Ensure this is the correct path to your firebase.js
import Home from "./pages/home/Home";
import Pokemon from "./pages/pokemon/Pokemon";
import Info from "./pages/info/Info";
import Search from "./pages/search/Search";
import "./App.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
      setLoading(false); // Stop loading once we have the auth state
    });

    return () => unsubscribe(); // Clean up subscription on unmount
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Render a loading indicator while waiting for auth state
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="pokemon"
          element={isAuth ? <Pokemon /> : <Navigate to="/" />}
        />
        <Route path="info" element={isAuth ? <Info /> : <Navigate to="/" />} />
        <Route
          path="search"
          element={isAuth ? <Search /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
