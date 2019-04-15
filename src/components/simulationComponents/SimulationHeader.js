import React from "react";
import { Mycontext } from "./MyProvider";

function SimulerHeader(props) {
  return (
    <Mycontext.Consumer>
      {context => (
        <div className="simulationHeader">
          <h2 className="headerTitle"> simuler vehicule</h2>
          <h3 className="headerTitle2">
            prix <span className="simulationPrice"> {context.price}</span>
          </h3>
        </div>
      )}
    </Mycontext.Consumer>
  );
}

export default SimulerHeader;
