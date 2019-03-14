import axios from "axios";

const axiosDef = axios.create({
  baseUrl: "something",
  timeout: 1000,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json"
  }
});

export default axiosDef;
