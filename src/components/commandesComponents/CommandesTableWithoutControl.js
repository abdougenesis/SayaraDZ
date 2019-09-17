import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import TableRowComande from "./TableRowComandeWithoutControl";
import WarningDialog from "./WarningDialog";

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
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

/*let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}*/

class CustomizedTableWithoutControl extends Component {
  constructor(props) {
    super();
    this.state = {
      //listCommandes: props.fakeCommandes,
      openWarningDialog: false,
      deleterow: {},
      option: ""
    };
  }

  handleChoice = (object, option) => {
    this.setState({
      openWarningDialog: true,
      deleterow: object,
      option: option
    });
  };

  handleCloseDialog = () => {
    this.setState({
      openWarningDialog: false
    });
  };

  // handleOption = () => {
  //   // do the call to the api for both the options
  //   if (this.state.option === "valider") {
  //     console.log("valider commande");
  //   } else {
  //     console.log("regeter commande");
  //   }
  //   // delete the commande from the table
  //   this.setState(oldstate => {
  //     const newlist = oldstate.listCommandes.filter(obj => {
  //       return obj.vehicule !== this.state.deleterow.vehicule;
  //     });
  //     //console.log(newlist.length);
  //     return { listCommandes: newlist };
  //   });
  // };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          {this.createTableHead()}
          <TableBody>
            {this.props.fakeCommandes.map(row => (
              <TableRowComande
                key={row.id}
                obj={row}
                handleChoice={this.handleChoice}
              />
            ))}
          </TableBody>
        </Table>
        <WarningDialog
          open={this.state.openWarningDialog}
          handleClose={this.handleCloseDialog}
          handleOption={this.props.handleOption}
          obj={this.state.deleterow}
          method={this.state.option}
          deleterow={this.state.deleterow}
        />
      </Paper>
    );
  }

  createTableHead = () => {
    return (
      <TableHead>
        <TableRow>
          <CustomTableCell>n commande</CustomTableCell>
          <CustomTableCell>Automobiliste</CustomTableCell>
          <CustomTableCell align="right">vehicule</CustomTableCell>
          <CustomTableCell align="right">montant</CustomTableCell>
          <CustomTableCell align="right">date</CustomTableCell>
          <CustomTableCell align="right">reserver</CustomTableCell>
        </TableRow>
      </TableHead>
    );
  };
}

CustomizedTableWithoutControl.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedTableWithoutControl);
