import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import { DriveEta, FilterList, ColorLens } from "@material-ui/icons";
import { Mycontext } from "./MyProvider";
import { withRouter } from "react-router-dom";

const styles = theme => ({
  ConnectorRoot: {
    backgroundColor: "inherit",
    borderColor: "#ADBEC5",
    margin: 9.5,
    padding: 0.5
  },
  connectorActive: {
    "& $connectorLine": {
      borderColor: "#ff782d"
    }
  },
  connectorCompleted: {
    "& $connectorLine": {
      borderColor: "#ff782d"
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
    color: "#ffffff",
    cursor: "pointer"
  },
  stepDisabled: {
    backgroundColor: "#ADBEC5",
    borderRadius: "50%",
    padding: 10,
    color: "#ffffff",
    cursor: "pointer"
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
        id: 1,
        title: "Models & versions",
        icon: (
          <DriveEta
            classes={{
              root: classes.step
            }}
          />
        ),
        to: "models"
      },
      {
        id: 2,
        title: "Options",
        icon: (
          <FilterList
            classes={{
              root:
                this.state.activeStep > 0 ? classes.step : classes.stepDisabled
            }}
          />
        ),
        to: "options"
      },
      {
        id: 3,
        title: "Color",
        icon: (
          <ColorLens
            classes={{
              root:
                this.state.activeStep > 1 ? classes.step : classes.stepDisabled
            }}
          />
        ),
        to: "color"
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
        <Mycontext.Consumer>
          {context => (
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
                    //console.log(context);
                    if (label.id === 1) {
                      if (context.simulationCurrent !== 1) {
                        context.changeSimCurrent(1);
                        this.setState({ activeStep: 0 });
                      }
                    } else if (label.id === 2) {
                      if (context.simulationCurrent !== 2) {
                        context.changeSimCurrent(2);
                        this.setState({ activeStep: 1 });
                      }
                    } else {
                      if (context.simulationCurrent !== 3) {
                        context.changeSimCurrent(3);
                        this.setState({ activeStep: 2 });
                      }
                    }
                  }}
                >
                  <StepLabel icon={label.icon}>{label.title}</StepLabel>
                </Step>
              ))}
            </Stepper>
          )}
        </Mycontext.Consumer>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(SimulationStteper));
