import React from "react";
import Header from "../../Header/Header";
import Sidebar from "../../Sidebar/Sidebar";
import "./index.scss";
const AdminLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="layoutContainer">
        <Sidebar />
        <div className="layoutChildren">
          <div className="layoutChildren__box">{children}</div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
