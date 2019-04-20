import React, { useState, useEffect, useReducer } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { useMedia } from "use-media";
import windowSize from "react-window-size";
import { dayStyles, nightStyles } from "../styles/modeStyles";
import "../styles/header.css";
import Logo from "../../static/images/favicon.ico";
import '../utils/twemoji-awesome.css';

const Header = ({ toggleMode, mode, currentPath }) => {
  const currentModeStyle = mode === "day" ? dayStyles : nightStyles;
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

  const toggleEmoji = toMode => {
    toggleMode(toMode);
    try {
      localStorage.setItem("mode", toMode);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header
      {...currentModeStyle}
      className={`${currentModeStyle.className} main-header`}
    >
      <div className="main-logo">     
        <img
          src={Logo}
          style={{
            marginRight: "1em",
            width: 35,
            height: 35,
            ...(mode === "night" ? { filter: "invert(100%)" } : {}),
            ...(hideMyName ? {} : {marginBottom: 10})
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
              {!hideMyName && `Zeyad Etman`}
            </h1>
          </React.Fragment>
        )}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
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
            {/* <li>
              <Link to="/today-i-learned" activeClassName="active-page-link">
                {state.isShowMenuActive ? "til" : "today i learned"}
              </Link>
            </li> */}
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
              fontSize: "1.5em",
              alignSelf: 'flex-end',
              marginRight: '3px',
            }}
            onClick={() => {
              dispatch("TOGGLE_SHOW_MENU");
            }}
          >
            &#9776;
          </a>
        )}

        {
          mode === "day" ? (
            <i
              key={mode}
              onClick={() => toggleEmoji("night")}
              className="twa twa-sunny"
              style={{ fontSize: "2em" }}
            />
          ) : (
            <i
              key={mode}
              onClick={() => toggleEmoji("day")}
              className="twa twa-new-moon"
              style={{ fontSize: "2em" }}
            />
          )
        }

      </div>
    </header>
  );
};

export default Header;
