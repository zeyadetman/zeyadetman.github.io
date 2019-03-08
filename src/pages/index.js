import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Avatar from "../../static/images/me.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGithub,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`zeyadetman`, `portfolio`]} />
      <div
        style={{
          textAlign: "center",
          margin: "0px auto",
          paddingTop: "2em",
          width: "80%",
          minWidth: 320
        }}
      >
        <img
          src={Avatar}
          style={{
            borderRadius: "50%",
            width: 200,
            border: "5px solid #f2ece0",
            boxShadow: "0px 2px 14px rgba(0,0,0,0.6)"
          }}
        />
        <h2 className="text-vertical-margin">Zeyad Etman</h2>
        <h3 className="text-vertical-margin">
          Software Engineer, Front-End Developer
        </h3>
        <p>I Make Things On The Internet</p>
      </div>
      <ul
        style={{
          display: "flex",
          justifyContent: "center"
        }}
        className="social-network"
      >
        <li>
          <a href="https://github.com/zeyadetman">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/zeyadetman">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/zeyadetman">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/zeyadetman">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a href="mailto:zeyadetman@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>
    </Layout>
  );
};

export default Home;
