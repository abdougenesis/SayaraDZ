import React, { Component } from "react";
import ModelComp from "./ModelComp";
import "./../ManagStyles.css";
import axiosDef from "./../../loginComponents/axiosDef";
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

//axios.default.crossDomain = true;

class ModelsContainer extends Component {
  constructor() {
    super();
    this.state = {
      allModels: [],
      openWarningDialog: false,
      openModifierDialog: false,
      openAddDialog: false,
      modifObject: {},
      deleteObject: {}
    };
    this.handleOpenDeleteModele = this.handleOpenDeleteModele.bind(this);
  }

  componentDidMount() {
    axiosDef
      .get(`/modele/${localStorage.getItem("marque")}`)
      .then(res => res.data)
      .then(data => {
        this.setState({ allModels: data });
        console.log(this.state.allModels);
      });
  }

  handleOpenDeleteModele(obj) {
    this.setState({ openWarningDialog: true, deleteObject: obj });
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

  handleAddModel = obj => {
    let object = {
      Code_Modele: obj.code,
      Nom_Modele: obj.name,
      Id_Marque: localStorage.getItem("marque")
    };
    // add put request here
    axiosDef
      .post("/modele/new", object)
      .then(resp => {
        console.log(resp);
        if (resp.status === 201) return Promise.resolve(resp);
        else return Promise.reject(resp);
      })
      .then(resp => {
        this.setState(oldState => {
          let allModels = [...oldState.allModels];
          allModels.push(object);
          //console.log(allC);
          return { allModels: allModels };
        });
      })
      .catch(err => {
        console.log("error");
        alert("an error uccured , please try again");
      });
  };

  handleModifierModel = obj => {
    // let object = {
    //   Code_Modele: obj.code,
    //   Nom_Modele: obj.name,
    //   Id_Marque: "mm1"
    // };

    //console.log(object);
    axiosDef
      .patch(`/modele/update/${obj.code}/${obj.name}`)
      .then(resp => {
        console.log(resp);
        if (resp.status === 200) return Promise.resolve(resp);
        else return Promise.reject(resp);
      })
      .then(resp => {
        this.setState(oldState => {
          let allModels = oldState.allModels.map(model => {
            return model.Code_Modele === obj.code ? resp.data : model;
          });
          return { allModels: allModels };
        });
      });
  };

  handleDeleteModel = obj => {
    axiosDef
      .post("/modele/delete", { Code_Modele: obj.code })
      .then(resp => {
        console.log(resp);
        if (resp.status === 201) return Promise.resolve(resp);
        else return Promise.reject(resp);
      })
      .then(resp => {
        this.setState(oldState => {
          //console.log(obj);
          let allModels = oldState.allModels.filter(model => {
            return model.Code_Modele !== obj.code;
          });
          return { allModels: allModels };
        });
      })
      .catch(err => {
        console.log("error");
        alert("an error uccured , please try again");
      });
  };

  render() {
    const models = this.state.allModels.map(model => {
      //console.log(model.Code_Modele);
      return (
        <ModelComp
          key={model.Code_Modele}
          code={model.Code_Modele}
          name={model.Nom_Modele}
          img={Modelimage}
          handleDelete={this.handleOpenDeleteModele}
          handleModif={this.handleOpenModifierModele}
        />
      );
    });
    //return <div className="modelsContainer">{models}</div>;
    return (
      <div className="managIndex">
        <ModelHeader handleButton={this.handleOpenAddModele} />
        <div className="modelsContainer">
          {models}
          <WarningDialog
            handleDeleteModel={this.handleDeleteModel}
            obj={this.state.deleteObject}
            open={this.state.openWarningDialog}
            handleClose={this.handleCloseDeleteModele}
          />
          <ModifierModele
            open={this.state.openModifierDialog}
            handleClose={this.handleCloseModifierModele}
            name="test11"
            code="code11"
            obj={this.state.modifObject}
            handleModifierModel={this.handleModifierModel}
          />
          <AddDialog
            open={this.state.openAddDialog}
            handleClose={this.handleCloseAddModele}
            handleAddModel={this.handleAddModel}
          />
        </div>
      </div>
    );
  }
}

export default ModelsContainer;
