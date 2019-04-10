import React from "react";
import FloatingButton from "../../Global/FolatingButton";
import "./../ManagStyles.css";

function OptionHeader(props) {
  return (
    <div className="headerContainer">
      <h2 className="headerTitle"> geree options </h2>
      <FloatingButton handleclick={props.handleButton} />
    </div>
  );
}

export default OptionHeader;
