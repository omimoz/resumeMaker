import React, { useRef, useState, useEffect } from "react";
import useWindowDimensions from "../../component/Tools/dimention";
import { Images, LinksMyWorksBanner } from "../../customizer";
import { style } from "./Styles";
const MyProject = () => {
  const { height, width } = useWindowDimensions();
  const refinfo = useRef();
  const [anime, setAnime] = useState();
  const [hover, setHover] = useState(false);
  const [scrollTop, setScrollTop] = useState();
  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    if (window.pageYOffset >= refinfo.current.offsetTop - 800) {
      setAnime(true);
    }
  }, [scrollTop]);
  const styles = style({ type: "banner", value: anime });
  return (
    <div className={styles.myProject} id="Works" ref={refinfo}>
      <div className="title">My Works</div>
      <div>
        <div className="bannerContainer">
          <div
            className="bannerWrapper left"
            onMouseEnter={() => {
              setHover({ value: "left" });
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            <div
              className="hoverWrapper"
              onClick={() => {
                window.open(LinksMyWorksBanner.banner1, "_blank");
              }}
            >
              <img src={width>900?Images.myWorksDesktop[0]:Images.myWorksMobile[0]} width="100%" className="image" />
              <div
                className={
                  hover && hover.value === "left" ? "hover" : "onHover"
                }
              >
                <span className="hoverText">See More</span>
              </div>
            </div>
          </div>
          <div
            className="bannerWrapper right"
            onMouseEnter={() => {
              setHover({ value: "right" });
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            onClick={() => {
              window.open(LinksMyWorksBanner.banner2, "_blank");
            }}
          >
            <div className="hoverWrapper">
              <img src={width>900?Images.myWorksDesktop[1]:Images.myWorksMobile[1]} width="100%" className="image" />
              <div
                className={
                  hover && hover.value === "right" ? "hover" : "onHover"
                }
              >
                <span className="hoverText">See More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
