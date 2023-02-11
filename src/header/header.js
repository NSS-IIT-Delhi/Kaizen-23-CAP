
import React, { Component } from "react";
import "./style.css"
import $ from 'jquery';
export default class Header extends Component{


  jQuerycode = () => {
    $(window).scroll(function () {
      if ($(".navbar-default").offset().top > 60) {
        $(".navbar-fixed-top").addClass("pt-2");
        $(".navbar-fixed-top").removeClass("pt-5");
      } else if ($(".navbar-default").offset().top < 10) {
        $(".navbar-fixed-top").addClass("pt-5");
        $(".navbar-fixed-top").removeClass("pt-2");
      }
    });
  }
  componentDidMount(){
    this.jQuerycode()
  }
render(){
  return (
    <div>
      <div class="bg">
        <header class="header sticky-top">
          <nav class="navbar navbar-expand-md navbar-fixed-top navbar-default pt-5">
            <div class="container-fluid">
              <a class="navbar-brand px-4" href=""><img width={50} src="https://www.kaizeniitd.in/images/kaizen.png"/></a>
              
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" >
                <span class="navbar-toggler-icon"></span>
              </button>


              <div class="collapse navbar-collapse float-right" id="menu">
                  <ul class="navbar-nav">

                      <li class="nav-item mx-5">
                          <a class="nav-link" href="">Kaizen 2023</a>
                      </li>

                      <li class="nav-item mx-4">
                          <a class="nav-link" href="">Home</a>
                      </li>

                      <li class="nav-item mx-4">
                          <a class="nav-link" href="">About</a>
                      </li>

                      <li class="nav-item mx-4">
                          <a class="nav-link" href="">Contact</a>
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


      

        <div class="head container-fluid m-md-5">
          <div class="row mt-2 mb-5 pb-5">
            <div class="col-xl-6 col-lg-6 col-md-8 col-sm-12"  
              style={{
                "align-items":"center",
                "display":"flex",
                "fontSize":45,
                "font-family": 'Merriweather',
                "color":"white"
              }}>
              CAMPUS AMBASSADOR PROGRAM
            </div>
          </div>
          <div class="row mt-5 pt-5">
            <div class="col-xl-7 col-lg-6 col-md-8 col-sm-12">
              <div class="shadow-lg p-4 rounded text-center justify-content-around"
                style={{
                  "border-radius":"25px",
                  "background":"#F5B041",
                  "align-items":"center",
                  "display":"flex",
                  "fontSize":22,
                  "font-family": 'Raleway'
                }}>
                Be the representative of your campus
                <button class="dbutton p-3 rounded text-center ml-auto"
                  style={{
                    "border-radius":"25px",
                    "background":"black",
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

        <div class="container-fluid bg-white text-center p-5" style={{"height":"100vh","fontSize":22}}>
            Lorem Ipsum
        </div>
        <div class="container-fluid bg-white text-center p-5" style={{"height":"100vh","fontSize":22}}>
            Lorem Ipsum
        </div>        
      </div>
    </div>
  );
    }
}