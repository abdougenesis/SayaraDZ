import React, { Component } from "react";
import Modelstest from "./../managComponents/ManagModelComps/Modelstest";
import ModelComp from "./ModelComp";
import CompImg from "./../../images/carmodel.png";
import VersionTest from "./../managComponents/ManagVersionComps/VersionTest";
import { Mycontext } from "./MyProvider";

class Models extends Component {
  constructor() {
    super();
    this.state = {
      allModels: Modelstest,
      allVersion: [],
      modelSelected: false
    };
  }

  componentDidMount() {
    const myModels = Modelstest.map(model => {
      model.selected = false;
      return model;
    });
    const myVersions = this.state.allVersion.map(version => {
      version.selected = false;
      return version;
    });
    this.setState({ allModels: myModels, allVersion: myVersions });
  }

  handleModelClick = (code, isTargetSelected) => {
    if (!isTargetSelected) {
      this.setState(oldState => {
        const newModels = oldState.allModels.map(model => {
          if (code === model.Code_Modele) model.selected = true;
          else model.selected = false;
          return model;
        });
        return {
          allModels: newModels,
          allVersion: VersionTest
        };
      });
    }
  };

  handleVersionClick = (code, isTargetSelected) => {
    if (!isTargetSelected) {
      this.setState(oldState => {
        const newVersions = oldState.allVersion.map(version => {
          if (code === version.code) version.selected = true;
          else version.selected = false;
          return version;
        });
        return {
          allVersion: newVersions
        };
      });
    }
  };

  render() {
    const allmodels = this.state.allModels.map(model => {
      return (
        <ModelComp
          selected={model.selected}
          key={model.Code_Modele}
          nom={model.Nom_Modele}
          code={model.Code_Modele}
          img={CompImg}
          handleClick={this.handleModelClick}
        />
      );
    });
    const allVersion = this.state.allVersion.map(version => {
      return (
        <ModelComp
          version={true}
          selected={version.selected}
          key={version.code}
          nom={version.nom}
          code={version.code}
          img={CompImg}
          handleClick={this.handleVersionClick}
          price={version.prix}
        />
      );
    });
    return (
      <Mycontext.Consumer>
        {context => (
          <div
            className={context.simulationCurrent === 1 ? "visible" : "hidden"}
          >
            <h2 className="simulerOptionsTitle"> choose your model </h2>
            <div className="simulerModelsContainer">{allmodels}</div>
            <h2 className="simulerOptionsTitle"> choose your version {} </h2>
            <div className="simulerModelsContainer">{allVersion}</div>
          </div>
        )}
      </Mycontext.Consumer>
    );
  }
}

export default Models;
