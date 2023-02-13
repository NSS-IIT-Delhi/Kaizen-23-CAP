
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
        <header class="header sticky-top">
          <nav class={`navbar navbar-expand-md navbar-fixed-top navbar-default pt-${scrolled ? 0:5}`}>
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

        <div class="head container-fluid px-xl-5 px-lg-5 px-md-5 px-sm-4 px-3">
          <div class="row">
            <div class="col cap col-xl-7 col-lg-8 col-md-10 col-sm-12 gradient-yellow"  
              style={{
                "align-items":"center",
                "display":"flex",
                "fontSize":45,
                "font-family": 'Merriweather',
                "color":"white",
              }}>
              <strong>CAMPUS AMBASSADOR PROGRAM</strong>
            </div>
          </div>

          <div class="row">
            <div class="col col-xl-7 col-lg-6 col-md-8 col-sm-12 col-12">
              <div class="card applybox mx-xl-2 mx-lg-2 mx-md-2 mx-sm-2 mx-1" 
                            style={{
                              "border-radius":"15px",
                              "border":"transparent",
                              "background":"rgba(245, 176, 65, .8)",
                              "opacity":"0.9",
                              // "-webkit-filter": "brightness(100%) contrast(90%) blur(0.1px) grayscale(1%)",
                              // "filter": "brightness(90%) contrast(90%) blur(2px) grayscale(10%)",
                              // "background-image": "linear-gradient(#F5B041, #F5B800)", 
                              // "background-opacity":"80%",
                              "font-family": 'Raleway',
                              // "background": "rgba(0,0,0,0.8)",
                              "backdrop-filter": "blur(10px)",                  
                              // "backgroundImage":""
                            }}>
                <div class="card-body align-items-center" style={{"display":"flex",}}>
                  <h5 class="card-title gradient-white px-xl-4 px-lg-4 px-md-3 px-sm-2 px-1">Be the representative of your campus</h5>
                  <a href="#" class="btn dbutton btn-primary ms-auto" onClick={form} style={{
                    "-webkit-filter": "brightness(100%) contrast(100%) blur(0px) grayscale(0%)",
                      "border-radius":"15px",
                      "border":"transparent",
                    // "background":"rgba(0, 0, 0, .6)",
                      "background":"#28282b",
                      "align-items":"center",
                      "display":"flex",
                      "fontSize":22,
                      "color":"#F5B041"
                    }}>APPLY NOW</a>
                </div>
              </div>
            </div>

          </div>
        </div>       
      </div>
    </div>
  );
}


