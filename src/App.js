import React, { useState } from "react";
import ListOfCrypto from "./ListOfCrypto";


const api = {
  base: "https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=INR",
};

function App() {
  const [crypto, setCrypto] = useState([]);

  const fetchCrypto = () => {
    fetch(api.base)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        
        setCrypto(data.coins);
      });
  };

  console.log(crypto);

  return (
    <div>
      <button onClick={fetchCrypto}> FETCH COINS!</button>
      <ListOfCrypto crypto={crypto}/> 
     
    </div>
  );
}

export default App;
