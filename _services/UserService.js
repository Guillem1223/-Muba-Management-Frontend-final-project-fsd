import axios from "axios";
import { enviroment } from "../_enviroments/enviroment";

const UserService = {};

UserService.findByRole = async () => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ` + sessionStorage.getItem("auth-token"),
      },
    };
    const response = await axios.get(
      "http://localhost:3000/users/find/performer",
      config
      //   { params: { role: "performer" } }
    );
    return response.data;
  } catch (error) {
    console.log(error.message || error);
    throw new Error("Error al obtener los usuarios con el rol performer");
  }
};
UserService.getUserById = async (userId) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ` + sessionStorage.getItem("auth-token"),
      },
    };
    const response = await axios.get(
      `http://localhost:3000/users/${userId}`,
      config
    );
    return response.data;
  } catch (error) {
    console.log(error.message || error);
    throw new Error(`Error al obtener el usuario con ID ${userId}`);
  }
};

export default UserService;
