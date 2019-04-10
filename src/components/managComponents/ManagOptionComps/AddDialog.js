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

class AjouterOption extends Component {
  constructor() {
    super();
    this.state = {
      nom: "",
      code: "",
      image: "",
      options: ["exemple"]
    };
  }

  Transition = props => {
    return <Slide direction="up" {...props} />;
  };

  handleAdd = chips => {
    this.setState(oldstate => {
      let options = [...oldstate.options];
      options.push(chips);
      //console.log(models);
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
            remplir les donner pour ajouter une nouvelle version
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
            value={this.state.image}
            margin="normal"
            id="hexa-field"
            label="Image"
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

export default withStyles(style)(AjouterOption);
