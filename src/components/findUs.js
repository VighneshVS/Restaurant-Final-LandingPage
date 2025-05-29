import React from "react";
import findUsImage from "../assets/findus.png";
import "./findUs.css";

const FindUs = () => {
  return (
    <section className="findUs" id="findUs">
      <div className="details">
        <h3 className="findUs-h3">Contact</h3>
        <h1 className="findUs-h1">Find Us</h1>
        <p className="findUs-p">
          Lane Ends Bungalow, Whatcroft Hall Lane, Berlin
        </p>
        <div className="open">
          <h3 className="openingHours-h3">Opening Hours</h3>
          <p className="findUs-p">Mon - Thu: 10:00 am to 12:00 am</p>
          <p className="findUs-p"> Fri - Sun: 10:00 am to 02:00 am</p>
        </div>
        <button>Visit Us</button>
      </div>
      <figure className="findUs-ImgContainer">
        <img className="findUsImg" src={findUsImage} alt="findUsImage" />
      </figure>
    </section>
  );
  export default FindUs;
};
