import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/blogpost.css";
import { TwitterShareButton } from "react-twitter-embed";

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  console.log(data);
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html, slug, timeToRead, wordCount } = markdownRemark;
  return (
    <Layout>
      <article
        className="blog-post-container article"
        style={{ width: "70%", margin: "0 auto", minWidth: 320 }}
      >
        <header
          style={{
            borderBottom: "2px dashed",
            paddingBottom: 15
          }}
        >
          <h3
            style={{
              fontSize: "1.6em",
              margin: "10px 0"
            }}
          >
            <a href={slug}>{frontmatter.title}</a>
          </h3>
          <small>
            <span>{frontmatter.date}</span>
            {"   •   "}
            <span>
              <FontAwesomeIcon icon={faClock} />{" "}
              {`${timeToRead} ${timeToRead > 1 ? "mins" : "min"} read`}
            </span>
          </small>
        </header>
        <p
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <footer>
          <TwitterShareButton
            url={slug}
            options={{
              text: frontmatter.title,
              via: "zeyadetman",
              size: "large"
            }}
          />
        </footer>
      </article>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
      timeToRead
      wordCount {
        words
      }
    }
  }
`;
