import React from "react";
import Tags from "../tags/tags";

export const FarmsTagsCard = {
  FARMS: "Фермерские продукты",
  SHOPS: "Магазинные продукты"
}

function Card({ tag, name, image, desc }) {
  let options;

  switch (tag) {
    case FarmsTagsCard.FARMS:
      options = {
        text: "Фермерские продукты",
        bgColor: "#E1EDCE"
      };
      break;
    case FarmsTagsCard.SHOPS:
      options = {
        text: "Магазинные продукты",
        bgColor: "#F8DDD7"
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
    <React.Fragment>
      <article className="advantages__item" style={{ backgroundColor: options.bgColor }}>
        <div className="advantages__wrapper-start">
          <img src={image} alt="" />
          <div>
            <Tags tag={tag} />
            <h3 className="advantages__name">{name}</h3>
          </div>
        </div>
        <p dangerouslySetInnerHTML={{ __html: desc }} />
      </article>
    </React.Fragment>
  ) : null;
}

export default Card;