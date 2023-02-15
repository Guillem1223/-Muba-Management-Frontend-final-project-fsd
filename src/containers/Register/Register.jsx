import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Register.scss";
import { NavLink, useNavigate } from "react-router-dom";

export const Register = (props) => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    telefono: "",
  };

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const handleName = (ev) => {
    setName(ev.target.value);
  };
  const handleMail = (ev) => {
    setMail(ev.target.value);
  };
  const handlePassword = (ev) => {
    setPassword(ev.target.value);
  };

  const credentials = {
    name,
    email: mail,
    password,
    telefono,
  };

  const register = (credentials) => {
    try {
      AuthService.register(credentials);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = () => {
    register(credentials);
    navigate("/");
    console.log(credentials);
  };
  return (
    <div className="registerContainer">
      <img className="backgroundHome" src="/img/home.webp" alt="" />
      <div className="signCard">
        <div className="form">
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Name
              </label>
              <input
                type="name"
                className="form-control"
                id="inputName"
                onChange={handleName}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputSurname" className="form-label">
                Phone Number
              </label>
              <input type="name" className="form-control" id="inputSurname" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                onChange={handleMail}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                onChange={handlePassword}
              />
            </div>

            <div className="col-12">
              <div className="form-check">
                <button id="buttonPerformer" className="btn btn-success">
                  Performer
                </button>

                <button id="buttonContractor" className="btn btn-success">
                  Contractor
                </button>
              </div>
              <span>Choose your Role to use the platform</span>
            </div>
            <div className="col-12"></div>
            <button className="btn btn-success" onClick={handleRegister}>
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
Register.propTypes = {};
