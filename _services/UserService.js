import axios from "axios";
import { enviroment } from "../_enviroments/enviroment";

const UserService = {};

UserService.findByRole = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/users/find/performer",
      { params: { role: "performer" } }
    );
    return response.data;
  } catch (error) {
    console.log(error.message || error);
    throw new Error("Error al obtener los usuarios con el rol performer");
  }
};

export default UserService;
