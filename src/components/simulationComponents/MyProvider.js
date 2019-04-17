import React, { Component } from "react";

const Mycontext = React.createContext();

class MyProvider extends Component {
  constructor() {
    super();
    this.state = {
      model: "",
      version: "",
      color: {
        color: "",
        price: 0
      },
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
      },
      changeColor: (color, price) => {
        this.setState({ color: { color: color, price: price } });
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
