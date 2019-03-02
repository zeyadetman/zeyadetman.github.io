import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import "../styles/header.css";
import Logo from "../../static/images/favicon.ico";
import { dayStyles, nightStyles } from "../styles/modeStyles";

const Header = ({ siteTitle, mode }) => {
  const currentModeStyle = mode === "day" ? dayStyles : nightStyles;

  return (
    <header
      {...currentModeStyle}
      className={`${currentModeStyle.className} main-header`}
    >
      <div className="main-logo">
        <img
          src={Logo}
          style={{
            marginBottom: 10,
            marginRight: "1em",
            width: 50,
            height: 50
          }}
          alt="logo"
        />
        <h1
          style={{
            marginRight: 15,
            fontSize: "1.7em"
          }}
        >
          <span style={{ color: "#fdbd12" }}>Z</span>eyad{" "}
          <span style={{ color: "#fdbd12" }}>E</span>tman
        </h1>
      </div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/projects">projects</Link>
        </li>
        <li>
          <Link to="/work">work</Link>
        </li>
        <li>
          <Link to="/blog">blog</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
