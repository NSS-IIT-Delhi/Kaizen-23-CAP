import React from "react";
import "./Testimonial.css";
import TestimonialCard from "./TestimonialCard";
import photo from "../assets/photo.jpg";

import Carousel from "react-elastic-carousel";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 900, itemsToShow: 2, itemsToScroll: 2 },
  { width: 1200, itemsToShow: 3 },
  { width: 2000, itemsToShow: 4 },
];

export default function Testimonial() {
  const testimonialData = [
    {
      id: 1,
      name: "Hajra",
      college: "Isabella Thoburn college, Lucknow",
      description:
        " Well, I like to thank the event organizing team of the NSS IITD. I had a great experience as a campus ambassador at NSS IITD. As a campus ambassador, I got a platform to become a college representative for different activities and competitions. I enhanced my public speaking, social media networking, content writing, and promotion. It helped me meet new people and expand my network to the students' different streams. I got to know about other things. I gain so much confidence in talking to a range of people. ",
      img: photo,
    },
    {
      id: 2,
      name: "Aravind A",
      college: "PES University (EC CAMPUS), Bangalore",
      description:
        " Noob to top performing intern. When I started the internship as a campus ambassador, I was really afraid. But the Kaizen members' meetings and step by, I was one of the top performing campus ambassadors. I thank IIT DELHI, especially Kaizen, for the opportunity and believing in my potential. ",
      img: photo,
    },
    {
      id: 3,
      name: "Janhvi Singh",
      college: "BIT, Bangalore",
      description:
        " Hi, this is Janhvi Singh from BIT, Bangalore. I've worked with Kaizen in the year 2022 as a campus ambassador and the experience was quite enlightening. There was a team of mentors who were always there to guide us and help us to the correct path.All of us worked really hard to make the event a successful one! ",
      img: photo,
    },
    {
      id: 4,
      name: "Hajra4",
      college: "Isabella Thoburn college, Lucknow",
      description:
        " Well, I like to thank the event organizing team of the NSS IITD. I had a great experience as a campus ambassador at NSS IITD. As a campus ambassador, I got a platform to become a college representative for different activities and competitions. I enhanced my public speaking, social media networking, content writing, and promotion. It helped me meet new people and expand my network to the students' different streams. I got to know about other things. I gain so much confidence in talking to a range of people. ",
      img: photo,
    },
  ];

  return (
    <div className="app__flex app__container">
      <h1 className="head-text text-gradient">The Kaizen Family</h1>
      <hr />

      <div className="testimonial__container">
        <Carousel breakPoints={breakPoints}>
          {testimonialData.map((testimonial) => {
            return <TestimonialCard dataItem={testimonial} />;
          })}
        </Carousel>
      </div>

      {/* <div className="testimonial__container">
        {testimonialData.map((testimonial) => {
          return <TestimonialCard dataItem={testimonial} />;
        })}
      </div>
      <div className="slider-toggle">
        <a href={`#1`}>
          <MdNavigateBefore className="toggleCircle" />
        </a>
        <a href={`#${testimonialData.length}`}>
          <MdNavigateNext className="toggleCircle" />
        </a>
      </div> */}
    </div>
  );
}
