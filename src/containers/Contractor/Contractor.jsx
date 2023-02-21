import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Contractor.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthService from "../../../_services/AuthService";
export const Contractor = (props) => {
  const navigate = useNavigate();
  const initialValues = {
    tax_data: "",
    backline: "",
    technical_rider: "",
  };
  const [tax_data, setTax_data] = useState("");
  const [backline, setBackline] = useState("");
  const [technical_rider, setTechnical_rider] = useState("");
  const { nombre_user, email, password, telefono, role } = useSelector(
    (state) => state.register
  );
  const handleTax_data = (ev) => {
    setTax_data(ev.target.value);
  };
  const handleBackline = (ev) => {
    setBackline(ev.target.value);
  };
  const handleTechnical_rider = (ev) => {
    setTechnical_rider(ev.target.value);
  };
  const credentials = {
    tax_data,
    backline,
    technical_rider,
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
  const handleRegister = () => {
    register(credentials);
    navigate("/");
    console.log(credentials);
  };
  return (
    <div className="contractorContainer">
      <div className="signCard">
        <div className="form">
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputTaxData" className="form-label">
                Tax Data
              </label>
              <input
                type="name"
                className="form-control"
                id="inputName"
                onChange={handleTax_data}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputSurname" className="form-label">
                Technical Rider
              </label>
              <textarea
                type="name"
                className="form-control"
                id="inputSurname"
                placeholder="If you have material and sound equipment, create a list. If you don't have equipment, don't worry! just comment here"
                onChange={handleTechnical_rider}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Backline
              </label>
              <textarea
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="If you have material and instruments, create a list. If you don't have equipment, don't worry! just comment here"
                onChange={handleBackline}
              />
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
