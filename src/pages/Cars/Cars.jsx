import React, { useState } from "react";
import { Pagination, message } from "antd";

import AddNewCar from "../../components/AddNewCar/AddNewCar";
import Modal from "../../components/Modal/Modal";
import AddNewMarka from "../../components/AddNewMarka/AddNewMarka";

import button from "../../assets/icons/Button.svg";
import button2 from "../../assets/icons/buttonCarAdd.svg";
import deletee from "../../assets/icons/delete.svg";
import edit from "../../assets/icons/edit.svg";

import {
  useAllCarsQuery,
  useDeleteCarMutation,
} from "../../store/endpoints/car";

import "./index.scss";

const Cars = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [num, setNum] = useState(1);
  const { data } = useAllCarsQuery({ page: num });
  const [removId] = useDeleteCarMutation();
  const tableTh = [
    { title: "#" },
    { title: "Markasi" },
    { title: "Gearbook" },
    { title: "Tanirovkasi" },
    { title: "Motor" },
    { title: "Year" },
    { title: "Color" },
    { title: "Distance" },
  ];

  const key = "updatable";
  const openMessage = () => {
    message.loading({
      content: "Loading...!",
      key,
    });
    setTimeout(() => {
      message.success({
        content: "Mashina muvaffaqiyatli ochirildi !",
        key,
        duration: 2,
      });
    }, 1000);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const Remove = (id) => {
    removId({ id })
      .unwrap()
      .then((res) => {
        if (res.statusCode === 200) {
          openMessage();
        }
      });
  };
  const Edit = () => {
    alert("Edit function xali mavjud emas !");
  };

  return (
    <>
      <div className="cars_container">
        <div className="cars_nav">
          <p>Mashinalar</p>
          <div className="cars_button">
            <img src={button} alt="" onClick={() => setShow(true)} />
            <img src={button2} alt="" onClick={() => setOpen(true)} />
          </div>
        </div>
        <div>
          <table>
            <tr>
              {tableTh?.map((item) => (
                <th>{item.title}</th>
              ))}
            </tr>
            {data?.data?.data?.map((item, index) => (
              <tr className="tr">
                <>
                  <td>{index + 1}</td>
                  <td>{item.marka.name}</td>
                  <td>{item.gearbok}</td>
                  <td>{item.tonirovka}</td>
                  <td>{item.motor}</td>
                  <td>{item.year}</td>
                  <td>{item.color}</td>
                  <td>{item.distance}</td>
                </>
                <div className="edit">
                  <img src={edit} alt="" onClick={Edit} />
                  <img src={deletee} alt="" onClick={() => Remove(item._id)} />
                </div>
              </tr>
            ))}
          </table>
        </div>
        <div className="checkboxCars">
          <Pagination
            defaultCurrent={1}
            current={num}
            onChange={(e) => setNum(e)}
            total={data?.data?.total}
          />
        </div>
      </div>
      {open && (
        <Modal children={<AddNewCar setOpen={setOpen} />} setOpen={setOpen} />
      )}
      {show && (
        <Modal children={<AddNewMarka setOpen={setShow} />} setOpen={setShow} />
      )}
    </>
  );
};

export default Cars;
