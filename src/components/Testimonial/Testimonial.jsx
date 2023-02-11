import React from "react";
import "./Testimonial.css";
import TestimonialCard from "./TestimonialCard";
import photo from "../assets/photo.jpg";
export default function Testimonial() {
  const testimonialData = [
    {
      name: "Hajra",
      college: "Isabella Thoburn college, Lucknow",
      description:
        " Well, I like to thank the event organizing team of the NSS IITD. I had a great experience as a campus ambassador at NSS IITD. As a campus ambassador, I got a platform to become a college representative for different activities and competitions. I enhanced my public speaking, social media networking, content writing, and promotion. It helped me meet new people and expand my network to the students' different streams. I got to know about other things. I gain so much confidence in talking to a range of people. ",
      img: photo,
    },
    {
      name: "Hajra",
      college: "Isabella Thoburn college, Lucknow",
      description:
        " Well, I like to thank the event organizing team of the NSS IITD. I had a great experience as a campus ambassador at NSS IITD. As a campus ambassador, I got a platform to become a college representative for different activities and competitions. I enhanced my public speaking, social media networking, content writing, and promotion. It helped me meet new people and expand my network to the students' different streams. I got to know about other things. I gain so much confidence in talking to a range of people. ",
      img: photo,
    },
    {
      name: "Hajra",
      college: "Isabella Thoburn college, Lucknow",
      description:
        " Well, I like to thank the event organizing team of the NSS IITD. I had a great experience as a campus ambassador at NSS IITD. As a campus ambassador, I got a platform to become a college representative for different activities and competitions. I enhanced my public speaking, social media networking, content writing, and promotion. It helped me meet new people and expand my network to the students' different streams. I got to know about other things. I gain so much confidence in talking to a range of people. ",
      img: photo,
    },
    {
      name: "Hajra",
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
        {testimonialData.map((testimonial) => {
          return <TestimonialCard dataItem={testimonial} />;
        })}
      </div>
    </div>
  );
}


