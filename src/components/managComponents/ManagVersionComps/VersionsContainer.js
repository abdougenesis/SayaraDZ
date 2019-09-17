import React, { Component } from "react";
import WarningDialog from "./WarningDialog";
import ModifierVersion from "./ModifierVersion";
import AddDialog from "./AddDialog";
import VersionHeader from "./VersionHeader";
import VersionComp from "./VersionComp";
import VersionTest from "./VersionTest";
import { withStyles } from "@material-ui/core/styles";
import "./../ManagStyles.css";
import VersionImg from "./../../../images/vwModele.jpg";
import axiosDef from "./../../loginComponents/axiosDef";

const style = {
  list: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  }
};

class VersionsContainer extends Component {
  constructor() {
    super();
    this.state = {
      allVersions: [],
      openWarningDialog: false,
      openModifierDialog: false,
      openAddDialog: false,
      modifierObject: {},
      deleteObject: {}
    };
  }

  componentDidMount() {
    axiosDef
      .get(`/version/marque/${localStorage.getItem("marque")}`)
      .then(res => res.data)
      .then(data => {
        this.setState({ allVersions: data });
        console.log(this.state.allVersions);
      });
  }

  handleOpenDeleteVersion = obj => {
    this.setState({ openWarningDialog: true, deleteObject: obj });
  };

  handleCloseDeleteVersion = () => {
    this.setState({ openWarningDialog: false });
  };

  handleOpenModifierVersion = obj => {
    this.setState({ openModifierDialog: true, modifierObject: obj });
  };

  handleCloseModifierVersion = () => {
    this.setState({ openModifierDialog: false });
  };

  handleOpenAddVersion = () => {
    this.setState({ openAddDialog: true });
  };
  handleCloseAddVersion = () => {
    this.setState({ openAddDialog: false });
  };

  handleAddVersion = obj => {
    console.log(obj);
    axiosDef
      .post(`/version/new`, {
        Id_Modele: localStorage.getItem("marque"),
        Nom_Version: obj.nom,
        Code_Version: obj.code
      })
      .then(resp => {
        console.log(resp);
        if (resp.status === 201) return Promise.resolve(resp);
        return Promise.reject(resp);
      })
      .then(resp => {
        this.setState(oldState => {
          let allVersions = [...oldState.allVersions];
          allVersions.push(resp.data);
          return { allVersions: allVersions };
        });
      })
      .catch(err => alert("try again an error uccured"));
  };

  handleModifierVersion = obj => {
    console.log(obj);
    axiosDef
      .patch(`/version/update/${obj.code}/${obj.nom}`)
      .then(resp => {
        console.log(resp);
        if (resp.status === 200) return Promise.resolve(resp);
        return Promise.reject(resp);
      })
      .then(resp => {
        this.setState(oldState => {
          let allV = oldState.allVersions.map(version => {
            return version.Code_Version === obj.code ? resp.data : version;
          });
          return { allVersions: allV };
        });
      })
      .catch(err => alert("try again an error uccured"));
  };

  handleDeleteVersion = obj => {
    console.log(obj);
    axiosDef
      .post("/version/delete", { Code_Version: obj.code })
      .then(resp => {
        console.log(resp);
        if (resp.status === 201) return Promise.resolve(resp);
        return Promise.reject(resp);
      })
      .then(resp => {
        this.setState(oldState => {
          let allV = oldState.allVersions.filter(version => {
            return version.Code_Version !== obj.code;
          });
          return { allVersions: allV };
        });
      })
      .catch(err => alert("try again an error uccured"));
  };

  handleOpenSubMenu = colorCode => {};

  render() {
    const { classes } = this.props;
    const ourVersions = this.state.allVersions.map(obj => {
      return (
        <VersionComp
          key={obj.Code_Version}
          code={obj.Code_Version}
          nom={obj.Nom_Version}
          listOp={obj.option_Version}
          img={VersionImg}
          handleOpenDeleteVersion={this.handleOpenDeleteVersion}
          handleOpenModifierVersion={this.handleOpenModifierVersion}
        />
      );
    });
    const firstCol = ourVersions.splice(0, (ourVersions.length + 1) / 2);
    return (
      <div className="managIndex">
        <VersionHeader handleButton={this.handleOpenAddVersion} />
        <div>
          <div className={classes.list}>
            <div className="colDiv">{firstCol}</div>
            <div className="colDiv">{ourVersions}</div>
          </div>
          <WarningDialog
            open={this.state.openWarningDialog}
            handleClose={this.handleCloseDeleteVersion}
            handleDelete={this.handleDeleteVersion}
            obj={this.state.deleteObject}
          />
          <ModifierVersion
            open={this.state.openModifierDialog}
            handleClose={this.handleCloseModifierVersion}
            handleModif={this.handleModifierVersion}
            name="test11"
            code="code11"
            obj={this.state.modifierObject}
          />
          <AddDialog
            open={this.state.openAddDialog}
            handleClose={this.handleCloseAddVersion}
            handleAdd={this.handleAddVersion}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(style)(VersionsContainer);
