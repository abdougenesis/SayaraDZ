import React, { Component } from "react";
import CommandesTable from "./CommandesTable";
import CommandesHeader from "./CommandesHeader";
//import FakeCommandes from "./FakeCommandes";
import sayara from "./../../images/sayara.png";

import axiosDef from "./../loginComponents/axiosDef";

class CommandesContainer extends Component {
  constructor() {
    super();
    this.state = {
      fakeCommandes: [],
      loading: true
    };
  }

  componentDidMount() {
    axiosDef
      //.get("https://protechsayaradz.herokuapp.com/reservation/commande/1")
      .get(`/reservation/commande/${localStorage.getItem("marque")}`)
      .then(resp => resp.data)
      .then(resp => {
        this.setState({ fakeCommandes: resp, loading: false });
        console.log(resp);
      });
  }

  handleOption = (vehicule, option) => {
    // do the call to the api for both the options
    if (option === "valider") {
      console.log(vehicule);
      axiosDef
        .post("/reservation/valider", {
          Num_Cmd: vehicule
        })
        .then(resp => resp.data)
        .then(resp => {
          this.setState(oldstate => {
            const newlist = oldstate.fakeCommandes.filter(obj => {
              return obj.pk !== vehicule;
            });
            //console.log(newlist.length);
            return { fakeCommandes: newlist };
          });
          console.log(resp);
        });
      console.log("valider commande");
    } else {
      /*axiosDef
        .post("/reservation/regeter", {
          Num_Cmd: vehicule
        })
        .then(resp => resp.data)
        .then(resp => {
          this.setState(oldstate => {
            const newlist = oldstate.fakeCommandes.filter(obj => {
              return obj.pk !== vehicule;
            });
            //console.log(newlist.length);
            return { fakeCommandes: newlist };
          });
          console.log(resp);
        });*/
      this.setState(oldstate => {
        const newlist = oldstate.fakeCommandes.filter(obj => {
          return obj.pk !== vehicule;
        });
        //console.log(newlist.length);
        return { fakeCommandes: newlist };
      });
      console.log("regeter commande");
    }
    // delete the commande from the table
    /*this.setState(oldstate => {
      const newlist = oldstate.fakeCommandes.filter(obj => {
        return obj.vehicule !== vehicule;
      });
      //console.log(newlist.length);
      return { fakeCommandes: newlist };
    });*/
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

export default CommandesContainer;
