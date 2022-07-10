import React, { useRef, useState, useEffect } from "react";
import { style } from "./Style";
import useWindowDimensions from "../Tools/dimention";
import { Images, Texts } from "../../customizer";
const FooterMenu = () => {
  const { height, width } = useWindowDimensions();
  const refinfo = useRef();
  const [anime, setAnime] = useState();
  const [scrollTop, setScrollTop] = useState();
  const styles = style({ type: "Header", value: anime });
  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    if (window.pageYOffset <= refinfo.current.offsetTop + 100) {
      setAnime(true);
    } else {
      setAnime(false);
    }
  }, [scrollTop]);
  return (
    <>
      <div className={styles.job}>
        <div>
          <span>I'm a {Texts.position}</span>
        </div>
        <div>
          <span>D e v e l o p e r</span>
        </div>
      </div>
      <div ref={refinfo}>
        <div className={styles.carier}>
          <div className="leftSide">
            <div className="sec1">{Texts.yearOfExperienced}</div>
            <div className="sec2">
              <div className="firstLine">Years Of</div>
              <div className="secondLine">Experience</div>
            </div>
          </div>
          <div className="imageWrapper">
            <img
              className="image"
              src={Images.myPhoto}
              height={width < 900 ? "350px" : "509px"}
            />
          </div>
          <div className="rightSide">
            <div className="sec1">{Texts.projects}</div>
            <div className="sec2">
              <div className="firstLine">Challenging</div>
              <div className="secondLine">Projects</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterMenu;
