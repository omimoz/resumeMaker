import React from "react";
import ExperienceLeft from "./ExperienceLeft";
import ExperienceRight from "./ExperienceRight";
import { style } from "./Style";
const Experience = () => {
  const styles = style();
  return (
    <div className={styles.container} id="Experience">
      <div className="left">
        <ExperienceLeft />
      </div>
      <div className="right">
        <ExperienceRight />
      </div>
    </div>
  );
};

export default Experience;
