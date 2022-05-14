import React from "react";


const Coin = ({name, price}) => {
    return (
        <div>
        <h1>{name} {price.toFixed(2)} </h1>
        <h2> Price:{price.toFixed(2)} $</h2>
        
        </div>
    )
}

export default Coin;