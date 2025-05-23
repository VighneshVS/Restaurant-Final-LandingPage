import React from "react";
import "./menuItems.css";

export default MenuItems = ({ title, price, info }) => {
  return (
    <li key={title.toString()} className="itemList">
      <div className="items">
        <h3 className="menuItems-h3">{title}</h3>
        <hr />
        <p className="menuItems-price">{price}</p>
      </div>
      <p className="itemInfo">{info}</p>
    </li>
  );
};
