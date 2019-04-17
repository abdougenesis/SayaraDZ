import React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import { CloudUploadOutlined } from "@material-ui/icons";
import Button from "@material-ui/core/Button";

const styles = {
  paper: {
    width: 400,
    height: 230
  },
  icon: {
    color: "#ff782d",
    fontSize: 80
  },
  button: {
    backgroundColor: "#ff782d",
    color: "#ffffff",
    width: 150,
    height: 40
  },
  buttonlabel: {
    fontFamily: "dosis",
    fontWeight: 500,
    fontSize: 15,
    textTransform: "capitalize"
  }
};

function DragComp(props) {
  const { classes } = props;
  return (
    <Paper
      className="paperDrop"
      classes={{ root: classes.paper }}
      elevation={1}
    >
      <div className="dropDiv">
        <CloudUploadOutlined
          fontSize="small"
          classes={{ root: classes.icon }}
        />
        <h3 className="dropTextInside">Drag and Drop Files here</h3>
        <Button
          variant="contained"
          classes={{ root: classes.button, label: classes.buttonlabel }}
        >
          browse files
        </Button>
      </div>
    </Paper>
  );
}

export default withStyles(styles)(DragComp);
