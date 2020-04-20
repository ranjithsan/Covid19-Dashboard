import React from "react";
import Github from "../../../assets/favicon.png";
import IndiaIcon from "../../../assets/india.png";
import World from "../../../assets/world.png";
import "./Header.sass";


const Header = (props) => {
  return (
    <div>
      <div className="Header">
        <a
          href="http://www.covid19trac.live"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Github} alt="github" className="github-icon" />
        </a>
        Covid-19 {props.dashboard} {props.width < 1024 ? "" : " Dashboard"}

      </div>
      <div className="Switch-dashboard">
        <img
          onClick={() => props.history.push("/india")}
          src={IndiaIcon}
          alt="India"
          className="india-icon"
        />
        <span style={{ fontWeight: "bold" }}>Switch</span>
        <img
          onClick={() => props.history.push("/")}
          src={World}
          alt="World"
          className="global-icon"
        />
      </div>
    </div>
  );
};

export default Header;
