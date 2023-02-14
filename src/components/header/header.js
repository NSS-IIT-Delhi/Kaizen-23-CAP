
import React, { useEffect, useState} from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";
import "./style.css"
import 'animate.css';
import logo from "../assets/logo.png"

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
              <a class="navbar-brand px-4"><img width={50} class="logo" alt="Kaizen" src={logo}/></a>
              <a class="ham-link float-left">Kaizen'23</a>

              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
                <div class="menubar">
                  <span class="first-span"></span>
                  <span class="second-span"></span>
                  <span class="third-span"></span>
                </div>
              </button>              


              <div class="collapse navbar-collapse float-right" id="menu">
                  <ul class="navbar-nav ms-auto">

                      <li class="nav-item mx-2 hover-underline-animation">
                        <a class="nav-link">
                          <Link activeClass="nav-link-active" to="home" spy={true} offset={-70} duration={500}>
                            Home
                          </Link></a>
                      </li>

                      <li class="nav-item mx-2 hover-underline-animation">
                        <a class="nav-link">
                          <Link activeClass="nav-link-active" to="about" spy={true} offset={-70} duration={500}>
                            About
                          </Link></a>
                      </li>

                      <li class="nav-item mx-2 hover-underline-animation">
                        <a class="nav-link">
                          <Link activeClass="nav-link-active" to="whycap" spy={true} offset={-70} duration={500}>
                            Why CAP?
                          </Link></a>
                      </li>

                      <li class="nav-item mx-2 hover-underline-animation">
                        <a class="nav-link">
                          <Link activeClass="nav-link-active" to="roles" spy={true} offset={-70} duration={500}>
                            Roles
                          </Link></a>
                      </li>

                      <li class="nav-item mx-2 hover-underline-animation">
                        <a class="nav-link">
                          <Link activeClass="nav-link-active" to="contacts" spy={true} offset={-70} duration={500}>
                            Contact
                          </Link></a>
                      </li>  

                      <li class="nav-item mx-2">
                        <button class="applybtn mt-0" onClick={form}>Register</button>  
                      </li>                                 
                  </ul>
              </div>

            </div>
          </nav>
        </header>      

        <div class="head container-fluid">
          <div class="cap">
            <div class="row justify-content-center">
              <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 justify-content-center"  
                style={{
                  "text-align":"center",
                  "fontSize":45,
                  "font-family": 'Merriweather',
                  "color":"aquamarine",
                }}>
                CAMPUS AMBASSADOR PROGRAM
              <div style={{
                  "padding-top" : "5%",
                  "fontSize":20,
                  "font-family": 'arial',
                  "color":"white",
                }}> 
                <p>Kaizen, IIT Delhi's social annual fest, is proud to announce the launch of its Campus Ambassador Program. Grab the opportunity to be part of a dynamic team and gain valuable leadership and communication skills</p>
                <p>Don't miss out on this exciting chance and apply to be a Campus Ambassador today!</p>
                </div>
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


