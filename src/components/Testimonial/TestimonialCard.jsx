import React from "react";
import { ImQuotesLeft } from "react-icons/im";

export default function TestimonialCard(props) {
  const { id,name, college, description, img } = props.dataItem;
  return (
    <div id={id} className="testimonial-card">
      <p className="description">
        <ImQuotesLeft
          style={{
            verticalAlign:'bottom',
            width: "40px",
            height: "40px",
            color: "aquamarine",
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
