import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { frontendProjects, softwareProjects } from "../projects";
import "../styles/projects.css";
import Card from "../components/card";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  // const importAll = r => r.keys().map(r);

  // const webimgs = importAll(
  //   require.context("../images/projects/web/", true, /\.png$/)
  // );

  return (
    <Layout>
      <SEO title="Projects" />
      <h1
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginBottom: 25,
          flexWrap: "wrap"
        }}
      >
        <span style={{ marginBottom: 10 }}>Codes &amp; Projects</span>
        <iframe
          src="https://ghbtns.com/github-btn.html?user=zeyadetman&type=follow&count=true"
          frameBorder="0"
          scrolling="0"
          width="170px"
          height="30px"
        />
      </h1>
      <h3 className="projects-title" id="frontendprojects">
        Front-End Development{" "}
        <a href="#frontendprojects">
          <FontAwesomeIcon icon={faLink} />
        </a>
      </h3>
      <div className="cards">
        {frontendProjects.map((project, i) => (
          <Card project={project} key={i} />
        ))}
      </div>

      <h3
        style={{ marginTop: 65 }}
        className="projects-title"
        id="softwareprojects"
      >
        Software Development{" "}
        <a href="#softwareprojects">
          <FontAwesomeIcon icon={faLink} />
        </a>
      </h3>
      <div className="cards">
        {softwareProjects.map((project, i) => (
          <Card project={project} key={i} />
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
