import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
//import Modelimage from "./../../../images/vwModele.jpg";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Edit } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = {
  card: {
    display: "flex",
    margin: "10px 15px"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    minWidth: 200
  },
  content: {
    flex: "1 0 auto",
    padding: "5px 10px"
  },
  cover: {
    width: 120
  },
  cardActions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
};

function ModelComp(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        alt="card media"
        className={classes.cover}
        image={props.img}
        title="Live from space album cover"
      />

      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Code : {props.code}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            className={classes.button}
            onClick={() => props.handleDelete()}
          >
            <DeleteIcon />
          </Button>
          <Button aria-label="Edit" onClick={() => props.handleModif()}>
            <Edit />
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}

export default withStyles(styles)(ModelComp);
