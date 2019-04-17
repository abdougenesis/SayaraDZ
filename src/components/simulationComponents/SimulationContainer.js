import React from "react";
import SimulationHeader from "./SimulationHeader";
import SimulationStteper from "./SimulationStteper";
import Options from "./Options";
import MyProvider from "./MyProvider";
import Models from "./Models";
import Colors from "./Colors";

function SimulationContainer(props) {
  return (
    <MyProvider>
      <div className="managIndex">
        <SimulationHeader />
        <SimulationStteper />
        <Colors />
      </div>
    </MyProvider>
  );
}

export default SimulationContainer;
