import { ServicesData } from "../../../interface";

import "./style.css";

interface IGridItem {
  item: ServicesData
}

function GridItem({item}: IGridItem) {
  return (
    <div className="grid-item">
      <img className="grid-item__img" src={item.img} alt="Картинка"/>
      <p className="grid-item__text">{item.title}</p>
    </div>
  );
}

export default GridItem;