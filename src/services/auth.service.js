import axios from "axios";
import {jwtDecode} from "jwt-decode";

const login = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then(res => {
      callback(true, res.data.token);
    })
    .catch(error => {
      if (error.response) {
        callback(false, error.response.data);
      } else {
        callback(false, error.message);
      }
    });
};

const getUsername = token => {
  const decodedToken = jwtDecode(token);
  const username = decodedToken.user;
  return username;
};

export {login, getUsername};
