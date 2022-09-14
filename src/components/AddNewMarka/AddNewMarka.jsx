import React, { useState } from "react";
import requestApi from "../../api/requestApi";
import comment from "../../assets/icons/comment.svg";
import { useCreatCategoryMutation } from "../../store/endpoints/category";
import "./index.scss";

const AddNewMarka = ({ setOpen }) => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [category] = useCreatCategoryMutation();

  const handleChange = (e) => {
    const form = new FormData();
    form.append("file", e.target.files[0]);
    requestApi.post("/upload", form).then((res) => {
      if (res.status === 200) {
        console.log("SUCCSESS");
        setImg(res.data?.data);
      }
    });
  };

  const onSumbit = (e) => {
    e.preventDefault();
    const data = {
      imgUrl: img,
      name: name,
    };
    const creat = category({ data }).unwrap();
    creat.then((res) => {
      if (res.statusCode === 200) {
        setOpen(false);
      }
    });
  };

  return (
    <section className="addNewMarkaContainer">
      <div className="newCarHead">
        <h4>Mashina qo'shish</h4>
        <img src={comment} alt="" onClick={() => setOpen(false)} />
      </div>
      <form onSubmit={(e) => onSumbit(e)}>
        <div>
          <p>Markasi</p>
          <input
            type="text"
            placeholder="Kiriting"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <p>Rasm 360 ichki makon</p>
          <input
            onChange={handleChange}
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

export default AddNewMarka;
