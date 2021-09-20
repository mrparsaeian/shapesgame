import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import Timer from "./timer/timer";

const Header = () => {
  return (
    <div className="ui secondary menu">
      <Timer />
    </div>
  );
};

export default Header;
