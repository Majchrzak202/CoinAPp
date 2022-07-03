import React from "react";
import "./Wishlist.css";
import { useWishlist } from "../store/WishlistContextProvider";
import Coin from "../Coin";

const Wishlist = () => {
  const { wishlist } = useWishlist();
  return (
    <div className="wishlist">
      {wishlist.map((coin) => (
        <Coin
          name={coin.name}
          key={coin.id}
          price={coin.price}
          icon={coin.icon}
          id={coin.id}
        />
      ))}
    </div>
  );
};

export default Wishlist;
