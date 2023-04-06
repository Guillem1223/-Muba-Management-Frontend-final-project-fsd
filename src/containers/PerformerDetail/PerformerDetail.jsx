import React, { useState, useEffect } from "react";
import UserService from "../../../_services/UserService";

import { useParams } from "react-router-dom";

export function PerformerDetail() {
  const [performer, setPerformer] = useState([]);
  const { id } = useParams();

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
    <div>
      <h1>Performer Detail</h1>

      <div>
        <h4>{performer.nombre_user}</h4>
        <img
          src="/public/img/Foto estandar performersCard.svg"
          alt="Performer"
        />
        {performer.performers.map((performerItem, index) => (
          <p>{performerItem.project_description}</p>
        ))}
        <button className="btn btn-success">Contract</button>
      </div>
    </div>
  );
}
