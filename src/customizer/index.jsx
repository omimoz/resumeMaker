import jsIcon from "../assets/img/js.svg";
import cssIcon from "../assets/img/css.svg";
import htmlIcon from "../assets/img/html.svg";
import banner1 from "../assets/img/banner1.jpg";
import banner2 from "../assets/img/banner2.jpg";
import banner1Mobile from "../assets/img/banner1Mobile.jpg";
import banner2Mobile from "../assets/img/banner2Mobile.jpg";
import seida from "../assets/img/seida.png";
import amin from "../assets/img/amin.jpg";
import hamideh from "../assets/img/hamideh.jpg";
import myPhoto from "../assets/img/myPhoto.png";
export const Theme = {
  primary: "#376db8",
  secondary: "#d6e5fa",
  hardText: "#00004a",
  softText: "rgba(0, 0, 74, 0.5)",
  blue: "#1b6ca8",
  jobColor: "rgba(163, 189, 232, 0.25)",
  myWorks: "rgba(55, 109, 184, 1)",
  footerHard:"rgba(0, 0, 74, 1)",
  footerSoft:"rgba(0, 0, 74, .6)"
};
export const Texts = {
  name: "Omid Moazzami",
  position: "FrontEnd",
  mobile: "+989037675939",
  Mail: "o.moazzmi@gmail.com",
  resumeLink: "https://o-moazzami.com/Omid_Moazzami_Resume.pdf",
  yearOfExperienced: "+6",
  projects: "+2",
  company1: {
    title: "FrontEnd Developer",
    name: "Oddrun",
    years: "Full Time(1.5 Years)",
    desc: "+Because of limitation about using “antd framework” for styling website in development that had been used before, I used “emotion” to remove “antd” completely.I developed components in “storybook” for better use in future. + The project had been developed with “vite js” but it needed more cache to use lower source for requests so I improved it with “react query library”.",
    links: ["https://oddrun.ir", "https://panel.nzdk.ir"],
  },
  company2: {
    title: "Technical Support & QA",
    name: "Oddrun",
    years: "Full Time(2 Years)",
    desc: "",
    links: [],
  },
  company3: {
    title: "Sales Account Manager",
    name: "Oddrun",
    years: "Full Time(2 Years)",
    desc: "",
    links: [],
  },
  helpDesc:
    "These days usability is an important issue for products. I can help businesses to have a <strong>responsive</strong> web application with  good <strong>UX</strong> to reach this goal.also I familiar with <strong>SEO</strong> issues and <strong>pattern libraries</strong>.",
};
export const Images = {
  myPhoto: myPhoto,
  logos: [jsIcon, cssIcon, htmlIcon],
  myWorksDesktop:[banner1, banner2],
  myWorksMobile:[banner1Mobile, banner2Mobile],
};
export const LinksMyWorksBanner = {
  banner1: "https://oddrun.ir/",
  banner2: "https://panel.nzdk.ir/",
};
export const people = [
  {
    img: amin,
    company: "Baloot",
    pos: "Android Developer",
    text: "I was in constatn contact with Omid in a team, there is an energetic and follow up person when a problem arose that he had the tools to solve, he took it upon himself valuntarily and continued until the problem was solved.",
  },
  {
    img: seida,
    company: "Oddrun",
    pos: "Human Resource",
    text: "As someone who has worked with Omid for 2 years, I can say that he was constantly looking to create value for the team and the company, constantly trying to be effective. He has very good public relations and communicates quickly with everyone.",
  },
  {
    img: hamideh,
    company: "Doctoreto",
    pos: "Product Design Lead",
    text: "I can describe Omid as: energetic, creative and experienced. You never get tired of working with Omid. He is very precise in his work and offers creative solutions to problems.",
  },
];
