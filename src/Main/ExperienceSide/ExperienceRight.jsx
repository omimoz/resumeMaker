import React from "react";
import { Texts } from "../../customizer";
import { style } from "./Style";
const ExperienceRight = () => {
  const styles = style();
  return (
    <div className={styles.experienceRight}>
      <div className="mainTitle">My Work Experience</div>
      <div className="dashCover">
        <div>
          <div className="positionTitle sec1">{Texts.company1.title}</div>
          <div className="carrier">
            <span className="office">{Texts.company1.name}</span>
            <span className="years">.{Texts.company1.years}</span>
          </div>
          <div className="desc">{Texts.company1.desc}</div>
          <div className="linkWrap">
            {Texts.company1.links.map((link) => (
              <div className="link">{link}</div>
            ))}
          </div>
        </div>
        <div>
          <div className="positionTitle sec2">{Texts.company2.title}</div>
          <div className="carrier">
            <span className="office">{Texts.company2.name}</span>
            <span className="years">.{Texts.company2.years}</span>
          </div>
          <div className="desc">{Texts.company2.desc}</div>
          <div className="linkWrap">
            {Texts.company2.links.map((link) => (
              <div className="link">{link}</div>
            ))}
          </div>
        </div>
        <div className="sec3Wrap">
          <div className="positionTitle sec3">{Texts.company3.title}</div>
        </div>
      </div>
      <div className="carrier last">
        <span className="office">{Texts.company3.name}</span>
        <span className="years">.{Texts.company3.years}</span>
      </div>
      <div className="desc">{Texts.company3.desc}</div>
      <div className="linkWrap">
        {Texts.company3.links.map((link) => (
          <div className="link">{link}</div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceRight;
