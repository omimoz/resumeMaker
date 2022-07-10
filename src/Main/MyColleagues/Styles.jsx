import { css } from "@emotion/css";
import useWindowDimensions from "../../component/Tools/dimention";
export const style = () => {
  const { height, width } = useWindowDimensions();
  const style = {
    MyColleagues: css`
      padding: ${width < 900 ? "40px 16px" : width < 1280 ? "32px" : "56px"};
      .title {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 800;
        font-size: ${width > 900 ? 32 : 28}px;
        line-height: ${width > 900 ? 38 : 44}px;
        color: #00004a;
        text-align: center;
        margin-bottom: ${width > 900 ? 40 : 31}px;
      }
      background: #f5f5f5;
      .imageItem {
        margin: 40px 12px;
        max-width: ${width < 390
          ? width / 1.24
          : width < 900
          ? width / 1.5
          : "unset"}px;
      }
      .guIbWC {
        height: 100%;
      }
      .rec-item-wrapper {
        padding-bottom: 8% !important;
      }
      .rec-dot {
        height: 8px;
        width: 8px;
        box-shadow: none;
        background: #dddddd;
      }
      .rec-dot_active {
        box-shadow: none;
        background: #00004a;
        border-radius: 100px;
        width: 14px;
        height: 8px;
        border: none !important;
      }
    `,
  };
  return style;
};
