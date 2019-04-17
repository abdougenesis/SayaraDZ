import React from "react";
import { Lens, RadioButtonChecked } from "@material-ui/icons";
import { Mycontext } from "./MyProvider";
import Button from "@material-ui/core/Button";

export default function ColorComp(props) {
  const style = {
    styleIcon: {
      color: "#" + props.color,
      fontSize: 55,
      cursor: "pointer"
    },
    styleButton: {
      border: `7px solid #${props.color}`
    }
  };

  return (
    <Mycontext.Consumer>
      {context => {
        return (
          <div className="colorSimulation">
            {props.selected ? (
              <RadioButtonChecked style={style.styleIcon} />
            ) : (
              <Lens
                style={style.styleIcon}
                onClick={() => {
                  props.handleChange(props.code);
                  context.changePrice(-context.color.price + props.price);
                  context.changeColor("#" + props.color, props.price);
                }}
              />
            )}
          </div>
        );
      }}
    </Mycontext.Consumer>
  );
}
