import React from "react";

function CommandesHeader(props) {
  return (
    <div className="commandeHeader">
      <h2 className="headerTitle"> List des Commandes </h2>
      <h3 className="headerTitle2"> {props.number} 7 au total</h3>
    </div>
  );
}

export default CommandesHeader;
