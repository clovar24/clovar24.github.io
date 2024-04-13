import React, { useRef, useEffect } from "react";
import "./home.css";
import logoImage from "./images/title.png";
import Header from "../header/Header";
import PageOne from "../paging/PageOne";
import PageTwo from "../paging/PageTwo";
import PageThree from "../paging/PageThree";
import $ from "jquery";
import emailjs from "emailjs-com"; // emailjs-com 패키지를 import 합니다.

export default function Home() {
  useEffect(() => {
    $(document).ready(function () {
      // form submit
      $("#contact-form").on("submit", function (event) {
        event.preventDefault();

        // formData 넣어주고
        const formData = new FormData(this);

        // emailJS API로 이메일 보내기
        emailjs
          .sendForm(
            "service_u722ejp",
            "template_eqaiuas",
            document.getElementById("contact-form"),
            "7IJNHK35t9CaKpGLo"
          )
          .then(
            function (response) {
              alert("이메일이 성공적으로 전송되었습니다.");
            },
            function (error) {
              alert("이메일 전송 중 오류가 발생했습니다.");
            }
          );
      });
    });
  }, []); // useEffect의 의존성 배열을 빈 배열로 전달하여 한 번만 실행되도록 합니다.

  const wrapRef = useRef(null); // 리렌더링하지 않게 useRef 사용 : wrapRef 초기값은 null로!
  let page = 0; // 0부터 2까지 페이징
  const lastPage = 2;

  useEffect(() => {
    const handleWheel = (event) => {
      if (window.innerWidth > 800) {
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
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [wrapRef, lastPage]); //wrapRef와 lastPage가 변경될 때마다 useEffect를 호출

  const handleLabelClick = () => {
    const submitBtnReal = document.querySelector(".submit-btn-real");
    if (submitBtnReal) {
      submitBtnReal.style.backgroundColor = "#00C76C";
      alert("Egoist : 이메일이 제출되었습니다");
    }
  };

  return (
    <div className="main-home">
      <Header />
      <div className="home-wrap">
        <div className="fixed-area">
          <div className="intro-box">
            <div className="logoimg">
              <img className="img-width" src={logoImage} alt="Logo" />
            </div>
            <div>
              <form className="email-form" id="contact-form">
                <input
                  className="input-box"
                  placeholder="example@gmail.com"
                  type="text"
                  name="message"
                />
                <input type="submit" id="btnSubmit" className="submit-btn" />
                <label
                  htmlFor="btnSubmit" // "for" 대신 "htmlFor"를 사용합니다.
                  className="submit-btn-real"
                  onClick={handleLabelClick}
                >
                  출시 알림 받기
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.43271 3.72144L12.3112 7.59995M12.3112 7.59995L8.43271 11.4785M12.3112 7.59995L2.33789 7.59995"
                      stroke="#F9F9F9"
                      strokeWidth="1.10815" // "stroke-width" 대신 "strokeWidth"를 사용합니다.
                      strokeLinecap="round" // "stroke-linecap" 대신 "strokeLinecap"을 사용합니다.
                      strokeLinejoin="round" // "stroke-linejoin" 대신 "strokeLinejoin"을 사용합니다.
                    />
                  </svg>
                </label>
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
          <div className="container">
            <PageThree />
          </div>
        </div>
      </div>
    </div>
  );
}
