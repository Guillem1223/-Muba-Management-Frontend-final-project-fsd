import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./Cards.scss";

export const Cards = ({ performers }) => {
  console.log("props: ", performers);
  const navigate = useNavigate();
  const selectPerformer = (performers) => {
    navigate(`/users/${performers.users_type_id}`);
  };
  console.log("performers: " + performers);
  return (
    <div className="cardsContainer">
      <div className="card" style={{ width: "20rem" }}>
        <img
          src="/public/img/Foto estandar performersCard.svg"
          className="card-img-top"
          alt="Performer img"
        />
        <div className="card-body">
          <h2 className="card-title">{performers.nombre_user}</h2>
          {performers.performers.map((performersItem, index) => (
            <h5>{performersItem.music_styles}</h5>
          ))}
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
