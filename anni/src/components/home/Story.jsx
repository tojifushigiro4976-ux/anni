import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Story() {
  return (
    <section id="story">
      <div className="story-container container">
        <div className="story-title">
          <div className="vector-img"></div>
          <h1>My Letter</h1>
        </div>
        <div className="story-wrap">
          <div className="row">
            <div className="col-lg-6 col-md-6 pr"></div>
          </div>
          <div className="col-lg-6 col-md-6 text-container">
            <div className="story-text left-align-text">
              <h3>My love</h3>
              <p className="date">
                This has been the best year of my life to spend it with you my
                baby i am glad i met you and i am glad i spent this much time
                with you my honey i hope i get to spend the rest of my life with
                you my amazing baby and i know no matter what would happen i
                will still believe in you and i will support you every step of
                the way my honey i really really love youuu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
