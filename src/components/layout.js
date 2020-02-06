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
  const [currentModeStyle, setCurrentModeStyles] = useState(
    mode === "day" ? dayStyles : nightStyles
  );
  const size = useWindowSize();

  useEffect(() => {
    if (mode === "night") {
      setCurrentModeStyles(nightStyles);
      document.body.style.backgroundColor = "#0e0e0e";
    } else if (mode === "day") {
      setCurrentModeStyles(dayStyles);
      document.body.style.backgroundColor = "#fff";
    }
  }, [mode]);

  useEffect(() => {
    init(size.width - 30, size.height - 30);
  }, []);
  
  useEffect(() => {
    !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
    },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
    a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
    // Insert Twitter Pixel ID and Standard Event data below
    twq('init','o33ed');
    twq('track','PageView');
  }, [])

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
            currentModeStyle={currentModeStyle}
            mode={mode}
            currentPath={currentPath}
            toggleMode={toggleMode}
          />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: 0
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

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
