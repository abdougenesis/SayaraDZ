import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faHighlighter,
  faCog
} from "@fortawesome/free-solid-svg-icons";

let icons = {
  facode: faCode,
  fahighlighter: faHighlighter,
  facog: faCog
};

function ItemForList(props) {
  let submenu;

  if (props.submenu) {
    submenu = props.submenu.map(sub => <p>{sub.title}</p>);
  } else submenu = null;
  return (
    <button>
      <FontAwesomeIcon icon={icons[props.icon]} />
      <p>{props.title}</p>
      {submenu}
    </button>
  );
}

export default ItemForList;
