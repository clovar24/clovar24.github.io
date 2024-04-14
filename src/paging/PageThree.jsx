import React, { useState } from "react";
import reviewImg from "./images/review.png";
import appImg from "./images/app.png";
import googleImg from "./images/google.png";
import $ from "jquery";
export default function PageThree() {
  // 모달 상태를 관리하는 useState 훅 사용

  // 모달을 열기 위한 핸들러 함수
  const openModal = () => {
    $(".modal").show();
    $(".modal-wrap").show();
    $(".fixed-area").focus();
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
              {/* 이미지 클릭 시 모달 열도록 클릭 이벤트 추가 */}
              <img
                src={appImg}
                alt="about"
                className="app-img-width"
                onClick={openModal}
              />
              <img
                src={googleImg}
                alt="about"
                className="app-img-width"
                onClick={openModal}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
