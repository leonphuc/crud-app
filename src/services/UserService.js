import axios from "./customize-axios";

const fectchAllUser = (page) => {
  return axios.get(`/api/users?page=${page}`);
};

const postCreateUser = (name, job) => {
  return axios.post("/api/users", { name, job });
};

const putUpdateUser = (name, job) => {
  return axios.put(`/api/users/`, { name, job });
};

const deleteUser = (id) => {
  return axios.delete(`/api/users/${id}`);
};

export { fectchAllUser, postCreateUser, putUpdateUser, deleteUser };
