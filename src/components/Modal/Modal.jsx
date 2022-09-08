import React from "react";
import "./index.scss";
const Modal = ({ children, setOpen }) => {
  return (
    <>
      <div className="modal_content">{children}</div>
      <div className="modal_container" onClick={() => setOpen(false)}></div>
    </>
  );
};

export default Modal;
