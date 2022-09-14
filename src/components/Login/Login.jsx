import React, { useState } from "react";
import requestApi from "../../api/requestApi";
import { useDispatch } from "react-redux";
import { Button, Form, Input, message } from "antd";
import close from "../../assets/icons/comment.svg";

import { useNavigate } from "react-router-dom";
import { setChange } from "../../store/slices/changeRouter";
import { useLoginMutation } from "../../store/endpoints/login";
import "./index.scss";

const LoginComp = ({ setOpen }) => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [postLogin] = useLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const key = "updatable";

  const openMessage = () => {
    message.loading({
      content: "Loading...!",
      key,
    });
    setTimeout(() => {
      message.success({
        content: "Tizimga kirilmoqda !",
        key,
        duration: 2,
      });
    }, 1000);
    setTimeout(() => {
      dispatch(setChange("admin"));
      navigate("/");
      window.location.reload();
    }, 2000);
  };
  const openError = () => {
    message.loading({
      content: "Loading...!",
      key,
    });
    setTimeout(() => {
      message.warning({
        content: "Bunday foydalanuvchi mavjud emas",
        key,
        duration: 2,
      });
    }, 1000);
  };

  const Login = (e) => {
    e.preventDefault();
    const data = {
      phoneNumber: number,
      password: password,
    };
    const creat = postLogin({ data }).unwrap();
    creat.then((res) => {
      if (res.statusCode === 200) {
        localStorage.setItem("token", res.data?.token);
        openMessage();
      } else {
        openError();
      }
    });
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      autoComplete="off"
      className="form"
    >
      <h1 className="title">Login</h1>

      <Form.Item
        label="Number"
        name="name"
        rules={[{ required: true, message: "Please enter your name!" }]}
      >
        <Input
          type="text"
          showCount={false}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="email"
        rules={[{ required: true, message: "Please enter your email!" }]}
      >
        <Input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 10, span: 10 }}>
        <Button type="primary" ghost={true} onClick={Login}>
          Kirish
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginComp;
