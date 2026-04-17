import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="end-container">
        <div className="end-img"></div>
        <div className="end-content">
          <div className="thank-content">
            <h1>toki & cathy</h1>
            <p>Thank you my lovee</p>
          </div>
        </div>
        <div className="copyright-container">
          <p className="copyright">Copyright ⓒ {year} w2ah</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
