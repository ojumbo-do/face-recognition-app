import React from "react";
import Tilt from "react-parallax-tilt";
import faceLogo from "./faceLogo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0 center">
      <Tilt
        className="logo shadow-4"
        style={{ height: "150px", width: "150px" }}
      >
        <div>
          <img src={faceLogo} alt="face logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
