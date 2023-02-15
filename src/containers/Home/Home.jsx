import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import TokenStorageService from "../../../_services/TokenStorageService";
import AuthService from "../../../_enviroments/AuthService";
export const Home = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      login(credentials);
    }
    console.log(formErrors);
  }, [formErrors]);

  const credentials = {
    email: formValues.email,
    password: formValues.password,
  };
  const login = async (credentials) => {
    try {
      const res = await AuthService.login(credentials);
      console.log(res.data);
      TokenStorageService.saveToken(res.data.token);
      console.log(res.data.role);
      sessionStorage.setItem("userId", res.data.id);
      switch (res.data.role) {
        case "user":
          navigate("/movies");
          break;
        case "super_admin":
          navigate("/admin");
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="homeContainer">
      {/* <video
        src="/img/CELEBRACIONES3.mp4"
        autoPlay="true"
        loop="true"
        className="backgroundVideo"
      > */}
      <div className="homeCard">
        <div className="form">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                // value={formValues.email}
                // onChange={handleChange}
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text form-text-error">
                {formErrors.email}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                value={formValues.password}
                // onChange={handleChange}
              />
              <div id="emailHelp" className="form-text form-text-error">
                {formErrors.password}
              </div>
            </div>
            <div className="d-grid gap-2">
              <button
                onClick={() => login(credentials)}
                className="btn btn-success fw-bold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* </video> */}
    </div>
  );
};

Home.propTypes = {};
