import React, { useState, useEffect } from "react";
import ListOfCrypto from "./ListOfCrypto";
import './App.css';


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

  console.log(crypto);

  return (
    <div>
      <div className='up'>
      <button onClick={fetchCrypto}> FETCH COINS!</button>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      </div>
      
      {isLoading && <p>Loading....</p>}
      <div /* className='section' */>
      <ListOfCrypto search={search} crypto={crypto} />
      {error && <p>Something went wrong ({error})</p>}
      </div>
    </div>
  );
}

export default App;
