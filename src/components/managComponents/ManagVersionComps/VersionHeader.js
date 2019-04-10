import React from "react";
import FloatingButton from "./../../Global/FolatingButton";
import "./../ManagStyles.css";

function VersionHeader(props) {
  return (
    <div className="headerContainer">
      <h2 className="headerTitle"> geree version </h2>
      <FloatingButton handleclick={props.handleButton} />
    </div>
  );
}

export default VersionHeader;
