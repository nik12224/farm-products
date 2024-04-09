import React from "react";


function Card({ tag, name, image, desc }) {
  return (
    <React.Fragment>
      <article className="advantages__item advantages__item--farms">
        <div className="advantages__wrapper-start">
          <img src={image} alt="" />
          <div>
            <span className="advantages__tag">{tag}</span>
            <h3 className="advantages__name">{name}</h3>
          </div>
        </div>
        <p dangerouslySetInnerHTML={{ __html: desc }} />
      </article>
    </React.Fragment>
  );
}

export default Card;