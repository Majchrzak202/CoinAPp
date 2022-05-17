import React from "react";
import LoginButton from "./Auth/LoginButton";
import LogoutButton from "./Auth/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Auth/Profile";

const Navigation = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <nav>
      <ul className="navul">
        {isAuthenticated && (
          <li className="navli">
            <a href="/">Portfolio</a>
          </li>
        )}
        {isAuthenticated && (
          <li className="navli">
            <a href="/">MyCoins</a>
          </li>
        )}
        {!isAuthenticated && (
          <li className="navli">
            <LoginButton></LoginButton>
          </li>
        )}

        <li className="navli">
          <Profile />
        </li>
        {isAuthenticated && (
          <li className="navli">
            <LogoutButton />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
