import React from "react";
import Card from "../../ui/card/card";
import { Ul, Li } from "../../../styled"
import { Features, StyledButton, StyledTitle } from "./styles";

function Advantages({ features }) {
  return features && features.length ? (
    <Features>
      <StyledTitle as="h2">Почему фермерские продукты лучше?</StyledTitle>
      <Ul $isGridList>
        {features.map((feature) => (
          <Li key={feature.id}>
            <Card {...feature} />
          </Li>
        ))}
      </Ul>
      <StyledButton link="/buy">Купить</StyledButton>
    </Features>
  ) : null;
}

export default Advantages;