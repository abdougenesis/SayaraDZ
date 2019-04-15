import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { DriveEta, FilterList, ColorLens } from "@material-ui/icons";

const styles = theme => ({
  ConnectorRoot: {
    backgroundColor: "#ADBEC5",
    borderColor: "#ADBEC5",
    margin: 9.5,
    padding: 0.5
  },
  connectorActive: {
    "& $connectorLine": {
      borderColor: theme.palette.secondary.main
    }
  },
  connectorCompleted: {
    "& $connectorLine": {
      borderColor: theme.palette.primary.main
    }
  },
  connectorDisabled: {
    "& $connectorLine": {
      borderColor: "#ADBEC5"
    }
  },
  connectorLine: {
    transition: theme.transitions.create("border-color")
  },
  stepsContainer: {
    backgroundColor: "inherit"
  },
  step: {
    backgroundColor: "#ff782d",
    borderRadius: "50%",
    padding: 10,
    color: "#ffffff"
  },
  stepDisabled: {
    backgroundColor: "#ADBEC5",
    borderRadius: "50%",
    padding: 10,
    color: "#ffffff"
  }
});

class SimulationStteper extends Component {
  constructor() {
    super();
    this.state = {
      activeStep: 0
    };
  }

  getSteps(classes) {
    return [
      {
        title: "Models & versions",
        icon: <DriveEta classes={{ root: classes.step }} />
      },
      {
        title: "Options",
        icon: <FilterList classes={{ root: classes.stepDisabled }} />
      },
      {
        title: "Color",
        icon: <ColorLens classes={{ root: classes.stepDisabled }} />
      }
    ];
  }

  render() {
    const { classes } = this.props;
    const steps = this.getSteps(classes);

    const { activeStep } = this.state;
    const connector = (
      <StepConnector
        classes={{
          root: classes.ConnectorRoot,
          active: classes.connectorActive,
          completed: classes.connectorCompleted,
          disabled: classes.connectorDisabled,
          line: classes.connectorLine
        }}
      />
    );

    return (
      <div>
        <Stepper
          className={classes.stepsContainer}
          alternativeLabel
          activeStep={activeStep}
          connector={connector}
        >
          {steps.map(label => (
            <Step
              key={label.title}
              onClick={() => {
                console.log("clicked");
              }}
            >
              <StepLabel icon={label.icon}>{label.title}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
    );
  }
}

export default withStyles(styles)(SimulationStteper);
