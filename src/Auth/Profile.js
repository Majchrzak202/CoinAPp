import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();

  return (
    <div>
      <img src={user.picture} alt={user.name} /> <p>{user.name}</p>
    </div>
  );
};

export default Profile;
