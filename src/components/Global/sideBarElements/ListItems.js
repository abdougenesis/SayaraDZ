import React from "react";
import "./../../../Styles/global.css";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  PlayCircleFilled,
  Publish,
  Build,
  LibraryBooks,
  StoreMallDirectory,
  AddCircleOutline,
  NoMeetingRoom
} from "@material-ui/icons";
import { withRouter } from "react-router-dom";

const ouricons = {
  wrench: Build,
  play: PlayCircleFilled,
  upload: Publish,
  com: LibraryBooks,
  home: StoreMallDirectory,
  addcircle: AddCircleOutline,
  logout: NoMeetingRoom
};

function ListItems(props) {
  const IconToUse = ouricons[props.icontouse];
  const { history, match } = props;
  return (
    <ListItem
      button
      key={props.item.title}
      selected={props.item.selected}
      onClick={() => {
        props.handleClick(props.item.title, props.item.selected);
        if (!props.item.selected) {
          if (props.item.submenu) {
            history.push(`${match.url}/${props.subDestination}`);
          } else history.push(`${match.url}/${props.item.to}`);
        }
      }}
      classes={{
        root: props.classes.firstlist,
        selected: "firstlist"
      }}
    >
      <ListItemIcon>
        <IconToUse classes={{ root: props.classes.icons }} />
      </ListItemIcon>
      <ListItemText
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

export default withRouter(ListItems);
