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

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ModifierColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: this.props.obj.Nom_Couleur,
      code: this.props.obj.Code_Couleur,
      hexa: this.props.obj.Hex_Couleur,
      models: this.props.obj.Colore
    };
  }

  handleChangeField = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
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

  handleEnter = () => {
    this.setState({
      nom: this.props.obj.Nom_Couleur,
      code: this.props.obj.Code_Couleur,
      hexa: this.props.obj.Hex_Couleur,
      models: this.props.obj.Colore
    });
  };

  render() {
    return (
      <Dialog
        TransitionComponent={Transition}
        keepMounted
        open={this.props.open}
        onEntered={this.handleEnter}
        onClose={this.props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Modifier</DialogTitle>
        <DialogContent>
          <DialogContentText>
            changez les donnees que vous voulez modifier
          </DialogContentText>
          <TextField
            InputLabelProps={{
              shrink: true
            }}
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
            InputLabelProps={{
              shrink: true
            }}
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
            InputLabelProps={{
              shrink: true
            }}
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
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              this.props.handleClose();
              this.props.handleModif(this.state);
            }}
            color="primary"
          >
            modifier
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default ModifierColor;
