import React from "react";
import bgImage from "../assets/bg.png";
import chefImage from "../assets/chef.png";
import quoteImage from "../assets/quote.png";
import signImage from "../assets/sign.png";
import "./chef.css";

export default Chef = () => {
  return (
    <article className="chefWords" id="chefWords">
      <img className="bgImg" src={bgImage} altName="bgImage" />
      <figure className="chefContainer">
        <img className="chefImg" src={chefImage} altName="chefImage" />
      </figure>
      <section className="quote">
        <h3 className="chef-h3">Chef's Words</h3>
        <h1 className="chef-h1">What We Believe In</h1>
        <p className="quotes">
          <span className="quoteIcon">
            <img className="quoteImg" src={quoteImage} alt="quoteImage" />
          </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit
          .auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
        <div className="chefAndFounder">
          <h3 className="chefName">Kevin Luo</h3>
          <p className="chef-designation">Chef and Founder</p>
        </div>
        <img className="signImg" src={signImage} altName="signImage" />
      </section>
    </article>
  );
};
