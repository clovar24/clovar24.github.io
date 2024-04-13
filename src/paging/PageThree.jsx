import React from "react";
import reviewImg from "./images/review.png";
export default function PageThree() {
  return (
    <div className="step3">
      <div className="step3-main">
        <div className="step3-img-div">
          <img src={reviewImg} alt="about" className="img-width" />
        </div>
      </div>
    </div>
  );
}
