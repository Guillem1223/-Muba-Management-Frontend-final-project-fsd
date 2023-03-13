import React, { useEffect, useState } from "react";
import UserService from "../../../_services/UserService";
import TokenStorageService from "../../../_services/TokenStorageService";
import AdminService from "../../../_services/AdminService";
import "./Admin.scss";
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
  const handleDelete = async (userObj) => {
    const res = await AdminService.deleteUserById(userObj);
    console.log(res);
    await getAllUsers(token);
  };
  console.log(user);

  return (
    <div className="AdminContainer container-fluid d-flex justify-content-center mt-5 pt-5">
      <h1>Admin</h1>
      <div className="pt-5 container-fluid d-flex flex-wrap">
        {user.map((userObj) => (
          <ol key={userObj.users_type_id}>
            <li>Name: {userObj.nombre_user}</li>
            <li>Email: {userObj.email}</li>
            <li>Phone Number: {userObj.telefono}</li>
            <li>Role: {userObj.role}</li>
            <li>Id: {userObj.users_type_id}</li>
            <button
              className="btn btn-danger"
              onClick={() => {
                handleDelete(userObj);
              }}
            >
              Delete user
            </button>
          </ol>
        ))}
      </div>
    </div>
  );
};
