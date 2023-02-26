import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./Cards.scss";

export const Cards = ({ performers }) => {
  const navigate = useNavigate();
  const selectPerformer = (performers) => {
    navigate(`/performers/${performers.users_type_id}`);
  };

  return (
    <div className="cardsContainer">
      <div className="card" style={{ width: "20rem" }}>
        <img
          src="/public/img/Foto estandar performersCard.svg"
          className="card-img-top"
          alt="Performer img"
        />
        <div className="card-body">
          <h5 className="card-title">{performers.nombre_user}</h5>
          <button
            onClick={() => selectPerformer(performers)}
            className="btn btn-primary text-white"
          >
            View more
          </button>
        </div>
      </div>
    </div>
  );
};
