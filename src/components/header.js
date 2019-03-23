import React, { useState, useEffect, useReducer } from "react";
import { Link, navigate } from "gatsby";
import PropTypes from "prop-types";
import { useMedia } from "use-media";
import windowSize from "react-window-size";
import { dayStyles, nightStyles } from "../styles/modeStyles";
import "../styles/header.css";
import Logo from "../../static/images/favicon.ico";

const Header = ({ siteTitle, mode, currentPath }) => {
  const currentModeStyle = mode === "day" ? dayStyles : nightStyles;
  const [path, setPath] = useState(currentPath || "404");
  const hideMenu = useMedia({ maxWidth: "1111px" }, true);
  const hideMyName = useMedia({ maxWidth: "512px" }, true);

  const [state, dispatch] = useReducer(
    (state, action) => {
      if (action === "TOGGLE_SHOW_MENU") {
        return { ...state, isShowMenuActive: !state.isShowMenuActive };
      }

      // if (action === "HIDE_MENU") {
      //   return { ...state, hideMenu: useMedia({ maxWidth: "1111px" }) };
      // }

      // if (action === "HIDE_MY_NAME") {
      //   return { ...state, hideMyName: useMedia({ maxWidth: "512px" }) };
      // }
    },
    {
      isShowMenuActive: false,
      hideMenu,
      hideMyName
    }
  );

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
        {!state.isShowMenuActive && (
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

      {(state.isShowMenuActive || !hideMenu) && (
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
              {state.isShowMenuActive ? "til" : "today i learned"}
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
            dispatch("TOGGLE_SHOW_MENU");
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
