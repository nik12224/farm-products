import React from "react";
import "./style.css";
import Button from "../../ui/button/button";
import Card from "../../ui/card/card";

function Advantages() {
  return (
    <section className="advantages">
      <h2 className="advantages__title">Почему фермерские продукты лучше?</h2>
      <section className="advantages__list">
        <Card />
      </section>
      <div className="advantages__button">
        <Button>Купить</Button>
      </div>
    </section>
  );
}

export default Advantages;