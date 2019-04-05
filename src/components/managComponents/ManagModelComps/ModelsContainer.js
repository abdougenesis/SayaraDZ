import React, { Component } from "react";
import ModelComp from "./ModelComp";
import "./../ManagStyles.css";
import axios from "axios";
import Modelimage from "./../../../images/vwModele.jpg";
import WarningDialog from "./WarningDialog";
import ModifierModele from "./ModifierModele";
import ModelHeader from "./ModelHeader";
import AddDialog from "./AddDialog";

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
      allModels: [],
      openWarningDialog: false,
      openModifierDialog: false,
      openAddDialog: false
    };
    this.handleOpenDeleteModele = this.handleOpenDeleteModele.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://0d2035cc.ngrok.io/modele/")
      .then(res => res.data)
      .then(data => {
        this.setState({ allModels: data });
        console.log(this.state.allModels);
      });
  }

  handleOpenDeleteModele() {
    this.setState({ openWarningDialog: true });
  }

  handleCloseDeleteModele = () => {
    this.setState({ openWarningDialog: false });
  };

  handleOpenModifierModele = () => {
    this.setState({ openModifierDialog: true });
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
        img={model.Image}
      />
    ));
    //return <div className="modelsContainer">{models}</div>;
    return (
      <div className="managIndex">
        <ModelHeader handleButton={this.handleOpenAddModele} />
        <div className="modelsContainer">
          <ModelComp
            key="1"
            code="m1"
            name="pecanto"
            img={Modelimage}
            handleDelete={this.handleOpenDeleteModele}
            handleModif={this.handleOpenModifierModele}
          />
          <WarningDialog
            open={this.state.openWarningDialog}
            handleClose={this.handleCloseDeleteModele}
          />
          <ModifierModele
            open={this.state.openModifierDialog}
            handleClose={this.handleCloseModifierModele}
            name="test11"
            code="code11"
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
