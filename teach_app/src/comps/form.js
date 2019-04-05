import React, { useState } from "react";
import axios from "axios";

const Form = props => {
  const [name, setName] = useState("");
  const [passw, setPassword] = useState("");
  const [dep_id, setDep] = useState("");
  const [logIn, setLogin] = useState("Logged In");
  const [signupMsg, setSignupMsg] = useState();

  const capInput = e => {
    switch (e.target.id) {
      case "name": {
        setName(e.target.value);
        break;
      }
      case "password": {
        setPassword(e.target.value);
        break;
      }
      case "department": {
        setDep(e.target.value);
        break;
      }
    }
  };

  const newTeachRegister = e => {
    e.preventDefault();
    if (props.location.pathname === "/signup") {
      const newTeach = {
        tea_name: name,
        tea_passw: passw,
        tea_dep_id: dep_id
      };
      const regApi = "http://www.localhost:4000/api/register";
      axios
        .post(regApi, newTeach)
        .then(res => {
          setSignupMsg("Successful Signup!!!");
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      const newTeach = {
        tea_name: name,
        tea_passw: passw,
        tea_dep_id: dep_id
      };
      const regApi = "http://www.localhost:4000/api/login";
      axios
        .post(regApi, newTeach)
        .then(res => {
          window.localStorage.setItem("token", res.data);
          setLogin("");
          setLogin("Logged In");
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return localStorage.getItem("token") ? (
    <div>
      {logIn} {console.log(logIn)}
    </div>
  ) : (
    <div className="formCont" onSubmit={newTeachRegister}>
      <div
        className={
          props.history.action === "REPLACE" ? "messege" : "message hidden"
        }
      >
        Please Log In
      </div>
      {signupMsg ? (
        <div className="success"> Successful Signup </div>
      ) : (
        <form className="form">
          <div className="nameField setForm">
            <label htmlFor="name" className="labelName label">
              Name:{" "}
            </label>
            <input type="text" id="name" onChange={capInput} />
          </div>
          <div className="passField setForm">
            <label htmlFor="password" className="labelPass label">
              Password:{" "}
            </label>
            <input type="text" id="password" onChange={capInput} />
          </div>
          {props.history.location.pathname === "/signup" ? (
            <div className="department setForm">
              <label htmlFor="department" className="label">
                Department ID:{" "}
              </label>
              <input type="number" id="department" onChange={capInput} />
            </div>
          ) : null}
          <button className="formSubmit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Form;
