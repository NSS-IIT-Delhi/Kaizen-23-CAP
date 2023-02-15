
import React, { useEffect, useState} from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";
import "./style.css"
import 'animate.css';
import logo from "./logo.png"

export default function Navbar({id}){

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

      <div style={{"padding-top":"5rem"}}>
        <header class="header sticky-top animate__animated animate__fadeInDown animate__delay-1s" style={{"--animate-delay": "0.7s",  "background-color": `rgb(0,0,0,${scrolled ? 0.5 : 0})`}}>
          <nav class={`navbar navbar-expand-md navbar-fixed-top navbar-default pt-${scrolled ? 0:2}`}>
            <div class="container-fluid">
              <a class="navbar-brand px-4" href="https://cap-kaizen-iitd.netlify.app/"><img width={50} class="logo" alt="Kaizen" src={logo}/></a>
              <a class="ham-link float-left" href="https://cap-kaizen-iitd.netlify.app/">Kaizen'23</a>

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
                        <a class="nav-link" href="https://cap-kaizen-iitd.netlify.app/">
                          Home
                          </a>
                      </li>

                      <li class="nav-item mx-2 hover-underline-animation">
                        <a class="nav-link" href="https://cap-kaizen-iitd.netlify.app/">
                            About
                          </a>
                      </li>

                      <li class="nav-item mx-2 hover-underline-animation">
                        <a class="nav-link" href="https://cap-kaizen-iitd.netlify.app/">

                            Why CAP?
                          </a>
                      </li>

                      <li class="nav-item mx-2 hover-underline-animation">
                        <a class="nav-link" href="https://cap-kaizen-iitd.netlify.app/">

                            Roles
                          </a>
                      </li>

                      <li class="nav-item mx-2 hover-underline-animation">
                        <a class="nav-link" href="https://cap-kaizen-iitd.netlify.app/">
                          Contact
                          </a>
                      </li>  

                      <li class="nav-item mx-2">
                        <button href="#" class="applybtn mt-0">Register</button>  
                      </li>                                 
                  </ul>
              </div>

            </div>
          </nav>
        </header>  
        </div>
        </div>
  );
}


