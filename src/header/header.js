
import React, { useEffect, useState} from "react";
import "./style.css"
import 'animate.css';
export default function Header(){

  const [scrolled, setScrolled] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    const onPageLoad = () => {
      setPlayAnimation(true);

    };
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);
  
  const handleScroll = () => {
    if (window.pageYOffset > 70) {
      setScrolled(true);
      // setNavbarOpacity(0.8);
    } else if (window.pageYOffset < 10) {
      setScrolled(false);
      // setNavbarOpacity(1);
    }
  };


  return (
    <div>
      <div class="bg">
        <header class={`header sticky-top ${playAnimation ? "animU" : ""}`}>
          <nav  class={`navbar navbar-expand-md navbar-fixed-top navbar-default pt-${scrolled ? 0:5}`}>
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

        <div class="head container-fluid px-xl-5 px-lg-5 px-md-5 px-sm-4 px-3" style={{"padding-top":"170px"}}>
          <div class="row">
            <div class={` col-xl-7 col-lg-8 col-md-10 col-sm-11 col-9 pl-5 gradient-yellow  ${playAnimation ? "animL" : ""}`}
              style={{
                // "visibility":"hidden",
                "align-items":"center",
                // "display":"flex",
                "fontSize":45,
                "font-family": 'Merriweather',
                "color":"white",
              }}>
              <strong>CAMPUS AMBASSADOR PROGRAM</strong>
            </div>
          </div>
          <div class="row">
            <div class={`applybox col-xl-7 col-lg-6 col-md-8 col-sm-12 ${playAnimation ? "animL2":""}`}>
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
                <button class="dbutton p-3 rounded text-center ml-auto "
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


