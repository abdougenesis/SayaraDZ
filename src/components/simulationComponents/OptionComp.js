import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Mycontext } from "./MyProvider";

const styles = theme => ({
  root: {
    width: "40%",
    margin: "5px 0"
  },
  checkboxContainer: {
    padding: " 0 10px"
  },

  checkboxRoot: {
    color: "#ff782d",
    "&$checked": {
      color: "#ff782d"
    }
  },
  checked: {}
});

class OptionComp extends Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
  }

  handleChange = () => {
    this.setState(state => {
      return { checked: !state.checked };
    });
  };

  render() {
    const { classes } = this.props;
    const price = this.props.price;
    return (
      <Mycontext.Consumer>
        {context => {
          return (
            <Paper className={classes.root} elevation={1}>
              <FormControlLabel
                className={classes.checkboxContainer}
                control={
                  <Checkbox
                    checked={this.state.checked}
                    onChange={() => {
                      this.state.checked
                        ? context.changePrice(-price)
                        : context.changePrice(price);
                      this.handleChange();
                    }}
                    value="checkedG"
                    classes={{
                      root: classes.checkboxRoot,
                      checked: classes.checked
                    }}
                  />
                }
                label={this.props.nom}
              />
            </Paper>
          );
        }}
      </Mycontext.Consumer>
    );
  }
}

OptionComp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OptionComp);
