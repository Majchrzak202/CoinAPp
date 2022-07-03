import React from "react";
import ListOfCrypto from "../ListOfCrypto";

const Home = ({setSearch, setCrypto, search, crypto }) => {
  return (
    <div>
      <div className="up">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ListOfCrypto setCrypto={setCrypto} search={search} crypto={crypto} />
    </div>
  );
};

export default Home;
