import React, { useRef, useEffect, useState } from "react";
import "./home.css";
import logoImage from "./images/title.png";
import iconImage from "./images/icon.png";
import Header from "../header/Header";
import PageOne from "../paging/PageOne";
import PageTwo from "../paging/PageTwo";
import PageThree from "../paging/PageThree";
import $ from "jquery";
import emailjs from "emailjs-com"; // emailjs-com 패키지를 import 합니다.
import Footer from "../footer/Footer";
import Modal from "../modal/Modal";
export default function Home() {
  const homeWrapRef = useRef(null); // home-wrap 요소를 참조할 useRef 생성

  useEffect(() => {
    $(document).ready(function () {
      $("#contact-form").on("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(this);

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
  }, []);

  const wrapRef = useRef(null);
  let page = 0;
  const lastPage = 2;

  useEffect(() => {
    const handleWheel = (event) => {
      if (window.innerWidth > 800) {
        event.preventDefault();
        if (!wrapRef.current) return;
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
        wrapRef.current.style.top = page * -100 + "vh";
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [wrapRef, lastPage]);

  const handleLabelClick = () => {
    const submitBtnReal = document.querySelector(".submit-btn-real");
    if (submitBtnReal) {
      submitBtnReal.style.backgroundColor = "#00C76C";
      alert("Egoist : 이메일이 제출되었습니다");
    }
  };

  const openModal = () => {
    $(".modal").show();
    // home-wrap 요소의 scrollTop을 0으로 설정하여 맨 위로 이동
    if (homeWrapRef.current) homeWrapRef.current.scrollTop = 0;
    // home-wrap 요소에 포커스 설정
    if (homeWrapRef.current) homeWrapRef.current.focus();
  };
  return (
    <div className="main-home">
      <Header />
      <div className="home-wrap">
        <Modal />
        <div className="fixed-area">
          <div className="intro-box">
            <div className="logoimg">
              <div className="icon-width">
                <img className="img-width" src={iconImage} alt="Logo" />
              </div>
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
      <Footer />
    </div>
  );
}
