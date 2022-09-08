import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import requestApi from "../../api/requestApi";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./index.scss";
const ModelsAbout = () => {
  const [data, setData] = useState({});
  const [checkbox, setCheckbox] = useState("autoside");
  const params = useParams();
  const breadcrumb = [
    {title: "Models", link: "/models"},
    {title: "Lada turlari", link: "#"},
  ]
  useEffect(() => {
    requestApi.get(`/car/${params.id}`).then((res) => {
      setData(res?.data?.data);
      console.log(res);
    });
  }, []);
  return (
    <div className="globalContainer modelsAboutWrapper">
      <Breadcrumb data={breadcrumb} />
      <h4>Modellari</h4>
      <div className="modelsContainer">
        <div className="modelsLeft">
          <h6>{data?.marka?.name}</h6>
          <p>{Number(data?.price).toLocaleString()} so'm dan</p>
          <img
            src={"https://cartestwebapp.herokuapp.com/" + data?.imgUrl}
            alt=""
          />
          <p>
            <b>Marka</b>: {data?.marka?.name}
          </p>
          <p>
            <b>Tanirovka</b>: {data?.tonirovka}
          </p>
          <p>
            <b>Motor</b>: {data?.motor}
          </p>
          <p>
            <b>Year</b>: {data?.year}
          </p>
          <p>
            <b>Color</b>: {data?.color}
          </p>
          <p>
            <b>Distance</b>: {data?.distance} km
          </p>
          <p>
            <b>Gearbook</b>: {data?.gearbok}
          </p>
          <p>
            <b>Description</b>: {data?.description}
          </p>
          <span>
            <b>Umumiy xarajat</b>: {Number(data?.price).toLocaleString()} so'm
            dan
          </span>
        </div>
        <div className="modelRight">
          <h6>{data?.marka?.name}</h6>
          <img
            src={
              checkbox === "autoside"
                ? "https://cartestwebapp.herokuapp.com/" + data?.imgUrlAutside
                : checkbox === "inside"
                ? "https://cartestwebapp.herokuapp.com/" + data?.imgUrlInside
                : null
            }
            alt=""
          />
          <p>
            Tasvir tanlangan konfiguratsiyaga mos kelmasligi mumkin. Mashinaning
            rangi ushbu saytda taqdim etilganidan farq qilishi mumkin.
          </p>
          <div className="checkbox">
            <div>
              <input type="radio" id="autoside" name="img" value="autoside" onClick={()=> setCheckbox("autoside")}/> 
              <label for="html">Tashqi</label>
            </div>
             
            <div>
              <input type="radio" id="inside" name="img" value="inside" onClick={()=> setCheckbox("inside")} /> 
              <label for="css">Ichki makon</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelsAbout;
