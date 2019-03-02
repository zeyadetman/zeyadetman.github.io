import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/blogpost.css";
import { TwitterShareButton } from "react-twitter-embed";
import SEO from "../components/seo";

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const {
    frontmatter,
    html,
    fields: { slug },
    timeToRead,
    wordCount
  } = markdownRemark;
  const { toArabic } = frontmatter;
  return (
    <Layout>
      <SEO title={frontmatter.title} />
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
              margin: "10px 0",
              ...(slug.includes("/ar/") && toArabic && { direction: "rtl" })
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
          {toArabic && (
            <p
              style={{
                border: "1px dashed",
                padding: 10,
                marginBottom: 0
              }}
            >
              {!slug.includes("/ar/") && toArabic && (
                <Link to={`/${slug}ar/`}>Translated to Arabic</Link>
              )}
              {slug.includes("/ar/") && toArabic && (
                <Link to={`/${slug.replace("/ar/", "")}`}>
                  Translated to English
                </Link>
              )}
            </p>
          )}
        </header>
        <p
          style={{
            ...(slug.includes("/ar/") && toArabic && { direction: "rtl" })
          }}
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <footer
          style={{
            textAlign: "center"
          }}
        >
          <TwitterShareButton
            url={location.href.toString()}
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
        toArabic
      }
      timeToRead
      wordCount {
        words
      }
    }
  }
`;
