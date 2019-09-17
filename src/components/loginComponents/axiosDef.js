import axios from "axios";

let axiosDef = axios.create({
  baseURL: "http://protechsayaradz.herokuapp.com/",
  //timeout: 5000,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json"
  }
});

const session = {
  token: localStorage.getItem("access_token"),
  refreshToken: localStorage.getItem("refresh_token")
};

if (session.token && session.refreshToken) {
  axiosDef.defaults.headers.common["Authorization"] = "Bearer " + session.token;
}

export default axiosDef;
