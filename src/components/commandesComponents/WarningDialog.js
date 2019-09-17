import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class WarningDialog extends Component {
  constructor() {
    super();
    this.state = {
      code: ""
    };
  }

  handleEnter = () => {
    this.setState(this.props.obj);
  };

  render() {
    return (
      <Dialog
        open={this.props.open}
        TransitionComponent={Transition}
        keepMounted
        onEntered={this.handleEnter}
        onClose={this.props.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {`etes vous sure de ${this.props.method} cette commande?`}
        </DialogTitle>
        <DialogContent>
          <div>
            automobiliste : {this.props.obj.automobiliste}
            vehicule : {this.props.obj.vehicule}
            date : {this.props.obj.date}
          </div>
          <div>
            montant : {this.props.obj.montant}
            reservé : {this.props.obj.reserver ? "oui" : "non"}
          </div>
          <DialogContentText id="alert-dialog-slide-description">
            supprimer cette couleur en clickant sur supprimer sinon annuler
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            close
          </Button>
          <Button
            onClick={() => {
              this.props.handleClose();
              this.props.handleOption(
                this.props.deleterow.pk,
                this.props.method
              );
            }}
            color="primary"
          >
            {this.props.method}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default WarningDialog;
