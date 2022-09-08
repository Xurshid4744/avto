import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Breadcrumb = ({ data }) => {
  return (
    <div className="breadcrumb">
      <p><Link to={"/"}>Bosh sahifa</Link></p>
      {data.map((item) => (
       <p > <Link to={item.link}>
       {item.title}
     </Link></p>
      ))}
    </div>
  );
};

export default Breadcrumb;
