import React from "react";
import "./home.css";
import welcomeImage from "../assets/welcome.png";
const home = () => {
  return (
    <main className="homeSection" id="homeSection">
      <section className="menu">
        <h3>Chase the new flavour</h3>
        <h1>Food that surprises you</h1>
        <p className="home-description">
          Aut dicta possimus sint mollitia voluptas commodi quo doloremque niste
          corrupti reiciendis voluptatem eius rerum nsit cumque quod eligendi
          laborum minima
        </p>
        <button className="menuButton">Explore Menu</button>
      </section>
      <section className="fig">
        <img
          className="welcomeImg"
          src={welcomeImage}
          width={680}
          height={750}
          alt="welcome-image"
        />
      </section>
    </main>
  );
};
export default home;
