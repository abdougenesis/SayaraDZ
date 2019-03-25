import React, { Component } from "react";
import ListItemsContainer from "./ListItemsContainer";
import UserPic from "./UserPic";
import "../../Styles/global.css";

class SideBar extends Component {
  constructor() {
    super();
  }

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
