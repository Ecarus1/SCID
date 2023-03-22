import { Links } from "../../../interface";
import "./style.css";

interface IList {
  items: Links[];
  rendersItem: (arg: Links) => React.ReactElement;
  clazz?: string;
}

function List({items, rendersItem, clazz}: IList) {
  return (
    <ul className={`list ${clazz}`}>
      {items.map(item => rendersItem(item))}
    </ul>
  );
}

export default List;