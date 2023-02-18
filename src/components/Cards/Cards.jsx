import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const Cards = ({ card }) => {
  const navigate = useNavigate();
  const selectCharacter = (card) => {
    navigate(`/performers/${users_type_id}`);
  };

  return (
    <div>
      <div className="card" style={{ width: "13rem" }}>
        <img src={character.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <button
            onClick={() => selectCharacter(character)}
            className="btn btn-primary text-white"
          >
            View more
          </button>
        </div>
      </div>
    </div>
  );
};
