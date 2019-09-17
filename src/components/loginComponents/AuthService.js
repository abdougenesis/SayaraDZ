import decode from "jwt-decode";
import axiosDef from "./axiosDef";

export default class AuthService {
  constructor() {
    axiosDef.defaults.headers.common = {
      "Content-Type": "application/json",
      Accept: "application/json"
    };
  }

  login(username, password) {
    console.log(username, password);
    var formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("grant_type", "password");
    formData.append("client_id", "YrhkrueXJwzM16AjWfXb29eQFFWcrgCsFk4XPMqv");
    formData.append(
      "client_secret",
      "ZhVq97OvYnAD6E8w44aX40HPLopxpV9i9RvX2tPGkB0enQwG7rX4IzKVPPjleCNIdi365D9gpdbTCShU8TR3C0KwOnkrbrhL1x7OtjkI24toCvQ0KjskPIx1v2hDROvH"
    );

    return axiosDef
      .post("/account/token", formData)
      .then(resp => this._checkStatus(resp))
      .then(res => res.data)
      .then(res => {
        //console.log(res);
        this.setToken(res.access_token, res.refresh_token);
        return res;
      })
      .then(resp => {
        axiosDef
          .get("/account/type")
          .then(res => res.data)
          .then(res => {
            console.log(res);
            this.setMarque(res.marque.Id_Marque, res.marque.Nom_Marque);
            this.setTypeUser(res.type);
            this.setUserInfo(res.user);
            console.log("haniiiiii");
            return res;
          })
          .then(res => Promise.resolve(resp));
      })
      .catch(err => {
        console.log("am error in auth service");
        return Promise.reject(err);
        //alert(err.response);
      });
  }

  _checkStatus(response) {
    console.log("this is my response \n ,", response);
    if (response.status >= 200 && response.status < 300) return response;
    else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }

  setToken(idToken, refreshToken) {
    localStorage.setItem("access_token", idToken);
    localStorage.setItem("refresh_token", refreshToken);
  }

  setTypeUser(type) {
    localStorage.setItem("typeUser", type);
  }

  getTypeUser() {
    return localStorage.getItem("typeUser");
  }

  getMarqueId() {
    return localStorage.getItem("marque");
  }

  getMarqueName() {
    return localStorage.getItem("marqueName");
  }

  setMarque(marque, marqueName) {
    console.log(marque, marqueName);
    localStorage.setItem("marque", marque);
    localStorage.setItem("marqueName", marqueName);
  }

  setUserInfo(user) {
    localStorage.setItem("usernamePrenom", user.nom + " " + user.prenom);
  }
  getToken() {
    return localStorage.getItem("access_token");
  }

  getRefreshToken() {
    return localStorage.getItem("refresh_token");
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
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  }

  getProfile() {
    return decode(this.getToken());
  }
}
