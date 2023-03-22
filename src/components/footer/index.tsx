import {useCallback} from "react";

import FooterForm from "./footer-form";
import FooterContacts from "./footer-contact";
import ListItem from "../elements/list-item";
import List from "../elements/list";
import FooterItem from "./footer-item";
import { Links } from "../../interface";
import { company, documents } from "../../data";

import "./style.css";

function Footer() {

  /**
   * Рендер функция 
   */
  const renders = {
    item: useCallback((item: Links) => (
      <ListItem item={item} key={item.id} clazz="list-item__footer"/>
    ), [])
  }

  return (
    <footer className="footer">
      <div className="footer__box">
        <div className="footer__square"></div>

        <div className="footer__list">
          <FooterItem title="Для связи">
            <FooterContacts/>
          </FooterItem>

          <FooterItem title="Компания">
            <List items={company} rendersItem={renders.item} clazz="list__column list__footer"/>
          </FooterItem>

          <FooterItem title="Документы">
            <List items={documents} rendersItem={renders.item} clazz="list__column list__footer list__footer-docs"/>
          </FooterItem>

          <FooterItem title="Будь в курсе">
            <FooterForm/>
          </FooterItem>
        </div>
      </div>

      <p className="footer__copyright">Copyright © 2022 SCID</p>
    </footer>
  );
}

export default Footer;