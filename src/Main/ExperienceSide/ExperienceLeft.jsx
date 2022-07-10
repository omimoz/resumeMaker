import React from "react";
import { style } from "./Style";
import useWindowDimensions from "../../component/Tools/dimention";
import { Images, Texts } from "../../customizer";
const ExperienceLeft = () => {
  const { height, width } = useWindowDimensions();
  const styles = style();
  return (
    <div className={styles.experienceLeft}>
      <div>
        <div className="images">
          {Images.logos.map((image) => (
            <div className="imageWrap">
              <img
                className="image"
                src={image}
                height={width < 900 ? "91px" : "112px"}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mainTitle">How Can I Help?</div>
      <div
        className="desc"
        dangerouslySetInnerHTML={{ __html: Texts.helpDesc }}
      ></div>
    </div>
  );
};

export default ExperienceLeft;
