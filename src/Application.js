import React, { Component } from "react";
import SideBar from "./components/Global/SideBar";
import "./Styles/global.css";
import "./FontLibrary";
import ModelsContainer from "./components/managComponents/ManagModelComps/ModelsContainer";
import ColorsContainer from "./components/managComponents/ManagColorComps/ColorsContainer";
import VersionsContainer from "./components/managComponents/ManagVersionComps/VersionsContainer";
import OptionsContainer from "./components/managComponents/ManagOptionComps/OptionsContainer";
import CommandesContainer from "./components/commandesComponents/CommandesContainer";
//import axios from "axios";

class Application extends Component {
  render() {
    return (
      <div className="fullpage">
        <SideBar />
        {/*<OptionsContainer />*/}
        {/*<VersionsContainer />*/}
        {/*<ModelsContainer />*/}
        {/*<ColorsContainer />*/}
        {<CommandesContainer />}
      </div>
    );
  }
}

export default Application;
