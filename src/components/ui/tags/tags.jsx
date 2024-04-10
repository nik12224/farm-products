import React from "react";
import "./style.css";

export const FarmTags = {
  FARMS: "Фермерские продукты",
  SHOPS: "Магазинные продукты"
};

function Tags({ className = "", tag }) {
  let options;

  switch (tag) {
    case FarmTags.FARMS:
      options = {
        text: "Фермерские продукты",
        bgColor: "#88AA4D"
      };
      break;
    case FarmTags.SHOPS:
      options = {
        text: "Магазинные продукты",
        bgColor: "#F75531"
      };
      break;
    default:
      options = {
        text: "",
        bgColor: "#000000"
      };
      break;
  }

  return options.text ? (
    <span className={`advantages__tag ${className}`} style={{ backgroundColor: options.bgColor }}>
      {options.text}
    </span>
  ) : null;
}

export default Tags;