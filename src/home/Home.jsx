import React, { useRef, useEffect } from "react";
import "./home.css";

export default function Home() {
  const wrapRef = useRef(null);
  let page = 0;
  const lastPage = 2; // container.length - 1;

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
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
  }, [wrapRef, lastPage]); // wrapRef와 lastPage가 변경될 때마다 useEffect를 호출함

  return (
    <div className="main-home">
      <div className="wrap" ref={wrapRef}>
        <div className="container">1</div>
        <div className="container">2</div>
        <div className="container">3</div>
        <div className="container">4</div>
      </div>
    </div>
  );
}
