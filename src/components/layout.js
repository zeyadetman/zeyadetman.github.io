import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { dayStyles, nightStyles } from "../styles/modeStyles";
import Header from "./header";
import { connect } from "react-redux";
import "../styles/globalStyles.scss";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/themes/prism-coy.css";
import "../styles/prism-override.scss";
import ReactGA from "react-ga";
import init from "../hilbertCurve";
import useWindowSize from "../hooks/useWindowSize";

ReactGA.initialize("UA-50784035-2");
if (typeof window !== `undefined`) {
  ReactGA.pageview(window.location.pathname + window.location.search);
}
const Layout = ({ children, mode, toggleMode, currentPath }) => {
  let currentModeStyle = mode === "day" ? dayStyles : nightStyles;
  const size = useWindowSize();

  useEffect(() => {
    if (mode === "night") {
      currentModeStyle = nightStyles;
      document.body.style.backgroundColor = "#0e0e0e";
    } else {
      currentModeStyle = dayStyles;
      document.body.style.backgroundColor = "#fff";
    }

    init(size.width - 30, size.height - 30);
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
              padding: 0
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
