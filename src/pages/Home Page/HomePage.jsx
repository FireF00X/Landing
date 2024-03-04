import React from "react";
import Header from "../../LayOuts/Header/Header";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section id="#" className={styles.homepage}>
      <Header />
      <svg className={styles["home_background"]}>
        <path
          fill="#2196f3"
          fillOpacity="1"
          d="M0,256L48,234.7C96,213,192,171,288,165.3C384,160,480,192,576,218.7C672,245,768,267,864,234.7C960,203,1056,117,1152,90.7C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="container">
        <div className={styles.text}>
          <h1>Hello World</h1>
          <p>
            Search for the keywords to learn more about each warning. To ignore,
            add // eslint-disable-next-line to the line before. WARNING in
            [eslint] src\App.js Line 2:8: 'Services' is defined but never used
            no-unused-vars src\pages\Home
          </p>
        </div>
        <div className={styles.photo}>
          <img src="https://firef00x.github.io/template-three/images/landing-image.png" />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
