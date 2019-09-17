import React, { Component } from "react";
import SideBar from "./components/Global/SideBar";
import "./Styles/global.css";
import "./FontLibrary";
//import axios from "axios";
import AppRouteContainer from "./components/AppRouteContainer";

class Application extends Component {
  render() {
    return (
      <div className="fullpage">
        <SideBar simpleuser={true} />
        <AppRouteContainer />
      </div>
    );
  }
}

export default Application;
