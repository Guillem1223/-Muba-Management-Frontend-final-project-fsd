import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Performer.scss";
export const Performer = (props) => {
  const initialValues = {
    project_description: "",
    rate_nonprofit_event: "",
    rate_150_capacity_event: "",
    rate_300_capacity_event: "",
    rate_350_capacity_event: "",
    rate_1000_capacity_event: "",
  };
  const [project_description, setProject_description] = useState("");
  const [rate_nonprofit_event, setRate_nonprofit_event] = useState("");
  const [rate_150_capacity_event, setRate_150_capacity_event] = useState("");
  const [rate_300_capacity_event, setRate_300_capacity_event] = useState("");
  const [rate_350_capacity_event, setRate_350_capacity_event] = useState("");
  const [rate_1000_capacity_event, setRate_1000_capacity_event] = useState("");
  const handleProject_description = (ev) => {
    setProject_description(ev.target.value);
  };
  const handleRate_nonprofit_event = (ev) => {
    setRate_nonprofit_event(ev.target.value);
  };
  const handleRate_150_capacity_event = (ev) => {
    setRate_150_capacity_event(ev.target.value);
  };
  const handleRate_300_capacity_event = (ev) => {
    setRate_300_capacity_event(ev.target.value);
  };
  const handleRate_350_capacity_event = (ev) => {
    setRate_350_capacity_event(ev.target.value);
  };
  const handleRate_1000_capacity_event = (ev) => {
    setRate_1000_capacity_event(ev.target.value);
  };
  const credentials = {
    project_description,
    rate_nonprofit_event,
    rate_150_capacity_event,
    rate_300_capacity_event,
    rate_350_capacity_event,
    rate_1000_capacity_event,
  };
  const handleRegister = () => {
    register(credentials);
    navigate("/");
    console.log(credentials);
  };
  return (
    <div className="performerContainer">
      <div className="performerCard">
        <div className="form">
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputProjectDescription" className="form-label">
                Project Description
              </label>
              <textarea
                type="name"
                className="form-control"
                id="project_description"
                placeholder="Create a description of your musical project, number of members of the group or band, music style, target audience, musical career, etc."
                onChange={handleProject_description}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputRatenonprofitEvent" className="form-label">
                Set rate to nonprofit event
              </label>
              <input
                type="number"
                className="form-control"
                id="inputSurname"
                onChange={handleRate_nonprofit_event}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Set rate for event of 150 people capacity
              </label>
              <input
                type="number"
                className="form-control"
                id="inputEmail4"
                onChange={handleRate_150_capacity_event}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Set rate for event of 300 people capacity
              </label>
              <input
                type="number"
                className="form-control"
                id="inputEmail4"
                onChange={handleRate_300_capacity_event}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Set rate for event of 350 people capacity
              </label>
              <input
                type="number"
                className="form-control"
                id="inputEmail4"
                onChange={handleRate_350_capacity_event}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Set rate for event of 1000 people capacity
              </label>
              <input
                type="number"
                className="form-control"
                id="inputEmail4"
                onChange={handleRate_1000_capacity_event}
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
