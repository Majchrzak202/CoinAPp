import React, { createContext, useContext, useState } from "react";

export const wishlistContext = createContext(null);

export function WishlistContextProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (item) => {
    setWishlist([...wishlist, item]);
  };

  const removeFromWishlist = () => {};

  return (
    <wishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </wishlistContext.Provider>
  );
}

export default WishlistContextProvider;

export function useWishlist() {
  return useContext(wishlistContext);
}
