import React from "react";
import { Link } from "react-router-dom";
import headerImg from "./images/logo.png";
export default function Header() {
  return (
    <div className="header">
      <div className="header-main">
        <div className="header-img-div">
          <Link to="#">
            <img src={headerImg} alt="about" className="img-width" />
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
}
