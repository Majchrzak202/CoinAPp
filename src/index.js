import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { WishlistContextProvider } from "./store/WishlistContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WishlistContextProvider>
    <App />
  </WishlistContextProvider>
);
