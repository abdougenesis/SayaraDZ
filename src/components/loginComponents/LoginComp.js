import React, { Component } from "react";
import DescComp from "./DescComp";
import FormComp from "./FormComp";
import "../../Styles/Signin.css";

class LoginComp extends Component {
  render() {
    return (
      <div>
        <div className="flexContainer">
          <DescComp />
          <FormComp />
        </div>
        <div className="clipdiv" />
      </div>
    );
  }
}

export default LoginComp;
