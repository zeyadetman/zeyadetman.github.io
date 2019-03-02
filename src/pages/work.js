import React, { useEffect } from "react";
import Layout from "../components/layout";
import Tag from "../components/Tag";
import SEO from "../components/seo";
import { connect } from "react-redux";

const Work = ({ mode }) => {
  useEffect(() => {
    delete require.cache[require.resolve("../linkedin")];
    require("../linkedin");
  }, [mode]);
  const workList = [
    {
      title: "Front-End Development",
      url: "https://lynks.com",
      logo: "https://bosta.co/images/clients/lynks-logo-en.png",
      date: "Jan 2019 – Present"
    },
    {
      title: "Front-End Development",
      url: "https://www.arqamfc.com/",
      logo:
        "https://static.wixstatic.com/media/c2a7f4_53d4f589e97d469aaf36b6a240ad7a35~mv2.png/v1/fill/w_402,h_274,al_c,usm_0.66_1.00_0.01/c2a7f4_53d4f589e97d469aaf36b6a240ad7a35~mv2.png",
      date: "Jun 2018 – Nov 2018"
    }
  ];
  return (
    <Layout>
      <SEO
        title="Work"
        keywords={["work", "hire", "frontend", "developer", "arqamfc", "lynks"]}
      />
      <h1
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 35
        }}
      >
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gridGap: 15
        }}
      >
        {workList.map(({ date, title, url, logo, current }, indx) => (
          <div
            className="content"
            key={indx}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div
              style={{
                height: 150,
                width: 150,
                display: "flex",
                alignItems: "center"
              }}
            >
              <a href={url}>
                <img src={logo} width="150px" />
              </a>
            </div>
            <div>
              <Tag
                type={title}
                color="rgb(226, 226, 226)"
                style={{
                  marginBottom: 5,
                  fontWeight: 600
                }}
              />
              <Tag type={date} color="rgb(255, 202, 43)" />
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
