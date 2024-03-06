import React, { useState } from "react";

const Tabs = ({
  children,
  tabs_container,
  tabs_content,
  tabs_title,
  tab_title_style,
}) => {
  const [toggleActive, setToggleActive] = useState(1);
  const titles = [...children].map((t) => t.props.title || "");
  const contents = [...children].map((t) => t.props.children || "");
  return (
    <div className={tabs_container}>
      <div className={tabs_title}>
        {titles.map((title, index) => (
          <div
            key={index + 1}
            className={`${
              toggleActive === index + 1 ? "active" : ""
            } ${tab_title_style}`}
            onClick={() => {
              setToggleActive(index + 1);
            }}
          >
            {title}
          </div>
        ))}
      </div>
      <div className={tabs_content}>
        {contents.map((content, index) => (
          <div key={index + 1}>
            {toggleActive === index + 1 ? content : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
