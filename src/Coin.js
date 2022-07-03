import React from "react";
import { motion } from "framer-motion";
import { useWishlist } from "./store/WishlistContextProvider";

const Coin = ({ name, price, icon, id }) => {
  const { addToWishlist } = useWishlist();

  const addToWishListHandler = () => {
    addToWishlist({
      name,
      icon,
      id,
      price
    })
  }

  return (
    <motion.div
      className="listitem"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.15 }}
      layout
    >
      <motion.img
        whileTap={{
          backgroundColor: ["hsl(0, 100, 50)", "hsl(-120, 100, 50)"],
        }}
        className="whishlist"
        alt="img"
        src="https://cdn1.iconfinder.com/data/icons/multimedia-control/100/Multimedia_-23-1024.png"
      />
      <button onClick={addToWishListHandler}>+</button>

      <motion.img
        className="image"
        src={icon}
        alt={id}
        whileHover={{ rotate: 360, transition: { duration: 1 } }}
      ></motion.img>
      <h1>{name} </h1>
      <p> Price:{price.toFixed(2)} $</p>
    </motion.div>
  );
};

export default Coin;
