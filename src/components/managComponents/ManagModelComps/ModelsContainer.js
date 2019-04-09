import React, { Component } from "react";
import ModelComp from "./ModelComp";
import "./../ManagStyles.css";
import axios from "axios";
import Modelimage from "./../../../images/vwModele.jpg";
import WarningDialog from "./WarningDialog";
import ModifierModele from "./ModifierModele";
import ModelHeader from "./ModelHeader";
import AddDialog from "./AddDialog";
import ModelsTest from "./Modelstest";
//axios.defaults.baseURL = "http://74730854.ngrok.io/";

// axios.defaults.headers = {
//   "Access-Control-Allow-Origin": "*",
//   "Content-Type": "application/json",
//   "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
//   "Access-Control-Allow-Headers":
//    "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
// };

axios.default.crossDomain = true;

class ModelsContainer extends Component {
  constructor() {
    super();
    this.state = {
      allModels: ModelsTest,
      openWarningDialog: false,
      openModifierDialog: false,
      openAddDialog: false,
      modifObject: {}
    };
    this.handleOpenDeleteModele = this.handleOpenDeleteModele.bind(this);
  }

  /*componentDidMount() {
    axios
      .get("http://78d9ab04.ngrok.io/modele/")
      .then(res => res.data)
      .then(data => {
        this.setState({ allModels: data });
        console.log(this.state.allModels);
      });
  }*/

  handleOpenDeleteModele() {
    this.setState({ openWarningDialog: true });
  }

  handleCloseDeleteModele = () => {
    this.setState({ openWarningDialog: false });
  };

  handleOpenModifierModele = obj => {
    this.setState({ modifObject: obj, openModifierDialog: true });
  };

  handleCloseModifierModele = () => {
    this.setState({ openModifierDialog: false });
  };

  handleOpenAddModele = () => {
    this.setState({ openAddDialog: true });
  };
  handleCloseAddModele = () => {
    this.setState({ openAddDialog: false });
  };

  render() {
    const models = this.state.allModels.map(model => (
      <ModelComp
        key={model.Code_Modele}
        code={model.Code_Modele}
        name={model.Nom_Modele}
        img={Modelimage}
        handleDelete={this.handleOpenDeleteModele}
        handleModif={this.handleOpenModifierModele}
      />
    ));
    //return <div className="modelsContainer">{models}</div>;
    return (
      <div className="managIndex">
        <ModelHeader handleButton={this.handleOpenAddModele} />
        <div className="modelsContainer">
          {models}
          <WarningDialog
            open={this.state.openWarningDialog}
            handleClose={this.handleCloseDeleteModele}
          />
          <ModifierModele
            open={this.state.openModifierDialog}
            handleClose={this.handleCloseModifierModele}
            name="test11"
            code="code11"
            obj={this.state.modifObject}
          />
          <AddDialog
            open={this.state.openAddDialog}
            handleClose={this.handleCloseAddModele}
          />
        </div>
      </div>
    );
  }
}

export default ModelsContainer;
