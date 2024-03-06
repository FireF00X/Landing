import React from "react";
import styles from "./Track.module.css";
import Tabs from "./Tabs";
import Tab from "./Tab";

const Track = () => {
  return (
    <div className={styles.track_container}>
      <div className={styles.one}></div>
      <div className={styles.two}></div>
      <div className={styles.three}></div>

      <Tabs
        tabs_container={styles.tabs_container}
        tab_title_style={styles.tab_title_style}
        tabs_title={styles.tabs_title}
      >
        <Tab title="1">
          <div className={styles.tab_container}>
            <div className="photo">
              <img src="https://firef00x.github.io/template-three/images/cat-01.jpg" />
            </div>
            <p>
              Baby i am sorry i am not sorry fire works Baby i am sorry i am not
              sorry fire worksBaby i am sorry i am not sorry fire worksBaby i am
              sorry i am not sorry fire worksBaby i am sorry i am not sorry fire
              works
            </p>
          </div>
        </Tab>
        <Tab title="2">
          <div className={styles.tab_container}>
            <p>
              Baby i am sorry i am not sorry fire works Baby i am sorry i am not
              sorry fire worksBaby i am sorry i am not sorry fire worksBaby i am
              sorry i am not sorry fire worksBaby i am sorry i am not sorry fire
              works
            </p>
            <div className="photo">
              <img src="https://firef00x.github.io/template-three/images/cat-04.jpg" />
            </div>
          </div>
        </Tab>
        <Tab title="3">
          <div className={styles.tab_container}>
            <p>
              Baby i am sorry i am not sorry fire works Baby i am sorry i am not
              sorry fire worksBaby i am sorry i am not sorry fire worksBaby i am
              sorry i am not sorry fire worksBaby i am sorry i am not sorry fire
              works
            </p>
            <div className="photo">
              <img src="	https://firef00x.github.io/template-three/images/cat-03.jpg" />
            </div>
          </div>
        </Tab>
        <Tab title="4">
          <div className={styles.tab_container}>
            <p>
              Baby i am sorry i am not sorry fire works Baby i am sorry i am not
              sorry fire worksBaby i am sorry i am not sorry fire worksBaby i am
              sorry i am not sorry fire worksBaby i am sorry i am not sorry fire
              works
            </p>
            <div className="photo">
              <img src="	https://firef00x.github.io/template-three/images/cat-03.jpg" />
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Track;
