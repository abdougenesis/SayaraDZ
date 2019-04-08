import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Avatar from "@material-ui/core/Avatar";
import { DriveEta } from "@material-ui/icons";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "../ManagStyles.css";

const styles = {
  textcolor: {
    fontFamily: "Dosis",
    fontSize: 17,
    fontWeight: 450,
    textTransform: "capitalize",
    color: "#344750"
  },
  nestedList: {
    padding: "10px 30px"
  },
  nestedText: {
    fontFamily: "Dosis",
    fontSize: 14,
    fontWeight: 450,
    textTransform: "capitalize",
    color: "#344750"
  },
  modelsSpan: {
    display: "inherit",
    alignItems: "inherit",
    justifyContent: "inherit",
    padding: "0 20px"
  }
};

const options = ["modifier", "supprimer"];

const ITEM_HEIGHT = 48;

class ColorComp extends Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleOption = option => {
    this.handleClose();
    let object = {
      Code_Couleur: this.props.code,
      Nom_Couleur: this.props.name,
      Hex_Couleur: this.props.color,
      Colore: this.props.sub
    };
    option === "modifier"
      ? this.props.handleOpenModifierColor(object)
      : this.props.handleOpenDeleteColor(object);
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const style2 = {
      backgroundColor: "#" + this.props.color,
      color: "#fff"
    };

    const submenu = this.props.sub.map(subitem => {
      return (
        <ListItem className={classes.nestedList} button key={subitem}>
          <ListItemIcon>
            <DriveEta />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.nestedText }}
            inset
            primary={subitem}
          />
        </ListItem>
      );
    });

    return (
      <div className="colorlistitem">
        <ListItem style={{ borderRadius: 5 }} button>
          <Avatar style={style2}>{this.props.name.charAt(0)}</Avatar>
          <ListItemText
            classes={{ primary: classes.textcolor }}
            inset
            primary={this.props.name}
          />
          <ListItemText
            classes={{ primary: classes.textcolor }}
            inset
            primary={this.props.code}
          />
          {this.props.open ? (
            <span
              className={classes.modelsSpan}
              onClick={() => this.props.handlesub(this.props.code)}
            >
              models
              <ExpandLess />
            </span>
          ) : (
            <span
              className={classes.modelsSpan}
              onClick={() => this.props.handlesub(this.props.code)}
            >
              models
              <ExpandMore />
            </span>
          )}

          <div>
            <IconButton
              aria-label="More"
              aria-owns={open ? "long-menu" : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={this.handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: 200
                }
              }}
            >
              {options.map(option => (
                <MenuItem
                  key={option}
                  onClick={() => this.handleOption(option)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </ListItem>
        <Collapse in={this.props.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {submenu}
          </List>
        </Collapse>
      </div>
    );
  }
}

export default withStyles(styles)(ColorComp);
