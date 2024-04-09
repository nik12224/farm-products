import React from "react";
import logo from "../../../assets/logo.svg";
import "./style.css";

function Logo() {
  return (
    <a href="/" className="logo">
      <img src={logo} alt="Логотип" />
      <span>Фермерские продукты</span>
    </a>
  );
}

export default Logo;