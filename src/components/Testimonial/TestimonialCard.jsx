import React from "react";
import { ImQuotesLeft } from "react-icons/im";

export default function TestimonialCard(props) {
  const { name, college, description, img } = props.dataItem;
  return (
    <div className="testimonial-card">
      <p className="description">
        <ImQuotesLeft
          style={{
            width: "40px",
            height: "40px",
            color: "#f5b041",
          }}
        />
        {description}
      </p>
      <div className="profile-section">
        <img className="profileImg" src={img} alt="" />
        <p>
          <span className="text-gradient">{name}</span>
          <br /> {college}
        </p>
      </div>
    </div>
  );
}
