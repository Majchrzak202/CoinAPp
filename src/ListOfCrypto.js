import React from "react";
import Coin from "./Coin";

const ListOfCrypto = ({ crypto }) => {
  return (
    <ul>
      {crypto.map((coin) => (
        <Coin 
        name={coin.name}
        key={coin.id}
        price={coin.price}/>
      ))}
    </ul>
  );
};

export default ListOfCrypto;
