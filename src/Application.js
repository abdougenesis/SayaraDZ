import React, { Component } from "react";
import SideBar from "./components/Global/SideBar";
import "./Styles/global.css";
import "./FontLibrary";

class Application extends Component {
  render() {
    return (
      <div className="fullpage">
        <SideBar />
      </div>
    );
  }
}

export default Application;
