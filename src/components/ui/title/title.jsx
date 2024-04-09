import React from "react";
import "./style.css";

function Title({ children, h2, h3, h4 }) {
  return (

    <h1 className="title">{children}</h1>
  );
}

export default Title;