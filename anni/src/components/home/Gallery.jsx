import React from "react";

function Gallery() {
  return (
    <section id="gallery">
      <div className="gallery-container container">
        <div className="gallery-title">
          <div className="vector-img"></div>
          <h1>pic of my cutiee</h1>
        </div>

        <div className="gallery-wrap">
          <div className="row">
            <div className="col-lg-4 col-md-4 gallery-col">
              <div className="gallery-img-container">
                <img
                  className="gallery-img"
                  src="1/1.jpg"
                  alt="img1"
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 gallery-col">
              <div className="gallery-img-container">
                <img
                  className="gallery-img"
                  src="1/2.jpg"
                  alt="img2"
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 gallery-col">
              <div className="gallery-img-container">
                <img
                  className="gallery-img"
                  src="1/3.jpg"
                  alt="img3"
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 gallery-col">
              <div className="gallery-img-container">
                <img
                  className="gallery-img"
                  src="1/4.jpg"
                  alt="img4"
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 gallery-col">
              <div className="gallery-img-container">
                <img
                  className="gallery-img"
                  src="1/5.jpg"
                  alt="img5"
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 gallery-col">
              <div className="gallery-img-container">
                <img
                  className="gallery-img"
                  src="1/6.jpg"
                  alt="img6"
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 gallery-col">
              <div className="gallery-img-container">
                <img
                  className="gallery-img"
                  src="1/7.jpg"
                  alt="img7"
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 gallery-col">
              <div className="gallery-img-container">
                <img
                  className="gallery-img"
                  src="1/9.jpg"
                  alt="img9"
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 gallery-col">
              <div className="gallery-img-container">
                <img
                  className="gallery-img"
                  src="1/10.jpg"
                  alt="img10"
                />
              </div>
            </div>  
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
