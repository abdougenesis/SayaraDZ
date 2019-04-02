import React, { Component } from "react";
import userpic from "./../../../images/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

class UserPic extends Component {
  render() {
    return (
      <div className="tomiddle">
        <div className="userpicContainer">
          <div className="fonticon">
            <FontAwesomeIcon icon={faCog} className="fontawsome" />
          </div>
          <img src={userpic} alt="user pic" />
        </div>
      </div>
    );
  }
}

export default UserPic;
