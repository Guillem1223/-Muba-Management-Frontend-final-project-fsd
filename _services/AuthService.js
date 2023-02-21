import axios from "axios";
import { enviroment } from "../_enviroments/enviroment";

const AuthService = {};

const authApiUrl = `${enviroment.BASE_API_URL}/users`;

AuthService.register = async (credentials) => {
  console.log("credentials: ", credentials);
  return await axios.post("http://localhost:3000/users/reg", {
    nombre_user: credentials.nombre_user,
    email: credentials.email,
    password: credentials.password,
    telefono: credentials.telefono,
    role: credentials.role,
    project_description: credentials.project_description,
    rate_nonprofit_event: credentials.rate_nonprofit_event,
    rate_150_capacity_event: credentials.rate_150_capacity_event,
    rate_300_capacity_event: credentials.rate_300_capacity_event,
    rate_350_capacity_event: credentials.rate_350_capacity_event,
    rate_1000_capacity_event: credentials.rate_1000_capacity_event,
    tax_data: credentials.tax_data,
    backline: credentials.backline,
    technical_rider: credentials.technical_rider,
  });
};
AuthService.login = async (credentials) => {
  console.log("credentials: ", credentials);
  return await axios.post("http://localhost:3000/users/login", {
    email: credentials.email,
    password: credentials.password,
  });
};

export default AuthService;
