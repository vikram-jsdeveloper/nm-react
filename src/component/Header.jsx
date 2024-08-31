import React, { useState } from "react";
import styles from "./Header.module.scss";

function Header(props) {
  const [mobClass, setMobClass] = useState(false);
  return (
    <header className={styles.headerBox}>
      <div className={styles.logo}>
        <img src={props.imageSrc} />
      </div>
      <nav
        className={`${styles.navContainer} ${mobClass ? "active" : ""}`}
        onClick={() => {
          setMobClass(!mobClass);
        }}
      >
        <ul className={styles.navLinks}>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
