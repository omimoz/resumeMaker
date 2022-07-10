import { css } from "@emotion/css";
import useWindowDimensions from "../Tools/dimention";
export const style = (anime) => {
  const { height, width } = useWindowDimensions();
  const style = {
    hide: css`
      display: none !important;
    `,
    wrapper: css`
      display: ${width > 900 ? "flex" : "none"};
      align-items: center;
      justify-content: space-between;
      margin-bottom: 50px;
    `,
    wrapperMobile: css`
      display: ${width > 900 ? "none" : "flex"};
      justify-content: space-between;
      margin-bottom: 30px;
      align-items: center;
    `,
    name: css`
      font-family: "Roboto";
      font-style: normal;
      font-weight: 800;
      font-size: ${width > 900 ? 24 : 16}px;
      line-height: ${width > 900 ? 28 : 22}px;
      color: #00004a;
      text-align: ${width > 900 ? "left" : "right"};
      width: ${width > 900 ? "fit-content" : "-webkit-fill-available"};
    `,
    menu: css`
      ul {
        list-style-type: none;
        display: inline-flex;
        margin: 0;
      }
      ul li {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: rgba(0, 0, 74, 0.5);
        margin: 0 16px;
      }
    `,
    mobileMenu: css`
      @keyframes upMenu {
        0% {
          top: -400px;
        }
        100% {
          top: 0px;
        }
      }
      animation-name: upMenu;
      animation-duration: 0.4s;
      position: fixed;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 323px;
      background: rgba(0, 0, 74, 0.75);
      z-index: 1000;
      top: 0;
      left: 0;
      div ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
      div ul li {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: #ffffff;
        padding: 20px;
        text-align: center;
        &:hover {
          background: rgba(255, 255, 255, 0.25);
        }
      }
      .closeIcon {
        padding: 23px 0px 0px 20px;
      }
    `,
    closeMenu: css`
      @keyframes downMenu {
        0% {
          top: 0px;
          display: flex;
        }
        100% {
          top: -400px;
          display: none;
        }
      }
      animation-name: downMenu;
      animation-duration: 0.4s;
      position: fixed;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 323px;
      background: rgba(0, 0, 74, 0.75);
      z-index: 1000;
      top: -400px;
      left: 0;
      div ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
      div ul li {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: #ffffff;
        padding: 20px;
        text-align: center;
        &:hover {
          background: rgba(255, 255, 255, 0.25);
        }
      }
      .closeIcon {
        padding: 23px 0px 0px 20px;
      }
    `,
    chat: css`
      cursor: pointer;
      background: #376db8;
      box-shadow: 0px 2px 50px 2px rgba(0, 0, 74, 0.05);
      border-radius: 100px;
      padding: 8px 23px 8px 24px;
      align-items: center;
      display: flex;
      div {
        font-family: "RobotoCondensed";
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #ffffff;
      }
      .icon {
        display: flex;
      }
      .text {
        margin-right: 16px;
      }
    `,
    job: css`
      div span {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 800;
        padding: 0 8px;
        font-size: ${width < 900
          ? 48
          : width < 1410
          ? 180 - (1410 - width) / 6
          : 180}px;
        line-height: ${width < 400
          ? 20
          : width < 900
          ? 56
          : width < 1410
          ? 145 - (1410 - width) / 6
          : 145}px;
        color: rgba(163, 189, 232, 0.25);
      }
      div {
        text-align: justify;
      }
      div span:after {
        content: "";
        display: inline-block;
        width: 100%;
      }
    `,
    carier: css`
      display: flex;
      flex-wrap: wrap;
      position: relative;
      justify-content: space-between;
      .leftSide {
        display: ${width < 900 ? "block" : "flex"};
        align-items: center;
        position: ${width < 900 ? "absolute" : "relative"};
        left: ${anime && anime.type && anime.value
          ? width < 900
            ? 17
            : 0
          : -2000}px;
        @keyframes left {
          0% {
            left: -3000px;
          }
          100% {
            left: ${width < 900 ? 17 : 0}px;
          }
        }
        animation-name: ${anime && anime.type === "Header" && anime.value
          ? "left"
          : "unset"};
        animation-duration: 0.8s;
        bottom: ${width < 900 ? "unset" : "84px"};
        top: ${width < 900 ? "0px" : "unset"};
        text-align: center;
      }
      .leftSide .sec1 {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 800;
        font-size: ${width < 900
          ? 40
          : width < 1410
          ? 88 - (1410 - width) / 12
          : 88}px;
        line-height: ${width < 900
          ? 47
          : width < 1410
          ? 103 - (103 - width) / 6
          : 103}px;
        color: #00004a;
      }
      .leftSide .sec2 {
        text-align: center;
        margin-left: ${width < 900 ? "0px" : "12px"};
      }
      .leftSide .sec2 .firstLine {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 600;
        font-size: ${width < 480 ? 24 : 40}px;
        line-height: ${width < 480 ? 28 : 47}px;
        color: #00004a;
      }
      .leftSide .sec2 .secondLine {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 600;
        font-size: ${width < 480 ? 18 : 30}px;
        line-height: ${width < 480 ? 21 : 35}px;
        color: #00004a;
      }
      .rightSide {
        align-items: center;
        bottom: 84px;
        display: ${width < 900 ? "block" : "flex"};
        align-items: center;
        position: ${width < 900 ? "absolute" : "relative"};
        bottom: ${width < 900 ? "unset" : "84px"};
        top: ${width < 900 ? "0px" : "unset"};
        text-align: center;
        right: ${anime && anime.type === "Header" && anime.value
          ? width < 900
            ? 17
            : 0
          : -2000}px;
        @keyframes right {
          0% {
            right: -3000px;
          }
          100% {
            right: ${width < 900 ? 17 : 0}px;
          }
        }
        animation-name: ${anime && anime.type && anime.value
          ? "right"
          : "unset"};
        animation-duration: 0.8s;
      }
      .rightSide .sec1 {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 800;
        font-size: ${width < 900
          ? 40
          : width < 1410
          ? 88 - (1410 - width) / 12
          : 88}px;
        line-height: ${width < 900
          ? 47
          : width < 1410
          ? 103 - (1410 - width) / 6
          : 103}px;
        color: #00004a;
      }
      .rightSide .sec2 {
        text-align: center;
        margin-left: ${width < 900 ? "0px" : "12px"};
      }
      .rightSide .sec2 .firstLine {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: ${width < 480 ? 17 : 28}px;
        line-height: ${width < 480 ? 20 : 33}px;
        color: #00004a;
      }
      .rightSide .sec2 .secondLine {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 600;
        font-size: ${width < 480 ? 24 : 40}px;
        line-height: ${width < 480 ? 28 : 47}px;
        color: #00004a;
      }
      .imageWrapper {
        width: ${width < 900 ? "100%" : "330px"};
        position: relative;
        text-align: center;
      }
      .image {
        position: ${width < 900 ? "relative" : "absolute"};
        bottom: ${width < 900 ? "-4px" : "0px"};
        left: 0;
        object-fit: contain;
        max-width: ${width < 900 ? "190px" : "-webkit-fill-available"};
      }
    `,
    mobileIcon: css`
      background: #376db8;
      box-shadow: 0px 2px 50px 2px rgb(0 0 74 / 5%);
      border-radius: 100px;
      position: fixed;
      height: 56px;
      width: 56px;
      bottom: 16px;
      right: 16px;
      z-index: 100000;
      display: ${width < 900 ? "block" : "none"};
      .mobileIconWrapper {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
      }
    `,
  };
  return style;
};
