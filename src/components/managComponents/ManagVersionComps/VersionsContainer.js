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
      allVersions: VersionTest,
      openWarningDialog: false,
      openModifierDialog: false,
      openAddDialog: false,
      modifierObject: {},
      deleteObject: {}
    };
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

  handleAddVersion = obj => {};

  handleModifierVersion = obj => {};

  handleDeleteVersion = obj => {
    this.setState(oldState => {
      let allV = oldState.allVersions.filter(version => {
        return version.code !== obj.code;
      });
      return { allVersions: allV };
    });
  };

  handleOpenSubMenu = colorCode => {};

  render() {
    const { classes } = this.props;
    const ourVersions = this.state.allVersions.map(obj => {
      return (
        <VersionComp
          code={obj.code}
          nom={obj.nom}
          listOp={obj.listOptions}
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
