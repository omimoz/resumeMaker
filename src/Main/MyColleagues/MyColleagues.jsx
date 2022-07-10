import React from "react";
import { style } from "./Styles";
import Carousel from "react-elastic-carousel";
import useWindowDimensions from "../../component/Tools/dimention";
import Card from "../../component/ColleaguesCard";
import { people } from "../../customizer";
const MyColleagues = () => {
  const { height, width } = useWindowDimensions();
  const responsive = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
  ];
  const styles = style();
  return (
    <div className={styles.MyColleagues} id="Comments">
      <div className="title">What My Colleagues Talk About Me?</div>
      <div>
        <Carousel breakPoints={responsive} showArrows={false}>
          {people.map((item) => (
            <div key={item.company}>
              <Card item={item} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MyColleagues;
