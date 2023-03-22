import React from "react";

import "./style.css";

interface IBoxContainer {
  children: React.ReactNode;
}

/**
 * BoxContainer является некоторым боксом, в который и будет запихиваться весь контент
 * @param children ReactNode
 * @returns ReactElement
 */
function BoxContainer({children}: IBoxContainer) {
  return (
    <div className="box-container">
      {children}
    </div>
  );
}

export default BoxContainer;