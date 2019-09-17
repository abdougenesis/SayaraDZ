import React from "react";
import FloatingButton from "./../Global/FolatingButton";

function FabricantsHeader(props) {
  return (
    <div className="headerContainer">
      <div className="commandeHeader">
        <h2 className="headerTitle"> List des Fabricants </h2>
        <h3 className="headerTitle2"> {props.number} au total</h3>
      </div>

      <FloatingButton handleclick={props.handleButton} />
    </div>
  );
}

export default FabricantsHeader;
