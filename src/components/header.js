import React, { useState, useEffect, useReducer } from "react";
import { Link } from "gatsby";
import { useMedia } from "use-media";
import "../styles/header.css";
import Avatar from "../../static/images/avatar.jpeg";
import "../utils/twemoji-awesome.css";

const Header = ({ toggleMode, currentModeStyle, mode }) => {
  const hideMenu = useMedia({ maxWidth: "1111px" }, true);
  const hideMyName = useMedia({ maxWidth: "512px" }, true);
  const [state, dispatch] = useReducer(
    (state, action) => {
      if (action === "TOGGLE_SHOW_MENU") {
        return { ...state, isShowMenuActive: !state.isShowMenuActive };
      }
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
      return error;
    }
  };

  return (
    <header
      {...currentModeStyle}
      className={`${currentModeStyle.className} main-header`}
    >
      <div className="main-logo">
        <img
          className="pic-of-me"
          style={{
            borderRadius: "50%",
            width: 50,
            minWidth: 50,
            height: 50,
            marginRight: 10,
            border: "2px solid #f8ab35"
          }}
        />
        {!state.isShowMenuActive && (
          <React.Fragment>
            <h1
              style={{
                fontSize: "2rem"
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
            {/* <li>
              <Link to="/projects" activeClassName="active-page-link">
                projects
              </Link>
            </li> */}
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
              <Link to="/snippets" activeClassName="active-page-link">
                Snippets
              </Link>
            </li> */}
            <li>
              <Link to="/contact" activeClassName="active-page-link">
                contact
              </Link>
            </li>
            <li>
              <Link to="/resume" activeClassName="active-page-link">
                resume
              </Link>
            </li>
          </ul>
        )}

        <div>
          {hideMenu && (
            <span
              style={{
                fontSize: "1.5em",
                alignSelf: "flex-end",
                marginRight: "3px"
              }}
              onClick={() => {
                dispatch("TOGGLE_SHOW_MENU");
              }}
            >
              &#9776;
            </span>
          )}

          {mode === "day" ? (
            <i
              title="Day mode is on"
              onClick={() => toggleEmoji("night")}
              className="twa twa-sunny"
              style={{ fontSize: "2em" }}
            />
          ) : (
            <i
              title="Dark mode is on"
              onClick={() => toggleEmoji("day")}
              className="twa twa-new-moon"
              style={{ fontSize: "2em" }}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
