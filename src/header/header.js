
import React, { useEffect, useState} from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";
import "./style.css"
import 'animate.css';
import logo from "./logo.png"

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
    } else if (window.pageYOffset < 10) {
      setScrolled(false);
    }
  };

  let navigate = useNavigate(); 
  const form = () =>{ 
    let path = `/form`; 
    navigate(path);
  }

  return (
    <div id={id}>

      <div class="bg">
        <header class="header sticky-top animate__animated animate__fadeInDown animate__delay-1s" style={{"--animate-delay": "0.7s",  "background-color": `rgb(0,0,0,${scrolled ? 0.5 : 0})`}}>
          <nav class={`navbar navbar-expand-md navbar-fixed-top navbar-default pt-${scrolled ? 0:2}`}>
            <div class="container-fluid">
              <a class="navbar-brand px-4" href="https://www.kaizeniitd.in/"><img width={50} class="logo" alt="Kaizen" src={logo}/></a>
              
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" >
                <span class="navbar-toggler-icon"></span>
              </button>


              <div class="collapse navbar-collapse float-right" id="menu">
                  <ul class="navbar-nav ms-auto">

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

        <div class="head container-fluid px-xl-5 px-lg-5 px-md-5 px-sm-4 px-3">
          <div class="cap">
            <div class="row justify-content-center">
              <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 justify-content-center"  
                style={{
                  "text-align":"center",
                  // "align-items":"center",
                  // "display":"flex",
                  "fontSize":45,
                  "font-family": 'Merriweather',
                  "color":"aquamarine",
                }}>
                CAMPUS AMBASSADOR PROGRAM
              </div>
            </div>
            
            <div class="row justify-content-center">
              <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 justify-content-center"  
                style={{
                  "text-align":"center",
                }}>
                <button class="applybtn" onClick={form}>Apply now</button>
              </div>
            </div>

          </div>

        </div>       
      </div>
    </div>
  );
}


