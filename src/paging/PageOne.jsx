import React from "react";
import aboutImage1 from "./images/about1.png";
import aboutImage2 from "./images/about2.png";
import aboutImage3 from "./images/about3.png";
export default function PageOne() {
  return (
    <div className="step1">
      <div className="step1-main">
        <div className="intro-img">
          <div className="aboutImage aboutImage1">
            <img src={aboutImage1} alt="about" className="img-width" />
          </div>
          <div className="aboutImage aboutImage2">
            <img src={aboutImage2} alt="about" className="img-width" />
          </div>
          <div className="aboutImage aboutImage3">
            <img src={aboutImage3} alt="about" className="img-width" />
          </div>
        </div>
      </div>
    </div>
  );
}
