import React from "react";
import icon_rating from "../assets/icon_rating.png";
import img_photo1 from "../assets/img_photo1.png";
import img_photo2 from "../assets/img_photo2.png";
import lelfbutton from "../assets/Left button.svg";
import rightbutton from "../assets/Right button.svg";

import "../styles/TestimonialStyle.css";

const Testimoni = () => {
  return (
    <>
      <section id="testimonial" className="mb-3">
        <div className="container">
           {/* Title */}
          <div className="text-center">
            <h1>Testimonial</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
              doloremque iure ullam.
            </p>
          </div>
           {/* Akhir Title */}
          <div
            id="carouselExampleRide"
            className="carousel slide"
            data-bs-ride="true"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-sm-12">
                    <div
                      className="card p-5"
                      style={{ backgroundColor: "#F1F3FF" }}
                    >
                      <div className="d-flex flex-column justify-content-center text-center">
                        <div>
                          <img
                            className="text-center"
                            src={img_photo1}
                            style={{ width: "100px", height: "100%" }}
                          />
                        </div>
                        <div>
                          <img
                            className="text-center"
                            src={icon_rating}
                            style={{ width: "140px", height: "100%" }}
                          />
                        </div>
                        <div className="my-2">
                          <p className="fw-bold">
                            "Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorum, cumque neque? Aperiam nihil delectus,
                            et magnam laboriosam molestias a vero commodi
                            distinctio reiciendis fugiat saepe. Iste ullam vero
                            quo labore!"
                          </p>
                        </div>
                        <div>
                          <span>John Dee 32, Bromo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12">
                    <div
                      className="card p-5"
                      style={{ backgroundColor: "#F1F3FF" }}
                    >
                      <div className="d-flex flex-column justify-content-center text-center">
                        <div>
                          <img
                            className="text-center"
                            src={img_photo1}
                            style={{ width: "100px", height: "100%" }}
                          />
                        </div>
                        <div>
                          <img
                            className="text-center"
                            src={icon_rating}
                            style={{ width: "140px", height: "100%" }}
                          />
                        </div>
                        <div className="my-2">
                          <p className="fw-bold">
                            "Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorum, cumque neque? Aperiam nihil delectus,
                            et magnam laboriosam molestias a vero commodi
                            distinctio reiciendis fugiat saepe. Iste ullam vero
                            quo labore!"
                          </p>
                        </div>

                        <div>
                          <span>Samsudin Husein 25, Semarang</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12">
                    <div
                      className="card p-5"
                      style={{ backgroundColor: "#F1F3FF" }}
                    >
                      <div className="d-flex flex-column justify-content-center text-center">
                        <div>
                          
                          <img
                            className="text-center"
                            src={img_photo2}
                            style={{ width: "100px", height: "100%" }}
                          />
                        </div>
                        <div>
                          
                          <img
                            className="text-center"
                            src={icon_rating}
                            style={{ width: "140px", height: "100%" }}
                          />
                        </div>
                        <div className="my-2">
                          <p className="fw-bold">
                            "Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorum, cumque neque? Aperiam nihil delectus,
                            et magnam laboriosam molestias a vero commodi
                            distinctio reiciendis fugiat saepe. Iste ullam vero
                            quo labore!"
                          </p>
                        </div>
                        <div>
                          <span>Susan Wu 30, Klaten</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-3 d-flex justify-content-center align-items-center gap-2 ">
            <button
              className="button-selected"
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="prev"
            >
              <img className="button-left" src={lelfbutton} alt="Previous" />
            </button>
            <button
              className="button-selected"
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="next"
            >
              <img className="button-right" src={rightbutton} alt="Next" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimoni;
