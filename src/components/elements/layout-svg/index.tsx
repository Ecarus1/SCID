import React from "react";

import "./style.css";

interface ILayoutSvg {
  children: React.ReactNode;
}

function LayoutSvg({children}: ILayoutSvg) {
  return (
    <div className="layout-svg">
      <div className="layout-svg__circle"></div>

      {children}
    </div>
  );
}

export default LayoutSvg;