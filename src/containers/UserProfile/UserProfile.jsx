import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import UserService from "../../../_services/UserService";

export const UserProfile = () => {
  const [user, setUser] = useState([]);
  const userId = sessionStorage.getItem("userId");
  const { id } = useParams();
  console.log(userId);
  useEffect(() => {
    getUserById(userId);
  }, []);
  const getUserById = async () => {
    const res = await UserService.getUserById(userId);
    console.log("res: ", res);
    setUser(res);
  };
  console.log(user.nombre_user);
  return (
    <div>
      <h1>User Profile</h1>
      <ol>
        <li>Name: {user.nombre_user}</li>
        <li>Email: {user.email}</li>
        <li>Phone Number: {user.telefono}</li>
        <li>Password: {user.password}</li>
        <p>*Encrypted Password*</p>
      </ol>
    </div>
  );
};
