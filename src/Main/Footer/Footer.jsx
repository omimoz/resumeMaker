import React from "react";
import { css } from "@emotion/css";
import useWindowDimensions from "../../component/Tools/dimention";
import handIcon from "../../assets/img/hand.svg";
import emailIcon from "../../assets/img/email.svg";
import phoneIcon from "../../assets/img/phone.svg";
import { Texts } from "../../customizer";
const MyFooter = () => {
  const { height, width } = useWindowDimensions();
  return (
    <div
      className={css`
        padding: 56px
          ${width < 900 ? 16 : width < 1410 ? 113 - (1410 - width) / 6 : 113}px
          80px;
        ${width < 900 ? 16 : width < 1410 ? 113 - (1410 - width) / 6 : 113}px
      `}
      id="Contact"
    >
      <div
        className={css`
          display: ${width < 1280 ? "block" : "flex"};
          justify-content: space-between;
        `}
      >
        <div
          className={css`
            min-width: 50%;
            display: ${width < 1280 ? "0" : "108"}px;
            margin-bottom: ${width < 1280 ? "56" : "0"}px;
          `}
        >
          <div
            className={css`
              font-family: "Roboto";
              font-style: normal;
              font-weight: 800;
              font-size: ${width > 900 ? 32 : 28}px;
              line-height: ${width > 900 ? 38 : 33}px;
              color: #00004a;
              margin-bottom: 38px;
            `}
          >
            Download My Resume From Here
          </div>
          <div
            className={css`
              display: flex;
              align-items: center;
            `}
          >
            <div
              className={css`
                margin-right: 20px;
              `}
            >
              <img src={handIcon} width="64px" height="64px" />
            </div>
            <div
              onClick={() => {
                window.open(Texts.resumeLink, "_blank");
              }}
              className={css`
                font-family: "Roboto";
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 23px;
                color: #ffffff;
                padding: 11px 24px 10px 23px;
                background: #376db8;
                box-shadow: 0px 2px 50px 2px rgba(0, 0, 74, 0.1);
                border-radius: 100px;
                cursor: pointer;
              `}
            >
              {"My Resume :)"}
            </div>
          </div>
        </div>
        <div
          className={css`
            width: -webkit-fill-available;
          `}
        >
          <div
            className={css`
              font-family: "Roboto";
              font-style: normal;
              font-weight: 800;
              font-size: ${width > 900 ? 32 : 28}px;
              line-height: ${width > 900 ? 38 : 33}px;
              color: #00004a;
              margin-bottom: 38px;
            `}
          >
            Contact With Me
          </div>
          <div
            className={css`
              display: flex;
              align-items: center;
              margin-bottom: 32px;
              cursor: pointer;
            `}
            onClick={() => {
              window.open(`tel:${Texts.mobile}`, "_blank");
            }}
          >
            <div
              className={css`
                margin-right: 10px;
              `}
            >
              <img src={phoneIcon} height="20px" />
            </div>
            <div
              className={css`
                font-family: "Gilroy";
                font-style: normal;
                font-weight: 500;
                font-size: ${width > 900 ? 20 : 16}px;
                line-height: ${width > 900 ? 24 : 19}px;
                color: rgba(0, 0, 74, 0.6);
              `}
            >
              Mobile:{" "}
              <strong
                className={css`
                  color: rgba(0, 0, 74, 1);
                `}
              >
                {Texts.mobile}
              </strong>
            </div>
          </div>
          <div
            className={css`
              display: flex;
              align-items: center;
              cursor: pointer;
            `}
            onClick={() => {
              window.open(`mailto:${Texts.Mail}`, "_blank");
            }}
          >
            <div
              className={css`
                margin-right: 10px;
              `}
            >
              <img src={emailIcon} width="21px" />
            </div>
            <div
              className={css`
                font-family: "Gilroy";
                font-style: normal;
                font-weight: 500;
                font-size: ${width > 900 ? 20 : 16}px;
                line-height: ${width > 900 ? 24 : 19}px;
                color: rgba(0, 0, 74, 0.6);
              `}
            >
              E-Mail:{" "}
              <strong
                className={css`
                  color: rgba(0, 0, 74, 1);
                `}
              >
                {Texts.Mail}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFooter;
