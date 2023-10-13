import axios from "./customize-axios";

const fectchAllUser = (page) => {
  return axios.get(`/api/users?page=${page}`);
};

const postCreateUser = (name, job) => {
  return axios.post("/api/users", { name, job });
};

export { fectchAllUser, postCreateUser };
