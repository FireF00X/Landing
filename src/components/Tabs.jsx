import React, { useState } from "react";

const Tabs = ({ children }) => {
  const [toggleActive, setToggleActive] = useState(1);
  const titles = [...children].map((t) => t.props.title || "");
  const contents = [...children].map((t) => t.props.children || "");
  return (
    <>
      <div>
        {titles.map((title, index) => (
          <div
            key={index + 1}
            className={toggleActive === index + 1 ? "active" : ""}
            onClick={() => {
              setToggleActive(index + 1);
            }}
          >
            {title}
          </div>
        ))}
      </div>
      <div className="tabs-content">
        {contents.map((content, index) => (
          <div key={index + 1}>
            {toggleActive === index + 1 ? content : null}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tabs;
