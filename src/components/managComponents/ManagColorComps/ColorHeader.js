import React from "react";
import FloatingButton from "./../../Global/FolatingButton";
import "./../ManagStyles.css";

function ColorHeader(props) {
  return (
    <div className="headerContainer">
      <h2 className="headerTitle"> geree couleur </h2>
      <FloatingButton handleclick={props.handleButton} />
    </div>
  );
}

export default ColorHeader;
