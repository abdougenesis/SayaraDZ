import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AjouterModele extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      code: ""
    };
  }

  handleChangeField = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <Dialog
        TransitionComponent={Transition}
        keepMounted
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Ajouter</DialogTitle>
        <DialogContent>
          <DialogContentText>
            remplir les donner pour ajouter un nouveau modele
          </DialogContentText>
          <TextField
            id="name-field"
            label="Nom"
            name="name"
            value={this.state.name}
            margin="normal"
            variant="outlined"
            fullWidth
            onChange={this.handleChangeField}
          />
          <TextField
            margin="normal"
            id="code-field"
            label="Code"
            name="code"
            value={this.state.code}
            variant="outlined"
            fullWidth
            onChange={this.handleChangeField}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
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

export default AjouterModele;
