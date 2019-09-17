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

class ModifierUser extends Component {
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

  handleEnter = () => {
    this.setState({
      nom: this.props.obj.nom,
      prenom: this.props.obj.prenom,
      tel: this.props.obj.tel,
      adresse: this.props.obj.adresse,
      blocker: !this.props.obj.is_active,
      email: this.props.obj.email
    });
  };

  render() {
    const { classes } = this.props;
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

export default withStyles(style)(ModifierUser);
