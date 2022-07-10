import React from "react";
import { css } from "@emotion/css";
import useWindowDimensions from "../Tools/dimention";
import { Theme } from "../../customizer";
const Card = ({ item }) => {
  const { height, width } = useWindowDimensions();
  const random = Math.random();
  return (
    <div
      className={css`
        padding: 20px;
        background: #ffffff;
        box-shadow: 0px 2px 50px 2px rgba(0, 0, 74, 0.05);
        border-radius: 20px;
        box-sizing: border-box;
        height: 100%;
        margin: 0 12px;
      `}
    >
      <div>
        <div
          className={css`
            text-align: center;
            margin-bottom: 12px;
          `}
        >
          <img
            src={item.img}
            width="56px"
            height="56px"
            className={css`
              border: 4px solid
                rgb(
                  ${Math.random() * 250},
                  ${Math.random() * 250},
                  ${Math.random() * 250},
                  ${random && random < 0.1
                    ? random * 10
                    : random && random > 0.5
                    ? random - 0.5
                    : 0.5}
                );
              border-radius: 100%;
              padding: 7px;
            `}
          />
        </div>
        <div
          className={css`
            font-family: "Gilroy";
            font-style: normal;
            font-weight: 400;
            font-size: ${width > 900 ? "14px" : "12px"};
            line-height: ${width > 900 ? "20px" : "18px"};
            text-align: center;
            color: ${Theme.hardText};
            margin-bottom: ${width > 900 ? "12px" : "16px"};
          `}
        >
          {item.text}
        </div>
        <div
          className={css`
            font-family: "Gilroy";
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 20px;
            margin-bottom: 4px;
            text-align: center;
            color: ${Theme.hardText};
          `}
        >
          {item.pos}
        </div>
        <div
          className={css`
            font-family: "Gilroy";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            text-align: center;
            color: ${Theme.hardText};
          `}
        >
          {item.company}
        </div>
      </div>
    </div>
  );
};

export default Card;
