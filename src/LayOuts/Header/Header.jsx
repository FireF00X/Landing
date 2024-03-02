import React from "react";
import styles from "./Header.module.css";

const NavLinks = ({ link, linkName, active }) => {
  return (
    <li className={styles[`${active}`]}>
      <a href={link}>{linkName}</a>
    </li>
  );
};

const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className="container">
        <div className={styles.logo}>
          <a href="#/">Logo</a>
        </div>
        <ul className={styles.links}>
          <NavLinks link="https://www.google.com" linkName="Home" />
          <NavLinks link="https://www.google.com" linkName="Services" />
          <NavLinks link="https://www.google.com" linkName="Steps" />
          <NavLinks link="https://www.google.com" linkName="Gallary" />
          <NavLinks link="https://www.google.com" linkName="Contact" />
        </ul>
      </div>
    </header>
  );
};

export default Header;
