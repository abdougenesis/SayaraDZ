import React from "react";
import SimulationHeader from "./SimulationHeader";
import SimulationStteper from "./SimulationStteper";
import Options from "./Options";
import MyProvider from "./MyProvider";
import Models from "./Models";

function SimulationContainer(props) {
  return (
    <MyProvider>
      <div className="managIndex">
        <SimulationHeader />
        <SimulationStteper />
        <Models />
      </div>
    </MyProvider>
  );
}

export default SimulationContainer;
