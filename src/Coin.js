import React from "react";
import { motion } from "framer-motion";

const Coin = ({ name, price, icon, id }) => {
  return (
    <motion.div
      className="listitem"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{scale: 1.15}}
      layout
    >
      <motion.img
        className="image"
        src={icon}
        alt={id}
        whileHover={{ rotate: 360, transition: {duration:1}}}x
      ></motion.img>
      <h1>{name} </h1>
      <p> Price:{price.toFixed(2)} $</p>
    </motion.div>
  );
};

export default Coin;
