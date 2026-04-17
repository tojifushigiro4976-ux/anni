import React from "react";
import Moment from "moment";
import { extendMoment } from "moment-range";

function Animate() {
  return (
    <div
      className="slide-content"
    >
      <div className="slide-title">
        <h1>Happy 1st year Anniversary</h1>
      </div>
      <div className="slide-text">
        <p>April 20th 2026</p>
      </div>

      <div className="animation-pulse">
        <div className="animated-circle"></div>
      </div>
    </div>
  );
}

export default Animate;
