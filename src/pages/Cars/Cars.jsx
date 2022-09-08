import React, { useEffect, useState } from "react";
import requestApi from "../../api/requestApi";
import AddNewCar from "../../components/AddNewCar/AddNewCar";
import Modal from "../../components/Modal/Modal";
import "./index.scss";
const Cars = () => {
  const [data, setData] = useState([]);
  const [check, setCheck] = useState("63180c53d0953487569045c7");
  const [open, setOpen] = useState(false);
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
  const Checkbox = (e) => {
    if (e.target.id === "lada") {
      setCheck("63180c53d0953487569045c7");
    } else if (e.target.id === "chevrolet") {
      setCheck("631810ae7ff943f201d4ca7c");
    } else if (e.target.id === "lambarghini") {
      setCheck("631810a77ff943f201d4ca77");
    } else {
      setCheck("631810a57ff943f201d4ca72");
    }
  };
  useEffect(() => {
    requestApi.get(`/car?limit=5&page=1&categoryId=${check}`).then((res) => {
      setData(res?.data?.data?.data);
    });
  }, [check]);
  return (
    <>
      <div className="cars_container">
        <div className="cars_nav">
          <p>Mashinalar</p>
          <button onClick={() => setOpen(true)}>Mashina qo‘shish</button>
        </div>
        <div>
          <table>
            <tr>
              {tableTh.map((item) => (
                <th>{item.title}</th>
              ))}
            </tr>
            {data.map((item, index) => (
              <tr>
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
              </tr>
            ))}
          </table>
        </div>
        <div className="checkboxCars">
          <div>
            <input
              type="radio"
              id="lada"
              name="img"
              value="lada"
              onClick={(e) => Checkbox(e)}
            />
             <label for="lada">Lada</label>
          </div>
           
          <div>
            <input
              type="radio"
              id="chevrolet"
              name="img"
              value="chevrolet"
              onClick={(e) => Checkbox(e)}
            />
             <label for="chevrolet">Chevrolet</label>
          </div>
          <div>
            <input
              type="radio"
              id="lambarghini"
              name="img"
              value="lambarghini"
              onClick={(e) => Checkbox(e)}
            />
             <label for="lambarghini">Lambarghini</label>
          </div>
          <div>
            <input
              type="radio"
              id="ferrari"
              name="img"
              value="ferrari"
              onClick={(e) => Checkbox(e)}
            />
             <label for="ferrari">Ferrari</label>
          </div>
        </div>
        <p>(All cars yoqligi uchun qo'shib qo'ydim)</p>
      </div>
      {open && <Modal children={<AddNewCar setOpen={setOpen} />} setOpen={setOpen} />}
    </>
  );
};

export default Cars;
