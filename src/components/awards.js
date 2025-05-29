import React from "react";
import award01 from "../assets/award01.png";
import award02 from "../assets/award02.png";
import award03 from "../assets/award03.png";
import award05 from "../assets/award05.png";
import laurels from "../assets/laurels.png";
import bgImage from "../assets/bg.png";
import "./awards.css";

const Awards = () => {
  return (
    <section className="awardsSection" id="awardsSection">
      <img className="bgImg" src={bgImage} alt="bgImage" />
      <figure>
        <img className="laurelsImg" src={laurels} alt="laurelsImage" />
      </figure>
      <article className="laurelsSection">
        <div className="headerSection">
          <h3 className="awards-h3">Awards & Recognition</h3>
          <h1 className="awards-h1">Our Laurels</h1>
        </div>
        <div className="achievements1">
          <div className="award">
            <img className="awardIcon" src={award02} alt="bibgourmandAward" />
            <div className="awardInfo">
              <h3 className="awardTitle">Bib Gourmand</h3>
              <p className="awardDesc">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
          <div className="award">
            <img className="awardIcon" src={award01} alt="risingStarAward" />
            <div className="awardInfo">
              <h3 className="awardTitle">Rising Star</h3>
              <p className="awardDesc">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
        </div>
        <div className="achievements2">
          <div className="award">
            <img className="awardIcon" src={award05} alt="aaHospitalityAward" />
            <div className="awardInfo">
              <h3 className="awardTitle">AA Hospitality</h3>
              <p className="awardDesc">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
          <div className="award">
            <img
              className="awardIcon"
              src={award03}
              alt="outstandingChefAward"
            />
            <div className="awardInfo">
              <h3 className="awardTitle">Outstanding Chef</h3>
              <p className="awardDesc">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
  export default Awards;
};
