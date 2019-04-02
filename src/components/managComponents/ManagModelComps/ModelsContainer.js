import React, { Component } from "react";
import ModelComp from "./ModelComp";
import "./../ManagStyles.css";
import axios from "axios";

//axios.defaults.baseURL = "http://74730854.ngrok.io/";

// axios.defaults.headers = {
//   "Access-Control-Allow-Origin": "*",
//   "Content-Type": "application/json",
//   "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
//   "Access-Control-Allow-Headers":
//    "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
// };

axios.default.crossDomain = true;

class ModelsContainer extends Component {
  constructor() {
    super();
    this.state = {
      allModels: []
    };
  }

  componentDidMount() {
    axios
      .get("http://0d2035cc.ngrok.io/modele/")
      .then(res => res.data)
      .then(data => {
        this.setState({ allModels: data });
        console.log(this.state.allModels);
      });
  }

  render() {
    const models = this.state.allModels.map(model => (
      <ModelComp
        key={model.Code_Modele}
        code={model.Code_Modele}
        name={model.Nom_Modele}
        img={model.Image}
      />
    ));
    return <div className="modelsContainer">{models}</div>;
  }
}

export default ModelsContainer;
