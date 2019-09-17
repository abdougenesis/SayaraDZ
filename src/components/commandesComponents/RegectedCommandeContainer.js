import React, { Component } from "react";
import CommandesTable from "./CommandesTable";
import CommandesHeader from "./CommandesHeader";
import FakeCommandes from "./FakeCommandes";

class RegectedCommandeContainer extends Component {
  constructor() {
    super();
    this.state = {
      fakeCommandes: FakeCommandes
    };
  }
  handleOption = vehicule => {
    // do the call to the api for both the options
    if (this.state.option === "valider") {
      console.log("valider commande");
    } else {
      console.log("regeter commande");
    }
    // delete the commande from the table
    this.setState(oldstate => {
      const newlist = oldstate.fakeCommandes.filter(obj => {
        return obj.vehicule !== vehicule;
      });
      //console.log(newlist.length);
      return { fakeCommandes: newlist };
    });
  };
  render() {
    return (
      <div className="managIndex">
        <CommandesHeader number={this.state.fakeCommandes.length} />
        <CommandesTable
          fakeCommandes={this.state.fakeCommandes}
          handleOption={this.handleOption}
        />
      </div>
    );
  }
}

export default RegectedCommandeContainer;
