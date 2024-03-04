import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [toggleTab, setToggleTab] = useState(1);

  const links = [
    { linkName: "Home", link: "/#" },
    { linkName: "Services", link: "/#services" },
    { linkName: "Steps", link: "/#steps" },
    { linkName: "Gallary", link: "/#gallary" },
    { linkName: "Contact", link: "/#contact" },
  ];

  const handleClick = (index) => {
    setToggleTab(index);
  };

  return (
    <header className={styles.main_header}>
      <div className="container">
        <div className={styles.logo}>
          <a href="#/">Logo</a>
        </div>
        <ul className={styles.links}>
          {links.map((item, index) => (
            <NavLinks
              key={index}
              link={item.link}
              linkName={item.linkName}
              onClick={() => handleClick(index + 1, item.link)}
              num={index + 1}
              toggleTab={toggleTab}
            />
          ))}
        </ul>
      </div>
    </header>
  );
};

const NavLinks = ({ link, linkName, onClick, num, toggleTab }) => {
  return (
    <li className={toggleTab === num ? styles.active : ""}>
      <a href={link} onClick={onClick}>
        {linkName}
      </a>
    </li>
  );
};

export default Header;
