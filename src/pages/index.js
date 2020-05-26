import React, { useEffect } from "react";
import SEO from "../components/seo";
import "../styles/projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SeeMore from "../components/SeeMore";
import {
  StyledAvatar,
  StyledWrapper,
  StyledSocialNetworkLinks,
} from "../styles/pages/stylesIndex";

const socialNetworkLinks = [
  { url: "https://github.com/zeyadetman", icon: faGithub },
  { url: "https://twitter.com/zeyadetman", icon: faTwitter },
  { url: "https://www.linkedin.com/in/zeyadetman", icon: faLinkedinIn },
  { url: "mailto:zeyadetman@gmail.com", icon: faEnvelope },
];

const renderSocialNetworkLinks = () => {
  return (
    <StyledSocialNetworkLinks>
      {socialNetworkLinks.map(({ url, icon }) => (
        <li key={url}>
          <a href={url}>
            <FontAwesomeIcon icon={icon} />
          </a>
        </li>
      ))}
    </StyledSocialNetworkLinks>
  );
};

const Home = () => {
  return (
    <>
      <SEO title="Home" keywords={[`zeyadetman`, `portfolio`]} />
      <StyledWrapper>
        <StyledAvatar />
        <h1 style={{ marginBottom: 0 }}>Zeyad Etman</h1>
        <h2 style={{ margin: 0 }}>Front-End Engineer</h2>

        <div style={{ marginTop: 16 }}>
          <p>
            I make videos on
            <a href="https://youtube.com/c/zeyadetman"> YouTube</a>.
          </p>
        </div>
        <p>
          I do stuff <i className="twa twa-zap"></i> on the Internet.
        </p>
      </StyledWrapper>
      {renderSocialNetworkLinks()}
      <SeeMore />
    </>
  );
};

export default Home;
