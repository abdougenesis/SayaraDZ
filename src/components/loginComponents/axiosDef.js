import axios from "axios";

const axiosDef = axios.create({
  baseUrl: "http://0d2035cc.ngrok.io/",
  timeout: 1000,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json"
  }
});

export default axiosDef;
