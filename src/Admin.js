import React, { Component } from "react";
import SideBar from "./components/Global/SideBar";
import "./Styles/global.css";
import "./FontLibrary";
//import axios from "axios";
import AppRouteContainer from "./components/AdminRouteContainer";

class Admin extends Component {
  render() {
    return (
      <div className="fullpage">
        <SideBar simpleuser={false} />
        <AppRouteContainer />
      </div>
    );
  }
}

export default Admin;
