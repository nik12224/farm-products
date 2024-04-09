import React from "react";
import eat from "../../../assets/images/eat.png";
import garbage from "../../../assets/images/garbage.png";
import sprout from "../../../assets/images/sprout.png";
import noMeat from "../../../assets/images/no-meat.png";

function Card({ tag, name, img, desc }) {
  return (
    <React.Fragment>
      <div className="advantages__item advantages__item--farms">
        <div className="advantages__wrapper-start">
          <img src={eat} alt="" />
          <div>
            <span className="advantages__tag">Фермерские продукты</span>
            <h3 className="advantages__name">Еда намного вкуснее</h3>
          </div>
        </div>
        <p>
          Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники
        </p>
      </div>
      <div className="advantages__item advantages__item--shop">
        <div className="advantages__wrapper-start">
          <img src={garbage} alt="" />
          <div>
            <span className="advantages__tag">Магазинные продукты</span>
            <h3 className="advantages__name">Просроченные продукты</h3>
          </div>
        </div>
        <p>
          Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара
        </p>
      </div>
      <div className="advantages__item advantages__item--farms">
        <div className="advantages__wrapper-start">
          <img src={sprout} alt="" />
          <div>
            <span className="advantages__tag">Фермерские продукты</span>
            <h3 className="advantages__name">Натуральные продукты</h3>
          </div>
        </div>
        <p>
          Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.
        </p>
      </div>
      <div className="advantages__item advantages__item--shop">
        <div className="advantages__wrapper-start">
          <img src={noMeat} alt="" />
          <div>
            <span className="advantages__tag">Магазинные продукты</span>
            <h3 className="advantages__name">Некачественное мясо</h3>
          </div>
        </div>
        <p>
          Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов
        </p>
      </div>
    </React.Fragment>
  );
}

export default Card;