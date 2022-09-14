import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Spin } from "antd";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Modal from "../../components/Modal/Modal";
import LoginComp from "../../components/Login/Login";

import admin from "../../assets/icons/admin.svg";
import { setChange } from "../../store/slices/changeRouter";
import { useCategoryMarkaQuery } from "../../store/endpoints/category";
import "./index.scss";

const Models = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const { data, isLoading } = useCategoryMarkaQuery();
  const token = localStorage.getItem("token");
  const link = () => {
    if (token === null) {
      setShow(true);
    } else {
      dispatch(setChange("admin"));
    }
  };
  const breadcrumb = [{ title: "Models", link: "/" }];

  return (
    <>
      {isLoading ? (
        <div className="progress">
          <Spin size="large" />
        </div>
      ) : (
        <>
          <div className="globalContainer modelsWrapper">
            <Breadcrumb data={breadcrumb} />
            <h4>Modellari</h4>

            <div className="adminBtn" onClick={link}>
              <img src={admin} alt="" />
            </div>

            <div className="modelsContainer">
              {data?.data?.data?.map((item) => (
                <Link to={`/models/${item._id}`}>
                  <div className="carAbout">
                    <img
                      src={"https://cartestwebapp.herokuapp.com/" + item.imgUrl}
                      alt=""
                      width={100}
                    />
                    <h4>{item.name.toUpperCase()}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {show && (
            <Modal
              children={<LoginComp setOpen={setShow} />}
              setOpen={setShow}
            />
          )}
        </>
      )}
    </>
  );
};

export default Models;
