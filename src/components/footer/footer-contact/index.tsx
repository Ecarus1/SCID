
import LayoutSvg from "../../elements/layout-svg";
import {ReactComponent as WhatsApp} from "../../../assets/contact/whatsapp.svg";
import {ReactComponent as Telegram} from "../../../assets/contact/telegram.svg";
import {ReactComponent as Gmail} from "../../../assets/contact/gmail.svg";

import "./style.css";

function FooterContacts() {
  return (
    <ul className="footer-cont">
      <li className="footer-cont__item">
        <LayoutSvg><WhatsApp/></LayoutSvg>
        <a className="footer-cont__phone" href="tel:+79261266457">7 (926) 126-64-57</a>
      </li>

      <li className="footer-cont__item">
        <LayoutSvg><Gmail/></LayoutSvg>
        <a className="footer-cont__phone" href="tel:+79261266457">7 (926) 126-64-57</a>
      </li>

      <li className="footer-cont__item">
        <LayoutSvg><Telegram/></LayoutSvg>
        <a className="footer-cont__phone" href="tel:+79261266457">7 (926) 126-64-57</a>
      </li>
    </ul>
  );
}

export default FooterContacts;