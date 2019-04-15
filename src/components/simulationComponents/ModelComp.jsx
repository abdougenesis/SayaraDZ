import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import Paper from "@material-ui/core/Paper";
import { Mycontext } from "./MyProvider";
import classNames from "classnames";

const styles = theme => ({
  root: {
    textAlign: "center",
    width: 150,
    margin: "0 10px"
  },
  selected: {
    borderTop: "3px solid #ff782d"
  }
});

class ModelComp extends Component {
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
    return (
      <Mycontext.Consumer>
        {context => {
          return (
            <Paper
              className={classNames(
                classes.root,
                this.props.selected ? classes.selected : ""
              )}
              elevation={1}
              onClick={() => {
                this.props.handleClick(this.props.code, this.props.selected);
                if (this.props.version)
                  this.props.selected
                    ? context.changePrice(0)
                    : context.changePrice(-context.price + this.props.price);
              }}
            >
              <CardActionArea>
                <img
                  className="simulationModelImage"
                  src={this.props.img}
                  alt="model image"
                />
                <h3 className="simulationModelName">{this.props.nom}</h3>
              </CardActionArea>
            </Paper>
          );
        }}
      </Mycontext.Consumer>
    );
  }
}

ModelComp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ModelComp);
