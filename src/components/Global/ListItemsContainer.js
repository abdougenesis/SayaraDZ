import React, { Component } from "react";
import simpleUserList from "./ListTypes/simpleUserList";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import "./../../Styles/global.css";
import styles from "./ListTypes/SimpleUserStyles";
import ListItems from "./ListItems";
import SubListItems from "./SubListItems";

class ListItemsContainer extends Component {
  constructor() {
    super();
    this.state = {
      pos: "simpleuser",
      submenu: true,
      simpleusers: simpleUserList
    };
  }

  handleClick = (targetTitle, istargetselected) => {
    if (!istargetselected) {
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
    }
  };

  handleSubClick = (item, target) => {
    if (!target.selected) {
      this.setState(oldstate => {
        const updatedSimple = oldstate.simpleusers.map(list => {
          if (item === list) {
            const newsubmenu = list.submenu.map(sub => {
              if (sub === target) {
                sub.selected = true;
              } else sub.selected = false;
              return sub;
            });
            return newsubmenu;
          } else return list;
        });
        return {
          simpleuser: updatedSimple
        };
      });
    }
  };

  render() {
    const { classes } = this.props;
    const workwith =
      this.state.pos === "simpleuser" ? this.state.simpleusers : null;
    const ourItems = workwith.map(item => {
      let IconToUse = item.icon;
      let sub = item.submenu
        ? item.submenu.map(submenuitem => {
            return (
              <SubListItems
                classes={classes}
                submenuitem={submenuitem}
                item={item}
              />
            );
          })
        : null;

      return (
        <div key={item.title}>
          <ListItems
            icontouse={IconToUse}
            item={item}
            handleClick={this.handleClick}
            classes={classes}
          />
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
