import React from "react";
import FloatingButton from "./../../Global/FolatingButton";
import "./../ManagStyles.css";

function ModelHeader(props) {
  return (
    <div className="headerContainer">
      <h2 className="headerTitle"> geree modele </h2>
      <FloatingButton handleclick={props.handleButton} />
    </div>
  );
}

export default ModelHeader;
