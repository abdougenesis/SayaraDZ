import React, { Component } from "react";
import FieldComp from "./FieldComp";
import Logo from "../../images/sayara.png";
import SigninButton from "./SigninButton";
import "../../Styles/Signin.css";
import AuthService from "./AuthService";

class FormComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Auth = new AuthService();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.Auth.login(this.state.username, this.state.password)
      .then(res => {
        this.props.history.replace("/");
      })
      .catch(err => {
        alert(err);
      });
  }

  render() {
    return (
      <form className="formContainer" onSubmit={this.handleSubmit}>
        <h2>Sign in</h2>
        <img src={Logo} alt="logo sayara dz" />
        <FieldComp
          name="email"
          type="email"
          placeholder="youremail@gmail.com"
          handleChange={this.handleChange}
          data={this.state}
        />
        <FieldComp
          name="password"
          type="password"
          placeholder="your password"
          handleChange={this.handleChange}
          data={this.state}
        />
        <SigninButton />
      </form>
    );
  }
}

export default FormComp;
