
import React, { useEffect, useState} from "react";
import "./style.css"
import 'animate.css';
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "./logo.png"
import { useNavigate } from "react-router-dom";

export default function Header({id}){

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    if (window.pageYOffset > 70) {
      setScrolled(true);
      // setNavbarOpacity(0.8);
    } else if (window.pageYOffset < 10) {
      setScrolled(false);
      // setNavbarOpacity(1);
    }
  };

  let navigate = useNavigate(); 
  const form = () =>{ 
    let path = `/form`; 
    navigate(path);
  }

  return (
    <div id={id}>

      <div class="bg animate__fadeIn">
        <header class="header sticky-top animate__animated animate__fadeInDown animate__delay-1s" style={{"--animate-delay": "0.3s"}}>
          <nav  class={`navbar navbar-expand-md navbar-fixed-top navbar-default pt-${scrolled ? 0:5}`}>
            <div class="container-fluid">
              <a class="navbar-brand px-4" href="https://www.kaizeniitd.in/"><img width={50} class="logo" alt="Kaizen" src={logo}/></a>
              
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" >
                <span class="navbar-toggler-icon"></span>
              </button>


              <div class="collapse navbar-collapse float-right" id="menu">
                  <ul class="navbar-nav">

                  <li class="nav-item mx-4 hover-underline-animation">
                        <a class="nav-link">
                          <Link activeClass="nav-link-active" to="home" spy={true} offset={-70} duration={500}>
                            Home
                          </Link></a>
                      </li>

                      <li class="nav-item mx-4 hover-underline-animation">
                        <a class="nav-link">
                          <Link activeClass="nav-link-active" to="about" spy={true} offset={-70} duration={500}>
                            About
                          </Link></a>
                      </li>

                      <li class="nav-item mx-4 hover-underline-animation">
                        <a class="nav-link">
                          <Link activeClass="nav-link-active" to="contacts" spy={true} offset={-70} duration={500}>
                            Contact
                          </Link></a>
                      </li>

                  </ul>


                  {/* <ul class="navbar-nav">
                      <li>
                          <span>
                          </span>
                      </li>
                  </ul> */}
              </div>

            </div>
          </nav>
        </header>      

        <div class="head container-fluid px-xl-5 px-lg-5 px-md-5 px-sm-4 px-4" style={{"padding-top":"170px"}}>
          <div class="row">
            <div class=" col-xl-7 col-lg-8 col-md-10 col-sm-12  pl-5 animate__animated animate__fadeInLeft animate__delay-1s gradient-yellow"  
              style={{
                "--animate-delay": "0.3s",
                "align-items":"center",
                "display":"flex",
                "fontSize":45,
                "font-family": 'Merriweather',
                "color":"white",
              }}>
              <strong>CAMPUS AMBASSADOR PROGRAM</strong>
            </div>
          </div>
          <div class="row animate__animated animate__fadeInLeft animate__delay-1s" style={{"--animate-delay": "0.6s"}}>
            <div class="applybox col-xl-7 col-lg-6 col-md-8 col-sm-12">
              <div class="shadow-lg p-3 rounded text-center justify-content-around"
                style={{
                  "border-radius":"25px",
                  "border":"transparent",
                  "background":"rgba(245, 176, 65, .8)",
                  // "-webkit-filter": "brightness(100%) contrast(90%) blur(0.1px) grayscale(1%)",
                  // "filter": "brightness(90%) contrast(90%) blur(2px) grayscale(10%)",
                  // "background-image": "linear-gradient(#F5B041, #F5B800)", 
                  // "background-opacity":"80%",
                  "align-items":"center",
                  "display":"flex",
                  "font-family": 'Raleway',
                  // "background": "rgba(0,0,0,0.8)",
                  "backdrop-filter": "blur(10px)",                  
                  // "backgroundImage":""
                }}>
                
                <div class="mx-3 gradient-white" style={{"fontSize":28,"font-family": 'Raleway'}}>Be the representative of your campus</div>
                <button class="dbutton p-3 rounded text-center ml-auto " onClick={form}
                  style={{
                  "-webkit-filter": "brightness(100%) contrast(100%) blur(0px) grayscale(0%)",
                    "border-radius":"25px",
                    "border":"transparent",
                  // "background":"rgba(0, 0, 0, .6)",

                    "background":"#28282b",
                    "align-items":"center",
                    "display":"flex",
                    "fontSize":22,
                    "color":"#F5B041"
                  }}>
                  Apply Now
                </button>
              
              </div>
 
            </div>
          </div>
        </div>       
      </div>
    </div>
  );
}


