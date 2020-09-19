import axios from "axios";

const register = (username, email, password) => {
  return axios.post("http://localhost:8080/api/auth/register", {
    username,
    email,
    password,
  });
};
const signin = (username, password) => {
  return axios
    .post("http://localhost:8080/api/auth/register", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        const data = localStorage.setItem(
          "user",
          JSON.stringify(response.data)
        );
        console.log(data);
      }

      return response.data;
    });
};

const signout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  return currentUser;
};

export default {
  register,
  signin,
  signout,
  getCurrentUser,
};