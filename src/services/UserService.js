import axios from "./customize-axios";

const fectchAllUser = () => {
  return axios.get("/api/users?page=1");
};

export { fectchAllUser };
