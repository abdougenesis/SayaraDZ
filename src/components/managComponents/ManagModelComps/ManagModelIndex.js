import React, { Component } from "react";
import ModelsContainer from "./ModelsContainer";
import ModelHeader from "./ModelHeader";
import "./../ManagStyles.css";

class ManagModelIndex extends Component {
  render() {
    return (
      <div className="managIndex">
        <ModelHeader />
        <ModelsContainer />
      </div>
    );
  }
}

export default ManagModelIndex;
