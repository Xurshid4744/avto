import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Spin } from "antd";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Modal from "../../components/Modal/Modal";
import LoginComp from "../../components/Login/Login";
import Img360 from "../../components/Img360/Img360";

import { useCarsByIdQuery } from "../../store/endpoints/car";
import { setChange } from "../../store/slices/changeRouter";

import admin from "../../assets/icons/admin.svg";

import "./index.scss";

const ModelsAbout = () => {
  const [checkbox, setCheckbox] = useState("autoside");
  const params = useParams();
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useCarsByIdQuery({
    id: params.id,
  });

  const link = () => {
    if (token === null) {
      setOpen(true);
    } else {
      dispatch(setChange("admin"));
      navigate("/");
    }
  };
  const func = () => {
    setOpen(false);
    setShow(true);
  };
  const breadcrumb = [
    { title: "Models", link: "/" },
    { title: "Mashina turi", link: "#" },
  ];

  return (
    <>
      {isLoading ? (
        <div className="progress">
          <Spin size="large" />
        </div>
      ) : (
        <>
          <div className="globalContainer modelsAboutWrapper">
            <Breadcrumb data={breadcrumb} />
            <h4>Modellari</h4>
            <div className="adminBtn" onClick={link}>
              <img src={admin} alt="" />
            </div>
            <div className="modelsContainer">
              <div className="modelsLeft">
                <h6>{data?.data?.marka?.name}</h6>
                <p>{Number(data?.data?.price).toLocaleString()} so'm dan</p>
                <img
                  src={
                    "https://cartestwebapp.herokuapp.com/" + data?.data?.imgUrl
                  }
                  alt=""
                />
                <p>
                  <b>Marka</b>: {data?.data?.marka?.name}
                </p>
                <p>
                  <b>Tanirovka</b>: {data?.data?.tonirovka}
                </p>
                <p>
                  <b>Motor</b>: {data?.data?.motor}
                </p>
                <p>
                  <b>Year</b>: {data?.data?.year}
                </p>
                <p>
                  <b>Color</b>: {data?.data?.color}
                </p>
                <p>
                  <b>Distance</b>: {data?.data?.distance} km
                </p>
                <p>
                  <b>Gearbook</b>: {data?.data?.gearbok}
                </p>
                <p>
                  <b>Description</b>: {data?.data?.description}
                </p>
                <span>
                  <b>Umumiy xarajat</b>:{" "}
                  {Number(data?.data?.price).toLocaleString()} so'm dan
                </span>
              </div>
              <div className="modelRight">
                <h6>{data?.data?.marka?.name}</h6>
                {checkbox === "autoside" ? (
                  <div className="image">
                    <Img360
                      props={
                        "https://cartestwebapp.herokuapp.com/" +
                        data?.data?.imgUrlAutside
                      }
                    />
                  </div>
                ) : checkbox === "inside" ? (
                  <div className="image">
                    <Img360
                      props={
                        "https://cartestwebapp.herokuapp.com/" +
                        data?.data?.imgUrlInside
                      }
                    />
                  </div>
                ) : null}

                <p>
                  Tasvir tanlangan konfiguratsiyaga mos kelmasligi mumkin.
                  Mashinaning rangi ushbu saytda taqdim etilganidan farq qilishi
                  mumkin.
                </p>
                <div className="checkbox">
                  <div>
                    <input
                      type="radio"
                      id="autoside"
                      name="img"
                      value="autoside"
                      onClick={() => setCheckbox("autoside")}
                    />
                     <label for="html">Tashqi</label>
                  </div>
                   
                  <div>
                    <input
                      type="radio"
                      id="inside"
                      name="img"
                      value="inside"
                      onClick={() => setCheckbox("inside")}
                    />
                     <label for="css">Ichki makon</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {open && (
            <Modal setOpen={setOpen}>
              <div className="linkToAdmin">
                <h1>Iltimos tizimga kiring !!</h1>
                <button onClick={func}>Tizimga Kirish!!</button>
              </div>
            </Modal>
          )}
          {show && <Modal children={<LoginComp />} setOpen={setShow} />}
        </>
      )}
    </>
  );
};
export default ModelsAbout;
