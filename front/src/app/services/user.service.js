import http from "../http-common";

const getPublicContent = () => {
  return http.get("/test/all");
};

const getUserBoard = () => {
  return http.get("/test/user");
};

const getModeratorBoard = () => {
  return http.get("/test/mod");
};

const getAdminBoard = () => {
  return http.get("/test/admin");
};
const verfieremail = (data) => {
  return http.post("/test/verfieremail",data);
};
const get= (id) => {
  return http.get(`/test/info/${id}`);
}
const put= (id) => {
  return http.put(`/test/update/${id}`);
}
const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  verfieremail,
  get,
  put
}

export default UserService;
