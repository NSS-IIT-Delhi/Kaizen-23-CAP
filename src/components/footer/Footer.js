import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
<footer className="text-center">
      <div className="row" style={{fontFamily: 'Merriweather'}}>
        <h3 style={{fontFamily: 'Merriweather'}}>
          NSS  <br className="display-sm"/>
          IIT DELHI
        </h3>
      </div>
      <div className="row" style={{fontFamily: 'Merriweather'}}>
        <h3 style={{textTransform: "unset",fontSize:"17px"}}>IIT Delhi, Hauz Khas Delhi, India 110016</h3>
      </div>
      <br/>
      <div className="row">
        <h4 style={{color: "#ffbe55"}}>
          <a target="_blank " href="mailto:outreach.kaizen.iitd@gmail.com">
          <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
          <a target="_blank " href="https://www.facebook.com/NSSIITDelhi">
          <i className="fa fa-facebook-official" aria-hidden="true"></i>
          </a>
          <a target="_blank " href="https://www.instagram.com/kaizen.iitd/">
          <i className="fa-brands fa-square-instagram" aria-hidden="true"></i>
          </a>
          <a target="_blank " href="https://www.linkedin.com/company/nss-iit-delhi/">
          <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
          </a>
          <a target="_blank " href="https://mobile.twitter.com/nss_iitd">
          <i className="fa-brands fa-square-twitter" aria-hidden="true"></i>
          </a>
          <a target="_blank " href="https://www.youtube.com/channel/UC3nq2Tsw8eruu22-MBr2_ow">
          <i className="fa-brands fa-square-youtube" aria-hidden="true"></i>
          </a>
        </h4>
      </div>
      <br/>
      <div className="row WebLink" style={{fontFamily: 'Merriweather'}}>
        {/* <h3 style={{textTransform: "unset"}}>With Love from E-Cell,<br className="display-sm"/>
        IIT Kanpur</h3> */}
        <a href='#' target="_blank" rel="noopener noreferrer">KAIZEN'23 IIT Delhi</a>
      </div>
    </footer>
  )
}

export default Footer
