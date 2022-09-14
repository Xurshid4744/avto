import React, { useEffect, useState } from "react";
import { message } from "antd";
import Progress from "../Progress/Progress";
import requestApi from "../../api/requestApi";
import comment from "../../assets/icons/comment.svg";
import check from "../../assets/icons/check.svg";

import { useCreateCarMutation } from "../../store/endpoints/car";
import { useCategoryMarkaQuery } from "../../store/endpoints/category";
import { useUploadMutation } from "../../store/endpoints/upload";
import "./index.scss";

const AddNewCar = ({ setOpen }) => {
  const [marka, setMarka] = useState("6320ca9b65eb5d15561bc042");
  const [tanirofka, setTanirofka] = useState("yoq");
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
  const [progress, setProgress] = useState(false);
  const [progress2, setProgress2] = useState(false);
  const [progress3, setProgress3] = useState(false);

  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(true);
  const [check3, setCheck3] = useState(true);

  const { data } = useCategoryMarkaQuery();
  const [postCar] = useCreateCarMutation();
  const [uploadFile] = useUploadMutation();
  const key = "updatable";

  const openMessage = () => {
    message.loading({
      content: "Loading...!",
      key,
    });
    setTimeout(() => {
      message.success({
        content: "Mashina muvaffaqiyatli qo'shildi !",
        key,
        duration: 2,
      });
    }, 1000);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const handleChange = (e) => {
    setProgress(true);
    const form = new FormData();
    form.append("file", e.target.files[0]);
    uploadFile({ form })
      .unwrap()
      .then((res) => {
        console.log(res, "llllllllllllll");
        if (res.statusCode === 200) {
          setImgAutoside(res?.data);
          setProgress(false);
          setCheck1(false);
        } else {
          alert("Rasm qo'shishda xatolik bo'ldi!");
        }
      });
  };
  const handleChange2 = (e) => {
    setProgress2(true);
    const form = new FormData();
    form.append("file", e.target.files[0]);
    uploadFile({ form })
      .unwrap()
      .then((res) => {
        if (res.statusCode === 200) {
          setProgress2(false);
          setImgInside(res?.data);
          setCheck2(false);
        } else {
          alert("Rasm qo'shishda xatolik bo'ldi!");
        }
      });
  };
  const handleChange3 = (e) => {
    setProgress3(true);
    const form = new FormData();
    form.append("file", e.target.files[0]);
    uploadFile({ form })
      .unwrap()
      .then((res) => {
        if (res.statusCode === 200) {
          setProgress3(false);
          setImg(res?.data);
          setCheck3(false);
        } else {
          alert("Rasm qo'shishda xatolik bo'ldi!");
        }
      });
  };

  const onSumbit = (e) => {
    e.preventDefault();
    const data = {
      imgUrl: img,
      imgUrlInside: imgAutoside,
      imgUrlAutside: imgInside,
      price: +price,
      year: +year,
      description: description,
      tonirovka: tanirofka,
      motor: motor,
      color: color,
      distance: distance,
      gearbok: gearbook,
      categoryId: marka,
    };
    const post = postCar({ data }).unwrap();
    post.then((res) => {
      if (res.statusCode === 200) {
        setOpen(false);
        openMessage();
      } else {
        alert("Markada xatolik bo'lishi mumkin");
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
            {data?.data?.data?.map((item) => (
              <option value={item._id}>{item.name.toUpperCase()}</option>
            ))}
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
            required
            type="text"
            placeholder="Kiriting"
            onChange={(e) => setMotor(e.target.value)}
          />
        </div>
        <div>
          <p>Year</p>
          <input
            required
            type="text"
            placeholder="Kiriting"
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div>
          <p>Color</p>
          <input
            required
            type="text"
            placeholder="Kiriting"
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div>
          <p>Distance</p>
          <input
            required
            type="text"
            placeholder="Kiriting"
            onChange={(e) => setDistance(e.target.value)}
          />
        </div>
        <div>
          <p>Gearbook</p>
          <input
            required
            type="text"
            placeholder="Kiriting"
            onChange={(e) => setGearbook(e.target.value)}
          />
        </div>
        <div>
          <p>Narxi</p>
          <input
            required
            type="text"
            placeholder="Kiriting"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <p>Rasm 360 ichki makon</p>
          <input
            required onChange={handleChange} type="file" placeholder="Yuklash" />
          <img src={check} alt="" hidden={check1} />
          {progress && (
            <span className="progresss">
              <Progress />
            </span>
          )}
        </div>
        <div>
          <p>Rasm 360 tashqi makon</p>
          <input
            required onChange={handleChange2} type="file" placeholder="Yuklash" />
          <img src={check} alt="" hidden={check2} />
          {progress2 && (
            <span className="progresss">
              <Progress />
            </span>
          )}
        </div>
        <div>
          <p>Description</p>
          <input
            required
            type="text"
            placeholder="Mazmuni kiriting"
            className="des"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <p>Model turi uchun rasm</p>
          <input
            required
            onChange={handleChange3}
            type="file"
            accept=".png,.jpeg,.doc,.jpg"
            placeholder="Yuklash"
          />
          <img src={check} alt="" hidden={check3} />
          {progress3 && (
            <span className="progresss">
              <Progress />
            </span>
          )}
        </div>
        <button>Saqlash</button>
      </form>
    </section>
  );
};

export default AddNewCar;
