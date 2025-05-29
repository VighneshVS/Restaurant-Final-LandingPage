import React from "react";
import "./about.css";
import bgImage from "../assets/bg.png";
import overlayImage from "../assets/G.png";
import knifeImage from "../assets/knife.png";

const about = () => {
  return (
    <section className="aboutUs" id="aboutUs">
      <img className="bgImg" src={bgImage} alt="background-image" />
      <img
        className="overlayImg"
        src={overlayImage}
        alt="background-overlay-image"
      />
      <img className="knifeImg" src={knifeImage} alt="knife-image" />
      <article className="aboutArticle">
        <h2 className="about-h2">About Us</h2>
        <p className="about-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button className="aboutUsButtons">Know More</button>
      </article>
      <article className="historyArticle">
        <h2 className="about-h2">Our History</h2>
        <p className="about-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button className="aboutUsButtons">Know More</button>
      </article>
    </section>
  );
  export default about;
};
