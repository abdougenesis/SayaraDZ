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

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const style = {
  chips: {
    width: "100%"
  }
};

class AddDialog extends Component {
  constructor() {
    super();
    this.state = {
      nom: "",
      prenom: "",
      tel: "",
      password: "",
      blocker: false,
      adresse: "",
      email: ""
    };
  }

  handleChangeField = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
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
            entrez les donnees de votre utilisateur
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
          />
          <TextField
            InputLabelProps={{
              shrink: true
            }}
            name="prenom"
            value={this.state.prenom}
            margin="normal"
            id="prenom-field"
            label="Prenom"
            variant="outlined"
            onChange={this.handleChangeField}
          />
          <TextField
            InputLabelProps={{
              shrink: true
            }}
            name="tel"
            value={this.state.tel}
            margin="normal"
            id="tel-field"
            label="Tel"
            variant="outlined"
            onChange={this.handleChangeField}
          />
          <TextField
            InputLabelProps={{
              shrink: true
            }}
            name="status"
            value={this.state.blocker}
            margin="normal"
            id="status-field"
            label="Blocker"
            variant="outlined"
            onChange={this.handleChangeField}
          />
          <TextField
            InputLabelProps={{
              shrink: true
            }}
            name="password"
            value={this.state.password}
            margin="normal"
            id="pwd-field"
            label="Password"
            variant="outlined"
            onChange={this.handleChangeField}
          />
          <TextField
            InputLabelProps={{
              shrink: true
            }}
            name="email"
            value={this.state.email}
            margin="normal"
            id="email-field"
            label="Email"
            variant="outlined"
            onChange={this.handleChangeField}
          />
          <TextField
            InputLabelProps={{
              shrink: true
            }}
            name="adresse"
            value={this.state.adresse}
            margin="normal"
            id="adresse-field"
            label="Adresse"
            variant="outlined"
            onChange={this.handleChangeField}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              this.props.handleAdd(this.state);
            }}
            color="primary"
          >
            ajouter
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(style)(AddDialog);
