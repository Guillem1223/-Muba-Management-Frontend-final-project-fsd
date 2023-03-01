import React, { useEffect, useState } from "react";
import { Cards } from "../../components/Cards/Cards";
import UserService from "../../../_services/UserService";
import "./PerformersList.scss";
export function PerformersList() {
  // HOOKS
  const [performers, setPerformers] = useState([]);

  useEffect(() => {
    UserService.findByRole()
      .then((res) => {
        console.log("res.data: ", res);
        const performerUsers = res.filter(
          (users) => users.role === "performer"
        );
        setPerformers(performerUsers);
      })
      .catch((error) => {
        console.log(error.message || error);
      });
  }, []);

  const selectPerformer = (performers) => {
    navigate(`/performer/${performers.performers_id}`);
  };

  return (
    <div className="container-fluid vw-100  ">
      <h1>Performers List</h1>
      <div className="PerformersList container-fluid justify-content-center align-items-center col">
        {performers &&
          performers.length > 0 &&
          performers.map((perf) => (
            <Cards
              performers={perf}
              key={performers.performers_id}
              onClick={() => selectPerformer(perf)}
            />
          ))}
      </div>
    </div>
  );
}
