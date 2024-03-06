import React from "react";
import Tabs from "../../components/Tabs";
import Title from "../../components/Title";
import styles from "./Steps.module.css";
import Tab from "../../components/Tab";
import Track from "../../components/Track";

const Steps = () => {
  return (
    <section id="steps" className={styles.main}>
      <div className="container">
        <Title titleName={"ahmed"} />
        <Track />
        {/*<Tabs className={styles["tabs_title"]}>
          <Tab title="1">
            <div className={styles.tab_container}>
              <div className="photo">
                <img src="https://firef00x.github.io/template-three/images/cat-01.jpg" />
              </div>
              <p>Baby i am sorry i am not sorry fire works </p>
            </div>
          </Tab>
          <Tab title="2">
            <div className={styles.tab_container}>
              <p>Baby i am sorry i am not sorry fire works </p>
              <div className="photo">
                <img src="https://firef00x.github.io/template-three/images/cat-04.jpg" />
              </div>
            </div>
          </Tab>
          <Tab title="3">
            <div className={styles.tab_container}>
              <div className="photo">
                <img src="https://firef00x.github.io/template-three/images/cat-02.jpg" />
              </div>
              <p>Baby i am sorry i am not sorry fire works </p>
            </div>
          </Tab>
          <Tab title="4">
            <div className={styles.tab_container}>
              <p>Baby i am sorry i am not sorry fire works </p>
              <div className="photo">
                <img src="	https://firef00x.github.io/template-three/images/cat-03.jpg" />
              </div>
            </div>
          </Tab>
        </Tabs> */}
      </div>
    </section>
  );
};

export default Steps;
