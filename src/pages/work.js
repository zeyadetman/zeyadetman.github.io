import React from "react";
import Layout from "../components/layout";
import Tag from "../components/Tag";

const Work = props => {
  const workList = [
    {
      title: "Front-End Development",
      url: "https://www.arqamfc.com/",
      logo:
        "https://static.wixstatic.com/media/c2a7f4_53d4f589e97d469aaf36b6a240ad7a35~mv2.png/v1/fill/w_306,h_208,al_c,q_80,usm_0.66_1.00_0.01/c2a7f4_53d4f589e97d469aaf36b6a240ad7a35~mv2.webp",
      current: false
    },
    {
      title: "Front-End Development",
      url: "https://lynks.com",
      logo: "https://bosta.co/images/clients/lynks-logo-en.png",
      current: true
    }
  ];
  return (
    <Layout>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        {workList.map(({ title, url, logo, current }) => (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: 120
              }}
            >
              <a href={url}>
                <img src={logo} width="150px" />
              </a>
            </div>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontWeight: 600 }}>{title}</span>{" "}
              {current && <Tag type="current" color="#aeffae" />}
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Work;
