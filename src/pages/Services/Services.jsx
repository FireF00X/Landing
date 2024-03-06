import React from "react";
import styles from "./Services.module.css";
import Title from "../../components/Title";
import Tabs from "../../components/Tabs";
import Tab from "../../components/Tab";

const Services = () => {
  return (
    <section className={styles.services} id="services">
      <div className="container">
        <Title titleName={"Sevices"} />
        <Tabs className={styles.tabs_title}>
          <Tab title="shop">
            <div className={styles.tab_container}>
              <div className="photo">
                <img src="https://firef00x.github.io/template-three/images/cat-01.jpg" />
              </div>
              <p>Baby i am sorry i am not sorry fire works </p>
            </div>
          </Tab>
          <Tab title="invoice">
            <div className={styles.tab_container}>
              <p>Baby i am sorry i am not sorry fire works </p>
              <div className="photo">
                <img src="https://firef00x.github.io/template-three/images/cat-04.jpg" />
              </div>
            </div>
          </Tab>
          <Tab title="CRM">
            <div className={styles.tab_container}>
              <div className="photo">
                <img src="https://firef00x.github.io/template-three/images/cat-02.jpg" />
              </div>
              <p>Baby i am sorry i am not sorry fire works </p>
            </div>
          </Tab>
          <Tab title="Logistics">
            <div className={styles.tab_container}>
              <p>Baby i am sorry i am not sorry fire works </p>
              <div className="photo">
                <img src="	https://firef00x.github.io/template-three/images/cat-03.jpg" />
              </div>
            </div>
          </Tab>
          <Tab title="Cources">
            <div className={styles.tab_container}>
              <p>Baby i am sorry i am not sorry fire works </p>
              <div className="photo">
                <img src="	https://firef00x.github.io/template-three/images/cat-03.jpg" />
              </div>
            </div>
          </Tab>
          {/* <Tab title="invoice">Billy Ilesh</Tab>
        <Tab title="Rcm">Can you see me</Tab>
        <Tab title="LOgistics">some times but not</Tab>
        <Tab title="Cources">as in your hole</Tab>*/}
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
