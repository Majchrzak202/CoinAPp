import React from "react";
import Coin from "./Coin";

const ListOfCrypto = ({ crypto, search }) => {
  return (
    <ul>
      {crypto.filter((coin) => {
        return coin.name.toLowerCase().includes(search.toLowerCase())
      }).map((coin) => (
        <Coin name={coin.name} key={coin.id} price={coin.price} />
      ))}
    </ul>
  );
};

export default ListOfCrypto;
