import React from "react";
import ModelsContainer from "./managComponents/ManagModelComps/ModelsContainer";
import ColorsContainer from "./managComponents/ManagColorComps/ColorsContainer";
import VersionsContainer from "./managComponents/ManagVersionComps/VersionsContainer";
import OptionsContainer from "./managComponents/ManagOptionComps/OptionsContainer";
import CommandesContainer from "./commandesComponents/CommandesContainer";
import SimulationContainer from "./simulationComponents/SimulationContainer";
import UploadContainer from "./UploadComponents/UploadContainer";
import styled from "styled-components";

import { Route /*, Link*/, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function AppRouteContainer({ location }) {
  return (
    <Wrapper>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={"fade"}
        >
          <section className="route-section">
            <Switch location={location}>
              <Route
                path="/Application/commandes"
                render={() => <CommandesContainer />}
              />
              <Route
                path="/Application/simuler"
                render={() => <SimulationContainer />}
              />
              <Route
                path="/Application/upload"
                render={() => <UploadContainer />}
              />
              <Route
                path="/Application/manag-options"
                render={() => <OptionsContainer />}
              />
              <Route
                path="/Application/manag-colors"
                render={() => <ColorsContainer />}
              />
              <Route
                path="/Application/manag-versions"
                render={() => <VersionsContainer />}
              />
              <Route
                path="/Application/manag-models"
                render={() => <ModelsContainer />}
              />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
  div.transition-group {
    position: relative;
  }
  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

export default withRouter(AppRouteContainer);
