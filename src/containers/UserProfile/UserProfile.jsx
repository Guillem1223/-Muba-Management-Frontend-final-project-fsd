import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import UserService from "../../../_services/UserService";

export const UserProfile = () => {
  const [user, setUser] = useState([]);
  const [userData, setUserData] = useState({
    nombre_user: user.nombre_user,
    email: user.email,
    telefono: user.telefono,
    password: user.password,
    role: user.role,
  });
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
    setUserData({
      nombre_user: res.nombre_user,
      email: res.email,
      telefono: res.telefono,

      role: res.role,
    });
  };
  console.log(user.nombre_user);

  console.log("userData: ", userData);

  const handleInputChange = (event) => {
    console.log("event.target.value: ", event.target.name);
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedUser = await UserService.updateUser(
        user.users_type_id,
        userData
      );
      console.log("User updated: ", updatedUser);
    } catch (error) {
      console.log(error);
    }
  };

  //   return (
  //     <div>
  //       <h1>User Profile</h1>
  //       <ol>
  //         <li>Name: {user.nombre_user}</li>
  //         <li>Email: {user.email}</li>
  //         <li>Phone Number: {user.telefono}</li>
  //         <li>Password: {user.password}</li>
  //         <p>*Encrypted Password*</p>
  //       </ol>
  //     </div>
  //   );
  return (
    <div className="container-fluid vw-100 justify-content-center align-center pt-5">
      <h1 className="pt-5">User Profile</h1>
      <form className="justify-content-center align-center ">
        <ol>
          <li>
            <label>
              Name:
              <input
                name="nombre_user"
                type="text"
                className="form-control"
                value={userData.nombre_user}
                // placeholder={user.nombre_user}
                onChange={handleInputChange}
              />
            </label>
          </li>
          <br />
          <li>
            <label>
              Email:
              <input
                name="email"
                type="email"
                className="form-control"
                value={userData.email}
                placeholder={user.email}
                onChange={handleInputChange}
              />
            </label>
          </li>
          <br />
          <li>
            <label>
              Phone Number:
              <input
                name="telefono"
                type="tel"
                className="form-control"
                value={userData.telefono}
                placeholder={user.telefono}
                onChange={handleInputChange}
              />
            </label>
          </li>
          <br />

          {/* <li>
            Role: <br /> {user.role}
          </li> */}
          <br />
          <button
            className="btn btn-success"
            type="submit"
            onClick={handleSubmit}
          >
            Update User
          </button>
        </ol>
      </form>
    </div>
  );
};
