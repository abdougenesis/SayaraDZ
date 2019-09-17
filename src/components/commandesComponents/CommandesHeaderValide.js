import React from "react";

function CommandesHeaderValide(props) {
  return (
    <div className="commandeHeader">
      <h2 className="headerTitle"> List des Commandes validées </h2>
      <h3 className="headerTitle2"> {props.number} au total</h3>
    </div>
  );
}

export default CommandesHeaderValide;
