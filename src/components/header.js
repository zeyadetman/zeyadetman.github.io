import React, { useState, useEffect, useReducer } from "react";
import { Link } from "gatsby";
import { useMedia } from "use-media";
import windowSize from "react-window-size";
import { dayStyles, nightStyles } from "../styles/modeStyles";
import "../styles/header.css";
import Logo from "../../static/images/favicon.ico";
import { useBattery } from "react-use";
import "../utils/twemoji-awesome.css";

const Header = ({
  toggleMode,
  mode,
  currentPath,
  isSaveBatteryMode,
  setSaveBatteryMode
}) => {
  const currentModeStyle = mode === "day" ? dayStyles : nightStyles;
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
  let batteryState = useBattery();
  if (!isSaveBatteryMode) {
    batteryState = {};
  }

  useEffect(() => {
    if (
      "isSupported" in batteryState &&
      "level" in batteryState &&
      "charging" in batteryState &&
      batteryState.level > 0.6 &&
      batteryState.charging
    ) {
      setSaveBatteryMode(false);
    } else if (
      "isSupported" in batteryState &&
      "level" in batteryState &&
      "charging" in batteryState &&
      batteryState.level < 0.25 &&
      !batteryState.charging
    ) {
      if (mode === "day" && isSaveBatteryMode) {
        toggleMode();
      }
    }
  }, [batteryState]);

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
      className={`${currentModeStyle.className} main-header`}>
      <div className="main-logo">
        <img
          src={Logo}
          style={{
            marginRight: "1em",
            width: 35,
            height: 35,
            ...(mode === "night" ? { filter: "invert(100%)" } : {}),
            ...(hideMyName ? {} : { marginBottom: 10 })
          }}
          alt="logo"
        />
        {!state.isShowMenuActive && (
          <React.Fragment>
            <h1
              style={{
                fontSize: "1.2em"
              }}
              className="name-logo">
              {!hideMyName && `Zeyad Etman`}
            </h1>
          </React.Fragment>
        )}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center"
        }}>
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
                partiallyActive={true}>
                blog
              </Link>
            </li>
            <li>
              <Link to="/snippets" activeClassName="active-page-link">
                Snippets
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
            style={{
              fontSize: "1.5em",
              alignSelf: "flex-end",
              marginRight: "3px"
            }}
            onClick={() => {
              dispatch("TOGGLE_SHOW_MENU");
            }}>
            &#9776;
          </a>
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

        {isSaveBatteryMode ? (
          <i
            title="Save battery mode is on"
            onClick={() => setSaveBatteryMode(false)}
            className="twa twa-battery"
            style={{ fontSize: "2em" }}
          />
        ) : (
          <i
            title="Save battery mode is off"
            onClick={() => setSaveBatteryMode(true)}
            className="twa twa-electric-plug"
            style={{ fontSize: "2em" }}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
