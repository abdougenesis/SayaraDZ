import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import ferrari from "./../../images/ferari.jpg";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 220,
    margin: "10px 0"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  textSelected: {
    fontFamily: "Dosis",
    fontSize: 17,
    fontWeight: 600,
    textTransform: "capitalize",
    color: "#344750"
  },
  subtext: {
    fontFamily: "Dosis",
    fontSize: 15,
    fontWeight: 500,
    textTransform: "capitalize",
    color: "#ADBEC5"
  },
  actions: {
    marginLeft: 10,
    fontFamily: "Dosis",
    fontSize: 17,
    fontWeight: 600,
    textTransform: "capitalize",
    color: "#344750"
  },
  cardContent: {
    paddingBottom: 0,
    paddingTop: 5
  },
  cardActionContainer: {
    paddingTop: 0
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={ferrari}
        title="Paella dish"
      />
      <CardContent className={classes.cardContent}>
        <Typography
          className={classes.textSelected}
          variant="h6"
          component="h6"
        >
          Ferrari
        </Typography>
        <Typography
          className={classes.subtext}
          variant="h6"
          color="textSecondary"
        >
          Fabricant Ferrari avec 6 utilisateurs
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActionContainer} disableSpacing>
        <Typography
          className={classes.actions}
          variant="h6"
          color="textSecondary"
        >
          Actions
        </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Button size="small" color="primary">
            supprimer
          </Button>
          <Button size="small" color="primary">
            modifier
          </Button>
        </CardContent>
      </Collapse>
    </Card>
  );
}
