import React from "react";
import "./../../Styles/global.css";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  PlayCircleFilled,
  Publish,
  Build,
  LibraryBooks,
  StarBorder,
  Create,
  Edit,
  Lens,
  PanoramaFishEye
} from "@material-ui/icons";

const ouricons = {
  wrench: Build,
  play: PlayCircleFilled,
  upload: Publish,
  com: LibraryBooks
};

function ListItems(props) {
  let IconToUse = ouricons[props.icontouse];
  return (
    <ListItem
      button
      key={props.item.title}
      selected={props.item.selected}
      onClick={() => props.handleClick(props.item.title, props.item.selected)}
      classes={{
        root: props.classes.firstlist,
        selected: "firstlist"
      }}
    >
      <ListItemIcon>
        <IconToUse classes={{ root: props.classes.icons }} />
      </ListItemIcon>
      <ListItemText
        inset
        primary={props.item.title}
        classes={{
          primary: props.item.selected
            ? props.classes.textSelected
            : props.classes.text
        }}
      />
    </ListItem>
  );
}

export default ListItems;
