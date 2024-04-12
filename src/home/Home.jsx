import React, { useRef, useEffect } from "react";
import "./home.css";
import logoImage from "./images/title.png";
import PageOne from "../paging/PageOne";
import PageTwo from "../paging/PageTwo";
export default function Home() {
  const wrapRef = useRef(null); // 리렌더링하지 않게 useRef 사용 : wrapRef 초기값은 null로!
  let page = 0; // 0부터 2까지 페이징
  const lastPage = 2;

  useEffect(() => {
    const handleWheel = (event) => {
      // handleWheel 이라는 함수 선언
      event.preventDefault(); // 이벤트 초기화 막음
      if (!wrapRef.current) return; // wrapRef가 유효하지 않으면 종료
      if (event.deltaY > 0) {
        page++;
      }
      if (event.deltaY < 0) {
        page--;
      }
      if (page < 0) {
        page = 0;
      }
      if (page > lastPage) {
        page = lastPage;
      }
      console.log(event.deltaY);
      wrapRef.current.style.top = page * -100 + "vh";
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [wrapRef, lastPage]); //wrapRef와 lastPage가 변경될 때마다 useEffect를 호출

  return (
    <div className="main-home">
      <div className="fixed-area">
        <div className="intro-box">
          <div className="logoimg">
            <img className="img-width" src={logoImage} alt="Logo" />
          </div>
          <div>
            <form className="email-form">
              <input
                className="input-box"
                placeholder="example@gmail.com"
                type="text"
              />
              <input
                className="submit-btn"
                type="submit"
                value="출시 알림 받기"
              />
            </form>
            <div className="info-ment">
              제출함으로써 개인정보 수집 및 이용약관에 동의합니다.
            </div>
          </div>
        </div>
      </div>
      <div className="wrap" ref={wrapRef}>
        <div className="container">
          <PageOne />
        </div>
        <div className="container">
          <PageTwo />
        </div>
        <div className="container">3</div>
        <div className="container">4</div>
      </div>
    </div>
  );
}
