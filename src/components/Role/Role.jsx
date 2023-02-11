import React from "react";
import "./Role.css";
import RoleCard from "./RoleCard";
import role1 from "../assets/role1.png";
import advertize from "../assets/advertize.png";
import gear from "../assets/gear.png";
import social from "../assets/social.png";

export default function Role() {
  const roleData = [
    {
      title: "Organize",
      content:
        "Organize events, workshops and sessions regarding Kaizen and what it has to offer with assistance from mentors.",
      img: role1,
    },
    {
      title: "Publicity",
      content:
        "Managing the public image of Ecell and spreading information about E cell through various activities like putting up posters on the notice board.",
      img: advertize,
    },
    {
      title: "Social Media",
      content:
        "Sharing e-posters on social media platforms like facebook, instagram and WhatsApp. Forwarding mails to the college mailing list. Be the face of IITD in your college.",
      img: social,
    },
    {
      title: "Conduct",
      content:
        "Help in management of elimination rounds in your college and city to select participants for the main event.",
      img: gear,
    },
  ];

  return (
    <div className="app__flex app__container">
      <h2 className="head-text text-gradient">What will you do?</h2>
      <hr />
      <div className="role__container">
        {roleData.map((data) => {
          return <RoleCard dataItem={data} />;
        })}
      </div>
    </div>
  );
}
