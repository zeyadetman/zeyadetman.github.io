import React, { useEffect } from "react";
import { graphql, Link } from "gatsby";
import "../styles/blogpost.css";
import { TwitterShareButton } from "react-twitter-embed";
import SEO from "../components/seo";
import SeeMore from "../components/SeeMore";
import Disqus from "disqus-react";

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const {
    frontmatter,
    html,
    fields: { slug },
    timeToRead
  } = markdownRemark;
  const { toArabic } = frontmatter;
  const disqusShortname = "zeyadetman";
  const disqusConfig = {
    url: `https://zeyadetman.github.io/${encodeURI(slug)}`,
    identifier: slug,
    title: frontmatter.title
  };

  return (
    <>
      <SEO title={frontmatter.title} />
      <article
        className="blog-post-container article"
        style={{ width: "70%", margin: "0 auto", minWidth: 320 }}>
        <header
          style={{
            borderBottom: "2px dashed",
            paddingBottom: 15
          }}>
          <h3
            style={{
              fontSize: "1.6em",
              margin: "10px 0",
              ...(slug.includes("/ar/") && toArabic && { direction: "rtl" })
            }}>
            {frontmatter.title}
          </h3>
          <small className="article-meta">
            <span>{frontmatter.date}</span>
            {"   •   "}
            <span>
              {`${timeToRead} ${timeToRead > 1 ? "mins" : "min"} read`}
            </span>
            {"   •   "}
            <span>
              <Disqus.CommentCount
                shortname={disqusShortname}
                config={disqusConfig}>
                Comments
              </Disqus.CommentCount>
            </span>
          </small>
          {toArabic && (
            <p
              style={{
                border: "1px dashed",
                padding: 10,
                marginBottom: 0
              }}>
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
        <div
          style={{
            ...(slug.includes("/ar/") && toArabic && { direction: "rtl" })
          }}
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <footer
          style={{
            textAlign: "center"
          }}>
          <TwitterShareButton
            url={`https://zeyadetman.github.io/${encodeURI(slug)}`}
            options={{
              text: frontmatter.title,
              via: "zeyadetman",
              size: "large"
            }}
          />

          <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
        </footer>
      </article>
      <SeeMore />
    </>
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
