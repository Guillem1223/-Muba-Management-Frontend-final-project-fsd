import React, { useEffect, useState } from "react";
import UserService from "../../../_services/UserService";
import TokenStorageService from "../../../_services/TokenStorageService";

export const Admin = () => {
  const token = TokenStorageService.getToken();
  const [user, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers(token);
  }, []);

  const getAllUsers = async (token) => {
    try {
      const res = await UserService.findByRole(token);
      console.log(res);
      setUsers(res);
    } catch (error) {
      console.log(error.message || error);
    }
  };
  console.log(user);
  console.log(user.users_type_id);
  return (
    <div>
      <h1>Admin</h1>
      {user.map((userObj) => (
        <ol key={userObj.users_type_id}>
          <li>Name: {userObj.nombre_user}</li>
          <li>Email: {userObj.email}</li>
          <li>Phone Number: {userObj.telefono}</li>
          <li>Role: {userObj.role}</li>
          <button className="btn btn-danger">Delete user</button>
        </ol>
      ))}
    </div>
  );
};
