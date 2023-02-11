import React from 'react'
import img1 from './harsh.jpeg'
import img2 from './saumya.jpeg'
import './Contact.css'
const Contact = () => {
  return (
    <div className="contact-background" style={{ backgroundColor: "#000", overflowX: "hidden", fontFamily: 'Merriweather' }}>
      <section id="contact" className="section-padding wow fadeIn delay-05s animated" style={{ visibility: "visible", animationName: "fadeIn" }}>
        <div className="row1">
          <h1 className="title-text" style={{ color: " #ffa108", backgroundColor: "black" }} >
            FOR QUERIES CONTACT US
          </h1>
        </div>
        <br />

        <div className="container2">
          <div className="row contact-cards">
            <div className="col-md-6 text-center sanmati" data-sr-id="16" style={{ visibility: "visible", opacity: 1, transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", transition: "opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0s, transform 0.6s cubic-bezier(0.5, 0, 0, 1) 0s" }}>
              <div style={{ filter: "drop-shadow(0px 0px 0px #eaebf0)" }}>
                <img src={img1} width="250px" height="250px" />
                <h3>HARSH KUMAR SINGH</h3>
                <h5 style={{ fontWeight: "20px" }}>CA Head</h5>
                <h4>
                  <a href="tel:8006887753"><i className="fa fa-phone" aria-hidden="true"></i></a>
                  <a href="mailto:hkst2002@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                  <a target="_blank" href="https://www.linkedin.com/in/harsh-kumar-singh/"><i className="fa-brands fa-linkedin" aria-hidden="true"></i></a>
                  <a target="_blank" href="https://www.instagram.com/harsh.k.singh/"><i className="fa-brands fa-square-instagram" aria-hidden="true"></i></a>
                </h4>
              </div>
            </div>
            <div className="col-md-6 text-center aman" data-sr-id="17" style={{ visibility: "visible; opacity: 1", transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", transition: "opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.25s, transform 0.6s cubic-bezier(0.5, 0, 0, 1) 0.25s" }}>
              <div style={{ filter: "drop-shadow(0px 0px 0px #eaebf0)" }}>
                <img src={img2} width="250px" />
                <h3>SOUMYA SAHU</h3>
                <h5 style={{ fontWeight: "20px" }}>CA Head</h5>
                <h4>
                  <a href="tel:9109405799"><i className="fa fa-phone" aria-hidden="true"></i></a>
                  <a href="mailto:soumya060903@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                  <a target="_blank" href="https://www.linkedin.com/in/soumya-sahu-789232226"><i className="fa-brands fa-linkedin" aria-hidden="true"></i></a>
                  <a target="_blank" href="https://www.instagram.com/soumya__0609/"><i className="fa-brands fa-square-instagram" aria-hidden="true"></i></a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
