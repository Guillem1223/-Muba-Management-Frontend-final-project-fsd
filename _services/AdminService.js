import axios from "axios";

const AdminService = {};

AdminService.deleteUserById = async (userObj) => {
  console.log("user: ", userObj);
  try {
    const res = await axios.delete(
      `http://localhost:3000/users/delete/${userObj.users_type_id}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export default AdminService;
