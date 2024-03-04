import React from "react";
import styles from "./Services.module.css";
import Title from "../../components/Title";
import Tabs from "../../components/Tabs";
import Tab from "../../components/Tab";

const Services = () => {
  return (
    <section className={styles.services} id="services">
      <div className="container">
        <Title />
        <Tabs className="tabs_title">
          <Tab title="shop">hell no</Tab>
          <Tab title="invoice">Billy Ilesh</Tab>
          <Tab title="Rcm">Can you see me</Tab>
          <Tab title="LOgistics">some times but not</Tab>
          <Tab title="Cources">as in your hole</Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
