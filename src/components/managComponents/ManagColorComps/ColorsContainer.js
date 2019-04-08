import React, { Component } from "react";
import ColorHeader from "./ColorHeader";
import WarningDialog from "./WarningDialog";
import ModifierColor from "./ModifierColor";
import AddDialog from "./AddDialog";
import ColorsTest from "./ColorsTest";
import ColorComp from "./ColorComp";
import { List } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";

axios.defaults.crossDomain = true;

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
      openAddDialog: false,
      modifierObject: {},
      deleteObject: {}
    };
  }

  /*componentDidMount() {
    axios
      .get("http://78d9ab04.ngrok.io/couleur/")
      .then(res => res.data)
      .then(data => {
        const newdata = data.map(obj => {
          obj.sub = false;
          return obj;
        });
        this.setState({ allColors: newdata });
        console.log(this.state.allColors);
      });
  }*/

  handleOpenDeleteColor = obj => {
    this.setState({ openWarningDialog: true, deleteObject: obj });
  };

  handleCloseDeleteColor = () => {
    this.setState({ openWarningDialog: false });
  };

  handleOpenModifierColor = obj => {
    this.setState({ openModifierDialog: true, modifierObject: obj });
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

  handleAddColor = obj => {
    let object = {
      Code_Couleur: obj.code,
      Nom_Couleur: obj.nom,
      Hex_Couleur: obj.hexa,
      Colore: obj.models
    };
    // add put request here
    object.sub = false;
    this.setState(oldState => {
      let allC = [...oldState.allColors];
      allC.push(object);
      console.log(allC);
      return { allColors: allC };
    });
  };

  handleModifierColor = obj => {
    let object = {
      Code_Couleur: obj.code,
      Nom_Couleur: obj.nom,
      Hex_Couleur: obj.hexa,
      Colore: obj.models
    };

    obj.sub = false;
    this.setState(oldState => {
      let allC = oldState.allColors.map(color => {
        return color.Code_Couleur === obj.Code ? object : color;
      });
      return { allColors: allC };
    });
  };

  handleDeleteColor = obj => {
    this.setState(oldState => {
      let allC = oldState.allColors.filter(color => {
        return color.Code_Couleur !== obj.Code_Couleur;
      });
      return { allColors: allC };
    });
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
            handleDelete={this.handleDeleteColor}
            obj={this.state.deleteObject}
          />
          <ModifierColor
            open={this.state.openModifierDialog}
            handleClose={this.handleCloseModifierColor}
            handleModif={this.handleModifierColor}
            name="test11"
            code="code11"
            obj={this.state.modifierObject}
          />
          <AddDialog
            open={this.state.openAddDialog}
            handleClose={this.handleCloseAddColor}
            handleAdd={this.handleAddColor}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(style)(ColorsContainer);
