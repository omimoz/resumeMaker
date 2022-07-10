import React from "react";
import { style } from "./Style";
import chatIcon from "../../assets/img/chat.svg";
import { Texts } from "../../customizer";

const Menu = () => {
  const styles = style();
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.wrapper}>
          <div className={styles.name}>{Texts.name}</div>
          <div className={styles.menu}>
            <ul>
              <li>
                <a href="#Experience" className="hrefLink">
                  Experience
                </a>
              </li>
              <li>
                <a href="#Works" className="hrefLink">
                  Works
                </a>
              </li>
              <li>
                <a href="#Comments" className="hrefLink">
                  Comments
                </a>
              </li>
              <li>
                <a href="#Contact" className="hrefLink">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div
            className={styles.chat}
            onClick={() => {
              window.open(`https://wa.me/${Texts.mobile}`);
            }}
          >
            <div className="text">Let's Chat</div>
            <div className="icon">
              <img src={chatIcon} width="28px" height="28px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
