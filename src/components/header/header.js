import React, { useEffect, useState} from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";
import "./header.css"
// import 'animate.css';
import logo from "../assets/logo.png"

export default function Header(){

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

      <div class="bg">     

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


