import React, { useState } from "react";
import requestApi from "../../api/requestApi";
import comment from "../../assets/icons/comment.svg";
import "./index.scss";
const AddNewCar = ({ setOpen }) => {
  const [marka, setMarka] = useState("");
  const [tanirofka, setTanirofka] = useState("");
  const [motor, setMotor] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [distance, setDistance] = useState("");
  const [gearbook, setGearbook] = useState("");
  const [price, setPrice] = useState("");
  const [imgAutoside, setImgAutoside] = useState("");
  const [imgInside, setImgInside] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  const handleChange = (e) => {
    setImgAutoside(e.target.files[0]);
  };
  const handleChange2 = (e) => {
    setImgInside(e.target.files[0]);
  };
  const handleChange3 = (e) => {
    setImg(e.target.files[0]);
  };

  const onSumbit = (e) => {
    e.preventDefault();
    // requestApi.post("/upload", img).then((res) => {
    //   if (res.status === 200) {

    //   }
    // });

    const data = {
      imgUrl: img,
      imgUrlInside: imgInside,
      imgUrlAutside: imgAutoside,
      price: price,
      year: year,
      description: description,
      tonirovka: tanirofka,
      motor: motor,
      color: color,
      distance: distance,
      gearbok: gearbook,
      categoryId: "63180c53d0953487569045c7",
    };
    requestApi.post("/car", data).then((res) => {
      if(res.status !== 200){
        alert(res.message)
      }
    });
  };
  return (
    <section className="addNewCarContainer">
      <div className="newCarHead">
        <h4>Mashina qo'shish</h4>
        <img src={comment} alt="" onClick={() => setOpen(false)} />
      </div>
      <form onSubmit={(e) => onSumbit(e)}>
        <div>
          <p>Markasi</p>
          <select id="cars" onChange={(e) => setMarka(e.target.value)}>
            <option value="lada">LADA</option>
            <option value="chevrolet">CHEVROLET</option>
            <option value="lambarghini">LAMBARGHINI</option>
            <option value="ferrari">FERRARI</option>
          </select>
        </div>
        <div>
          <p>Tanirovkasi</p>
          <select id="radio" onChange={(e) => setTanirofka(e.target.value)}>
            <option value="yo'q">Yo'q</option>
            <option value="bor">Bor</option>
          </select>
        </div>
        <div>
          <p>Motor</p>
          <input
            type="text"
            placeholder="Kiriting"
            onChange={(e) => setMotor(e.target.value)}
          />
        </div>
        <div>
          <p>Year</p>
          <input
            type="text"
            placeholder="Kiriting"
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div>
          <p>Color</p>
          <input
            type="text"
            placeholder="Kiriting"
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div>
          <p>Distance</p>
          <input
            type="text"
            placeholder="Kiriting"
            onChange={(e) => setDistance(e.target.value)}
          />
        </div>
        <div>
          <p>Gearbook</p>
          <input
            type="text"
            placeholder="Kiriting"
            onChange={(e) => setGearbook(e.target.value)}
          />
        </div>
        <div>
          <p>Narxi</p>
          <input
            type="text"
            placeholder="Kiriting"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <p>Rasm 360 ichki makon</p>
          <input onChange={handleChange} type="file" placeholder="Yuklash" />
        </div>
        <div>
          <p>Rasm 360 tashqi makon</p>
          <input onChange={handleChange2} type="file" placeholder="Yuklash" />
        </div>
        <div>
          <p>Description</p>
          <input
            type="text"
            placeholder="Mazmuni kiriting"
            className="des"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <p>Model turi uchun rasm</p>
          <input
            onChange={handleChange3}
            type="file"
            accept=".png,.jpeg,.doc,.jpg"
            placeholder="Yuklash"
          />
        </div>
        <button>Saqlash</button>
      </form>
    </section>
  );
};

export default AddNewCar;
