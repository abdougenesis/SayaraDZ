import React, { Component } from "react";
import SideBar from "./components/Global/SideBar";
import "./Styles/global.css";
import "./FontLibrary";
import ModelsContainer from "./components/managComponents/ManagModelComps/ModelsContainer";
import ColorsContainer from "./components/managComponents/ManagColorComps/ColorsContainer";
import VersionsContainer from "./components/managComponents/ManagVersionComps/VersionsContainer";
//import axios from "axios";

class Application extends Component {
  render() {
    return (
      <div className="fullpage">
        <SideBar />
        {<VersionsContainer />}
        {/*<ModelsContainer />*/}
        {/*<ColorsContainer />*/}
      </div>
    );
  }
}

export default Application;
