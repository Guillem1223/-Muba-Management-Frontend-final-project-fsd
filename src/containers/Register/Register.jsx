import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Register.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setNombre_user,
  setEmail,
  setPassword,
  setTelefono,
  setRole,
} from "../../store/slices/register/registerSlice";
export const Register = (props) => {
  const { nombre_user, email, password, telefono, role } = useSelector(
    (state) => state.register
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const [nombre_user, setNombre_user] = useState("");
  //   const [mail, setMail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [telefono, setTelefono] = useState("");
  const handleNombre_user = (ev) => {
    dispatch(setNombre_user(ev.target.value));
  };
  const handleMail = (ev) => {
    dispatch(setEmail(ev.target.value));
  };
  const handlePassword = (ev) => {
    dispatch(setPassword(ev.target.value));
  };
  const handleTelefono = (ev) => {
    dispatch(setTelefono(ev.target.value));
  };

  const credentials = {
    nombre_user,
    email,
    password,
    telefono,
    role,
  };

  const register = (credentials) => {
    try {
      AuthService.register(credentials);
    } catch (error) {
      console.log(error);
    }
  };

  const handleContractor = () => {
    dispatch(setRole("contractor"));
    navigate("/contractor_profile");
  };
  const handlePerformer = () => {
    dispatch(setRole("performer"));
    navigate("/performer_profile");
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
                onChange={handleNombre_user}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputSurname" className="form-label">
                Phone Number
              </label>
              <input
                type="name"
                className="form-control"
                id="inputSurname"
                onChange={handleTelefono}
              />
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
                <button
                  id="buttonPerformer"
                  className="btn btn-success"
                  onClick={handlePerformer}
                >
                  Performer
                </button>

                <button
                  id="buttonContractor"
                  className="btn btn-success"
                  onClick={handleContractor}
                >
                  Contractor
                </button>
              </div>
              <span>Choose your Role to use the platform</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
Register.propTypes = {};
