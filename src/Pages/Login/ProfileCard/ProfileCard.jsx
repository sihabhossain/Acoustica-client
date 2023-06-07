import React, { useContext, useState } from "react";

import "./Profilecard.css";
import { AuthContext } from "../../../Providers/AuthProvider";

const ProfileCard = () => {
  const { user } = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="profile-card">
      <img
        className="photo"
        src={user?.photoURL}
        alt="Profile Picture"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {isHovered && <span className="username">{user?.displayName}</span>}
    </div>
  );
};

export default ProfileCard;
