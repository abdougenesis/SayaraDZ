import React, { Component } from "react";
import "../../Styles/Signin.css";

class FieldComp extends Component {
  render() {
    return (
      <div className="fieldDeco">
        <p>{this.props.name}</p>
        <input
          name={this.props.name}
          className="inputfield"
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.data[this.props.name]}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default FieldComp;
