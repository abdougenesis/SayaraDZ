import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import Application from "./Application";
import * as serviceWorker from "./serviceWorker";
import LoginComp from "./components/loginComponents/LoginComp";
import Notfound from "./components/Notfound";
import "./FontLibrary";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/Application" component={Application} />
      <Route path="/login" component={LoginComp} />
      <Route component={Notfound} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
