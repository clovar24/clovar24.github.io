import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="pos-rel">
          <div className="scroll-btn">
            <div class="scroll-container">
              <div class="chevron"></div>
              <div class="chevron"></div>
              <div class="chevron"></div>
              <span class="text"></span>
              <a class="text" href="https://naegele.it">
                See it in action
              </a>
            </div>
          </div>
        </div>
        <a
          href="https://team-egoist.notion.site/8d564ee4df9d4a73bd3c0126a38b58d0?pvs=4"
          className="link"
        >
          <div>개인정보 수집 및 이용약관</div>
          <div>Contact Us 2024egoist@gmail.com</div>
        </a>
      </div>
    </div>
  );
}
