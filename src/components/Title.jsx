import React from "react";
import styles from "./Title.module.css";

const Title = ({ titleName }) => {
  return (
    <div className={styles.twelve}>
      <h1 className={styles.h1}>{titleName}</h1>
    </div>
  );
};

export default Title;
