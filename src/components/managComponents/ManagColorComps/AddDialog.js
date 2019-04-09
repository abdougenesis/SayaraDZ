import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import ChipInput from "material-ui-chip-input";
import { withStyles } from "@material-ui/core/styles";

const style = {
  chips: {
    width: "100%"
  }
};

class AjouterModele extends Component {
  constructor() {
    super();
    this.state = {
      nom: "",
      code: "",
      hexa: "",
      models: ["exemple"]
    };
  }

  Transition = props => {
    return <Slide direction="up" {...props} />;
  };

  handleAdd = chips => {
    this.setState(oldstate => {
      let models = [...oldstate.models];
      models.push(chips);
      console.log(models);
      return { models: models };
    });
    console.log(chips);
  };

  removeElement = (array, element) => {
    return array.filter(elem => elem !== element);
  };

  handleDelete = chips => {
    this.setState(oldstate => {
      let models = this.removeElement(oldstate.models, chips);
      return { models: models };
    });
  };

  handleChangeField = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <Dialog
        TransitionComponent={this.Transition}
        keepMounted
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Ajouter</DialogTitle>
        <DialogContent>
          <DialogContentText>
            remplir les donner pour ajouter une nouvelle couleur
          </DialogContentText>
          <TextField
            name="nom"
            value={this.state.nom}
            id="name-field"
            label="Nom"
            margin="normal"
            variant="outlined"
            onChange={this.handleChangeField}
            fullWidth
          />
          <TextField
            name="code"
            value={this.state.code}
            margin="normal"
            id="code-field"
            label="Code"
            variant="outlined"
            onChange={this.handleChangeField}
            fullWidth
          />
          <TextField
            name="hexa"
            value={this.state.hexa}
            margin="normal"
            id="hexa-field"
            label="hexa"
            variant="outlined"
            fullWidth
            onChange={this.handleChangeField}
          />
          <ChipInput
            name="models"
            value={this.state.models}
            margin="normal"
            id="modeles-field"
            label="models"
            variant="outlined"
            onAdd={chips => this.handleAdd(chips)}
            onDelete={chips => this.handleDelete(chips)}
            fullWidth
            classes={{ inputRoot: classes.chips }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              this.props.handleClose();
              this.props.handleAdd(this.state);
            }}
            color="primary"
          >
            ajouter
          </Button>
          <Button onClick={this.props.handleClose} color="primary">
            cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(style)(AjouterModele);
