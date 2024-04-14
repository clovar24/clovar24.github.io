import $ from "jquery";
import React, { useRef, useEffect, useState } from "react";
import "./home.css";
import logoImage from "./images/title.png";
import iconImage from "./images/icon.png";
import Header from "../header/Header";
import PageOne from "../paging/PageOne";
import PageTwo from "../paging/PageTwo";
import PageThree from "../paging/PageThree";
import emailjs from "emailjs-com";
import Footer from "../footer/Footer";
import Modal from "../modal/Modal";
export default function Home() {
  const homeWrapRef = useRef(null);
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState(0);
  const [scrollDisabled, setScrollDisabled] = useState(false);

  useEffect(() => {
    document
      .getElementById("contact-form")
      .addEventListener("submit", function (event) {
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
  }, []);

  const wrapRef = useRef(null);
  const lastPage = 2;

  useEffect(() => {
    const handleWheel = (event) => {
      if (window.innerWidth > 800 && !scrollDisabled) {
        event.preventDefault();
        const deltaY = event.deltaY;
        const currentPage = Math.min(
          Math.max(0, page + Math.sign(deltaY)),
          lastPage
        );
        goToPage(currentPage);
        setScrollDisabled(true); // 스크롤 잠금 설정
        setTimeout(() => {
          setScrollDisabled(false); // 일정 시간 후 스크롤 잠금 해제
        }, 1000); // 1초 동안 스크롤 잠금 상태 유지
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [page, lastPage, scrollDisabled]);

  const goToPage = (pageNumber) => {
    if (pageNumber !== page) {
      setPage(pageNumber);
      const wrap = wrapRef.current;
      if (wrap) {
        wrap.style.transition = "top 1s ease";
        wrap.style.top = `${pageNumber * -100}vh`;
        setTimeout(() => {
          wrap.style.transition = "";
        }, 500);
      }
    }
  };

  const handleLabelClick = () => {
    const submitBtnReal = document.querySelector(".submit-btn-real");
    if (!inputValue) {
      alert("이메일을 입력해주세요.");
      return;
    }
    if (submitBtnReal) {
      submitBtnReal.style.backgroundColor = "#00C76C";
      alert("Egoist : 이메일이 제출되었습니다");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    const submitBtnReal = document.querySelector(".submit-btn-real");
    if (event.target.value && submitBtnReal) {
      submitBtnReal.style.backgroundColor = "#00C76C";
    }
  };

  const openModal = () => {
    $(".modal").show();
    $(".modal-wrap").show();
    $(".main-home").css("position", "fixed");
    if (homeWrapRef.current) homeWrapRef.current.scrollTop = 0;
    if (homeWrapRef.current) homeWrapRef.current.focus();
  };

  return (
    <div className="main-home">
      <Header />
      <div className="home-wrap" ref={homeWrapRef}>
        <Modal />

        <div className="fixed-area">
          <div className="fixed-area-wrap">
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
                    ref={inputRef}
                    className="input-box"
                    placeholder="example@gmail.com"
                    type="text"
                    name="message"
                    onChange={handleInputChange}
                  />
                  <input type="submit" id="btnSubmit" className="submit-btn" />
                  <label
                    htmlFor="btnSubmit"
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
                        strokeWidth="1.10815"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
