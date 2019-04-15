import React, { Component } from "react";

const Mycontext = React.createContext();

class MyProvider extends Component {
  constructor() {
    super();
    this.state = {
      model: "",
      version: "",
      color: "",
      selectedOptions: [],
      price: 0,
      changePrice: price => {
        //console.log("hanniiii");
        this.setState(state => {
          let newstate = state;
          newstate.price += price;
          //console.log(newstate);
          return { newstate };
        });
      }
    };
  }
  render() {
    return (
      <Mycontext.Provider value={this.state}>
        {this.props.children}
      </Mycontext.Provider>
    );
  }
}

export default MyProvider;
export { Mycontext };
