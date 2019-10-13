import React from "react";
import styles from "./Hero.scss";

const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{props.titleText}</h2>
    <img
      src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"
      className={styles.image}
    ></img>
  </header>
);

export default Hero;
