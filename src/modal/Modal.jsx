import React, { useRef, useEffect } from "react";
import clovarImg from "./images/clovar.png";
import $ from "jquery";

export default function Modal() {
  const currentDate = new Date(); // 현재 날짜
  const targetDate = new Date("2024-06-05"); // 목표 날짜

  // 두 날짜의 차이를 밀리초 단위로 계산
  const timeDiff = targetDate.getTime() - currentDate.getTime();

  // 밀리초를 일 단위로 변환
  const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  // 계산된 D-day를 화면에 표시할 형식으로 변환
  const dDayText = `D-${dayDiff}`;
  const modalRef = useRef(null);
  const focusTest = useRef(null);
  useEffect(() => {
    const handleFocus = () => {
      if (modalRef.current) {
        modalRef.current.focus();
      }
    };

    // 모달이 열릴 때 포커스를 주도록 이벤트를 등록합니다.
    $(".modal").on("shown.bs.modal", handleFocus);

    return () => {
      $(".modal").off("shown.bs.modal", handleFocus);
    };
  }, []);

  const closeModal = () => {
    $(".modal").hide();
  };

  return (
    <div className="modal-wrap">
      <div className="modal" tabIndex="-1" ref={modalRef}>
        <div className="pos-rel modal-content">
          <div className="closeIcon" onClick={closeModal}>
            x
          </div>
          <div className="modal-img">
            <img src={clovarImg} alt="about" className="img-width" />
          </div>
          <div>
            <span className="ddate">출시 {dDayText}</span>
            <br /> <br />
            이메일을 남겨주시면 출시 알림을 드립니다.
          </div>
        </div>
      </div>
    </div>
  );
}
