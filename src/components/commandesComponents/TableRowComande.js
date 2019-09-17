import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { TableRow } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";
import { Star } from "@material-ui/icons";

const options = ["valider", "regeter"];

const ITEM_HEIGHT = 48;

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  },
  reserver: {
    color: "#ff782d"
  }
});

class TableRowComande extends Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null
    };
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleOption = option => {
    this.handleClose();
    this.props.handleChoice(this.props.obj, option);
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  createMenu = (open, anchorEl) => {
    return (
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
            <MenuItem key={option} onClick={() => this.handleOption(option)}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <TableRow className={classes.row} key={this.props.obj.id}>
        <CustomTableCell component="th" scope="row">
          {this.props.obj.pk}
        </CustomTableCell>
        <CustomTableCell align="right">
          {this.props.obj.automobiliste}
        </CustomTableCell>
        <CustomTableCell align="right">
          {this.props.obj.vehicule}
        </CustomTableCell>
        <CustomTableCell align="right">
          {this.props.obj.montant}
        </CustomTableCell>
        <CustomTableCell align="right">{this.props.obj.date}</CustomTableCell>
        <CustomTableCell align="right">
          {this.props.obj.reserver ? (
            <Star classes={{ root: classes.reserver }} />
          ) : (
            ""
          )}
        </CustomTableCell>
        <CustomTableCell align="right">
          {this.createMenu(open, anchorEl)}
        </CustomTableCell>
      </TableRow>
    );
  }
}

export default withStyles(styles)(TableRowComande);
