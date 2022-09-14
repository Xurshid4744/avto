import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Spin } from "antd";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Modal from "../../components/Modal/Modal";
import LoginComp from "../../components/Login/Login";

import { useCarsByCategoryIdQuery } from "../../store/endpoints/car";
import { setChange } from "../../store/slices/changeRouter";

import admin from "../../assets/icons/admin.svg";

import "./index.scss";

const ModelsAll = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useCarsByCategoryIdQuery({
    categoryId: params.id,
  });
  const token = localStorage.getItem("token");
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
          <div className="globalContainer modelsAllWrapper">
            <Breadcrumb data={breadcrumb} />
            <h4>Modellar turlari</h4>
            <div className="adminBtn" onClick={link}>
              <img src={admin} alt="" />
            </div>
            <div className="modelsContainer">
              {data?.data?.data?.length > 0
                ? data?.data?.data?.map((item) => (
                    <Link to={`${item._id}`}>
                      <div className="carAbout">
                        <img
                          src={
                            "https://cartestwebapp.herokuapp.com/" + item.imgUrl
                          }
                          alt=""
                          width={100}
                        />
                        <h4>{item.marka.name}</h4>
                        <h4>Narxi: {Number(item.price).toLocaleString()}</h4>
                      </div>
                    </Link>
                  ))
                : "Bu markada mashina mavjud emasss !"}
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

export default ModelsAll;
