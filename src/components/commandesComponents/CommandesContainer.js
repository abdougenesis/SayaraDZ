import React, { Component } from "react";
import CommandesTable from "./CommandesTable";
import CommandesHeader from "./CommandesHeader";

class CommandesContainer extends Component {
  render() {
    return (
      <div className="managIndex">
        <CommandesHeader />
        <CommandesTable />
      </div>
    );
  }
}

export default CommandesContainer;
