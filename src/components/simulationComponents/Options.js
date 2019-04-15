import React, { Component } from "react";
import OptionTest from "./../managComponents/ManagOptionComps/OptionTest";
import OptionComp from "./OptionComp";

class Options extends Component {
  constructor() {
    super();
    this.state = {
      allOptions: OptionTest
    };
  }

  render() {
    const allOptions = this.state.allOptions.map(option => {
      return (
        <OptionComp key={option.code} price={option.prix} nom={option.nom} />
      );
    });
    return (
      <div>
        <h2 className="simulerOptionsTitle"> choose your options </h2>
        <div className="simulerOptionsContainer">{allOptions}</div>
      </div>
    );
  }
}

export default Options;
