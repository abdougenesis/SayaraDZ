import React, { Component } from "react";
import SideBar from "./components/Global/SideBar";
import "./Styles/global.css";
import "./FontLibrary";
import ManagModelIndex from "./components/managComponents/ManagModelComps/ManagModelIndex";
//import axios from "axios";

class Application extends Component {
  render() {
    return (
      <div className="fullpage">
        <SideBar />
        <ManagModelIndex />
      </div>
    );
  }
}

export default Application;
