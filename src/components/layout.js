import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import { dayStyles, nightStyles } from "../styles/modeStyles";
import { capitalize } from "lodash";
import Switch from "react-switch";

const Layout = ({ children }) => {
  const [mode, setMode] = useState("day");
  const currentModeStyle = mode === "day" ? dayStyles : nightStyles;

  useEffect(() => {
    if (mode === "night") {
      document.body.style.backgroundColor = "#0e0e0e";
    } else {
      document.body.style.backgroundColor = "#fff";
    }
  });

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div>
          <Header siteTitle={data.site.siteMetadata.title} mode={mode} />
          <Switch
            className="react-switch mode-toggle"
            checked={mode === "day"}
            onChange={() =>
              mode === "day" ? setMode("night") : setMode("day")
            }
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            id="material-switch"
          />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0
            }}
          >
            <main {...currentModeStyle}>{children}</main>
          </div>
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
