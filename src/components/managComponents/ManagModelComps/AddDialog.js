import React from "react";
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

function AjouterModele(props) {
  return (
    <Dialog
      TransitionComponent={Transition}
      keepMounted
      open={props.open}
      onClose={props.handleClose}
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
          defaultValue="name here"
          margin="normal"
          variant="outlined"
        />
        <TextField
          margin="normal"
          id="code-field"
          label="Code"
          defaultValue="code here"
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          ajouter
        </Button>
        <Button onClick={props.handleClose} color="primary">
          cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AjouterModele;
