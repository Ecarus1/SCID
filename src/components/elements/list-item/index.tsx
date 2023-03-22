import {Link} from "react-router-dom";

import {ReactComponent as Star} from "../../../assets/star.svg";
import { Links } from "../../../interface";
import "./style.css";

interface IListItem {
  item: Links;
  clazz?: string;
}

function ListItem({item, clazz = ""}: IListItem) {
  const clazzLink = item.union ? "list-item__link list-item__link_star" : "list-item__link";
  
  return (
    <li className={`list-item ${clazz}`}>
      {item.union && <Star/>}
      <Link to={item.link} className={clazzLink}>{item.title}</Link>
    </li>
  );
}

export default ListItem;