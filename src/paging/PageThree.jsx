import React, { useState, useEffect } from "react";
import reviewImg from "./images/review.png";
import appImg from "./images/app.png";
import googleImg from "./images/google.png";
import $ from "jquery";

export default function PageThree() {
  const [gtagLoaded, setGtagLoaded] = useState(false);

  useEffect(() => {
    // gtag 스크립트 로드가 완료될 때까지 기다립니다.
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-3L2BYJVB6H";
    script.async = true;
    script.onload = () => setGtagLoaded(true);
    document.head.appendChild(script);
  }, []);

  const openModal = () => {
    $(".modal").show();
    $(".modal-wrap").show();
    $(".fixed-area").focus();
  };

  const trackAppDownload = () => {
    if (gtagLoaded) {
      // gtag 함수가 로드된 후에 호출합니다.
      window.gtag("event", "어플다운로드클릭", {
        event_category: "어플다운로드",
        event_label: "어플다운로드",
      });
    } else {
      console.error("gtag script is not loaded yet.");
    }
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
