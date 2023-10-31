import React, { useState } from "react";
import { sidebar_options } from "../utils/utils";
import Log_Logo from "../Assets/logout.svg";

import "./SideBar.css";
const Sidebar = ({ options }) => {
  const [activeOption, setActiveOption] = useState(0);

  const handleOptionClick = (index) => {
    setActiveOption(index);
  };

  return (
    <div className="sidebar">
      <ul>
        {sidebar_options?.map((option, index) => (
          <li
            key={index}
            className={index === activeOption ? "active" : ""}
            onClick={() => handleOptionClick(index)}
          >
            <span className="logo-side">
              <img src={option.Logo} alt="loho" />
            </span>

            <span className="logo-title"> {option.title}</span>
          </li>
        ))}
        <li className="log-out-option">
          <span className="logo-side">
            <img src={Log_Logo} alt="loho" />
          </span>
          Log out
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
