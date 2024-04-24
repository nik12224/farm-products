// import React from "react";
// import Tags from "../tags/tags";

// export const FarmsTagsCard = {
//   FARMS: "Фермерские продукты",
//   SHOPS: "Магазинные продукты"
// }

// function Card({ tag, name, image, desc }) {
//   let options;

//   switch (tag) {
//     case FarmsTagsCard.FARMS:
//       options = {
//         text: "Фермерские продукты",
//         bgColor: "#E1EDCE"
//       };
//       break;
//     case FarmsTagsCard.SHOPS:
//       options = {
//         text: "Магазинные продукты",
//         bgColor: "#F8DDD7"
//       };
//       break;
//     default:
//       options = {
//         text: "",
//         bgColor: "#000000"
//       };
//       break;
//   }

//   return options.text ? (
//     <React.Fragment>
//       <article className="advantages__item" style={{ backgroundColor: options.bgColor }}>
//         <div className="advantages__wrapper-start">
//           <img src={image} alt="" />
//           <div>
//             <Tags tag={tag} />
//             <h3 className="advantages__name">{name}</h3>
//           </div>
//         </div>
//         <p dangerouslySetInnerHTML={{ __html: desc }} />
//       </article>
//     </React.Fragment>
//   ) : null;
// }

// export default Card;

import React from "react";
import Title, { TitleSize } from "../title/title";
import { Feature, Image, Tag, Header, Text } from "./styles";

// Карточка
function FeatureCard({
  name, // название особенности
  tag, // владелец особенности (обычный магазин, фермерский)
  desc, // описание особенности
  isNegative, // является ли особенность отрицательной
  image // иконка
}) {
  return (
    <Feature isNegative={isNegative}>
      <Header>
        <Image width={56} height={56} src={image} alt={name} />
        <div>
          <Tag isNegative={isNegative}>{tag}</Tag>
          <Title as="h3" size={TitleSize.EXTRA_SMALL}>
            {name}
          </Title>
        </div>
      </Header>
      <Text dangerouslySetInnerHTML={{ __html: desc }} />
    </Feature>
  );
}

export default FeatureCard;
