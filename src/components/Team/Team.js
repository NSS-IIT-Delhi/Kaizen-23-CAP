import React from "react";
// import Tilt from "react-parallax-tilt";
import "./Team.css";
import { useParams } from "react-router-dom";


export default function Event() {
  const { id } = useParams();
  return (
    <>
         <h2 class="Title pt-3">Kaizen Tech Team</h2>

      <ul class="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="container">
      <header class="section-header mt-5">
        <p>Coordinators</p>
      </header>
      <div class="row gy-4 new">
        <div
          class="col-lg-3 col-md-5 col-sm-6 col-xs-10 d-flex align-items-stretch aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="member" style={{ backgroundColor: "#e6e6e6" }}>
            <img
              src="/adminerp.svg"
              class="img-fluid"
              alt=""
              style={{  width:"200px",height:"200px", objectFit: "cover" }}
            />

            <div class="member-info">
              <h4 className="text-dark">
                Nitesh Saini{" "}
              </h4>
            </div>
          </div>
        </div>

        <div
          class="col-lg-3 col-md-5 col-sm-6 col-xs-10 d-flex align-items-stretch aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="member" style={{ backgroundColor: "#e6e6e6" }}>
            <img
              src="/adminerp.svg"
              class="img-fluid"
              alt=""
              style={{  width:"200px",height:"200px", objectFit: "cover" }}
            />

            <div class="member-info">
              <h4 className="text-dark">
                Harshal{" "}
                </h4>
            </div>
          </div>
        </div>        </div>
        <header class="section-header mt-5">
        <p>Executives</p>
      </header>
      <div class="row gy-4 new">
        <div
          class="col-lg-3 col-md-4 col-sm-6 col-xs-10 d-flex align-items-stretch aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="member" style={{ backgroundColor: "#e6e6e6" }}>
            <img
              src="/Team Members/Urmila.jpg"
              class="img-fluid"
              alt=""
              style={{ width:"200px", height: "200px", objectFit: "cover" }}
            />

            <div class="member-info">
              <h4 className="text-dark">
                Urmila Sharma{" "}
              </h4>
            </div>
          </div>
        </div>
        <div
          class="col-lg-3 col-md-4 col-sm-6 col-xs-10 d-flex align-items-stretch aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="member" style={{ backgroundColor: "#e6e6e6" }}>
            <img
              src="/adminerp.svg"
              class="img-fluid"
              alt=""
              style={{  width:"200px",height:"200px", objectFit: "cover" }}
            />

            <div class="member-info">
              <h4 className="text-dark">
                Raghav{" "}

              </h4>

            </div>
          </div>
        </div>
        <div
          class="col-lg-3 col-md-4 col-sm-6 col-xs-10 d-flex align-items-stretch aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="member" style={{ backgroundColor: "#e6e6e6" }}>
            <img
              src="/adminerp.svg"
              class="img-fluid"
              alt=""
              style={{  width:"200px",height:"200px", objectFit: "cover" }}
            />

            <div class="member-info">
              <h4 className="text-dark">
                Abhijeet Gautam{" "}

              </h4>
            </div>
          </div>
        </div>
        <div
          class="col-lg-3 col-md-4 col-sm-6 col-xs-10 d-flex align-items-stretch aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="member" style={{ backgroundColor: "#e6e6e6" }}>
            <img
              src="/adminerp.svg"
              class="img-fluid"
              alt=""
              style={{  width:"200px",height:"200px", objectFit: "cover" }}
            />

            <div class="member-info">
              <h4 className="text-dark">
                Arush Bansal{" "}
              </h4>
            </div>
          </div>
        </div>
        <div
          class="col-lg-3 col-md-4 col-sm-6 col-xs-10 d-flex align-items-stretch aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="member" style={{ backgroundColor: "#e6e6e6" }}>
            <img
              src="/adminerp.svg"
              class="img-fluid"
              alt=""
              style={{  width:"200px",height:"200px", objectFit: "cover" }}
            />

            <div class="member-info">
              <h4 className="text-dark">
                Anish Banerjee{" "}
              </h4>
            </div>
          </div>
        </div>
      </div></div>
      
    </>
  );
}
