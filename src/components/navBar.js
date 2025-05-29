import React, { useState } from "react";
import "./navBar.css";
import resLogo from "../assets/gericht.png";
import closeLogo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const navBar = () => {
  const [toggle, setToggle] = useState(false);
  const [showCloseIcon, toggleShowCloseIcon] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
    toggleShowCloseIcon(!showCloseIcon);
  };
  return (
    <div>
      <header className={`app__header ${toggle && "mobile-only"}`}>
        <a
          className={toggle ? "app-header mobile-only" : "app-header"}
          href="./"
        >
          <img src={resLogo} height={55} width={170} alt="restaurant-logo" />
        </a>
        <nav className={`app__header--nav ${toggle && "mobile-only"}`}>
          <ul
            className={`navContainer ${toggle && "mobile-only"}`}
            onClick={toggleMenu}
          >
            <a className="app-header--home" href="#homeSection">
              <li className="navContents">Home</li>
            </a>
            <a className="app-header--about" href="#aboutUs">
              <li className="navContents">About Us</li>
            </a>
            <a className="app---menu" href="#menuPage">
              <li className="navContents">Menu</li>
            </a>
            <a className="app-header--awards" href="#awardsSection">
              <li className="navContents">Awards</li>
            </a>
            <a className="app-header--contact" href="#findUs">
              <li className="navContents">Contact</li>
            </a>
          </ul>
        </nav>
        <a
          className={`app-header--bookATable ${toggle && "mobile-only"}`}
          href="#bookTable"
        >
          <div className="bookATable">Book a Table</div>
        </a>
        <div className="mobile-only-menu" onClick={toggleMenu}>
          {!toggle && !showCloseIcon ? (
            <GiHamburgerMenu
              className="hamburgIcon"
              fontSize={27}
              color="#fff"
            />
          ) : (
            <img
              className="closeLogo"
              src={closeLogo}
              height={25}
              width={25}
              alt="restaurant-logo"
            />
          )}
        </div>
      </header>
    </div>
  );
};
export default navBar;
