import React, { Component } from "react";
import SimulationHeader from "./SimulationHeader";
import SimulationStteper from "./SimulationStteper";
import MyProvider from "./MyProvider";
import { withRouter } from "react-router-dom";
import Models from "./Models";
import Colors from "./Colors";
import Options from "./Options";

class SimulationContainer extends Component {
  render() {
    return (
      <MyProvider>
        <div className="managIndex">
          <SimulationHeader />
          <SimulationStteper />
          <Models />
          <Options />
          <Colors />
        </div>
      </MyProvider>
    );
  }
}

export default withRouter(SimulationContainer);
