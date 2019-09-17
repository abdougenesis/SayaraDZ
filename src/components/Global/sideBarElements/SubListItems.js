import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Lens, PanoramaFishEye } from "@material-ui/icons";
import { withRouter } from "react-router-dom";

function SubListItems(props) {
  const { history, match } = props;
  return (
    <ListItem
      button
      className={props.classes.sublist}
      selected={props.submenuitem.selected}
      onClick={() => {
        //console.log("rani fi subliste");
        props.handleSubClick(props.item, props.submenuitem);
        if (!props.submenuitem.selected) {
          //console.log("dkhelt nrml ");
          history.push(`${match.url}/${props.to}`);
          props.handleSubMenu(props.to);
        }
      }}
    >
      <ListItemIcon>
        {props.submenuitem.selected ? (
          <Lens classes={{ root: props.classes.subIconSelected }} />
        ) : (
          <PanoramaFishEye classes={{ root: props.classes.subIcon }} />
        )}
      </ListItemIcon>
      <ListItemText
        primary={props.submenuitem.title}
        classes={{
          primary: props.submenuitem.selected
            ? props.classes.subtextSelected
            : props.classes.subtext
        }}
      />
    </ListItem>
  );
}

export default withRouter(SubListItems);
