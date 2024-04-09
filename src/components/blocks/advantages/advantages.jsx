import React from "react";
import "./style.css";
import Button from "../../ui/button/button";
import Card from "../../ui/card/card";

function Advantages({ farms }) {
  return (
    <section className="advantages">
      <h2 className="advantages__title">Почему фермерские продукты лучше?</h2>
      <section className="advantages__list">
        {farms?.length ? (

          <React.Fragment>
            {
              farms.map((farm) => (
                <Card {...farm} />
              ))
            }
          </React.Fragment>

        ) : null}
      </section>
      <div className="advantages__button">
        <Button>Купить</Button>
      </div>
    </section>
  );
}

export default Advantages;