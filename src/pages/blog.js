import React from "react";
import SEO from "../components/seo";
import { StaticQuery, graphql } from "gatsby";
import ArticleSummary from "../components/ArticleSummary/index";
import { TwitterFollowButton } from "react-twitter-embed";
import "../styles/blogpost.css";
import styles from "../styles/blog.module.scss";

export default function blog({ location: { pathname } }) {
  return (
    <>
      <SEO title="Blog" keywords={[`zeyadetman`, `blog`, "technical"]} />
      <StaticQuery
        query={graphql`
          query retrievePosts {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  excerpt
                  frontmatter {
                    title
                    date(formatString: "MMMM DD, YYYY")
                  }
                  timeToRead
                  fields {
                    slug
                  }
                  wordCount {
                    words
                  }
                }
              }
            }
          }
        `}
        render={({ allMarkdownRemark: { edges: posts } }) => {
          return (
            <div
              className="blog-archive"
              style={{
                width: "80%",
                margin: "0 auto",
                minWidth: 320,
                padding: 15,
              }}
            >
              <h1 className={styles.blogPageH1}>
                Writings & Thoughts
                <TwitterFollowButton screenName={"zeyadetman"} />
                <iframe
                  src="https://zeyadetman.substack.com/embed"
                  width="fit-content"
                  height="320"
                  frameborder="0"
                  scrolling="no"
                ></iframe>
              </h1>
              {posts.map(
                ({ node }) =>
                  !node.fields.slug.includes("/ar/") && (
                    <ArticleSummary
                      title={node.frontmatter.title}
                      date={node.frontmatter.date}
                      id={node.id}
                      timeToRead={node.timeToRead}
                      excerpt={node.excerpt}
                      key={node.id}
                      slug={node.fields.slug}
                    />
                  )
              )}
            </div>
          );
        }}
      />
    </>
  );
}
