import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import PropTypes from "prop-types";
import { useMedia } from "use-media";
import "../styles/header.css";
import Logo from "../../static/images/favicon.ico";
import { dayStyles, nightStyles } from "../styles/modeStyles";

const Header = ({ siteTitle, mode, currentPath }) => {
  const currentModeStyle = mode === "day" ? dayStyles : nightStyles;
  const hideMenu = useMedia({ maxWidth: "1111px" });
  const hideMyName = useMedia({ maxWidth: "512px" });
  const [path, setPath] = useState(currentPath || "404");
  const [isShowMenuActive, setShowMenu] = useState(false);

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
            width: 35,
            height: 35,
            ...(mode === "night" ? { filter: "invert(100%)" } : {})
          }}
          alt="logo"
        />
        {!isShowMenuActive && (
          <React.Fragment>
            <h1
              style={{
                fontSize: "1.2em"
              }}
              className="name-logo"
            >
              {!hideMyName && `Zeyad Etman`} $
            </h1>
            <input
              autoFocus
              className="input-path"
              value={`cd ${path}`}
              onChange={e => setPath(e.target.value.split(" ")[1] || "")}
              onKeyPress={e => {
                if (e.key === "Enter") {
                  setPath(e.target.value.split(" ")[1]);
                  path === ".." && currentPath.indexOf("posts") !== -1
                    ? navigate(currentPath.replace("/posts", "").split("/")[1])
                    : navigate(path);
                }
              }}
            />
          </React.Fragment>
        )}
      </div>

      {(!hideMenu || isShowMenuActive) && (
        <ul>
          <li>
            <Link to="/" activeClassName="active-page-link">
              home
            </Link>
          </li>
          <li>
            <Link to="/projects" activeClassName="active-page-link">
              projects
            </Link>
          </li>
          <li>
            <Link to="/work" activeClassName="active-page-link">
              work
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              activeClassName="active-page-link"
              partiallyActive={true}
            >
              blog
            </Link>
          </li>
          <li>
            <Link to="/today-i-learned" activeClassName="active-page-link">
              {isShowMenuActive ? "til" : "today i learned"}
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName="active-page-link">
              contact
            </Link>
          </li>
        </ul>
      )}

      {hideMenu && (
        <a
          href="javascript:void(0)"
          style={{
            fontSize: "1.5em"
          }}
          onClick={() => {
            setShowMenu(!isShowMenuActive);
          }}
        >
          &#9776;
        </a>
      )}
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
