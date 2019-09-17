import React, { Component } from "react";
import CommandesTable from "./CommandesTableWithoutControl";
import CommandesHeader from "./CommandesHeaderValide";
//import FakeCommandes from "./FakeCommandes";
import axiosDef from "./../loginComponents/axiosDef";
import sayara from "./../../images/sayara.png";

class ValideCommandeContainer extends Component {
  constructor() {
    super();
    this.state = {
      fakeCommandes: [],
      loading: true
    };
  }

  componentDidMount() {
    axiosDef
      .get(`/reservation/commande/valider/${localStorage.getItem("marque")}`)
      .then(resp => resp.data)
      .then(resp => {
        this.setState({ fakeCommandes: resp, loading: false });
        console.log(resp);
      });
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
    let content = this.state.loading ? (
      <div className="loaderContainer">
        <img className="spinnerLoader" src={sayara} alt="logo spinner" />
      </div>
    ) : this.state.fakeCommandes.length !== 0 ? (
      <CommandesTable
        fakeCommandes={this.state.fakeCommandes}
        handleOption={this.handleOption}
      />
    ) : (
      <div className="emptyCommandes">List vide</div>
    );
    return (
      <div className="managIndex">
        <CommandesHeader number={this.state.fakeCommandes.length} />
        {content}
      </div>
    );
  }
}

export default ValideCommandeContainer;
