import React from "react";
import "./Role.css";
import RoleCard from "./RoleCard";
// import organize from "../assets/organize.png";
// import advertize from "../assets/advertize.png";
// import gear from "../assets/gear.png";
// import social from "../assets/social.png";
import event from '../assets/event.png'
import publicity from '../assets/publicity.png'
import socialmedia from '../assets/socialmedia.png'
import setting from '../assets/setting.png'

export default function Role({id}) {
  const roleData = [
    {
      title: "Be the Face of the Event",
      content:
        "You will serve as the representative of the event, answering queries from other students and providing information about the event and its activities",
      // img: organize,
      img: event,
    },
    {
      title: "Publicity",
      content:
        "You will be responsible for promoting the event through various channels, such as social media, posters, and personal interactions",
      // img: advertize,
      img: publicity,
    },
    {
      title: "Social Media",
      content:
        "As a campus ambassador, your primary role is to spread awareness about the event Kaizen'23 among your peers and other students in your network.",
      // img: social,
      img: socialmedia,
    },
    {
      title: "Represent Your College",
      content:
        "As a campus ambassador, you will represent your college and help to build relationships between Kaizen IIT Delhi and other institutions.",
      // img: gear,
      img: setting,
    },
  ];

  return (
    <div className="app__flex app__container" id={id}>
      <h2 className="head-text text-gradient">Roles</h2>
      <hr />
      <div className="role__container">
        {roleData.map((data) => {
          return <RoleCard dataItem={data} />;
        })}
      </div>
    </div>
  );
}
