import React from "react";
import { withStyles } from "@material-ui/core/styles";
//import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
//import { PlayCircleFilledWhite } from "@material-ui/icons";

const styles = {
  button: {
    margin: 0,
    padding: "3px 20px",
    color: "white",
    backgroundColor: "#ff782d",
    fontFamily: "Dosis",
    fontSize: 16,
    fontWeight: 450,
    textAlign: "center",
    borderRadius: 66,
    textTransform: "lowercase"
  },
  icon: {
    fontSize: 15,
    margin: "0 10px 0 0"
  }
};

function FloatingButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button
        variant="contained"
        className={classes.button}
        onClick={() => props.handleclick()}
      >
        <AddIcon className={classes.icon} />
        ajouter
      </Button>
    </div>
  );
}

export default withStyles(styles)(FloatingButton);
