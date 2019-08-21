import React, { useEffect } from "react";
import Layout from "../components/layout";
import Tag from "../components/Tag/index";
import SEO from "../components/seo";
import { connect } from "react-redux";
import styles from "../styles/work.module.scss";

const Work = ({ mode, location: { pathname } }) => {
  useEffect(() => {
    delete require.cache[require.resolve("../linkedin")];
    require("../linkedin");
  }, [mode]);
  const workList = [
    {
      title: "Front-End Engineer",
      company: "Bosta",
      url: "https://www.bosta.co/",
      logo:
        "https://media.licdn.com/dms/image/C4D0BAQHZLO6RwLQYMQ/company-logo_400_400/0?e=1574294400&v=beta&t=ao0ipD-OI-c59dnsAq7MfepTJwjiLnx4sHGZXYuDV8w",
      date: "May 2019 – Present"
    },
    {
      title: "Front-End Engineer",
      company: "Lynks",
      url: "https://lynks.com",
      logo: "https://bosta.co/images/clients/lynks-logo-en.png",
      date: "Jan 2019 – May 2019"
    },
    {
      title: "Front-End Engineer",
      company: "ArqamFC",
      url: "https://www.arqamfc.com/",
      logo:
        "https://static.wixstatic.com/media/c2a7f4_53d4f589e97d469aaf36b6a240ad7a35~mv2.png/v1/fill/w_402,h_274,al_c,usm_0.66_1.00_0.01/c2a7f4_53d4f589e97d469aaf36b6a240ad7a35~mv2.png",
      date: "Jun 2018 – Nov 2018"
    }
  ];
  return (
    <Layout currentPath={pathname}>
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
          data-vanity="zeyadetman">
          <a
            className="LI-simple-link"
            href="https://eg.linkedin.com/in/zeyadetman">
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
    </Layout>
  );
};

const mapStateToProps = ({ mode }) => {
  return { mode };
};

export default connect(mapStateToProps)(Work);
