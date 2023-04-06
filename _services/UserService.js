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
    console.log("response: ", response.data);
    return response.data;
  } catch (error) {
    console.log(error.message || error);
    throw new Error(`Error al obtener el usuario con ID ${userId}`);
  }
};
UserService.updateUser = async (userId, userData) => {
  console.log("userId: ", userId);
  console.log("userData: ", userData);
  try {
    const config = {
      headers: {
        Authorization: `Bearer ` + sessionStorage.getItem("auth-token"),
      },
    };
    console.log("config: ", config);
    const response = await axios.put(
      `http://localhost:3000/users/update/${userId}`,

      {
        nombre_user: userData.nombre_user,
        email: userData.email,
        telefono: userData.telefono,

        role: userData.role,
      },
      config
    );
    return response.data;
  } catch (error) {
    console.log(error.message || error);
    throw new Error(`Error al actualizar el usuario con ID ${userId}`);
  }
};

export default UserService;
