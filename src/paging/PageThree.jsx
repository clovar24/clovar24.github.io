import React, { useState } from "react";
import reviewImg from "./images/review.png";
import appImg from "./images/app.png";
import googleImg from "./images/google.png";
import $ from "jquery";
export default function PageThree() {
  const openModal = () => {
    $(".modal").show();
    $(".modal-wrap").show();
    $(".fixed-area").focus();
  };

  const trackAppDownload = () => {
    // 어플 다운로드 클릭 시 gtag 호출
    gtag("event", "어플다운로드클릭", {
      event_category: "어플다운로드",
      event_label: "어플다운로드",
    });
  };

  return (
    <div>
      <div className="step3">
        <div className="step3-main">
          <div className="step3-img-div">
            <img src={reviewImg} alt="about" className="img-width" />
          </div>
          <div className="step3-app">
            <div className="step3-app-div">
              <img
                src={appImg}
                alt="about"
                className="app-img-width"
                onClick={() => {
                  openModal();
                  trackAppDownload();
                }}
              />
              <img
                src={googleImg}
                alt="about"
                className="app-img-width"
                onClick={() => {
                  openModal();
                  trackAppDownload();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
