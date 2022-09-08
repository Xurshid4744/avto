import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import requestApi from "../../api/requestApi";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { useParams } from "react-router-dom";
import "./index.scss";
const ModelsAll = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const breadcrumb = [
    {title: "Models", link: "/models"},
    {title: "Lada turlari", link: "#"},
  ]
  useEffect(() => {
    requestApi
      .get(`/car?limit=5&page=1&categoryId=${params.id}`)
      .then((res) => {
        setData(res?.data?.data?.data);
        console.log(res);
      });
  }, []);
  return (
    <div className="globalContainer modelsAllWrapper">
      <Breadcrumb data={breadcrumb}/>
      <h4>Modellar turlari</h4>
      <div className="modelsContainer">
        {data.length > 0 ? data?.map((item) => (
          <Link to={`${item._id}`}>
            <div className="carAbout">
              <img
                src={"https://cartestwebapp.herokuapp.com/" + item.imgUrl}
                alt=""
                width={100}
              />
              <h4>{item.marka.name}</h4>
              <h4>Narxi: {Number(item.price).toLocaleString()}</h4>
            </div>
          </Link>
        )) : "Bu markada mashina mavjud emas !"}
      </div>
    </div>
  );
};

export default ModelsAll;
