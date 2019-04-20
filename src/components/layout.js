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

const Layout = ({ children, mode, toggleMode, currentPath }) => {
  let currentModeStyle = mode === "day" ? dayStyles : nightStyles;

  useEffect(() => {
    console.log(mode);
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
          />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0
            }}
          >
            <main
              {...currentModeStyle}
              style={{
                ...currentModeStyle.style
              }}
              mode={mode}
            >
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
