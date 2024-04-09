import React from "react";
import "./style.css";
import Title from "../../ui/title/title";
import img from "../../../assets/images/frame.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__text">
        <Title>Магазин фермерских продуктов с доставкой</Title>
        <p>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
        </p>
      </div>
      <div className="hero__img">
        <img src={img} alt="Фермер" />
      </div>
    </section>
  );
}

export default Hero;