import React, { useState } from "react";
import {Link} from "react-router-dom"
import subtract from "../../assets/icons/subtract.svg";
import user from "../../assets/images/user.png";
import LoginComp from "../../components/Login/Login";
import Modal from "../../components/Modal/Modal";
import "./index.scss";
const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <div className="wrapper">
      <div className="mainContainer ">
       <Link to={"/"}> <img src={subtract} alt="" /></Link>
        <div className="icons">
          <Link to={"/models"}><p>Modellar</p></Link>
          <img src={user} alt="user" className="user" width={20} onClick={()=> setOpen(true)}/>
        </div>
      </div>
    </div>
   {open &&  <Modal children={<LoginComp/>} setOpen={setOpen} />}
    </>
  );
};

export default Home;
