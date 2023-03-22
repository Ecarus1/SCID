import {Routes, Route} from "react-router-dom";
import Main from "./main";
import Cursor from "../components/cursor";

/**
 * Здесь я подключил react-router-dom, чтобы наметить некоторый шаблон, как приложение будет расширяться
 * Т.к. у меня нету перед глазами стиля написания приложения компании, то буду применять свой
 * Если говорить про архитектурный план, то я бы разделил приложение на условные 3 слоя
 * 1) Слой роутов (страниц)
 * 2) Слой умных компонентов (containers) (Откуда бы я запрашивал state из Redux/MobX и раздавал в дочерние компоненты)
 * 3) Слой глупых компонентов (components), которые бы отвечали за отображение информации и никак бы не запрашивали state из Redux/MobX, а получали бы через props'ы
 * Глупые компоненты могут ещё подразделяться на условные единицы UI, которые часто используются (кнопки, инпуты, списки и т.д.)
 * 
 * В макете я увидел кастомный курсор (не знаю, нужно ли было его делать или нет)
 * @returns ReactElement
 */
function App() {
  return (
    <>
      <Routes>
        <Route path={''} element={<Main/>}/>
      </Routes>
      <Cursor/>
    </>
  )
}

export default App;