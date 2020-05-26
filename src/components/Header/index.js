import React, { useReducer } from "react";
import { Link } from "gatsby";
import { useMedia } from "use-media";
import "../../styles/header.css";
import "../../utils/twemoji-awesome.css";
import { routes } from "./routes";
import { StyledThumb } from "./styles";

const renderHeaderMenu = () => {
  return (
    <ul>
      {routes?.map(({ title, ...props }) => (
        <li key={title}>
          <Link {...props}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

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
      hideMyName,
    }
  );

  const toggleEmoji = (toMode) => {
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
        <StyledThumb />

        {!state.isShowMenuActive && (
          <React.Fragment>
            <h1
              style={{
                fontSize: "2rem",
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
          alignItems: "center",
        }}
      >
        {(state.isShowMenuActive || !hideMenu) && renderHeaderMenu()}

        <div>
          {hideMenu && (
            <span
              style={{
                fontSize: "1.5em",
                alignSelf: "flex-end",
                marginRight: "3px",
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
