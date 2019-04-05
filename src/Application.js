import React, { Component } from "react";
import SideBar from "./components/Global/SideBar";
import "./Styles/global.css";
import "./FontLibrary";
import ModelsContainer from "./components/managComponents/ManagModelComps/ModelsContainer";
//import axios from "axios";

class Application extends Component {
  render() {
    return (
      <div className="fullpage">
        <SideBar />
        <ModelsContainer />
      </div>
    );
  }
}

export default Application;
