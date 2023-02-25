import axios from "axios";

const AdminService = {};

AdminService.deleteUserById = async (user) => {
  try {
    const res = await axios.delete(
      `http://localhost:3000/users/delete/${user.users_type_id}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export default AdminService;
