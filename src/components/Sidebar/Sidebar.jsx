import React from "react";
import subtract from "../../assets/icons/subtract.svg";
import union from "../../assets/icons/union.svg";
import light from "../../assets/icons/light.svg"; 

import filled from "../../assets/icons/filled.svg"; 
import moon from "../../assets/icons/moon.svg"; 

import "./index.scss";
const Sidebar = () => {
  const menu = [
    { img: subtract, title: "Asosiy" },
    { img: union, title: "E'lonlar" },
    { img: light, title: "Savollar" },
  ];
  return (
    <aside>
      <div>
        {menu.map((item) => (
          <div className="menu">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <div className="mode">
        <div className="active">
          <img src={filled} alt="" />
        </div>
        <div>
          <img src={moon} alt="" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
