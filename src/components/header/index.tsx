import { useCallback } from "react";

import List from "../elements/list";
import ListItem from "../elements/list-item";
import Button from "../elements/button";
import {ReactComponent as Logo} from "../../assets/logo.svg";

import { links } from "../../data";
import { Links } from "../../interface";
import "./style.css"

function Header() {

  /**
   * Рендер функция
   */
  const renders = {
    item: useCallback((item: Links) => (
      <ListItem item={item} key={item.id}/>
    ), [])
  }

  return (
    <header className="header">
      <div>
        <Logo/>
      </div>

      <div className="header__box">
        <List items={links} rendersItem={renders.item} clazz="list__row list__size"/>
        <Button title="Заказать звонок" callback={() => {}}/>
      </div>
    </header>
  );
}

export default Header;