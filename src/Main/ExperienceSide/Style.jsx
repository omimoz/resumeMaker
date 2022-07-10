import { css } from "@emotion/css";
import useWindowDimensions from "../../component/Tools/dimention";
import { Theme } from "../../customizer";
export const style = () => {
  const { height, width } = useWindowDimensions();
  const style = {
    container: css`
      display: ${width > 900 ? "flex" : "block"};
      background: whitesmoke;
      align-items: center;
      .left {
        width: ${width > 900 ? 50 : 100}%;
      }
      .right {
        width: ${width > 900 ? 50 : 100}%;
        background: #fff;
      }
    `,
    experienceRight: css`
      padding: ${width > 900 ? "56px 50px" : "40px 16px"};
      .mainTitle {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 800;
        font-size: ${width < 700
          ? 28
          : width < 1090
          ? 48 - (1090 - width) / 18
          : 48}px;
        line-height: ${width < 700
          ? 33
          : width < 1090
          ? 56 - (1090 - width) / 18
          : 56}px;
        color: ${Theme.hardText};
        margin-bottom: ${width > 900 ? 43 : 38}px;
      }
      .sec3Wrap {
        margin-top: ${width > 900 ? 64 : 50}px;
      }
      .dashCover {
        border-left: 2px dashed rgba(0, 0, 74, 0.3);
        padding-left: ${width > 900 ? 32 : 24}px;
        position: relative;
      }
      .positionTitle {
        font-family: "Gilroy";
        font-style: normal;
        font-weight: 600;
        font-size: ${width > 900 ? 24 : 20}px;
        line-height: ${width > 900 ? 29 : 25}px;
        color: ${Theme.hardText};
        margin-bottom: 12px;
        position: relative;
      }
      .positionTitle:before {
        width: 20px;
        height: 20px;
        content: "";
        position: absolute;
        border-radius: 100%;
        left: ${width > 900 ? -44 : -34}px;
        z-index: 10;
        top: 6px;
      }
      .positionTitle:after {
        width: 32px;
        height: 32px;
        content: "";
        position: absolute;
        border-radius: 100%;
        left: ${width > 900 ? -50 : -40}px;
      }
      .sec1:after {
        background: ${Theme.secondary};
        top: 0px;
      }
      .sec2:after {
        background: #f0effd;
      }
      .sec3:after {
        background: #faebd6;
      }
      .sec1:before {
        background: #6d94d0;
      }
      .sec2:before {
        background: #a9a0ed;
      }
      .sec3:before {
        background: #e3ac61;
      }
      .carrier {
        margin-bottom: 12px;
      }
      .office {
        font-family: "Gilroy";
        font-style: normal;
        font-weight: 600;
        font-size: ${width > 900 ? 20 : 16}px;
        line-height: ${width > 900 ? 25 : 20}px;
        color: ${Theme.blue};
      }
      .years {
        font-family: "Gilroy";
        font-style: normal;
        font-weight: 400;
        font-size: ${width > 900 ? 20 : 16}px;
        line-height: ${width > 900 ? 24 : 19}px;
        color: rgba(17, 20, 39, 0.6);
      }
      .desc {
        font-family: "Gilroy";
        font-style: normal;
        font-weight: 400;
        font-size: ${width > 900 ? 20 : 16}px;
        line-height: ${width > 900 ? 36 : 28}px;
        color: ${Theme.hardText};
        margin-bottom: 8px;
      }
      .link {
        font-family: "Gilroy";
        font-style: normal;
        font-weight: 400;
        font-size: ${width > 900 ? 20 : 16}px;
        line-height: ${width > 900 ? 36 : 36}px;
        color: ${Theme.blue};
        margin-bottom: 8px;
        border-bottom: 1px solid ${Theme.blue};
        width: fit-content;
      }
      .carrier.last {
        padding-left: ${width > 900 ? 32 : 24}px;
      }
      .linkWrap {
        margin-bottom: ${width > 900 ? 64 : 52}px;
      }
    `,
    experienceLeft: css`
      padding: ${width > 900 ? "56px 113px" : "40px 16px"};
      line-height: ${width < 700
        ? 33
        : width < 1090
        ? 56 - (1090 - width) / 18
        : 56}px;
      .images {
        display: flex;
        justify-content: ${width > 900 ? "flex-start" : "space-around"};
        margin-bottom: ${width > 900 ? 44 : 27}px;
        flex-wrap: wrap;
      }
      .imageWrap {
        padding: ${width > 900 ? "0 10px" : "0"};
        max-width: 100px;
      }
      .image {
        object-fit: contain;
        max-width: 100px;
      }
      .mainTitle {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 800;
        font-size: ${width < 700
          ? 28
          : width < 1090
          ? 48 - (1090 - width) / 18
          : 48}px;
        line-height: ${width < 700
          ? 33
          : width < 1090
          ? 56 - (1090 - width) / 18
          : 56}px;
        color: ${Theme.hardText};
        margin-bottom: ${width > 900 ? 43 : 38}px;
      }
      .desc {
        font-family: "Gilroy";
        font-style: normal;
        font-weight: 400;
        font-size: ${width > 900 ? 24 : 16}px;
        line-height: ${width > 900 ? 36 : 28}px;
        color: ${Theme.hardText};
      }
    `,
  };
  return style;
};
