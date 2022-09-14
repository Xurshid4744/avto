import React from "react";
import { useDispatch } from "react-redux";
import { setChange } from "../../store/slices/changeRouter";
import notification from "../../assets/icons/notification.svg";
import asosiy from "../../assets/icons/asosiy.svg";
import "./index.scss";

const Header = () => {
  const dispatch = useDispatch();
  const link = () => {
    dispatch(setChange("user"));
  };
  return (
    <nav>
      <div className="nav_icons">
        <img src={asosiy} alt="" className="link" onClick={link} />
        <img src={notification} alt="notification" className="notification" />
        <img
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJVC5PGU6HCM_ixM70UE1b9dRpDboVOAi07w&usqp=CAU"
          }
          alt="user"
          className="user"
        />
      </div>
    </nav>
  );
};

export default Header;
