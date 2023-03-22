import "./style.css";

interface IFooterItem {
  title: string;
  children: React.ReactNode;
}

function FooterItem({title, children}: IFooterItem) {
  return (
    <div className="footer-item">
      <h3 className="footer-item__title">{title}</h3>
      
      {children}
    </div>
  );
}

export default FooterItem;