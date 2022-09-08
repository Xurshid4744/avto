import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import requestApi from "../../api/requestApi";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./index.scss";
const Models = () => {
  const [data, setData] = useState([]);
  const breadcrumb = [
    {title: "Models", link: "/models"}
  ]
  useEffect(() => {
    requestApi.get("/category/marka?limit=5&page=1").then((res) => {
      setData(res?.data?.data?.data);
      console.log(res?.data?.data?.data, "BU DATA");
    });
  }, []);
  return (
    <div className="globalContainer modelsWrapper">
      <Breadcrumb data={breadcrumb} />
      <h4>Modellari</h4>
      <div className="modelsContainer">
        {data.map((item) => (
          <Link to={`/models/${item._id}`}>
            <div className="carAbout">
              <img
                src={"https://cartestwebapp.herokuapp.com/" + item.imgUrl}
                alt=""
                width={100}
              />
              <h4>{item.name}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Models;
