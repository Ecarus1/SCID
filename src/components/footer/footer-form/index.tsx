import {useState, useRef} from "react";
import { Link } from "react-router-dom";

import LayoutSvg from "../../elements/layout-svg";
import {ReactComponent as Instagram} from "../../../assets/contact/instagram.svg";
import {ReactComponent as Vk} from "../../../assets/contact/vk.svg";
import {ReactComponent as FaceBook} from "../../../assets/contact/facebook.svg";

import "./style.css";

function FooterForm() {
  const inputRef = useRef(null);
  const btnRef = useRef(null);
  const [value, setValue] = useState('');

  /**
   * Функция для изменения локального состояния
   * Здесь можно проводить какую-нибудь валидацию! По этому и вынес изменение state в отдельную функцию.
   * @param e ChangeEvent
   */
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  /**
   * Функция для обработки клика по кнопке
   * Здесь проводится проверка почты и если она валидна, то отправляется на сервер (а так как сервера нету, то просто очищаем поле и выводим alert)
   * @returns 
   */
  const onClick = () => {
    if(validateEmail(value)) {
      setValue('');
      alert("Адрес отправлен");
      return;
    }
    alert("Не валидная почта");
  }

  /**
   * Функция валидирования почты
   * Регулярное выражение взял из интернета и особо сильно не проверял
   * @param email string
   * @returns Array || null
   */
  const validateEmail = (email: string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  /**
   * Функция для обработки действия пользователя
   * Если пользователь нажмёт нажмёт на Enter (будучи зафокушеным на инпуте)
   * То вызываем встроенный метод click
   * @param e KeyboardEvent
   */
  const controlEventInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter" && btnRef.current) {
      (btnRef.current as HTMLButtonElement).click();
    }
  }

  return (
    <div className="footer-form">
      <div className="footer-form__box">
        <input 
          className="footer-form__input" 
          value={value} 
          onChange={onChange} 
          ref={inputRef}
          onKeyDown={(e) => controlEventInput(e)}
          placeholder="E ‒ mail" 
          type="text" />
        
        <button className="footer-form__btn" ref={btnRef} onClick={onClick}></button>
      </div>

      <ul className="footer-form__list">
        <li>
          <Link to={"#"}>
            <LayoutSvg><Instagram/></LayoutSvg>
          </Link>
        </li>

        <li>
          <Link to={"#"}>
            <LayoutSvg><Vk/></LayoutSvg>
          </Link>
        </li>

        <li>
          <Link to={"#"}>
            <LayoutSvg><FaceBook/></LayoutSvg>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default FooterForm;