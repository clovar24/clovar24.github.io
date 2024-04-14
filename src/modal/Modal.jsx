import React from "react";
import clovarImg from "./images/clovar.png";
import $ from "jquery";
export default function Modal() {
  // 모달을 열기 위한 핸들러 함수
  const openModal = () => {
    $(".modal").show();
  };

  // 모달을 닫기 위한 핸들러 함수
  const closeModal = () => {
    $(".modal").hide();
  };
  return (
    <div className="modal">
      <div className="pos-rel modal-content">
        <div className="closeIcon" onClick={closeModal}>
          x
        </div>
        <div className="modal-img">
          <img src={clovarImg} alt="about" className="img-width" />
        </div>
        <div>
          {" "}
          <span className="ddate">출시 D-53!</span>
          <br /> <br />
          이메일을 남겨주시면 출시 알림을 드립니다.
        </div>
      </div>
    </div>
  );
}
