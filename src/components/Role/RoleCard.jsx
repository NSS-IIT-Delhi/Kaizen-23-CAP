import React from "react";

export default function RoleCard(props) {
  const { title, content, img } = props.dataItem;
  return (
    <div className="role-card">
      <img  src={img} alt="" />
      <h3 className="text-gradient">{title}</h3>
      <p>{content}</p>
    </div>
  );
}
