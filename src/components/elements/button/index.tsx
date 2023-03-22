import "./style.css";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  callback: () => void;
  clazz?: string 
}

function Button({title, callback, clazz, ...props}: IButton) {

  /**
   * Функция для вызова переданного callback'а
   */
  const onClick = () => {
    callback();
  }

  return (
    <button className={`button ${clazz}`} {...props} onClick={onClick}>{title}</button>
  );
}

export default Button;