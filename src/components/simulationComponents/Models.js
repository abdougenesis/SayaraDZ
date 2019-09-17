import React, { Component } from "react";
import Modelstest from "./../managComponents/ManagModelComps/Modelstest";
import ModelComp from "./ModelComp";
import CompImg from "./../../images/carmodel.png";
import VersionTest from "./../managComponents/ManagVersionComps/VersionTest";
import { Mycontext } from "./MyProvider";
import axiosDef from "./../loginComponents/axiosDef";

class Models extends Component {
  constructor() {
    super();
    this.state = {
      allModels: [],
      allVersion: [],
      modelSelected: false
    };
  }

  componentDidMount() {
    axiosDef
      .get(`/modele/${localStorage.getItem("marque")}`)
      .then(res => res.data)
      .then(data => {
        this.setState({ allModels: data });
        console.log(this.state.allModels);
      })
      .then(res => {
        axiosDef
          .get(`/version/marque/${localStorage.getItem("marque")}`)
          .then(res => res.data)
          .then(data => {
            this.setState({ allVersion: data });
            console.log(this.state.allVersions);
          });
        return Promise.resolve(res);
      })
      .then(res => {
        const myModels = this.state.allModels.map(model => {
          model.selected = false;
          return model;
        });
        const myVersions = this.state.allVersion.map(version => {
          version.selected = false;
          return version;
        });
        this.setState({ allModels: myModels, allVersion: myVersions });
      });
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
          allModels: newModels
        };
      });
      axiosDef
        .get(`/version/${code}`)
        .then(res => res.data)
        .then(data => {
          this.setState({ allVersion: data });
          console.log(this.state.allVersions);
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
          key={version.Code_Version}
          nom={version.Nom_Version}
          code={version.Code_Version}
          img={CompImg}
          handleClick={this.handleVersionClick}
          price={1200}
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
