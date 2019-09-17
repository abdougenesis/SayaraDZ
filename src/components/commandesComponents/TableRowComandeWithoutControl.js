import React, { Component } from "react";
import { TableRow } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";
import { Star } from "@material-ui/icons";

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

class TableRowComandeWithoutControl extends Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null
    };
  }

  render() {
    const { classes } = this.props;
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
      </TableRow>
    );
  }
}

export default withStyles(styles)(TableRowComandeWithoutControl);
