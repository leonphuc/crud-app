import axios from "./customize-axios";

const fectchAllUser = (page) => {
  return axios.get(`/api/users?page=${page}`);
};

export { fectchAllUser };
