import React from "react";
import Coin from "./Coin";

const ListOfCrypto = ({ crypto, search }) => {
  return (
    <ul className="list">
      {crypto
        .filter((coin) => {
          return coin.name.toLowerCase().includes(search.toLowerCase());
        })
        .map((coin) => (
          <Coin
            name={coin.name}
            key={coin.id}
            price={coin.price}
            icon={coin.icon}
            id={coin.id}
          />
        ))}
    </ul>
  );
};

export default ListOfCrypto;
