import React from "react";
import Layout from "../components/layout";
import Tag from "../components/Tag";
import SEO from "../components/seo";

const Work = props => {
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
        "https://static.wixstatic.com/media/c2a7f4_53d4f589e97d469aaf36b6a240ad7a35~mv2.png/v1/fill/w_306,h_208,al_c,q_80,usm_0.66_1.00_0.01/c2a7f4_53d4f589e97d469aaf36b6a240ad7a35~mv2.webp",
      date: "Jun 2018 – Nov 2018"
    }
  ];
  return (
    <Layout>
      <SEO
        title="Work"
        keywords={["work", "hire", "frontend", "developer", "arqamfc", "lynks"]}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gridGap: 10
        }}
      >
        {workList.map(({ date, title, url, logo, current }, indx) => (
          <div
            className="content"
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

export default Work;
