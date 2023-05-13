import React, { useState, useEffect } from "react";
import UserService from "../../../_services/UserService";
import "./PerformerDetail.scss";
import { useNavigate, useParams } from "react-router-dom";

export function PerformerDetail() {
  const [performer, setPerformer] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  // const selectContract = navigate("/users/contract");
  useEffect(() => {
    getDetails(id);
    console.log("performer: ", performer);
  }, []);
  const getDetails = async (id) => {
    try {
      const response = await UserService.getUserById(id);
      setPerformer(response);
      console.log("response: ", performer);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div className="ptCSS">
      <h1>Performer Detail</h1>

      <div>
        <h4>{performer.nombre_user}</h4>
        <img
          src="/public/img/Foto estandar performersCard.svg"
          alt="Performer"
        />
        {performer.performers &&
          performer.performers.map((performerItem, index) => (
            <div key={index}>
              <h5>{performerItem.music_styles}</h5>
              <p>{performerItem.project_description}</p>
            </div>
          ))}
        <button
          className="btn btn-success"
          onClick={() => navigate("/users/contract")}
        >
          Contract
        </button>
      </div>
    </div>
  );
}
