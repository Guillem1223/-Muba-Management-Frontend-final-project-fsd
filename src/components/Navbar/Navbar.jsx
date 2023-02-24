import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import TokenStorageService from "../../../_services/TokenStorageService";
import { Navigate, useNavigate } from "react-router-dom";
import { decodeToken, useJwt } from "react-jwt";

export default function Navbar() {
  const navigate = useNavigate();
  const token = TokenStorageService.getToken();
  let { decodedToken } = useJwt(token);
  console.log(decodedToken);
  if (decodedToken === null) {
    decodedToken = { role: "" };
  }
  const handleLogout = () => {
    TokenStorageService.logout();
    navigate("/");
  };
  const isAdmin = () => {
    if (decodedToken.user_role == "super_admin") {
      return true;
    } else {
      return false;
    }
  };

  let userRole = decodedToken.user_role;
  if (userRole != "super_admin") {
    userRole = "";
  }
  useEffect(() => {
    isAdmin(token);
  }, [userRole]);
  if (token) {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
          <div className="containerNav">
            <a className="navbar-brand" href="/">
              <img
                className="logo"
                src="/img/LOGO MUBA Management.svg"
                alt="Muba Management & booking"
                width="30px"
                height="30px"
              />

              <span>Muba M&B</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/performers_list" className="nav-link" end>
                    Performers
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/user_profile" className="nav-link" href="#">
                    User Profile
                  </NavLink>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Register
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <NavLink
                        to={"/"}
                        onClick={handleLogout}
                        className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
                      >
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink to="/admin" className="nav-link">
                    {userRole}
                  </NavLink>
                </li>
              </ul>
              {/* <Search /> */}
            </div>
          </div>
        </nav>
      </div>
    );
  } else {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
          <div className="containerNav">
            <a className="navbar-brand" href="/">
              <img
                className="logo"
                src="/img/LOGO MUBA Management.svg"
                alt="Muba Management & Booking"
                width="30px"
                height="30px"
              />

              <span>Muba M&B</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Register
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink to="/" className="dropdown-item" href="#">
                        Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/signup" className="dropdown-item" href="#">
                        Sign Up
                      </NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">
                    About
                  </NavLink>
                </li>
              </ul>
              {/* <Search /> */}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
