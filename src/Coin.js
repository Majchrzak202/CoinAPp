import React from "react";

const Coin = ({ name, price, icon, id }) => {
  return (
    <div className="listitem">
      <img className="image" src={icon}  alt={id}></img>
      <h1>{name} </h1>
      <p> Price:{price.toFixed(2)} $</p>
    </div>
  );
};

export default Coin;
