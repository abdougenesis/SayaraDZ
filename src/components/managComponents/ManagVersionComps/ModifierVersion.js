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

class ModifierColor extends Component {
  constructor() {
    super();
    this.state = {
      nom: "",
      code: "",
      image: "",
      options: ["exemple"]
    };
    //console.log(this.state);
  }

  handleChangeField = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleAdd = chips => {
    this.setState(oldstate => {
      let options = [...oldstate.options];
      options.push(chips);
      console.log(options);
      return { options: options };
    });
    console.log(chips);
  };

  removeElement = (array, element) => {
    return array.filter(elem => elem !== element);
  };

  handleDelete = chips => {
    this.setState(oldstate => {
      let options = this.removeElement(oldstate.options, chips);
      return { options: options };
    });
  };

  handleEnter = () => {
    this.setState({
      nom: this.props.obj.nom,
      code: this.props.obj.code,
      image: this.props.obj.image,
      options: this.props.obj.listOp
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
            fullWidth
          />

          <TextField
            InputLabelProps={{
              shrink: true
            }}
            name="image"
            value={this.state.image}
            margin="normal"
            id="image-field"
            label="image"
            variant="outlined"
            fullWidth
            onChange={this.handleChangeField}
          />
          <ChipInput
            name="options"
            value={this.state.options}
            margin="normal"
            id="modeles-field"
            label="options"
            variant="outlined"
            onAdd={chips => this.handleAdd(chips)}
            onDelete={chips => this.handleDelete(chips)}
            fullWidth
            classes={{ inputRoot: classes.chips }}
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

export default withStyles(style)(ModifierColor);
