import React from "react";
import missionImg from "./images/mission.png";
export default function PageTwo() {
  return (
    <div className="step2">
      <div className="step2-main">
        <div className="step2-img-div">
          <img src={missionImg} alt="about" className="img-width" />
        </div>
      </div>
    </div>
  );
}
