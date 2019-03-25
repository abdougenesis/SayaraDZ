import decode from "jwt-decode";
import axiosDef from "./axiosDef";

export default class AuthService {
  constructor() {
    axiosDef.defaults.headers.common = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + this.getToken
    };
  }

  login(username, password) {
    var formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    axiosDef
      .post("/login", formData)
      .then(this._checkStatus)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setToken(res.then);
        return Promise.resolve(res);
      })
      .catch(err => {
        alert(err.response);
      });

    /*return this.fetch(`${this.domain}/login`, {
      method: "POST",
      body: JSON.stringify({
        username,
        password
      })
    }).then(res => {
      this.setToken(res.token);
      return Promise.resolve(res);
    });*/
  }

  _checkStatus(response) {
    if (response.status >= 200 && response.status < 300) return response;
    else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
  setToken(idToken) {
    localStorage.setItem("id_token", idToken);
  }

  getToken() {
    return localStorage.getItem("id_token");
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      return decoded.exp < Date.now() / 1000;
    } catch (err) {
      return false;
    }
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  logout() {
    localStorage.removeItem("id_token");
  }

  getProfile() {
    return decode(this.getToken());
  }
}
