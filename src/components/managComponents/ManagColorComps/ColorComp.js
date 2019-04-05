import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Avatar from "@material-ui/core/Avatar";
import "../ManagStyles.css";

const styles = {
  textcolor: {
    fontFamily: "Dosis",
    fontSize: 17,
    fontWeight: 450,
    textTransform: "capitalize",
    color: "#344750"
  }
};

function ColorComp(props) {
  const { classes } = props;
  let style2 = {
    backgroundColor: "#" + props.color,
    color: "#fff"
  };

  const submenu = props.sub.map(subitem => {
    return (
      <ListItem button key={subitem}>
        <ListItemText inset primary={subitem} />
      </ListItem>
    );
  });

  return (
    <div className="colorlistitem">
      <ListItem style={{ borderRadius: 5 }} button>
        <Avatar style={style2}>{props.name.charAt(0)}</Avatar>
        <ListItemText
          classes={{ primary: classes.textcolor }}
          inset
          primary={props.name}
        />
        <ListItemText
          classes={{ primary: classes.textcolor }}
          inset
          primary={props.code}
        />
        {props.open ? (
          <ExpandLess onClick={() => props.handlesub(props.code)} />
        ) : (
          <ExpandMore onClick={() => props.handlesub(props.code)} />
        )}
      </ListItem>
      <Collapse in={props.open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {submenu}
        </List>
      </Collapse>
    </div>
  );
}

export default withStyles(styles)(ColorComp);
