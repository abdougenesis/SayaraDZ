import React, { Component } from "react";
import ListItemsContainer from "./sideBarElements/ListItemsContainer";
import UserPic from "./sideBarElements/UserPic";
import "../../Styles/global.css";

class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <h2 className="sitetitle">sayara dz</h2>
        <h2 className="userFunction">fabricant renault</h2>
        <UserPic />
        <h2 className="userFunction">Khaldi Abderraouf</h2>
        <ListItemsContainer simpleuser={this.props.simpleuser} />
      </div>
    );
  }
}

export default SideBar;
