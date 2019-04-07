import React, { Component } from "react";
import ColorHeader from "./ColorHeader";
import WarningDialog from "./WarningDialog";
import ModifierColor from "./ModifierColor";
import AddDialog from "./AddDialog";
import ColorsTest from "./ColorsTest";
import ColorComp from "./ColorComp";
import { List } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const style = {
  list: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  }
};
class ColorsContainer extends Component {
  constructor() {
    super();
    this.state = {
      allColors: ColorsTest,
      openWarningDialog: false,
      openModifierDialog: false,
      openAddDialog: false
    };
  }

  handleOpenDeleteColor = () => {
    this.setState({ openWarningDialog: true });
  };

  handleCloseDeleteColor = () => {
    this.setState({ openWarningDialog: false });
  };

  handleOpenModifierColor = () => {
    this.setState({ openModifierDialog: true });
  };

  handleCloseModifierColor = () => {
    this.setState({ openModifierDialog: false });
  };

  handleOpenAddColor = () => {
    this.setState({ openAddDialog: true });
  };
  handleCloseAddColor = () => {
    this.setState({ openAddDialog: false });
  };

  handleOpenSubMenu = colorCode => {
    this.setState(oldState => {
      const newallColors = oldState.allColors.map(color => {
        if (colorCode === color.Code_Couleur) {
          color.sub = !color.sub;
        }
        return color;
      });
      return {
        allColors: newallColors
      };
    });
  };

  render() {
    const { classes } = this.props;
    const ourColors = this.state.allColors.map(obj => {
      return (
        <ColorComp
          key={obj.Code_Couleur}
          sub={obj.Colore}
          name={obj.Nom_Couleur}
          open={obj.sub}
          color={obj.Hex_Couleur}
          code={obj.Code_Couleur}
          handlesub={this.handleOpenSubMenu}
          handleOpenDeleteColor={this.handleOpenDeleteColor}
          handleOpenModifierColor={this.handleOpenModifierColor}
        />
      );
    });
    const firstCol = ourColors.splice(0, (ourColors.length + 1) / 2);
    return (
      <div className="managIndex">
        <ColorHeader handleButton={this.handleOpenAddColor} />
        <div>
          <List className={classes.list}>
            <div className="colDiv">{firstCol}</div>
            <div className="colDiv">{ourColors}</div>
          </List>
          <WarningDialog
            open={this.state.openWarningDialog}
            handleClose={this.handleCloseDeleteColor}
          />
          <ModifierColor
            open={this.state.openModifierDialog}
            handleClose={this.handleCloseModifierColor}
            name="test11"
            code="code11"
          />
          <AddDialog
            open={this.state.openAddDialog}
            handleClose={this.handleCloseAddColor}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(style)(ColorsContainer);
