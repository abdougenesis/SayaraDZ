import React, { Component } from "react";
import ListItemsContainer from "./sideBarElements/ListItemsContainer";
import UserPic from "./sideBarElements/UserPic";
import "../../Styles/global.css";

class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <h2 className="sitetitle">sayara dz</h2>
        <UserPic />
        <ListItemsContainer />
      </div>
    );
  }
}

export default SideBar;
