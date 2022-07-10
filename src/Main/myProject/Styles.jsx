import { css } from "@emotion/css";
import React, { useState, useEffect } from "react";
import useWindowDimensions from "../../component/Tools/dimention";
export const style = (anime) => {
  const { height, width } = useWindowDimensions();
  const style = {
    myProject: css`
      padding: ${width < 900 ? "40px 16px" : width < 1280 ? "32px" : "56px"};
      .containerImages {
        display: ${width > 900 ? "flex" : "block"};
        justify-content: center;
        width: fit-content;
        margin: 0 auto;
      }
      .title {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 800;
        font-size: ${width > 900 ? 48 : 28}px;
        line-height: ${width > 900 ? 56 : 33}px;
        color: #00004a;
        text-align: center;
        margin-bottom: ${width > 900 ? 40 : 32}px;
      }
      .image {
        max-width: 461px;
        max-height: 273px;
        width: ${width > 1360 ? "461px" : width < 500 ? "328px" : "auto"};
        border-radius: 20px;
        min-width: 328px;
      }
      background: #d6e5fa;
      .bannerContainer {
        justify-content: center;
        display: -webkit-box;
        text-align: center;
        overflow-x: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
        ::-webkit-scrollbar {
          display: none;
        }
      }
      .bannerWrapper {
        display: table-cell;
        padding: 12px;
      }
      .hoverWrapper {
        position: relative;
        overflow: hidden;
        border-radius: 20px;
      }
      .hover {
        position: absolute;
        @keyframes up {
          0% {
            bottom: -400px;
            opacity: 0%;
          }
          100% {
            bottom: 0;
            opacity: 100%;
          }
        }
        animation-name: up;
        animation-duration: 0.4s;
        bottom: 0px;
        width: 100%;
        text-align: right;
        background: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(50px);
        border-radius: 0px 0px 20px 20px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        cursor: pointer;
      }
      .onHover {
        position: absolute;
        @keyframes down {
          0% {
            bottom: 0px;
            opacity: 100%;
          }
          100% {
            bottom: -400px;
            opacity: 0%;
          }
        }
        animation-name: down;
        animation-duration: 0.4s;
        bottom: -400px;
        width: 100%;
        opacity: 0%;
        text-align: right;
        background: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(50px);
        border-radius: 0px 0px 20px 20px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        cursor: pointer;
      }
      .hoverText {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        color: #376db8;
        padding: 18px 22px;
      }

      .bannerWrapper.right {
        right: ${anime && anime.type === "banner" && anime.value
          ? "0"
          : "-1600px"};
        opacity: ${anime && anime.type === "banner" && anime.value
          ? "100%"
          : "0%"};
        @keyframes right {
          0% {
            right: -1600px;
            opacity: 0%;
          }
          100% {
            right: 0;
            opacity: 100%;
          }
        }
        position: relative;
        animation-name: ${anime && anime.type === "banner" && anime.value
          ? "right"
          : "unset"};
        animation-duration: 0.8s;
      }
      .bannerWrapper.left {
        opacity: ${anime && anime.type === "banner" && anime.value
          ? "100%"
          : "0%"};
        left: ${anime && anime.type === "banner" && anime.value
          ? "0"
          : "-1600px"};
        @keyframes left {
          0% {
            left: -1600px;
            opacity: 0%;
          }
          100% {
            left: 0;
            opacity: 100%;
          }
        }
        position: relative;
        animation-name: ${anime && anime.type === "banner" && anime.value
          ? "left"
          : "unset"};
        animation-duration: 0.8s;
      }
    `,
  };
  return style;
};
