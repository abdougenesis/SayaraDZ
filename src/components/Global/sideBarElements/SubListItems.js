import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Lens, PanoramaFishEye } from "@material-ui/icons";

function SubListItems(props) {
  return (
    <ListItem
      button
      className={props.classes.sublist}
      selected={props.submenuitem.selected}
      onClick={() => props.handleSubClick(props.item, props.submenuitem)}
    >
      <ListItemIcon>
        {props.submenuitem.selected ? (
          <Lens classes={{ root: props.classes.subIconSelected }} />
        ) : (
          <PanoramaFishEye classes={{ root: props.classes.subIcon }} />
        )}
      </ListItemIcon>
      <ListItemText
        inset
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

export default SubListItems;
