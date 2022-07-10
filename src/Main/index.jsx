import React from "react";
import Experience from "./ExperienceSide";
import MyFooter from "./Footer/Footer";
import Header from "./Header";
import MyColleagues from "./MyColleagues/MyColleagues";
import MyProject from "./myProject/myProject";
const HomePage = () => {
  return (
    <>
      <Header />
      <Experience />
      <MyProject />
      <MyColleagues />
      <MyFooter />
    </>
  );
};

export default HomePage;
