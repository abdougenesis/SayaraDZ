import React, { Component } from "react";
import WarningDialog from "./WarningDialog";
import ModifierOption from "./ModifierOption";
import AddDialog from "./AddDialog";
import OptionHeader from "./OptionHeader";
import OptionComp from "./OptionComp";
import OptionTest from "./OptionTest";
import { withStyles } from "@material-ui/core/styles";
import "./../ManagStyles.css";
import OptionImg from "./../../../images/vwModele.jpg";

const style = {
  list: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  }
};

class OptionsContainer extends Component {
  constructor() {
    super();
    this.state = {
      allOptions: OptionTest,
      openWarningDialog: false,
      openModifierDialog: false,
      openAddDialog: false,
      modifierObject: {},
      deleteObject: {}
    };
  }

  handleOpenDeleteOption = obj => {
    this.setState({ openWarningDialog: true, deleteObject: obj });
  };

  handleCloseDeleteOption = () => {
    this.setState({ openWarningDialog: false });
  };

  handleOpenModifierOption = obj => {
    this.setState({ openModifierDialog: true, modifierObject: obj });
  };

  handleCloseModifierOption = () => {
    this.setState({ openModifierDialog: false });
  };

  handleOpenAddOption = () => {
    this.setState({ openAddDialog: true });
  };
  handleCloseAddOption = () => {
    this.setState({ openAddDialog: false });
  };

  handleAddOption = obj => {};

  handleModifierOption = obj => {};

  handleDeleteOption = obj => {
    this.setState(oldState => {
      let allO = oldState.allOptions.filter(option => {
        return option.code !== obj.code;
      });
      return { allOptions: allO };
    });
  };

  render() {
    const { classes } = this.props;
    const ourOptions = this.state.allOptions.map(obj => {
      return (
        <OptionComp
          key={obj.code}
          code={obj.code}
          nom={obj.nom}
          listOp={obj.listModels}
          img={OptionImg}
          handleOpenDeleteOption={this.handleOpenDeleteOption}
          handleOpenModifierOption={this.handleOpenModifierOption}
        />
      );
    });
    const firstCol = ourOptions.splice(0, (ourOptions.length + 1) / 2);
    return (
      <div className="managIndex">
        <OptionHeader handleButton={this.handleOpenAddOption} />
        <div>
          <div className={classes.list}>
            <div className="colDiv">{firstCol}</div>
            <div className="colDiv">{ourOptions}</div>
          </div>
          <WarningDialog
            open={this.state.openWarningDialog}
            handleClose={this.handleCloseDeleteOption}
            handleDelete={this.handleDeleteOption}
            obj={this.state.deleteObject}
          />
          <ModifierOption
            open={this.state.openModifierDialog}
            handleClose={this.handleCloseModifierOption}
            handleModif={this.handleModifierOption}
            name="test11"
            code="code11"
            obj={this.state.modifierObject}
          />
          <AddDialog
            open={this.state.openAddDialog}
            handleClose={this.handleCloseAddOption}
            handleAdd={this.handleAddOption}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(style)(OptionsContainer);
