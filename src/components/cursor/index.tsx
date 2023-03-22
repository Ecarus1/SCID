import "./style.css";
import { useEffect, useRef } from "react";

function Cursor() {
  const cursor = useRef(null); // Ссылка на новый курсор
  const cursorVisible = useRef(false); // Здесь храним Boolean значение видимости блока

  /**
   * Функция обработки перемещения мышки
   * Здесь устанавливаем новому курсору позицию системного курсора
   * @param e MouseEvent
   */
  const mouseMoveHandler = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    if(cursor.current) {
      (cursor.current as HTMLElement).style.left = clientX + "px";
      (cursor.current as HTMLElement).style.top = clientY + "px";
    }
  }

  /**
   * Функция обработки попадания курсора в пределы окна
   */
  const onMouseEnter = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };

  /**
   * Функция обработки попадания курсора за пределы окна
   */
  const onMouseLeave = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };

  /**
   * Навешиваем слушатели событий
   * 1) Перемещение мыши,
   * 2) Мышка в пределах экрана,
   * 3) Мышка за пределами экрана
   * 
   * Чтобы не обрабатывать событие scroll и не подсчитывать 
   * смещение курсора отностилеьно отступа scroll - устанавливае
   * position: fixed
   */
  useEffect(() => {
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
    // eslint-disable-next-line
  }, []);

  /**
   * Функция для добавления прозрачности
   * Если курсор в пределах окна - виден! В противном случае будет прозрачным
   */
  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      if(cursor.current)
      (cursor.current as HTMLDivElement).style.opacity = '1';
    } else {
      if(cursor.current)
      (cursor.current as HTMLDivElement).style.opacity = '0';
    }
  }

  return (  
    <div className="cursor" id="cursor" ref={cursor}></div>
  );
}

export default Cursor;