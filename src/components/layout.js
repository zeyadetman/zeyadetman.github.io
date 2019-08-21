import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { dayStyles, nightStyles } from "../styles/modeStyles";
import Header from "./header";
import { connect } from "react-redux";
import "../styles/global-styles.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/themes/prism-coy.css";
import "../styles/prism-override.scss";
import ReactGA from "react-ga";

ReactGA.initialize("UA-50784035-2");
if (typeof window !== `undefined`) {
  ReactGA.pageview(window.location.pathname + window.location.search);
}
const Layout = ({ children, mode, toggleMode, currentPath }) => {
  let currentModeStyle = mode === "day" ? dayStyles : nightStyles;
  const [isSaveBatteryMode, setSaveBatteryMode] = useState(
    (global &&
      global.localStorage &&
      Number(global.localStorage.isSaveBatteryMode)) ||
      1
  );

  useEffect(() => {
    if (mode === "night") {
      currentModeStyle = nightStyles;
      document.body.style.backgroundColor = "#0e0e0e";
    } else {
      currentModeStyle = dayStyles;
      document.body.style.backgroundColor = "#fff";
    }
  }, [mode]);

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
        <div style={{ margin: "0 auto" }}>
          <Header
            siteTitle={data.site.siteMetadata.title}
            mode={mode}
            currentPath={currentPath}
            toggleMode={toggleMode}
            isSaveBatteryMode={isSaveBatteryMode}
            setSaveBatteryMode={value => {
              localStorage.setItem("isSaveBatteryMode", value ? 1 : 0);
              setSaveBatteryMode(value);
            }}
          />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0
            }}>
            <main
              {...currentModeStyle}
              style={{
                ...currentModeStyle.style
              }}
              mode={mode}>
              {children}
            </main>
          </div>
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

const mapStateToProps = ({ mode }) => {
  return { mode };
};

const mapDispatchToProps = dispatch => {
  return { toggleMode: () => dispatch({ type: `TOGGLE_MODE` }) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
