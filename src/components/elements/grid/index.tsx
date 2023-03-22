import React from "react";

import { ServicesData } from "../../../interface";

import "./style.css";

interface IGrid {
  items: ServicesData[];
  collaps?: boolean;
  rendersItem: (arg: ServicesData) => React.ReactElement
}

function Grid({items, rendersItem, collaps = undefined}: IGrid) {

  /**
   * Функция для построения имени класса CSS
   * @returns string
   */
  const createClassName = () => {
    let clazzCollaps = "grid";
    if(collaps !== undefined) {
      const clazzCollaps = collaps ? "grid grid__collaps_visible" : "grid grid__collaps_hide"
      return clazzCollaps;
    }
    return clazzCollaps;
  }

  return (
    <div className="grid-position">
      <div className={createClassName()}>
        {items.map(item => rendersItem(item))}
      </div>
    </div>
  );
}

export default Grid;