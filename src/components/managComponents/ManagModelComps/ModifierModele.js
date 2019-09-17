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

class ModifierModele extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      code: ""
    };
  }

  handleEnter = () => {
    this.setState({
      name: this.props.obj.name,
      code: this.props.obj.code
    });
  };

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
        onEntered={this.handleEnter}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Modifier</DialogTitle>
        <DialogContent>
          <DialogContentText>
            remplir les donner que vous voulez modifier
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
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              this.props.handleClose();
              this.props.handleModifierModel(this.state);
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

export default ModifierModele;
