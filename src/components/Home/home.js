
import React, { useEffect, useState} from "react";
import { Link,scroller,Element, animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";
import 'animate.css';
import logo from "../assets/logo.png"
import Testimonial from "../Testimonial/Testimonial";
import Role from "../Role/Role";
import Header from "../header/header"
import Footer from '../footer/Footer';
import WhyCap from '../footer/WhyCAP'
import About from '../about/about'
import Contact from '../footer/Contact'
import Stats from "../stats/Stats";
import "./home.css"

export default function Home(){

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
    <div>

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
                          <Link activeClass="nav-link-active" to="contact" spy={true} offset={-70} duration={500}>
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

        <Element name="home"><Header/></Element>
        <Element name="about"><About/></Element>
        <Element name="whycap"> <WhyCap/><Stats/> </Element>
        <Element name="roles"> <Role/><Testimonial /> </Element>
        <Element name="contact"><Contact/></Element>
        <Footer />      

    </div>
  );
}



