import React from "react";
import styles from "./Gallary.module.css";
import Title from "../../components/Title";

const Gallary = () => {
  return (
    <section id="gallary" className={styles.gallary}>
      <div className="container">
        <Title titleName={"Gallary"} />
      </div>
    </section>
  );
};

export default Gallary;
