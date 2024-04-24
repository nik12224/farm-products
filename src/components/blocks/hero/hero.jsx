import React from "react";
import "./styles.js";
import Title, { TitleSize } from "../../ui/title/title";
import { Text, StyledAbout } from "./styles";

function Hero() {
  return (
    <StyledAbout>
      <Title size={TitleSize.BIG}>
        {" "}
        Магазин фермерских продуктов с доставкой
      </Title>
      <Text>
        Все продукты изготавливаются под заказ. Фермеры начинают готовить
        продукты за день до отправки заказа клиентам. Именно поэтому мы
        принимаем заказы заранее и доставляем продукты максимально свежими.
      </Text>
    </StyledAbout>
  );
}

export default Hero;