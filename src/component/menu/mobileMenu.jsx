import React, { useState } from "react";
import { style } from "./Style";
import menuIcon from "../../assets/img/menu.svg";
import closeIcon from "../../assets/img/close.svg";
import chatIcon from "../../assets/img/chat.svg";
import { Texts } from "../../customizer";
const MobileMenu = () => {
  const [close, setClose] = useState(false);
  const styles = style();
  return (
    <>
      <div>
        <div
          className={styles.wrapperMobile}
          onClick={() => {
            setClose(true);
          }}
        >
          <div className={close ? styles.hide : styles.menuIcon}>
            <img src={menuIcon} width="23.37px" height="17.5px" />
          </div>
          <div className={styles.name}>Omid Moazzami</div>
        </div>
        <div className={close ? styles.mobileMenu : styles.closeMenu}>
          <div
            className="closeIcon"
            onClick={() => {
              setClose(false);
            }}
          >
            <img src={closeIcon} width="19.86px" height="19.86px" />
          </div>
          <div>
            <ul
              onClick={() => {
                setClose(false);
              }}
            >
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
        </div>
      </div>
      <div
        className={styles.mobileIcon}
        onClick={() => {
          window.open(`https://wa.me/${Texts.mobile}`);
        }}
      >
        <div className="mobileIconWrapper">
          <img src={chatIcon} width="24px" height="24px" />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
