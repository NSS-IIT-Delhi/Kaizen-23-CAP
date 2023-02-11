
import React, { useEffect, useState} from "react";
import "./style.css"
export default function Header(){

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setScrolled(true);
      // setNavbarOpacity(0.8);
    } else {
      setScrolled(false);
      // setNavbarOpacity(1);
    }
  };


  return (
    <div>
      <div class="bg">
        <header class="header sticky-top">
          <nav class={`navbar navbar-expand-md navbar-fixed-top navbar-default pt-${scrolled ? 2:5}`}>
            <div class="container-fluid">
              <a class="navbar-brand px-4" href="https://www.kaizeniitd.in/"><img width={50} alt="Kaizen" src="https://www.kaizeniitd.in/images/kaizen.png"/></a>
              
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" >
                <span class="navbar-toggler-icon"></span>
              </button>


              <div class="collapse navbar-collapse float-right" id="menu">
                  <ul class="navbar-nav">

                      <li class="nav-item mx-5">
                          <a class="nav-link" href="https://www.kaizeniitd.in/">Kaizen 2023</a>
                      </li>

                      <li class="nav-item mx-4">
                          <a class="nav-link" href="https://www.kaizeniitd.in/">Home</a>
                      </li>

                      <li class="nav-item mx-4">
                          <a class="nav-link" href="https://www.kaizeniitd.in/">About</a>
                      </li>

                      <li class="nav-item mx-4">
                          <a class="nav-link" href="https://www.kaizeniitd.in/">Contact</a>
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
