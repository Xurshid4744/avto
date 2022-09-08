import React from "react";
import user from "../../assets/images/user.png";
import notification from "../../assets/icons/notification.svg";
import "./index.scss";
const Header = () => {
  return (
    <nav>
      <div className="nav_icons">
        <img src={notification} alt="notification" className="notification" />
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJVC5PGU6HCM_ixM70UE1b9dRpDboVOAi07w&usqp=CAU"} alt="user" className="user" />
      </div>
    </nav>
  );
};

export default Header;
