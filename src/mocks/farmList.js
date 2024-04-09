import eat from "../assets/images/eat.png";
import garbage from "../assets/images/garbage.png";
import sprout from "../assets/images/sprout.png";
import noMeat from "../assets/images/no-meat.png";

const farmList = [
  {
    id: 0,
    tag: 'Фермерские продукты',
    name: 'Еда намного вкуснее',
    desc: 'Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники',
    image: eat,
  },
  {
    id: 1,
    tag: 'Магазинные продукты',
    name: 'Просроченные продукты',
    desc: 'Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара',
    image: garbage,
  },
  {
    id: 2,
    tag: 'Фермерские продукты',
    name: 'Натуральные продукты',
    desc: 'Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.',
    image: sprout,
  },
  {
    id: 3,
    tag: 'Магазинные продукты',
    name: 'Некачественное мясо',
    desc: 'Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов',
    image: noMeat,
  },
]

export default farmList;