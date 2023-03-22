import {useCallback, useState} from "react";

import Button from "../elements/button";
import Grid from "../elements/grid";
import GridItem from "../elements/grid-item";
import { servicesData } from "../../data";
import { ServicesData } from "../../interface";

import "./style.css";

function MainServices() {
  const [collaps, setCollaps] = useState(false);

  /**
   * Рендер функция
   */
  const renders = {
    item: useCallback((item: ServicesData) => (
      <GridItem item={item} key={item.id}/>
    ), [])
  }

  return (
    <div className="main-services">
      <h1 className="main-services__title">наши услуги</h1>
      <Grid items={servicesData} rendersItem={renders.item}/>
      <Grid items={servicesData} rendersItem={renders.item} collaps={collaps}/>
      <Button title="Все услуги" callback={() => setCollaps(prevState => !prevState)} clazz="button__pos button__main-services"/>
    </div>
  );
}

export default MainServices;