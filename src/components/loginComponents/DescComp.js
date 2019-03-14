import React from "react";
import "../../Styles/Signin.css";
import StartButton from "./StartButton";

function DescComp() {
  return (
    <div className="descContainer">
      <h1 id="title">Sayara DZ</h1>
      <h2 id="subTitle">
        your destination for better <br /> cars management with <br />
        <span>SAYARADZ !</span>
      </h2>
      <p id="signinText">
        <span>sayaradz</span> is a car management platform , we are commited to
        make your car management task an easy experience.
      </p>
      <StartButton />
    </div>
  );
}

export default DescComp;
