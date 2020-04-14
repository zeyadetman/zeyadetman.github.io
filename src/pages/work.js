import React, { useEffect } from "react";
import Tag from "../components/Tag/index";
import SEO from "../components/seo";
import { connect } from "react-redux";
import styles from "../styles/work.module.scss";
import LOGOS from "../utils/logos";

const Work = ({ mode, location: { pathname } }) => {
  useEffect(() => {
    delete require.cache[require.resolve("../linkedin")];
    require("../linkedin");
  }, [mode]);
  const workList = [
    {
      title: "Front-End Engineer",
      company: "Cognitev",
      logo: LOGOS.cognitev,
      date: "Jul 2019 – Present"
    },
    {
      title: "Front-End Engineer",
      company: "Bosta",
      url: "https://www.bosta.co/",
      logo: LOGOS.bosta,
      date: "May 2019 – Apr 2020"
    },
    {
      title: "Front-End Engineer",
      company: "Lynks",
      url: "https://lynks.com",
      logo: LOGOS.lynks,
      date: "Jan 2019 – May 2019"
    },
    {
      title: "Front-End Engineer",
      company: "ArqamFC",
      url: "https://www.arqamfc.com/",
      logo: LOGOS.arqamfc,
      date: "Jun 2018 – Nov 2018"
    }
  ];
  return (
    <>
      <SEO
        title="Work"
        keywords={["work", "hire", "frontend", "developer", "arqamfc", "lynks"]}
      />
      <h1 className={styles.hireMe}>
        Hire Me
        <div
          className="LI-profile-badge"
          data-version="v1"
          data-size="medium"
          data-locale="en_US"
          data-type="horizontal"
          data-theme={mode === "day" ? "light" : "dark"}
          data-vanity="zeyadetman"
        >
          <a
            className="LI-simple-link"
            href="https://eg.linkedin.com/in/zeyadetman"
          >
            Zeyad Etman
          </a>
        </div>
      </h1>
      <div className={styles.workList}>
        {workList.map(({ date, title, url, logo }, indx) => (
          <div key={indx} className={styles.workCard}>
            <div className={styles.logoContainer}>
              <a href={url}>
                <img src={logo} width="150px" />
              </a>
            </div>
            <div>
              <Tag type="jobTitle" value={title} />
              <Tag type="jobDate" value={date} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = ({ mode }) => {
  return { mode };
};

export default connect(mapStateToProps)(Work);
