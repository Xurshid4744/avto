import React, { useState } from "react";
import requestApi from "../../api/requestApi";
import "./index.scss";

const LoginComp = () => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const [singNumber, setSingNumber] = useState("");
  const [singpassword, setSingPassword] = useState("");

  const Login = (e) => {
    e.preventDefault();
    const data = {
      phoneNumber: number,
      password: password,
    };
    console.log(data, "bu data");
    requestApi.post("/employee/login", data).then((res) => {
      if (res.status === 200) {
        localStorage.setItem("token", res.data?.data?.token);
        window.location.reload()
      }
    });
  };

  const SingUp = (e) => {
    e.preventDefault();
    const data = {
      phoneNumber: singNumber,
      password: singpassword,
    };
    requestApi.post("/employee/login", data).then((res) => {
      if (res.status === 200) {
        localStorage.setItem("token", res.data?.data?.token);
        window.location.reload()
      }
    });
  };
  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="signup">
        <form onSubmit={(e) => Login(e)}>
          <label for="chk" aria-hidden="true">
            Login
          </label>
          <input
            type="number"
            placeholder="Number"
            required
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Login</button>
        </form>
      </div>

      <div className="login">
        <form onSubmit={(e) => SingUp(e)}>
          <label for="chk" aria-hidden="true">
            Sign up
          </label>
          <input
            type="number"
            placeholder="Number"
            required
            onChange={(e) => setSingNumber(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setSingPassword(e.target.value)}
          />
          <button> Sign up </button>
        </form>
      </div>
    </div>
  );
};

export default LoginComp;
