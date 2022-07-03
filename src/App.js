import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Wishlist from "./Pages/Wishlist";

const api = {
  base: "https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=INR",
};

function App() {
  const [crypto, setCrypto] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCrypto();
  }, []);

  const fetchCrypto = () => {
    setIsLoading(true);
    fetch(api.base)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCrypto(data.coins);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Wishlist/>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setSearch={setSearch}
              setCrypto={setCrypto}
              search={search}
              crypto={crypto}
            />
          }
        />
        <Route path="wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
