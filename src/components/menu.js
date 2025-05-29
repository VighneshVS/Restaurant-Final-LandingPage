import React from "react";
import menuImage from "../assets/menu.png";
import data from "../constants/data.js";
import MenuItems from "../addons/menuItems.js";
import "./menu.css";

const menu = () => {
  return (
    <article className="menuPage" id="menuPage">
      <section className="menuHead">
        <h3 className="menu-h3">Menu that fits your palette</h3>
        <h1 className="menu-h1">Today's Special</h1>
      </section>
      <section className="menuSection">
        <div className="wineSection">
          <h2 className="menu-h2">Wine & Beer</h2>
          <ul>
            {data.wines.map((wine) => (
              <MenuItems
                title={wine.title}
                price={wine.price}
                info={wine.info}
              />
            ))}
          </ul>
        </div>
        <figure className="menuIcon">
          <img className="menuImg" src={menuImage} alt="menuImage" />
        </figure>
        <div className="cocktailSection">
          <h2 className="menu-h2">Cocktails</h2>
          <ul>
            {data.cocktails.map((cocktail) => (
              <MenuItems
                title={cocktail.title}
                price={cocktail.price}
                info={cocktail.info}
              />
            ))}
          </ul>
        </div>
      </section>
      <div>
        <button className="menu-section-Button">Know More</button>
      </div>
    </article>
  );
};
export default menu;
