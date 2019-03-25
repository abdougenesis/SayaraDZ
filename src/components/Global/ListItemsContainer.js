import React, { Component } from "react";
import simpleUserList from "./ListTypes/simpleUserList";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import "./../../Styles/global.css";
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
import { Icon } from "@material-ui/core";

const styles = {
  firstlist: {
    padding: "15px 0 15px 15%"
  },
  listselected: {
    padding: "15px 0 15px 15%"
  },
  text: {
    fontFamily: "Dosis",
    fontSize: 17,
    fontWeight: 600,
    textTransform: "capitalize",
    color: "#ADBEC5"
  },
  fulllist: {
    margin: "20px 0"
  },
  icons: {
    color: "#344750",
    fontSize: 18
  },
  sublist: {
    padding: "10px 0 10px 25%"
  },
  subtext: {
    fontFamily: "Dosis",
    fontSize: 15,
    fontWeight: 500,
    textTransform: "capitalize",
    color: "#ADBEC5"
  },
  subIcon: {
    color: "#344750",
    fontSize: 14
  },
  subtextSelected: {
    fontFamily: "Dosis",
    fontSize: 15,
    fontWeight: 500,
    textTransform: "capitalize",
    color: "#ff782d"
  }
};

class ListItemsContainer extends Component {
  constructor() {
    super();
    this.state = {
      pos: "simpleuser",
      submenu: true,
      simpleusers: simpleUserList
    };
  }

  ouricons = {
    wrench: Build,
    play: PlayCircleFilled,
    upload: Publish,
    com: LibraryBooks
  };

  handleSubClick = targetTitle => {
    let changesub = this.state.submenu;
    this.setState(state => {
      console.log(targetTitle);
      const updatedSimple = state.simpleusers.map(list => {
        if (targetTitle === list.title) {
          list.selected = !list.selected;
          if (list.submenu) changesub = true;
        } else {
          list.selected = false;
        }
        return list;
      });
      return {
        submenu: changesub ? !state.submenu : state.submenu,
        simpleusers: updatedSimple
      };
    });
  };

  render() {
    const { classes } = this.props;
    const workwith =
      this.state.pos === "simpleuser" ? this.state.simpleusers : null;
    const ourItems = workwith.map(item => {
      let IconToUse = this.ouricons[item.icon];
      let func = item.submenu ? this.handleSubClick : () => {};
      let sub = item.submenu
        ? item.submenu.map(submenuitem => {
            return (
              <div key={submenuitem.title}>
                <ListItem
                  button
                  className={classes.sublist}
                  selected={submenuitem.selected}
                >
                  <ListItemIcon>
                    <PanoramaFishEye classes={{ root: classes.subIcon }} />
                  </ListItemIcon>
                  <ListItemText
                    inset
                    primary={submenuitem.title}
                    classes={{
                      primary: classes.subtext,
                      dense: classes.subtextSelected
                    }}
                  />
                </ListItem>
              </div>
            );
          })
        : null;

      return (
        <div key={item.title}>
          <ListItem
            button
            key={item.title}
            selected={item.selected}
            onClick={() => this.handleSubClick(item.title)}
            classes={{
              root: classes.firstlist,
              selected: "firstlist"
            }}
          >
            <ListItemIcon>
              <IconToUse classes={{ root: classes.icons }} />
            </ListItemIcon>
            <ListItemText
              inset
              primary={item.title}
              classes={{
                primary: classes.text
              }}
            />
          </ListItem>
          {item.submenu ? (
            <Collapse in={this.state.submenu} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {sub}
              </List>
            </Collapse>
          ) : null}
        </div>
      );
    });

    return (
      <List component="ul" className={classes.fulllist}>
        {ourItems}
      </List>
    );
  }
}

export default withStyles(styles)(ListItemsContainer);
